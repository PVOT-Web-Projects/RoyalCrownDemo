"use client"
import "./style1.css";
import Link from "next/link";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity } from "./anim";
import NavSection from "./nav/index";
import logoImage from "../../images/svgLogos/header_crown_logo.svg";

export default function NewNav() {
  const [isActive, setIsActive] = useState(false);
  // const [toggle, setToggle] = useState(false);

  const handleNavLink = () => {
    setIsActive(!isActive);
  };
  // const handleToggle = () => {
  //   setToggle(!toggle);
  // };
  // if (toggle) {
  //   document.body.classList.add("mobile_menu_open");
  // } else {
  //   document.body.classList.remove("mobile_menu_open");
  // }

  return (
    <div className="header_sec">
      <div className="bar">
        <Link
          className="nav_icon_custom"
          href="/PVOT"
          // onClick={() => {
          //   if (isActive) {
          //     setIsActive(!isActive);
          //   }
          // }}
        >
          <img src={logoImage} alt="logoImage" />
        </Link>
        <div
          onClick={() => {
            setIsActive(!isActive);
            // handleToggle();
          }}
          className="new_header_el"
        >
          <div
            className={`${"burger"} ${isActive ? "burgerActive" : ""}`}
          ></div>
          <div className="label">
            <motion.p
              className="menu_names"
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p
              className="menu_names"
              variants={opacity}
              animate={isActive ? "open" : "closed"}
            >
              Close
            </motion.p>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <NavSection navLinkHandler={handleNavLink} />}
      </AnimatePresence>
    </div>
  );
}
