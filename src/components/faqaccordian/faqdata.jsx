"use client";
import React, { useState } from "react";
import AccordionItem from "./page";
import styles from "./accordian.module.css";
import YellowButton from "../buttons/yellowButton/YellowButton";
import { motion } from "framer-motion";

const faqs = [
  {
    id: 1,
    header: "What is luxury lamination?",
    text: `Luxury lamination is ideal for important documents and certificates as it provides protection, durability, and an enhanced, professional appearance.`,
  },
  {
    id: 2,
    header:
      "What are the benefits of luxury lamination compared to standard lamination?",
    text: `Luxury lamination is ideal for important documents and certificates as it provides protection, durability, and an enhanced, professional appearance.`,
  },
  {
    id: 3,
    header: "What types of finishes are available for luxury lamination?",
    text: `Luxury lamination is ideal for important documents and certificates as it provides protection, durability, and an enhanced, professional appearance. `,
  },
  {
    id: 4,
    header:
      "Is luxury lamination suitable for important documents and certificates?",
    text: `Luxury lamination is ideal for important documents and certificates as it provides protection, durability, and an enhanced, professional appearance.`,
  },
  {
    id: 5,
    header:
      "Does luxury lamination preserve the quality and color of photographs?",
    text: `Luxury lamination is ideal for important documents and certificates as it provides protection, durability, and an enhanced, professional appearance.`,
  },
  {
    id: 6,
    header:
      "Can I choose different lamination styles for different parts of a single item?",
    text: `Luxury lamination is ideal for important documents and certificates as it provides protection, durability, and an enhanced, professional appearance.`,
  },
  {
    id: 7,
    header: "How do you determine the cost of a lamination project?",
    text: `Luxury lamination is ideal for important documents and certificates as it provides protection, durability, and an enhanced, professional appearance.`,
  },
  {
    id: 8,
    header: "Shipping and Delivery",
    text: `Luxury lamination is ideal for important documents and certificates as it provides protection, durability, and an enhanced, professional appearance.`,
  },
  {
    id: 9,
    header: "Do you offer nationwide and international shipping?",
    text: `Luxury lamination is ideal for important documents and certificates as it provides protection, durability, and an enhanced, professional appearance.`,
  },
];

const FaqData = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (id) => {
    setActive((prevActive) => (prevActive === id ? null : id));
  };

  return (
    <div className={styles.containerFluid}>
      <div>
        <div className={styles.FaqText}>
          <motion.div   initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
            <p className={styles.FaqsInner}>Frequently Asked Questions</p>
          </motion.div>
          <div className={styles.FaqsTextOuterText}>
            <p className={styles.FaqsTextInner}>
              Our furniture collections are meticulously designed to elevate
              your living spaces.
            </p>
          </div>
          {/* <div className={styles.buttonOuterFaq}>
                  <YellowButton btn_text={"Get in Touch"} url={"/"}/>
                </div> */}
        </div>
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            active={active}
            handleToggle={handleToggle}
            faq={faq}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqData;
