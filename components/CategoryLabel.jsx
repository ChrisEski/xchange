import { capitalizeFirstLetter } from "@/lib/utils";

const CategoryLabel = ({ category, dark = false }) => {
  return (
    <span
      className={`text-${dark ? "black" : "white"} rounded font-semibold px-2 ${
        !dark && `bg-white/20`
      } border border-${dark ? "black" : "white"} pb-[3px]`}
    >
      {capitalizeFirstLetter(category)}
    </span>
  );
};

export default CategoryLabel;
