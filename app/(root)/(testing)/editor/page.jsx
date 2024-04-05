"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Tiptap from "@/components/(Editor)/Tiptap";
import { useState } from "react";

const Editor = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (reason) => {
    setContent(reason);
  };

  return (
    <main className="p-12 border border-red-500 flex flex-col items-center">
      <div className="flex flex-col gap-4 w-full items-center border border-blue-500">
        <h1 className="text-2xl">Rich text editor</h1>
        <form className="max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10">
          <Tiptap
            content={content}
            onChange={(newContent) => handleContentChange(newContent)}
            // onChange={console.log("Editing")}
          />
        </form>
      </div>
      {/* <Card className="w-1/2">
        <CardHeader>
          <CardTitle>Rich text editor</CardTitle>
          <CardDescription>Submit your article</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Title</Label>
                <Input
                  id="title"
                  placeholder="Title of your article"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Body</Label>
                <Tiptap />
                <Input
                  id="body"
                  placeholder="Body of your article"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Submit</Button>
        </CardFooter>
      </Card> */}
    </main>
  );
};

export default Editor;
