"use client";
import Image from "next/image";
import "./aboutUsImage.scss";
// import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image1 from "../../images/image 73.jpg";
import Image2 from "../../images/image 72.jpg";
import Image3 from "../../images/image 15.jpg";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHeroImage() {
 

  return (
    <div className="aboutUsImageContainerSection">
        <div className="aboutUsImageContainer">
          <div className="aboutUsImageContainerInner">
            <div className="aboutUsHeroImage1">
              <Image src={Image1} alt="" className="heroImage" />
            </div>
            <div className="aboutUsHeroImage2">
              <Image src={Image2} alt="" className="heroImage" />
            </div>
            <div className="aboutUsHeroImage3">
              <Image src={Image3} alt="" className="heroImage" />
            </div>
          </div>
        </div>
      </div>
  );
}
