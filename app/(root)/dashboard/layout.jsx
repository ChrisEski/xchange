import { auth } from "@clerk/nextjs/server";

const AccountLayout = ({ children }) => {
  auth().protect();
  return <section className="section-content border-4 border-black">{children}</section>;
};

export default AccountLayout;
