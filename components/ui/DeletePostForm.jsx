"use client";
import { Trash2 } from "lucide-react";
import { Button } from "./button";
import { deleteArticle } from "@/lib/actions";

const DeletePostForm = ({ postId }) => {
  return (
    <form
      action={async (formData) => {
        await deleteArticle(formData);
        window.location.reload();
      }}
      className=""
    >
      <input
        type="hidden"
        name="postId"
        value={postId}
      />
      <Button
        variant="outline"
        size="icon"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default DeletePostForm;
