"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Info } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AccountInfoEdit = ({
  avatar,
  firstName,
  lastName,
  fullName,
  username,
  email,
  bio,
  handleCancelButtonClick,
  handleSaveButtonClick,
}) => {
  return (
    <form className="flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        <div className="relative w-full aspect-square rounded-full overflow-hidden mb-3">
          <Image
            alt={fullName}
            src={avatar}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label
            htmlFor="firstName"
            className="font-semibold"
          >
            First Name
          </Label>
          <Input
            type="text"
            id="firstName"
            defaultValue={firstName}
            name={firstName}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label
            htmlFor="lastName"
            className="font-semibold"
          >
            Last Name
          </Label>
          <Input
            type="text"
            id="lastName"
            defaultValue={lastName}
            name="lastName"
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label
            htmlFor="bio"
            className="font-semibold"
          >
            Bio
          </Label>
          <Textarea
            id="bio"
            defaultValue={bio}
            name="bio"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          variant=""
          type="submit"
          onClick={handleSaveButtonClick}
        >
          Save
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            handleCancelButtonClick(false);
          }}
        >
          Cancel
        </Button>
      </div>
      <Separator />
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle className="font-semibold italic">Editing more fields</AlertTitle>
        <AlertDescription className="italic">
          You can edit your profile image, username and email address by opening your{" "}
          <span className="font-semibold">"Manage account"</span> dialog window.
        </AlertDescription>
      </Alert>
    </form>
  );
};

export default AccountInfoEdit;
