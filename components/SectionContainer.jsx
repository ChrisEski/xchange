const SectionContainer = ({ children, bgColor }) => {
  return <div className={bgColor ? bgColor : ""}>{children}</div>;
};

export default SectionContainer;
