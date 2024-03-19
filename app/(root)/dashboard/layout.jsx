import { auth } from "@clerk/nextjs/server";

const AccountLayout = ({ children }) => {
  const showBorders = false;
  auth().protect();
  return (
    <section className={`${showBorders && "border-4 border-black"} section-content`}>
      {children}
    </section>
  );
};

export default AccountLayout;
