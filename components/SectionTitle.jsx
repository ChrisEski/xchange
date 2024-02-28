import { capitalizeFirstLetter } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SectionTitle = ({ category, altTitle, viewAll }) => {
  const capitalizedCategory = capitalizeFirstLetter(category);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-display font-bold text-5xl dark:text-white">
          {category ? `${capitalizedCategory} Articles` : altTitle}
        </h2>
        {viewAll && (
          <Link href="#">
            <Button
              variant="link"
              className="font-display font-bold"
            >
              View all <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
      <div className="h-1 bg-red-600 w-[10%] mt-1"></div>
    </div>
  );
};

export default SectionTitle;
