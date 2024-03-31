"use client";
import { Trash2 } from "lucide-react";
import { Button } from "./button";
import { deleteSubscriber } from "@/lib/actions";

const DeleteSubscriberForm = ({ userId }) => {
  return (
    <form
      action={async (formData) => {
        await deleteSubscriber(formData);
        window.location.reload();
      }}
      className=""
    >
      <input
        type="hidden"
        name="userId"
        value={userId}
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

export default DeleteSubscriberForm;
