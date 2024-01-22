"use client";
import {
  GraffitiText1,
  GraffitiText2,
  GraffitiText3,
  GraffitiText4,
} from "./components/GraffitiText/GraffitiText";

import { motion, useSpring, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 60,
    restDelta: 0.001,
  });

  const handleToSection2 = () => {
    const section = document.getElementById("section2");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="snap-y snap-mandatory">
      <motion.div className="progress-bar snap-none" style={{ scaleX }} />
      <motion.section
        id="section1"
        className="flex sm:flex-row max-sm:flex-col items-center justify-center p-24 gap-4 md:gap-8 snap-start"
        onClick={() => handleToSection2()}
        animate={{
          backgroundColor: "#0F0F0F",
        }}
        transition={{
          delay: 0.6,
          type: "fade",
          damping: 20,
          stiffness: 0.005,
        }}
      >
        <motion.h1
          className="text-xl leading-5 font-bold"
          animate={{
            scale: 1.2,
            color: "#FFFEFC",
          }}
          transition={{
            delay: 0.7,
            type: "fade",
            damping: 20,
          }}
        >
          Portfolio{" "}
        </motion.h1>
        <motion.h2
          className="text-xl leading-5 text-nowrap"
          animate={{
            scale: 1.2,
            color: "#FFFEFC",
          }}
          transition={{
            delay: 0.7,
            type: "fade",
            damping: 20,
          }}
        >
          by Stefano Frisoni
        </motion.h2>
      </motion.section>
      <section
        id="section2"
        className="flex flex-col items-center p-2 md:p-20 snap-start"
      >
        <div className="md:flex md:gap-16 md:self-center p-12 md:items-center -mt-8 md:-mt-2">
          <GraffitiText3
            className={
              "text-center text-[5.1rem] md:text-9xl text-[var(--text-white)] text-nowrap whitespace-nowrap"
            }
          >
            front-end
          </GraffitiText3>
          <GraffitiText1
            className={
              "text-center text-7xl md:text-9xl text-[var(--text-white)]"
            }
          >
            developer
          </GraffitiText1>
        </div>
        <div className="flex flex-col md:self-center p-8">
          <GraffitiText2
            className={
              "-mt-4 mb-2 md:mb-20 md:mt-0 text-3xl md:text-5xl text-[#FFFEFC] "
            }
          >
            basics:
          </GraffitiText2>
          <div className="self-center flex w-full flex-col md:flex-row md:gap-28">
            <GraffitiText1
              className={
                "self-start text-9xl md:text-[17rem] text-[#e34c26] md:hover:drop-shadow-[0px_0px_25px_rgba(240,101,41,1)]"
              }
            >
              html
            </GraffitiText1>
            <GraffitiText1
              className={
                "self-center text-9xl md:text-[17rem] text-[#264de4] md:hover:drop-shadow-[0px_0px_25px_rgba(41,101,241,1)]"
              }
            >
              css
            </GraffitiText1>
            <GraffitiText1
              className={
                "self-end text-9xl md:text-[17rem] text-[#F0DB4F] md:hover:drop-shadow-[0px_0px_25px_#F0DB4F]"
              }
            >
              js
            </GraffitiText1>
          </div>
        </div>
      </section>
    </main>
  );
}
