const SectionContainer = ({ children, bgColor }) => {
  return <section className={`${bgColor ? bgColor : ""} `}>{children}</section>;
};

export default SectionContainer;
