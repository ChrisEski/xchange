import { capitalizeFirstLetter } from "@/lib/utils";

const CategoryLabel = ({ category, dark }) => {
  let color = dark ? "black" : "white";

  return (
    <div
      className={`text-${color} rounded font-semibold text-sm px-2 ${
        !dark && `bg-white/20`
      } border border-${color} pb-[3px]`}
    >
      {capitalizeFirstLetter(category)}
    </div>
  );
};

export default CategoryLabel;
