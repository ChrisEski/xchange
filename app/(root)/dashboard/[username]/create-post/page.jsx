"use client";

import { useAuth } from "@clerk/clerk-react";
import { Trash2, UploadCloud } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const CreatePost = () => {
  const router = useRouter();
  const { userId } = useAuth();
  const params = useParams();
  const urlParamsUsername = params.username;

  const [displayedUser, setDisplayedUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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

  function handleChange(e) {
    // !FIX: CHANGE FILE SIZE VALIDATION
    // console.log(e.target.files[[0]]);
    // SIZE CALCULATED IN BYTES (BINARY)
    if (e.target.files[0].size > 5242880) {
      alert("File bigger than 5MB");
    } else {
      alert("Correct file size");
      setImageFile(URL.createObjectURL(e.target.files[0]));
      setImageFileName(e.target.files[[0]].name);
    }
  }

  if (!userId || isLoading) {
    return <div>Loading...</div>;
  }

  if (userId !== displayedUser.clerkId) {
    router.push(`/profile/${urlParamsUsername}`);
  }

  return (
    <section className="flex flex-col gap-12 px-12 py-16 max-w-[1220px] mx-auto">
      <h1 className="font-display font-bold text-5xl">Create a new article</h1>
      <form className="flex flex-col gap-12 items-start">Input form</form>
      <div className="flex flex-col w-[50%] overflow-hidden">
        <label>Featured image</label>
        <div className="w-full h-full overflow-hidden">
          <div className="relative w-full aspect-video overflow-hidden">
            {!imageFile && (
              <label
                htmlFor="featuredImg"
                className="absolute border-4 border-dashed border-neutral-700  flex flex-col justify-center items-center text-lg w-full h-full rounded-xl overflow-hidden"
              >
                <UploadCloud className="w-20 h-20 text-neutral-700" />
                <p className="text-center">
                  Drag and drop your image here, or{" "}
                  <span className="font-bold hover:underline text-black">browse</span>
                </p>
                <p className="text-neutral-500 text-sm text-center">File size must be up to 20MB</p>
              </label>
            )}
            <input
              type="file"
              name="featuredImg"
              id="featuredImg"
              onChange={handleChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {imageFile && (
              <Image
                src={imageFile}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg border border-neutral-400"
              ></Image>
            )}
          </div>
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
    </section>
    // <div>Create post page</div>
  );
};
{
}

export default CreatePost;
