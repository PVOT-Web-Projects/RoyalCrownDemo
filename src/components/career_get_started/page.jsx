"use client";
import { motion } from "framer-motion";
import React from "react";
import "./getstarted.scss";
const CareerGetStarted = () => {
  return (
    <div className="GetStartedSection">
      <motion.div
        className="GetStartedFirstHeader"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="TextFirst">GET STARTED</p>
      </motion.div>
      <div className="TextSecond">
        <p className="TextSecondInner">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p className="TextSecondInnerFirst">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="YellowTextOuter">
        <p className="YellowTextInner">
          Locking for Flexible Work ? Get Started Here{" > "}
        </p>
      </div>
    </div>
  );
};
export default CareerGetStarted;
