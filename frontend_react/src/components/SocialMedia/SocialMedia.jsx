import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div style={{ cursor: "pointer" }}>
        <BsTwitter />
      </div>
      <div style={{ cursor: "pointer" }}>
        <FaFacebook />
      </div>
      <div style={{ cursor: "pointer" }}>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
