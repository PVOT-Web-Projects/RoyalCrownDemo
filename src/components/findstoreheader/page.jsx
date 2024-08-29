"use client"
import gsap from "gsap";
// import Image from "next/image";
// import ClaimImage1 from "@/images/claim_banner.png"
import "./privacyPolicy.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";
const FindStoreHeader = ({scrollTo , goToSectionRef}) => {
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
    <div className="PrivacyMainHeader">
      <div className="PrivacyMainHeaderInner">
        {/* <Image src={ClaimImage1} alt="Claim Banner" className="ClaimBannerImg"/> */}
        <div className="PrivacyMainHeaderInnerText">
        <motion.div
                className="PrivacyMainHeaderInnerTextinner"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                 Store Locator
                </motion.div>
          {/* <p >Privacy Policy</p> */}
         <div className="TextCommitInner">
         <p>
         Find your nearest store with ease. Locate and visit us today!
          </p>
         </div>
        </div>
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
  );
};
export default FindStoreHeader;
