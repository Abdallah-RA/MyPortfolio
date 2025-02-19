"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles"; 
import { SVGProps } from "react";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Research & Architectural Planning"
          icon={<AceternityIcon order="Phase 1" />}
          des="I start by analyzing system requirements, exploring design trade-offs, and defining the architectural blueprint."
        >
          {/* ✅ Add SparklesCore for Particle Effect */}
          <SparklesCore
            background="transparent"
            particleColor="#FFB703"
            particleDensity={80}
            minSize={1}
            maxSize={3}
            speed={2}
            className="absolute inset-0"
          />
        </Card>
        <Card
          title="Development & Optimization"
          icon={<AceternityIcon order="Phase 2" />}
          des="I implement, test, and refine solutions using cutting-edge techniques in AI, hardware design, and software development."
        >
          <SparklesCore
            background="transparent"
            particleColor="#E63946"
            particleDensity={90}
            minSize={1}
            maxSize={3}
            speed={3}
            className="absolute inset-0"
          />
        </Card>
        <Card
          title="Testing, Verification & Deployment"
          icon={<AceternityIcon order="Phase 3" />}
          des="I rigorously test and verify designs using UVM environments, AI benchmarks, and hardware simulations."
        >
          <SparklesCore
            background="transparent"
            particleColor="#3A86FF"
            particleDensity={100}
            minSize={1}
            maxSize={4}
            speed={2}
            className="absolute inset-0"
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;


const Card = ({
    title,
    icon,
    children,
    des,
  }: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    des: string;
  }) => {
    const [hovered, setHovered] = React.useState(false);
  
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-black/[0.2] group/canvas-card flex items-center justify-center
         dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl overflow-hidden"
        style={{
          background: "rgb(4,7,29)",
          backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        {/* ✅ Particle effect added dynamically via children */}
        {children}
  
        {/* Icons for decoration */}
        <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
        <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
        <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
        <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />
  
        {/* Hover Effect */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
  
        {/* Card Content */}
        <div className="relative z-20 px-10">
          <div
            className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
            group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
          >
            {icon}
          </div>
          <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
           relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
           group-hover/canvas-card:-translate-y-2 transition duration-200"
          >
            {title}
          </h2>
          <p className="text-sm opacity-0 group-hover/canvas-card:opacity-100
           relative z-10 mt-4 group-hover/canvas-card:text-white text-center
           group-hover/canvas-card:-translate-y-2 transition duration-200"
            style={{ color: "#E4ECFF" }}
          >
            {des}
          </p>
        </div>
      </div>
    );
  };
  
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button
    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  );
};

export const Icon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};