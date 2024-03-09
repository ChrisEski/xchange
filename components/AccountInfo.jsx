"use client";
import AccountInfoDisplay from "./AccountInfoDisplay";
import { useState } from "react";
import AccountInfoEdit from "./AccountInfoEdit";

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
}) => {
  const [editMode, setEditMode] = useState(false);

  const handleInfoEdit = (bool) => {
    setEditMode(bool);
  };

  const handleSaveInfo = () => {
    alert("Saved");
    setEditMode(false);
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
        <AccountInfoDisplay
          avatar={avatar}
          fullName={fullName}
          username={username}
          email={email}
          bio={bio}
          role={role}
          signupDate={signupDate}
          isUserAccount={isUserAccount}
          handleEditButtonClick={handleInfoEdit}
        />
      )}
    </div>
  );
};

export default AccountInfo;
