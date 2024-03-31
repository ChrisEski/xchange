"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { addCustomer } from "@/lib/actions";
import SubmitCustomerButton from "./SubmitCustomerButton";

const NewCustomerForm = () => {
  const handleAddCustomer = async (formData) => {
    await addCustomer(formData);
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    nameInput.value = "";
    emailInput.value = "";
  };
  return (
    <Card className="w-[550px]">
      <form action={handleAddCustomer}>
        <CardHeader>
          <CardTitle>Add new customer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="">
          <SubmitCustomerButton />
        </CardFooter>
      </form>
    </Card>
  );
};

export default NewCustomerForm;
