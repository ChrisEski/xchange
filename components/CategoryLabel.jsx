import { capitalizeFirstLetter } from "@/lib/utils";

const CategoryLabel = ({ category, dark }) => {
  let color = dark ? "black" : "white";

  return (
    <span
      className={`text-${color} rounded font-semibold px-2 ${
        !dark && `bg-white/20`
      } border border-${color} pb-[3px]`}
    >
      {capitalizeFirstLetter(category)}
    </span>
  );
};

export default CategoryLabel;
