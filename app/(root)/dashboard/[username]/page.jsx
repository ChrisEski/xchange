import AccountInfo from "@/components/AccountInfo";

const Account = async ({ params }) => {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex gap-12">
        {/* ACCOUNT INFO */}
        <AccountInfo />
        <div className="flex flex-col gap-6 flex-auto">
          {/* {isAdmin && <AccountInfoStats />} */}

          {/* USER'S POSTS & STATISTICS*/}
          {/* <AccountPosts /> */}
        </div>
      </div>
    </section>
  );
};

export default Account;
<div className=""></div>;
