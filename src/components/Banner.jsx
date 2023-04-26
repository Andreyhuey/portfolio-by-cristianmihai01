import React from "react";
import Image from "next/image";
import Avatar from "../assets/avatar.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
//  motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../pages/variants.js";

export default function Banner() {
  return (
    <section
      className="min-h-[90vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[35px] font-bold leading-[0.8] lg:text-[90px] mb-1"
            >
              OLUWADARA{" "}
              <span>
                OLA-OBAADO
                {/* <i className="italic font-thin text-sm">A.K.A</i>{" "}
              <b className="text-slate-400">Andreyhuey</b> */}
              </span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <TypeAnimation
                sequence={[
                  "Front-End Developer",
                  2000,
                  "Aspiring FullStacker",
                  2000,
                ]}
                speed={40}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
            {/* socials */}
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 text-slate-400 text-3xl lg:max">
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="">
                <FaGithub />
              </a>
            </div>
          </div>
          {/* image */}
          <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto">
            <Image src={Avatar} alt="avatar" className="rounded-3xl " />
          </div>
        </div>
      </div>
    </section>
  );
}
