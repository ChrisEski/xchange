//* NOTE: MADE FULL WIDTH TO ALLOW FOR SECTION BACKGROUND. MAX WIDTH SET BY {children}
const SectionContainer = ({ children, bgColor }) => {
  return <section className={`${bgColor ? bgColor : ""} `}>{children}</section>;
};

export default SectionContainer;
