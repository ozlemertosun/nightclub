import { motion } from "framer-motion";

import hero from "../img/header_bg_2.jpg";
import Logo from "../img/logo/Logo.svg";
import bottomline from "../img/bottom_line.png";

const Hero = () => {
  return (
    <div className="relative">
      <img src={hero} alt="" className="    w-full" />
      <motion.div className="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 left-1/2 flex items-center flex-col gap-y-5 text-center">
        <motion.div
          animate={{ rotateX: "0deg" }}
          initial={{ rotateX: "90deg" }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <img src={Logo} className="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p className="logotype -mb-3 mt-3">Have a good time</p>
          <img src={bottomline} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
