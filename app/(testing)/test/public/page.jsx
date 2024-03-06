import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const PublicPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold font-display text-3xl">Public page</h1>
      <div>
        <h2 className="font-bold text-lg">Page description</h2>
        <p className="mb-2 text-neutral-600">This page should be accessible to anyone.</p>
      </div>

      <div>
        <h2 className="font-bold text-lg">Clerk auth links</h2>
        <p className="mb-2 text-neutral-600">Click the links to the corresponding pages</p>
        <div className="flex gap-2">
          <Link
            href="/test/"
            className={buttonVariants({ variant: "" })}
          >
            Test page
          </Link>
          <Link
            href="/test/private"
            className={buttonVariants({ variant: "" })}
          >
            Private page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PublicPage;
