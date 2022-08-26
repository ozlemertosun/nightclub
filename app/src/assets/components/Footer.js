import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaSkype,
  FaBloggerB,
} from "react-icons/fa";
import Logo from "../img/logo/Logo.png";
import recentpostimg1 from "../img/recent_post1.jpg";
import recentpostimg2 from "../img/recent_post2.jpg";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex gap-24 justify-center my-28">
        <div className="flex flex-col gap-14">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <h4 className="subtitle text-partyPink mb-1">Location</h4>
            <p className="bread">PO Box 16122 Collins Street West Victoria</p>
            <p className="bread">Australia</p>
          </div>
          <div>
            <h4 className="subtitle text-partyPink mb-1">Opening Hours</h4>
            <p className="bread uppercase">mon-fri 9 am to 10 pm</p>
          </div>
        </div>

        <div className="flex flex-col gap-14">
          {" "}
          <h2 className="subtitle text-partyPink">Recent posts</h2>
          <div className="flex gap-4">
            <div>
              <img src={recentpostimg1} alt="" />
            </div>
            <div>
              <p className="bread max-w-[200px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="bread text-partyPink">April, 17 2018</p>
            </div>
          </div>{" "}
          {/* end post*/}
          <div className="flex gap-4">
            <div>
              <img src={recentpostimg2} alt="" />
            </div>
            <div>
              <p className="bread max-w-[200px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="bread text-partyPink">April, 17 2018</p>
            </div>
          </div>
          {/* end post*/}
        </div>
        {/* end posts*/}

        <div className="flex flex-col gap-14">
          <h2 className="subtitle text-partyPink">Recent posts</h2>
          <div className="flex gap-4">
            <FaTwitter className="text-partyPink mt-2" />
            <div>
              <p className="bread">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="bread text-partyPink">5 hours ago</p>
            </div>
          </div>
          <div className="flex gap-4">
            <FaTwitter className="text-partyPink mt-2" />
            <div>
              <p className="bread">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="bread text-partyPink">5 hours ago</p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end of upper footer information */}
      <div className="w-full bottom-0 relative font-semibold flex justify-evenly bread py-7 items-center">
        <p>Stay connected with us Night Club</p>
        <div className="flex gap-3">
          <FaFacebookF className="borderBox" />
          <FaTwitter className="borderBox" />
          <FaGooglePlusG className="borderBox" />
          <FaSkype className="borderBox" />
          <FaBloggerB className="borderBox" />
        </div>
        <p>Copyright @ 2018 NightClub psd template all right</p>
      </div>
    </footer>
  );
};

export default Footer;
