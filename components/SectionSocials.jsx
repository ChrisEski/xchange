import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/links";

const SectionSocials = () => {
  return (
    <div className="section-content flex justify-between items-center">
      <div>
        <h3 className="font-display font-bold text-4xl">Stay connected. Stay informed.</h3>
        <p className="text-xl mt-2">Check out our social media and be up to date</p>
      </div>
      <div className="flex-1 flex justify-end items-center gap-12">
        <div className="twitter flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="48"
            height="48"
            fill="#000000"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
          </svg>
          <span className="font-black text-lg">204,640</span>
          <span className="text-neutral-700">Followers</span>
        </div>
        <div className="facebook flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="48"
            height="48"
            fill="#1877F2"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
          </svg>
          <span className="font-black text-lg">164,408</span>
          <span className="text-neutral-700">Fans</span>
        </div>
        <div className="youtube flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="48"
            height="48"
            fill="#FF0000"
          >
            <path d="M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z" />
          </svg>
          <span className="font-black text-lg">320,338</span>
          <span className="text-neutral-700">Subscribers</span>
        </div>
      </div>
    </div>
  );
};

export default SectionSocials;
