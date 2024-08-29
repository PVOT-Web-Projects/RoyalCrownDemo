"use client"
import "./style.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Body from "./Body";
import Footer from "./Footer";
import image1 from "../../../images/certi1.png";
import image2 from "../../../images/certi1.png";
import NavImage from "./Image";
import PropTypes from "prop-types";

const links = [
  {
    title: "Home",
    href: "/PVOT",
    src: image1,
  },
  {
    title: "Services",
    href: "/PVOT/services",
    src: image2,
  },
  {
    title: "Know-us",
    href: "/PVOT/knowUs",
    src: image1,
  },
  {
    title: "Portfolio",
    href: "/PVOT/portfolio",
    src: image2,
  },
  {
    title: "Blogs",
    href: "/PVOT/blog",
    src: image1,
  },
  {
    title: "Career",
    href: "/PVOT/career",
    src: image2,
  },
  {
    title: "Contact-us",
    href: "/PVOT/contact-us",
    src: image1,
  },
];

export default function NavSection({ navLinkHandler }) {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      // variants={height}
      style={{ height: "100vh", overflow: "hidden" }}
      initial="initial"
      animate="enter"
      exit="exit"
      className="new_nav"
    >
      <div className="wrapper">
        <div className="container_navbar">
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            handleNavLink={navLinkHandler}
          />
          <Footer />
        </div>
        <NavImage
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
}
NavSection.propTypes = {
  navLinkHandler: PropTypes.func,
};
