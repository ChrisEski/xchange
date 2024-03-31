"use client";
import { Send } from "lucide-react";
import { Button } from "./button";
import { useFormStatus } from "react-dom";

const SubmitArticleButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>
      <Send className="mr-2 h-4 w-4" /> {pending ? "Submitting..." : "Submit article"}
    </Button>
  );
};

export default SubmitArticleButton;
