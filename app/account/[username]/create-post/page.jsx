"use client";
import Image from "next/image";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CreatePost = () => {
  return (
    <section className="flex flex-col gap-12 px-12 py-16 max-w-[1220px] mx-auto">
      <h1 className="font-display font-bold text-5xl">Create a new article</h1>
      <form className="flex flex-col gap-12 items-start">
        {/* 1ST ROW */}
        <div className="grid w-full items-center gap-1.5">
          <Label
            htmlFor="title"
            className="font-semibold"
          >
            Article's title
          </Label>
          <Input
            type="title"
            id="title"
            placeholder=""
          />
        </div>
        {/* 2ND ROW */}
        <div className="w-full">
          <div className="grid items-center gap-1.5">
            <Label
              htmlFor="slug"
              className="font-semibold"
            >
              URL Slug
            </Label>
            <Input
              type="slug"
              id="slug"
              placeholder=""
            />
          </div>
        </div>
        {/* 3ND ROW */}
        <div className="flex items-start gap-12 w-full">
          {/* IMAGE SELECT */}
          <div className="flex gap-12">
            <div className="grid w-full items-center gap-1.5">
              <Label
                htmlFor="featuredImage"
                className="font-semibold"
              >
                Featured Image
              </Label>
              <Input
                id="featuredImage"
                type="file"
              />
            </div>
            {/* CATEGORY */}
            <div className="grid items-center gap-1.5">
              <Label
                htmlFor="category"
                className="font-semibold"
              >
                Category
              </Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Choose category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="traveling">Traveling</SelectItem>
                  <SelectItem value="psychology">Psychology</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* IMAGE PREVIEW */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              htmlFor="email"
              className="font-semibold"
            >
              Image preview
            </Label>
            <div className="w-[220px]">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="/placeholder.jpg"
                  fill
                  alt="Image"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
        {/* 3RD ROW */}
        <div className="flex items-start gap-12 w-full">
          <div className="grid items-center gap-1.5 w-full">
            <Label
              htmlFor="body"
              className="font-semibold"
            >
              Article's main body
            </Label>
            <Textarea
              rows={16}
              id="body"
              placeholder="Type your text here"
            />
          </div>
        </div>
        <Button>
          <Send className="mr-2 h-4 w-4" /> Submit article
        </Button>
      </form>
    </section>
  );
};

export default CreatePost;
