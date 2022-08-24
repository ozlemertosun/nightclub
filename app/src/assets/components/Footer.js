import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaSkype,
  FaBloggerB,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bottom-0 relative font-semibold flex justify-evenly bread py-7 items-center">
      <p>Stay connected with us Night Club</p>
      <div className="flex gap-3">
        <FaFacebookF className="borderBox" />
        <FaTwitter className="borderBox" />
        <FaGooglePlusG className="borderBox" />
        <FaSkype className="borderBox" />
        <FaBloggerB className="borderBox" />
      </div>
      <p>Copyright @ 2018 NightClub psd template all right</p>
    </footer>
  );
};

export default Footer;
