"use client";
import Image from "next/image";
import "./productHero.scss";
import productImage from "../../images/productHero.jpg";
import scrollSvg from "../../images/svgLogos/mouse.svg";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect } from "react";
export default function ProductHero({scrollTo , goToSectionRef}) {
  useEffect(() => {
    const animateLine = () => {
      gsap.fromTo(
        "#scroll-line",
        { y: 5 },
        {
          y: 15,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          duration: 1.5,
        }
      );
    };

    animateLine();
  }, []);
  return (
    <>
      <div className="productHeroContainer">
        <div className="productHeroWrapper">
          <div className="productHeroSection1">
            <div className="heroSectionHeader">
              <motion.div
                className="section1header1"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Premium
              </motion.div>
              <motion.div
                className="section1header2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Perfecto
              </motion.div>
            </div>
            <motion.div
              className="heroSectionDescription"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Customers are at the heart of our unique business model. Royal
              Crown thrives at providing royal service to everyone. Our work is
              all about our customers and we believe their experience should be
              worth.
            </motion.div>
          </div>
          <motion.div
            className="productHeroSection2"
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <div>
              <Image src={productImage} alt="" className="productHeroImage" />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="productHeroFooter"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 5 }}
          viewport={{ once: true }}
          onClick={() => scrollTo(goToSectionRef)}
        >
          <svg
            height={50}
            width={50}
            className="nectar-scroll-icon"
            viewBox="0 0 30 45"
          >
            <path
              className="nectar-scroll-icon-path"
              fill="none"
              stroke="#5B3524"
              strokeWidth="2"
              strokeMiterlimit="10"
              d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"
            ></path>
            <line
              id="scroll-line"
              x1="15"
              y1="10"
              x2="15"
              y2="20"
              stroke="#5B3524"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </div>
    </>
  );
}
