"use client";
import { Protect, auth, currentUser, useOrganizationList } from "@clerk/nextjs";

const ClerkTest = () => {
  const { userMemberships } = useOrganizationList();
  return <h1>Testing Clerk protection</h1>;
};

export default ClerkTest;
