"use client";

import { useAuth } from "@clerk/clerk-react";
import { Mail, Send, Trash2, UploadCloud } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { addArticle } from "@/lib/actions";
import { Textarea } from "@/components/ui/textarea";

const CreatePost = () => {
  const router = useRouter();
  const { userId } = useAuth();
  const params = useParams();
  const urlParamsUsername = params.username;

  const [displayedUser, setDisplayedUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageFileName, setImageFileName] = useState("");

  useEffect(() => {
    const getUser = async (username) => {
      try {
        const res = await fetch(`http://localhost:3000/api/users/${username}`);
        const data = await res.json();
        setDisplayedUser(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getUser(urlParamsUsername);
  }, [urlParamsUsername]);

  function handleFeaturedImageChange(e) {
    // !FIX: CHANGE FILE SIZE VALIDATION
    console.log(e.target.files[[0]]);
    // SIZE CALCULATED IN BYTES (BINARY)
    if (e.target.files[0].size > 5242880) {
      alert("File bigger than 5MB");
    } else {
      alert("Correct file size");
      setImageFile(URL.createObjectURL(e.target.files[0]));
      setImageFileName(e.target.files[[0]].name);
    }
  }

  function handleTitleChange(event) {
    // Get the current value of the title input
    const newTitle = event.target.value;
    // Update the title state
    setTitle(newTitle);
    // Generate the slug from the title
    const newSlug = newTitle.toLowerCase().replace(/\s+/g, "-");
    // Update the slug state
    setSlug(newSlug);
  }

  if (!userId || isLoading) {
    return <div>Loading...</div>;
  }

  if (userId !== displayedUser.clerkId) {
    router.push(`/profile/${urlParamsUsername}`);
  }

  return (
    <div className="flex flex-col gap-12">
      <h1 className="font-display font-bold text-5xl">Create a new article</h1>
      <form
        action={addArticle}
        className="flex flex-col gap-12"
      >
        {/* TITLE */}
        <div className="grid w-full items-center gap-1.5">
          <Label
            htmlFor="title"
            className="font-bold"
          >
            Title
          </Label>
          <Input
            type="title"
            id="title"
            name="title"
            placeholder="Your article's descriptive title"
            className="w-full"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        {/* SLUG & CATEGORY */}
        <div className="flex items-start gap-5">
          <div className="grid  items-center gap-1.5 w-[90%]">
            <Label
              htmlFor="slug"
              className="font-bold"
            >
              URL address slug
            </Label>
            <Input
              type="slug"
              id="slug"
              name="slug"
              placeholder="the-title-of-my-article"
              className="w-full"
              defaultValue={slug}
            />
            <p className="text-neutral-600 italic">
              The title of the article visible in the browser&apos;s address bar, using only
              lowercase words separated by &quot;-&quot;
            </p>
          </div>
          <div className="grid items-center gap-1.5 flex-auto">
            <Label
              htmlFor="category"
              className="font-bold"
            >
              Category
            </Label>
            <Select
              id="category"
              name="category"
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="traveling">Traveling</SelectItem>
                <SelectItem value="psychology">Psychology</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* BODY */}
        <div>
          <Label
            htmlFor="body"
            className="font-bold"
          >
            Main article body
          </Label>
          <Textarea
            rows="20"
            id="body"
            name="body"
            placeholder="Your article's main body"
            className="w-full"
          />
        </div>

        {/* FEATURED IMAGE */}
        <div className="flex flex-col w-full overflow-hidden">
          <label className="font-bold">Featured image</label>
          <div className="relative w-full aspect-video overflow-hidden">
            {!imageFile && (
              <Label
                htmlFor="featuredImage"
                className="absolute border-4 border-dashed border-neutral-700  flex flex-col justify-center items-center text-lg w-full h-full rounded-xl overflow-hidden"
              >
                <UploadCloud className="w-20 h-20 text-neutral-700" />
                <p className="text-center">
                  Drag and drop your image here, or{" "}
                  <span className="font-bold hover:underline text-black">browse</span>
                </p>
                <p className="text-neutral-500 text-sm text-center">File size must be up to 20MB</p>
              </Label>
            )}
            <Input
              type="file"
              name="featuredImage"
              id="featuredImage"
              onChange={handleFeaturedImageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {imageFile && (
              <Image
                src={imageFile}
                alt={imageFileName ? imageFileName : "Uploaded image"}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg border border-neutral-400"
              ></Image>
            )}
          </div>
          {imageFile && (
            <div className="flex justify-between items-center py-2 px-1">
              <p className="text-neutral-700 italic">{imageFileName}</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Trash2
                      className="cursor-pointer w-5 text-neutral-700"
                      onClick={() => {
                        setImageFile(null);
                        setImageFileName("");
                      }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Remove image</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4">
          <Button
            onClick={() => {
              alert("Submitted");
              // !FIX: USE NEWLY CREATED ARTICLES DYNAMIC TITLE ROUTE
              router.push(
                "http://localhost:3000/posts/categories/technology/mastering-the-art-of-web-development-navigating-the-digital-landscape"
              );
            }}
          >
            <Send className="mr-2 h-4 w-4" /> Submit article
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              router.push(`/dashboard/${urlParamsUsername}`);
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
    // <div>Create post page</div>
  );
};
{
}

export default CreatePost;
