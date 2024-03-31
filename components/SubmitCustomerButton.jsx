"use client";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

const SubmitCustomerButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full"
      type="submit"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
};

export default SubmitCustomerButton;
