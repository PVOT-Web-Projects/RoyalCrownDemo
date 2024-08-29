"use client";
import React from "react";
import "./timelinehome.scss";
import { motion } from "framer-motion";

const TimelineHome = () => {
  return (
    <div className="Timelinecontainer">
      <div className="Timelinecontainer1">
        <motion.div
          className="TimelinetextContainer1"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          We are known for providing high density laminates with unparalleled
          services in terms of quality and reliability. We are known for
          providing high density laminates with unparalleled services in terms
          of quality and reliability.
        </motion.div>
        <motion.div
          className="Timelinecircle1"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
      <div className="Timelinecontainer2">
        <motion.div
          className="Timelinecircle2"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
      <div className="TimelineContainer3">
        <motion.div
          className="TimelinetextContainer3"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 100, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <p className="TimeTextNewinner">
            {" "}
            We are known for providing high density laminates with unparalleled
            services in terms of quality and reliability. We are known for
            providing high density laminates with unparalleled services in terms
            of quality and reliability.
          </p>
        </motion.div>

        <motion.div
          className="Timelinecircle3"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </div>
  );
};

export default TimelineHome;
