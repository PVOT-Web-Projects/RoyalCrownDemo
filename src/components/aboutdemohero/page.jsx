"use client";
import Image from "next/image";
import Image1 from "../../images/image 73.jpg";
import Image2 from "../../images/productHero.jpg";
import Image4 from "../../images/image_15_small.jpg";
import "./aboutdemo.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsDemo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section,
      { opacity: 1, scale: 1 , y: 0},
      {
        y : -200,
        scrollTrigger: {
          trigger: section,
          start: "20% 60%",
          end: "bottom 20%",
          scrub: 3,
          // markers: true,
        },
        opacity: 0.5,
        scale: 0.5,
        ease: "power1.inOut",
        duration: 1000,
      }
    );
  }, []);

  return (
    <div className="AboutusContainer">
      <div className="AbousUsSection" ref={sectionRef}>
        <motion.div
          initial={{ y: 500, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{once : true}}
          className="AbousUsTextContainerOuter"
        >
          <div className="AbousUsTextContainer">
            <p>ABOUT</p>
            <p>Royal Crown</p>
          </div>
          <div className="AbousUsImagesContainer">
            <motion.div
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="AbousUsTextImage"
              viewport={{once : true}}
            >
              <Image src={Image1} alt="none" />
            </motion.div>
            <motion.div
              initial={{ y: 140, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.6 }}
              className="AbousUsTextImage1"
              viewport={{once : true}}
            >
              <Image src={Image2} alt="none" />
            </motion.div>
            <motion.div
              initial={{ y: 220, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3, delay: 0.8 }}
              className="AbousUsTextImage3"
              viewport={{once : true}}
            >
              <Image src={Image4} alt="none" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
