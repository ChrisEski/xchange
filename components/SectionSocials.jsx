import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faSquareXTwitter,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

const SectionSocials = () => {
  return (
    <div className="border-4 border-black section-content flex justify-between items-center">
      <div>
        <h3 className="font-display font-bold text-4xl">Stay connected. Stay informed.</h3>
        <p className="text-xl mt-2">Check out our social media and be up to date</p>
      </div>
      <div className="flex-1 flex justify-end items-center gap-12">
        <div className="twitter flex flex-col items-center">
          <FontAwesomeIcon
            icon={faSquareXTwitter}
            size="3x"
            style={{ color: "black" }}
          />
          <span className="font-black text-lg">204,640</span>
          <span className="text-neutral-700">Followers</span>
        </div>
        <div className="facebook flex flex-col items-center">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            size="3x"
            style={{ color: "	#1877F2" }}
          />
          <span className="font-black text-lg">164,408</span>
          <span className="text-neutral-700">Fans</span>
        </div>
        <div className="youtube flex flex-col items-center">
          <FontAwesomeIcon
            icon={faYoutubeSquare}
            size="3x"
            style={{ color: "#CD201F" }}
          />
          <span className="font-black text-lg">320,338</span>
          <span className="text-neutral-700">Subscribers</span>
        </div>
      </div>
    </div>
  );
};

export default SectionSocials;
