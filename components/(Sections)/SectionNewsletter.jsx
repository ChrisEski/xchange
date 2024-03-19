import NewsletterForm from "./NewsletterForm";

const SectionNewsletter = ({ showBorders }) => {
  return (
    <div
      className={`${
        showBorders && "border-4 border-black"
      } section-content flex justify-between items-center`}
    >
      <div>
        <h3 className="font-display font-bold text-5xl">Sign up for our Newsletter</h3>
        <p className="text-xl mt-2">Be the first to read the latest articles</p>
      </div>
      <NewsletterForm />
    </div>
  );
};

export default SectionNewsletter;
