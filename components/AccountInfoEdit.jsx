"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";

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
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        <div className="relative w-full aspect-square rounded-full overflow-hidden mb-3">
          <Image
            src={avatar}
            fill
            style={{ objectFit: "cover" }}
          />

          <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-neutral-500/70 rounded-full border-4 border-dashed border-neutral-200">
            <Button
              variant="outline"
              className="gap-2 bg-transparent text-white font-medium"
              onClick={() => alert("Editing avatar")}
            >
              <Pencil className="h-4 w-4" /> Edit avatar
            </Button>
          </div>
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
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label
            htmlFor="username"
            className="font-semibold"
          >
            Username
          </Label>
          <Input
            type="text"
            id="username"
            defaultValue={username}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label
            htmlFor="email"
            className="font-semibold"
          >
            Email
          </Label>
          <Input
            type="text"
            id="email"
            defaultValue={email}
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
          />
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          variant=""
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
    </div>
  );
};

export default AccountInfoEdit;
