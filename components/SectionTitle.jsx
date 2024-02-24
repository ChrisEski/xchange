import { capitalizeFirstLetter } from "@/lib/utils";

const SectionTitle = ({ category, altTitle }) => {
  const capitalizedCategory = capitalizeFirstLetter(category);
  return (
    <div>
      <h2 className="font-display font-bold text-5xl">
        {category ? `${capitalizedCategory} Articles` : altTitle}
      </h2>
      <div className="h-1 bg-red-600 w-[10%] mt-1"></div>
    </div>
  );
};

export default SectionTitle;
