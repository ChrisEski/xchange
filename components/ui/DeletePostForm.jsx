"use client";
import { Trash2 } from "lucide-react";
import { Button } from "./button";
import { deleteArticle } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

const DeletePostForm = ({ postId, username }) => {
  const router = useRouter();
  return (
    <form
      action={async (formData) => {
        await deleteArticle(formData);
        window.location.reload();
      }}
      className="bg-red-300"
    >
      <input
        type="text"
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
