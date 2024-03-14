"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Info } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { editPersonalInfo } from "@/lib/actions";

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
  const updateInfoWithUsername = editPersonalInfo.bind(null, username);

  return (
    <form
      action={(formData) => {
        updateInfoWithUsername(formData);
        handleCancelButtonClick();
      }}
      className="flex flex-col gap-3"
    >
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
          // onClick={handleSaveButtonClick}
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
          You can edit all other fields by opening your{" "}
          <span className="font-semibold">"Manage account"</span> dialog window.
        </AlertDescription>
      </Alert>
    </form>
  );
};

export default AccountInfoEdit;
