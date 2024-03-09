"use client";

import { Input } from "@/components/ui/input";
import SubmitButton from "./SubmitButton";
import { addSubscriber } from "@/lib/actions";

const submitForm = async (formData) => {
  await addSubscriber(formData);
  document.getElementById("email").value = "";
  document.getElementById("prompt").classList.toggle("hidden");
};

const handlePrompt = () => {
  document.getElementById("prompt").classList.toggle("hidden");
};

const NewsletterForm = () => {
  return (
    <>
      <form
        action={submitForm}
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
      <div
        id="prompt"
        className="border border-neutral-600 p-12 bg-white rounded-md absolute hidden"
      >
        <div
          className="cursor-pointer"
          onClick={handlePrompt}
        >
          x
        </div>
        Subscription was successful!
      </div>
    </>
  );
};

export default NewsletterForm;
