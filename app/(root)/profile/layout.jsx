const AccountLayout = ({ children }) => {
  const showBorders = false;
  return (
    <main className={`section-content ${showBorders && "border-4 border-black"}`}>{children}</main>
  );
};

export default AccountLayout;
