"use client";

import { formatDate, getInitials } from "@/lib/utils";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Calendar, NotebookPen, Mail, UploadCloud, User } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";

const AccountInfo = () => {
  const params = useParams();
  const { username } = params;

  const [displayedUser, setDisplayedUser] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editFormData, setEditFormData] = useState({});

  useEffect(() => {
    try {
      const fetchUser = async (username) => {
        const res = await fetch(`http://localhost:3000/api/users/${username}`);
        const data = await res.json();
        setDisplayedUser(data);
        setUserPosts(data.posts);
        setEditFormData({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          username: data.username,
          bio: data.bio,
        });
        setIsLoading(false);
      };

      fetchUser(username);
    } catch (error) {
      console.log("Error fetching user:", error);
    }
  }, [username]);

  const handleInputChange = (event) => {
    setEditFormData({ ...editFormData, [event.target.name]: event.target.value });
  };

  const fullName = `${displayedUser.firstName} ${displayedUser.lastName}`;

  return isLoading ? (
    <div className=" flex-auto flex flex-col gap-3 min-w-[280px] max-w-[25%]">Loading...</div>
  ) : (
    // <div>Info</div>
    <div className=" flex-auto flex flex-col gap-3 min-w-[280px] max-w-[25%]">
      {editMode ? (
        <form className="flex flex-col gap-3">
          <div className="relative w-full aspect-square overflow-hidden">
            <Avatar className="w-full h-full">
              <AvatarImage src={displayedUser.avatar} />
              <AvatarFallback>
                {getInitials(displayedUser.firstName, displayedUser.lastName)}
              </AvatarFallback>
            </Avatar>
            <div className="bg-white/70 absolute inset-0 w-full h-full flex flex-col justify-center items-center rounded-full border-4 border-neutral-700 border-dashed text-neutral-700 hover:bg-white/80">
              <Label
                htmlFor="avatar"
                className="flex flex-col justify-center items-center absolute w-full h-full inset-0 rounded-full cursor-pointer text-2xl"
              >
                <UploadCloud className="w-14 h-14 text-neutral-600" />
                Upload image
              </Label>
              <Input
                id="avatar"
                type="file"
                className="hidden"
                name="avatar"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label
                htmlFor="firstName"
                className="font-semibold"
              >
                First Name
              </Label>
              <Input
                type="firstName"
                id="firstName"
                name="firstName"
                defaultValue={displayedUser.firstName}
                onChange={handleInputChange}
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
                type="lastName"
                id="lastName"
                name="lastName"
                defaultValue={displayedUser.lastName}
                onChange={handleInputChange}
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
                type="username"
                id="username"
                name="username"
                defaultValue={displayedUser.username}
                onChange={handleInputChange}
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
                type="email"
                id="email"
                name="email"
                defaultValue={displayedUser.email}
                onChange={handleInputChange}
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
                rows={6}
                type="bio"
                id="bio"
                name="bio"
                defaultValue={displayedUser.bio}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => {
                  alert("Changes saved");
                  setEditMode(false);
                }}
              >
                Save changes
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setEditMode(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <>
          <div className="relative w-full aspect-square overflow-hidden">
            <Avatar className="w-full h-full">
              <AvatarImage src={displayedUser.avatar} />
              <AvatarFallback>
                {getInitials(displayedUser.firstName, displayedUser.lastName)}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col gap-2">
            <div className="">
              <p className="font-bold text-xl">{fullName}</p>
              <p>{displayedUser.username}</p>
            </div>
            <p className=" text-neutral-700">{displayedUser.bio}</p>
            <div className=" text-sm">
              <Link
                href={`mailto:${displayedUser.email}`}
                className="flex items-center gap-1"
              >
                <Mail className="w-4" />
                <p>{displayedUser.email}</p>
              </Link>
              <div className="flex items-center gap-1">
                <NotebookPen className="w-4" />
                {userPosts.length === 0 ? (
                  <p>No articles published yet</p>
                ) : (
                  <p>Published {userPosts.length} articles</p>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4" />
                <p>{formatDate(displayedUser.createdAt)}</p>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4" />
                <p>{displayedUser.isAdmin ? "Admin" : "Author"}</p>
              </div>
            </div>
            <Button
              onClick={() => {
                setEditMode(true);
              }}
            >
              Edit account
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default AccountInfo;
