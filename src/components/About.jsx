import React from "react";
import Image from "next/image";
// countup
import CountUp from "react-countup";
// intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../pages/variants.js";

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <div className="flex-1 mix-blend-lighten bg-top bg-contain"></div>
          {/* text */}
          <div className="flex-1">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Freelance Front-end Developer with over 15 months of
              experience
            </h3>
            <p className="mb-6">
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 justify-center md:justify-start lg:justify-start">
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Months of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                  {"+"}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects
                  <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={6} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center justify-center md:justify-start">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
