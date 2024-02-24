import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SectionNewsletter = () => {
  return (
    <section className="px-12 py-16 max-w-[1220px] mx-auto flex justify-between items-center">
      <div>
        <h3 className="font-display font-bold text-5xl">Sign up for our Newsletter</h3>
        <p className="text-xl mt-2">Be the first to read the latest articles</p>
      </div>
      <div className="flex-1 flex justify-end items-center">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="email"
            placeholder="Email"
          />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
    </section>
  );
};

export default SectionNewsletter;
