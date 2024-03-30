"use client";

import { formatDate, getInitials } from "@/lib/utils";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Calendar, NotebookPen, Mail, Pen, User, Pencil, LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { fetchSingleUserByUsername } from "@/lib/data/users";
import { SignOutButton } from "@clerk/nextjs";
import { baseURL } from "@/lib/constables";
import AccountInfoSkeleton from "../ui/AccountInfoSkeleton";
import { fetchUserPosts } from "@/lib/data/posts";
import { editPersonalInfo } from "@/lib/actions";
import { Separator } from "../ui/separator";

const AccountInfo = ({ isUserAccount }) => {
  const router = useRouter();
  const pathName = usePathname();
  const canEdit = !pathName.includes("/profile");
  const params = useParams();
  const { username } = params;

  const [isLoading, setIsLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [displayedUser, setDisplayedUser] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [editFormData, setEditFormData] = useState({});

  useEffect(() => {
    try {
      const getUser = async (username) => {
        const user = await fetchSingleUserByUsername(username);
        const posts = await fetchUserPosts(username);
        setDisplayedUser(user);
        setUserPosts(posts);
        setEditFormData({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          username: user.username,
          password: user.password,
          bio: user.bio,
        });
        setIsLoading(false);
      };

      getUser(username);
    } catch (error) {
      console.log("Error fetching user:", error);
    }
  }, [username]);

  const handleInputChange = (event) => {
    setEditFormData({ ...editFormData, [event.target.name]: event.target.value });
  };

  const updatePersonalInfo = async (formData) => {
    const updatedUserData = await editPersonalInfo(formData);
    setEditMode(false);
    const updatedUsername = updatedUserData.username;
    router.push(`/dashboard/${updatedUsername}`);
  };

  const handleDeleteAccount = () => {
    alert("Deleting your account");
    setEditMode(false);
  };

  const fullName = `${displayedUser.firstName} ${displayedUser.lastName}`;

  return isLoading ? (
    // <div className=" flex-auto flex flex-col gap-3 min-w-[280px] max-w-[25%]">Loading...</div>
    <AccountInfoSkeleton />
  ) : (
    // <div>Info</div>
    <div className=" flex-auto flex flex-col gap-3 min-w-[280px] max-w-[25%]">
      {canEdit && editMode ? (
        <form
          action={updatePersonalInfo}
          className="flex flex-col gap-5"
        >
          <div className="relative w-full aspect-square overflow-hidden">
            <Avatar className="w-full h-full">
              <AvatarImage src={displayedUser.avatar} />
              <AvatarFallback>
                {getInitials(displayedUser.firstName, displayedUser.lastName)}
              </AvatarFallback>
            </Avatar>

            <Label
              htmlFor="avatar"
              className="bg-neutral-800 text-white flex justify-center items-center border border-neutral-400 absolute rounded-full w-[40px] h-[40px] right-0 top-[68%] cursor-pointer"
            >
              <Pencil className="w-5 h-5" />
              <Input
                id="avatar"
                type="file"
                className="hidden"
                name="avatar"
              />
            </Label>
          </div>

          <div className="flex flex-col gap-5">
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
              <Button>Save changes</Button>
              <Button
                variant="outline"
                onClick={() => {
                  setEditMode(false);
                }}
              >
                Cancel
              </Button>
            </div>
            <div className="flex flex-col gap-3 border-2 border-[#DC2626] border-dashed rounded-md p-3">
              {/* <Separator /> */}
              <h2 className="text-xl text-[#DC2626] font-semibold">Delete account</h2>
              <p>
                Caution! This is a destructive request that{" "}
                <span className="font-bold italic">cannot be undone.</span> Are you sure you want to
                delete your account?
              </p>
              <Button
                variant="destructive"
                onClick={() => {
                  handleDeleteAccount();
                }}
              >
                Delete my account
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <>
          <div className="relative w-full aspect-square overflow-hidden">
            <Avatar className="w-full h-full">
              <AvatarImage
                src={displayedUser.avatar}
                className="object-cover"
              />
              <AvatarFallback>
                {getInitials(displayedUser.firstName, displayedUser.lastName)}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col gap-3">
            <div className="">
              <p className="font-bold text-xl">{fullName}</p>
              <p>{displayedUser.username}</p>
            </div>
            <p className=" text-neutral-700">{displayedUser.bio}</p>
            <div className=" text-sm flex flex-col gap-1">
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

            {canEdit && (
              <Button
                onClick={() => {
                  setEditMode(true);
                }}
              >
                Edit account
              </Button>
            )}

            {isUserAccount && (
              <SignOutButton
                signOutCallback={() => {
                  router.replace(`${baseURL}`);
                }}
              >
                <Button variant="outline">
                  Sign out
                  <LogOut className="ml-2 h-4 w-4" />
                </Button>
              </SignOutButton>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AccountInfo;
