import hero from "../img/header_bg_2.jpg";
import Logo from "../img/logo/Logo.svg";

const Hero = () => {
  return (
    <div className="">
      <img src={hero} alt="" className="" />
      <img src={Logo} className="bg-red-400" />
    </div>
  );
};

export default Hero;
