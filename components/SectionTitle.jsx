const SectionTitle = ({ title }) => {
  return (
    <div>
      <h2 className="font-display font-bold text-5xl">{title}</h2>
      <div className="h-1 bg-red-600 w-[10%] mt-1"></div>
    </div>
  );
};

export default SectionTitle;
