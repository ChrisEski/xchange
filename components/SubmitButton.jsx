"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
    >
      {pending ? "Submitting..." : "Subscribe"}
    </Button>
  );
};

export default SubmitButton;
