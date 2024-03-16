import { auth } from "@clerk/nextjs/server";

const AccountLayout = ({ children }) => {
  auth().protect();
  return <main className="section-content border-4 border-black">{children}</main>;
};

export default AccountLayout;
