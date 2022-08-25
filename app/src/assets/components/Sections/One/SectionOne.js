import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

import club from "../../../img/sektion1/thumb1.jpg";
import restaurant from "../../../img/sektion1/reastaurant_1.jpg";
import bar from "../../../img/sektion1/thumb2.jpg";
import Dancingman from "../../../img/logo/Dancingman";

const SectionOne = () => {
  return (
    <section className="my-10 text-center">
      <h2 className="title-white uppercase mb-10">
        welcome in night<span className="title-pink uppercase">club</span>
      </h2>
      <div className="h-1 mx-auto mb-10 bg-gradient-to-l from-transparent via-partyPink w-[300px] to-transparent"></div>
      <div className="flex justify-center">
        <div className="text-center max-w-[1425px] flex gap-5 ">
          <div className="overflow-hidden">
            <div className="max-w-[368px] effecthovercard border-y border-partyPink overflow-hidden bg-darkGray relative">
              <div className="absolute max-w-[368px]">
                <motion.img
                  src={club}
                  alt="club table 22"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                />
              </div>{" "}
              <div className="graphiccornertop h-24 w-24 bg-partyPink rotate-45 relative z-10 -left-12 -top-12"></div>
              <div className="flex flex-col gap-4 mx-2">
                <div className=" flex justify-center">
                  <div className="max-w-[60px] rounded-md border-2 border-partyPink p-2 flex items-center">
                    <Dancingman />
                  </div>
                </div>
                <h3 className="subtitle">Night club</h3>
                <p className="bread">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum placeat accusantium cum quaerat, in sed totam fugiat?
                  Quis illo, porro error consequuntur corrupti numquam aliquam
                  asperiores perferendis. Ex, suscipit adipisci.
                </p>
              </div>
              <div className="h-24 w-24 graphiccornerbottom bg-partyPink rotate-45 relative z-10 -bottom-12 -right-80"></div>
            </div>
          </div>
          {/* end of card */}
          <div className="overflow-hidden">
            <div className="max-w-[368px] effecthovercard border-y border-partyPink overflow-hidden bg-darkGray relative">
              <div className="absolute max-w-[368px]">
                <motion.img
                  src={restaurant}
                  alt="club table 22"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                />
              </div>{" "}
              <div className="graphiccornertop h-24 w-24 bg-partyPink rotate-45 relative z-10 -left-12 -top-12"></div>
              <div className="flex flex-col gap-4 mx-2">
                <div className=" flex justify-center">
                  <div className="max-w-[60px] rounded-md border-2 border-partyPink p-2 flex items-center">
                    <Dancingman />
                  </div>
                </div>
                <h3 className="subtitle">Restaurant</h3>
                <p className="bread">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum placeat accusantium cum quaerat, in sed totam fugiat?
                  Quis illo, porro error consequuntur corrupti numquam aliquam
                  asperiores perferendis. Ex, suscipit adipisci.
                </p>
              </div>
              <div className="h-24 w-24 graphiccornerbottom bg-partyPink rotate-45 relative z-10 -bottom-12 -right-80"></div>
            </div>
          </div>
          {/* end of card */}
          <div className="overflow-hidden">
            <div className="max-w-[368px] effecthovercard border-y border-partyPink overflow-hidden bg-darkGray relative">
              <div className="absolute max-w-[368px]">
                <motion.img
                  src={bar}
                  alt="club table 22"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                />
              </div>{" "}
              <div className="graphiccornertop h-24 w-24 bg-partyPink rotate-45 relative z-10 -left-12 -top-12"></div>
              <div className="flex flex-col gap-4 mx-2">
                <div className=" flex justify-center">
                  <div className="max-w-[60px] rounded-md border-2 border-partyPink p-2 flex items-center">
                    <Dancingman />
                  </div>
                </div>
                <h3 className="subtitle">Bar</h3>
                <p className="bread">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum placeat accusantium cum quaerat, in sed totam fugiat?
                  Quis illo, porro error consequuntur corrupti numquam aliquam
                  asperiores perferendis. Ex, suscipit adipisci.
                </p>
              </div>
              <div className="h-24 w-24 graphiccornerbottom bg-partyPink rotate-45 relative z-10 -bottom-12 -right-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
