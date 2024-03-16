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
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";

const AccountInfoEdit = ({}) => {
  const router = useRouter();
  // const updateInfoWithUsername = editPersonalInfo.bind(null, username);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Submitted");
  };

  return (
    <div>Edit mode</div>
    // <form
    //   onSubmit={handleSubmit}
    //   className="flex flex-col gap-3"
    // >
    //   <div className="flex flex-col gap-3">
    //     <div className="relative w-full aspect-square rounded-full overflow-hidden mb-3">
    //       <Image
    //         alt={fullName}
    //         src={avatar}
    //         fill
    //         style={{ objectFit: "cover" }}
    //       />
    //     </div>

    //     {/* USER ID (CLERK ID) */}
    //     <div className="grid w-full max-w-sm items-center gap-1.5">
    //       <Input
    //         id="id"
    //         value={formData.userId}
    //         name="id"
    //         type="hidden"
    //       />
    //     </div>

    //     {/* FIRST NAME */}
    //     <div className="grid w-full max-w-sm items-center gap-1.5">
    //       <Label
    //         htmlFor="firstName"
    //         className="font-semibold"
    //       >
    //         First name
    //       </Label>
    //       <Input
    //         id="firstName"
    //         value={formData.firstName}
    //         onChange={handleChange}
    //         name="firstName"
    //       />
    //     </div>

    //     {/* LAST NAME */}
    //     <div className="grid w-full max-w-sm items-center gap-1.5">
    //       <Label
    //         htmlFor="lastName"
    //         className="font-semibold"
    //       >
    //         Last name
    //       </Label>
    //       <Input
    //         id="lastName"
    //         value={formData.lastName}
    //         onChange={handleChange}
    //         name="lastName"
    //       />
    //     </div>

    //     {/* USERNAME */}
    //     <div className="grid w-full max-w-sm items-center gap-1.5">
    //       <Label
    //         htmlFor="username"
    //         className="font-semibold"
    //       >
    //         Username
    //       </Label>
    //       <Input
    //         id="username"
    //         value={formData.username}
    //         onChange={handleChange}
    //         name="username"
    //       />
    //     </div>

    //     {/* EMAIL  */}
    //     <div className="grid w-full max-w-sm items-center gap-1.5">
    //       <Label
    //         htmlFor="email"
    //         className="font-semibold"
    //       >
    //         Email
    //       </Label>
    //       <Input
    //         id="email"
    //         value={formData.email}
    //         onChange={handleChange}
    //         name="email"
    //       />
    //     </div>

    //     {/* BIO */}
    //     <div className="grid w-full max-w-sm items-center gap-1.5">
    //       <Label
    //         htmlFor="bio"
    //         className="font-semibold"
    //       >
    //         Bio
    //       </Label>
    //       <Textarea
    //         id="bio"
    //         value={formData.bio}
    //         onChange={handleChange}
    //         name="bio"
    //       />
    //     </div>
    //   </div>

    //   <div className="flex gap-2">
    //     <Button
    //       variant=""
    //       type="submit"
    //       // onClick={handleSaveButtonClick}
    //     >
    //       Save
    //     </Button>
    //     <Button
    //       variant="outline"
    //       onClick={() => {
    //         handleCancelButtonClick(false);
    //       }}
    //     >
    //       Cancel
    //     </Button>
    //   </div>
    //   <Separator />
    //   <Alert>
    //     <Info className="h-4 w-4" />
    //     <AlertTitle className="font-semibold italic">Editing more fields</AlertTitle>
    //     <AlertDescription className="italic">
    //       You can edit all other fields by opening your{" "}
    //       <span className="font-semibold">"Manage account"</span> dialog window.
    //     </AlertDescription>
    //   </Alert>
    // </form>
  );
};

export default AccountInfoEdit;
