"use client";

import { Input } from "@/components/ui/input";
import SubmitButton from "./SubmitButton";
import { useToast } from "@/components/ui/use-toast";
import { addSubscriber } from "@/lib/actions";

const NewsletterForm = () => {
  const { toast } = useToast();
  return (
    <form
      action={async (formData) => {
        await addSubscriber(formData);
        document.getElementById("email").value = "";
        document.getElementById("prompt").classList.toggle("hidden");
        toast({
          title: "Successfully registered!",
          description: "Welcome to our newsletter. Thank you for your subscription!",
        });
      }}
      className="flex-1 flex justify-end items-center"
    >
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
};

export default NewsletterForm;
