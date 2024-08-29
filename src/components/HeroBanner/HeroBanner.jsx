"use client";

import Image from "next/image";
import Link from "next/link";
import banner from "@/images/hero_banner.png";
import "./heroBanner.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroBanner = () => {
  const [width, setWidth] = useState(0);
  console.log("width", width);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    };
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  let Y;
    if (width > 1600) {
      Y = 220;
    } else if (width < 1600) {
      Y = 195;
    }

  return (
    <div className="hero_banner">
      <div className="banner_image">
        <Image src={banner} alt="banner" />
        <div className="banner_text">
          <div className="text_effect">
            <motion.div
              className="card"
              initial={{
                opacity: 1,
                y: Y,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              }}
              viewport={{ once: true }}
            >
              <h2>
                THE <br /> CROWN <br /> EXPERIENCE
              </h2>
            </motion.div>
          </div>

          {/* <p>
            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
            dolor Lorem ipsum dolor Lorem ipsum dolor
          </p> */}
          <div className="link">
            <Link href={"#"}>Let's Start</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
