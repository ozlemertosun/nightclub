import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SectionThree = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/gallery", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        setImages(res);
        /*    console.log(res); */
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col mt-32">
        <h2 className="title-white text-center uppercase">
          Night club gallery
        </h2>
        <div className="h-1 bg-gradient-to-l from-transparent via-partyPink w-[300px] m-auto to-transparent mt-10"></div>
      </div>

      <motion.div
        className="galleryContainer my-14"
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.8 }}
      >
        {images.map((image) => (
          <div>
            <img src={image.asset.url} alt={image.title} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionThree;
