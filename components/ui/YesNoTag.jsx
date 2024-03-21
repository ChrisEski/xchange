const YesTag = ({ isTrue }) => {
  const bg = isTrue ? "bg-green-400" : "bg-red-400";
  return (
    <span
      className={`border border-${
        isTrue ? "green" : "red"
      }-500 ${bg} text-[11px] text-white font-bold px-2 rounded`}
    >
      {isTrue ? "Yes" : "No"}
    </span>
  );
};

export default YesTag;
