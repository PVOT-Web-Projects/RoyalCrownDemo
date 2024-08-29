"use client";
import React from "react";
import "./blogs.scss";
import { motion } from "framer-motion";
const BlogsPage = ({ text, description , scrollTo , goToSectionRef}) => {

  return (
    <div className="BlogsMainContainer">
      <div className="BlogsMainInner">
        <p className="TitleBlogs">{text}</p>
        <div>
          <p className="DescriptionBlogs">{description}</p>
        </div>
      </div>
      {/* <motion.div
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
        </motion.div> */}
    </div>
  );
};

const Blogs = () => {
  return (
    <div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <BlogsPage
          text="Blogs"
          description="Our furniture collections are meticulously designed to elevate your living spaces."
        />
      </motion.div>
      
    </div>
  );
};
export default Blogs;
