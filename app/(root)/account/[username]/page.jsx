// MAKE PAGE LIKE GITHUB'S PROFILE PAGE
// Show how many posts, users, subscribers, own posts

// !FIX: MAKE SERVER COMPONENT (NOT A PURE DASHBOARD BUT A PROFILE PAGE ACCESSIBLE TO ANYONE), FETCH USER INFO AND USER POSTS INFO HERE AND PASS THE VALUES AS PROPS TO CHILDREN COMPONENTS
"use client";
import { useUser } from "@clerk/clerk-react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import AccountInfo from "@/components/AccountInfo";
import AccountPosts from "@/components/AccountPosts";
import Loader from "@/components/Loader";
import { formatDate } from "@/lib/utils";

const Profile = () => {
  const [profileUser, setProfileUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();
  const params = useParams();
  const loggedInUsername = user?.username;
  const urlParamsUsername = params.username;

  // Check if the account displayed is the logged in user's account
  const isUserAccount = loggedInUsername === urlParamsUsername;

  // Check if the account displayed is the Admin's account
  const isAdminAccount = profileUser?.isAdmin;

  // Fetch the user whose username is in the url (whose profile is displayed)
  useEffect(() => {
    const fetchUser = async (username) => {
      try {
        const response = await fetch(`http://localhost:3000/api/users/${username}`);
        const data = await response.json();
        setProfileUser(data);
        setIsLoading(false);
        console.log("Successfully fetched user");
      } catch (error) {
        console.log("Error fetching user in profile", error);
      }
    };

    fetchUser(urlParamsUsername);
  }, [urlParamsUsername]);

  const { firstName, lastName, username, email, bio, avatar, _id } = profileUser;
  const fullName = `${firstName} ${lastName}`;
  const signupDate = formatDate(profileUser?.createdAt);
  const role = profileUser?.isAdmin ? "Admin" : "Author";

  return !profileUser || isLoading ? (
    <Loader />
  ) : (
    <section className="flex flex-col gap-12">
      <div className="flex gap-12">
        {/* ACCOUNT INFO */}
        <AccountInfo
          avatar={avatar}
          firstName={firstName}
          lastName={lastName}
          fullName={fullName}
          username={username}
          email={email}
          bio={bio}
          role={role}
          signupDate={signupDate}
          isUserAccount={isUserAccount}
        />

        <div>
          {isAdminAccount && <div>App stats go here - total posts/users/subscriptions</div>}

          {/* USER'S POSTS & STATISTICS*/}
          <AccountPosts
            username={username}
            isUserAccount={isUserAccount}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
