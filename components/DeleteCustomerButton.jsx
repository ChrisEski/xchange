"use client";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

const DeleteCustomerButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
    >
      {pending ? "Deleting..." : "Delete"}
    </Button>
  );
};

export default DeleteCustomerButton;
