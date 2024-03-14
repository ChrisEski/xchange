"use client";
import AccountInfoDisplay from "./AccountInfoDisplay";
import { Suspense, useState } from "react";
import AccountInfoEdit from "./AccountInfoEdit";
import Loader from "./Loader";
import { useRouter } from "next/navigation";
import { editPersonalInfo } from "@/lib/actions";

const AccountInfo = ({
  avatar,
  firstName,
  lastName,
  fullName,
  username,
  email,
  bio,
  role,
  signupDate,
  isUserAccount,
  userPostsCount,
}) => {
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);

  const handleInfoEdit = (bool) => {
    setEditMode(bool);
  };

  const handleSaveInfo = () => {
    alert("Saved");
    setEditMode(false);
    // router.refresh();
  };
  return (
    <div className=" flex-auto flex flex-col min-w-[280px] max-w-[25%]">
      {editMode ? (
        <AccountInfoEdit
          avatar={avatar}
          firstName={firstName}
          lastName={lastName}
          fullName={fullName}
          username={username}
          email={email}
          bio={bio}
          handleSaveButtonClick={handleSaveInfo}
          handleCancelButtonClick={handleInfoEdit}
        />
      ) : (
        <Suspense fallback={<Loader />}>
          <AccountInfoDisplay
            avatar={avatar}
            fullName={fullName}
            username={username}
            email={email}
            bio={bio}
            role={role}
            signupDate={signupDate}
            isUserAccount={isUserAccount}
            userPostsCount={userPostsCount}
            handleEditButtonClick={handleInfoEdit}
          />
        </Suspense>
      )}
    </div>
  );
};

export default AccountInfo;
