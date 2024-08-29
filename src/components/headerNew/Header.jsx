"use client";

import Link from "next/link";
import logo from "@/images/svgLogos/FinalHeaderLogo.svg";
import logo1 from "@/images/svgLogos/white_logo.svg";
import logo2 from "@/images/svgLogos/header_crown_logo.svg";
import logo3 from "@/images/crown_white.png";
import HoverImgDefault from "@/images/decorative3.png"; // Default image
import HoverImgDefault1 from "@/images/decorative1.png"; // Default image
import HoverImg1 from "@/images/decorative1.png";
import HoverImg2 from "@/images/decorative2.png";
import HoverImg3 from "@/images/decorative3.png";
import HoverImg4 from "@/images/decorative1.png";
import "./header.scss";
import Image from "next/image";
import LinkHover from "../linkHover/LinkHover";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PageTransition from "../pageTransition/PageTransition";

const Header = () => {
  const [isHome, setIsHome] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubmenuItem, setHoveredSubmenuItem] = useState(null);
  const [hoveredSubSubmenuItem, setHoveredSubSubmenuItem] = useState(null); // State for sub-submenu


  const pathname = usePathname();
  console.log("url", isHome);
  useEffect(() => {
    if (pathname === "/") setIsHome(true);
    else setIsHome(false);
  }, [pathname]);

  const getSubmenuImage = () => {
    switch (hoveredSubmenuItem) {
      case "submenu1":
        return HoverImg1;
      case "submenu2":
        return HoverImg2;
      case "submenu3":
        return HoverImg3;
      case "submenu4":
        return HoverImg4;
      case "submenu5":
        return HoverImg1;
      case "submenu6":
        return HoverImg2;
      default:
        return HoverImgDefault; // Default image
    }
  };
  const getSubmenuImageAbout = () => {
    switch (hoveredSubmenuItem) {
      case "submenu1":
        return HoverImg1;
      case "submenu2":
        return HoverImg1;
      case "submenu3":
        return HoverImg4;
      case "submenu4":
        return HoverImg3;
      case "submenu5":
        return HoverImg2;
      case "submenu6":
        return HoverImg1;
      default:
        return HoverImgDefault1; // Default image
    }
  };

  const getSubSubmenuImage = () => {
    switch (hoveredSubSubmenuItem) {
      case "sub-submenu1":
        return HoverImg1;
      case "sub-submenu2":
        return HoverImg4;
      case "sub-submenu3":
        return HoverImg3;
      case "sub-submenu4":
        return HoverImg2;
      default:
        return HoverImgDefault;
    }
  };
  const getSubSubmenuImage1 = () => {
    switch (hoveredSubSubmenuItem) {
      case "sub-submenu1":
        return HoverImg3;
      case "sub-submenu2":
        return HoverImg4;
      case "sub-submenu3":
        return HoverImg3;
      case "sub-submenu4":
        return HoverImg2;
      default:
        return HoverImgDefault;
    }
  };
  const getSubSubmenuImage3 = () => {
    switch (hoveredSubSubmenuItem) {
      case "sub-submenu1":
        return HoverImg1;
      case "sub-submenu2":
        return HoverImg3;
      case "sub-submenu3":
        return HoverImg1;
      case "sub-submenu4":
        return HoverImg3;
      default:
        return HoverImgDefault;
    }
  };

  return (
    <header>
      <nav>
        <ul className={isHome ? "dark" : "light"}>
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            }}
            viewport={{ once: true }}
            onMouseEnter={() =>{ 
              setHoveredItem("products")
              setHoveredSubmenuItem("submenu1");
              setHoveredSubSubmenuItem("sub-submenu1");
            }}
            onMouseLeave={() => {
              setHoveredItem(null);
              setHoveredSubmenuItem(null); // Clear submenu hover state when leaving main item
              setHoveredSubmenuItem(null);
            }}
          >
            <LinkHover
              url={"/products"}
              text={"Products"}
              fontSize={"16px"}
              isHomePage={isHome}
            />
            {hoveredItem === "products" && (
              <motion.div
                className="ProductsLi"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                // className="ProductsLi"
              >
                <motion.ul
                >
                  <li
                    // onMouseEnter={() => setHoveredSubmenuItem("submenu1")}
                    
                    // onMouseLeave={() => setHoveredSubmenuItem(null)}
                  >
                    <Link href="/products/sub-item-1">Product-Item 1</Link>
                    {hoveredSubmenuItem === "submenu1" && (
                      <motion.div
                         className="ProductsLi1"
                        // initial={{ opacity: 0, y: -10 }}
                        // animate={{ opacity: 1, y: 0 }}
                        // exit={{ opacity: 0, y: -10 }}
                        // transition={{ duration: 0.5 }}
                      >
                        <ul>
                          <li
                            onMouseEnter={() =>
                              setHoveredSubSubmenuItem("sub-submenu1")
                            }
                            // onMouseLeave={() =>
                            //   setHoveredSubSubmenuItem(null)
                            // }
                          >
                            <Link href="#">Sub-Item 1</Link>
                          </li>
                          <li
                            onMouseEnter={() =>
                              setHoveredSubSubmenuItem("sub-submenu2")
                            }
                            // onMouseLeave={() =>
                            //   setHoveredSubSubmenuItem(null)
                            // }
                          >
                            <Link href="#">Sub-Item 2</Link>
                          </li>
                          <li
                            onMouseEnter={() =>
                              setHoveredSubSubmenuItem("sub-submenu3")
                            }
                            // onMouseLeave={() =>
                            //   setHoveredSubSubmenuItem(null)
                            // }
                          >
                            <Link href="#">Sub-Item 3</Link>
                          </li>
                          <li
                            onMouseEnter={() =>
                              setHoveredSubSubmenuItem("sub-submenu4")
                            }
                            // onMouseLeave={() =>
                            //   setHoveredSubSubmenuItem(null)
                            // }
                          >
                            <Link href="#">Sub-Item 4</Link>
                          </li>
                        </ul>
                        <motion.div
                          className="sub-submenu-image"
                          // initial={{ opacity: 0 }}
                          // animate={{ opacity: 1 }}
                          // exit={{ opacity: 0 }}
                          // transition={{ duration: 0.3 }}
                        >
                          <Image src={getSubSubmenuImage()} alt="Submenu Image"  />
                        </motion.div>
                      </motion.div>
                    )}
                  </li>
                  <li
                    onMouseEnter={() => setHoveredSubmenuItem("submenu2")}
                    // onMouseLeave={() => setHoveredSubmenuItem(null)}
                  >
                    <Link href="/products/sub-item-2">Product-Item 2</Link>
                    {hoveredSubmenuItem === "submenu2" && (
                      <motion.div
                         className="ProductsLi1"
                        // initial={{ opacity: 0, y: -10 }}
                        // animate={{ opacity: 1, y: 0 }}
                        // exit={{ opacity: 0, y: -10 }}
                        // transition={{ duration: 0.5 }}
                      >
                        <ul>
                          <li
                            onMouseEnter={() =>
                              setHoveredSubSubmenuItem("sub-submenu1")
                            }
                            // onMouseLeave={() =>
                            //   setHoveredSubSubmenuItem(null)
                            // }
                          >
                            <Link href="#">Sub-Item 11</Link>
                          </li>
                          <li
                            onMouseEnter={() =>
                              setHoveredSubSubmenuItem("sub-submenu2")
                            }
                            // onMouseLeave={() =>
                            //   setHoveredSubSubmenuItem(null)
                            // }
                          >
                            <Link href="#">Sub-Item 12</Link>
                          </li>
                          <li
                            onMouseEnter={() =>
                              setHoveredSubSubmenuItem("sub-submenu3")
                            }
                            // onMouseLeave={() =>
                            //   setHoveredSubSubmenuItem(null)
                            // }
                          >
                            <Link href="#">Sub-Item 13</Link>
                          </li>
                          <li
                            onMouseEnter={() =>
                              setHoveredSubSubmenuItem("sub-submenu4")
                            }
                            // onMouseLeave={() =>
                            //   setHoveredSubSubmenuItem(null)
                            // }
                          >
                            <Link href="#">Sub-Item 14</Link>
                          </li>
                        </ul>
                        <motion.div
                          className="sub-submenu-image"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image src={getSubSubmenuImage1()} alt="Submenu Image"  />
                        </motion.div>
                      </motion.div>
                    )}
                  </li>
                  <li
                    onMouseEnter={() => setHoveredSubmenuItem("submenu3")}
                    // onMouseLeave={() => setHoveredSubmenuItem(null)}
                  >
                    <Link href="/products/sub-item-3">Product-Item 3</Link>
                    {hoveredSubmenuItem === "submenu3" && (
                      <motion.div
                         className="ProductsLi1"
                        // initial={{ opacity: 0, y: -10 }}
                        // animate={{ opacity: 1, y: 0 }}
                        // exit={{ opacity: 0, y: -10 }}
                        // transition={{ duration: 0.5 }}
                      >
                        <ul>
                          <li
                            onMouseEnter={() =>
                              setHoveredSubSubmenuItem("sub-submenu1")
                            }
                            // onMouseLeave={() =>
                            //   setHoveredSubSubmenuItem(null)
                            // }
                          >
                            <Link href="#">Sub-Item 21</Link>
                          </li>
                          <li
                            onMouseEnter={() =>
                              setHoveredSubSubmenuItem("sub-submenu2")
                            }
                            // onMouseLeave={() =>
                            //   setHoveredSubSubmenuItem(null)
                            // }
                          >
                            <Link href="#">Sub-Item 22</Link>
                          </li>
                          <li
                            onMouseEnter={() =>
                              setHoveredSubSubmenuItem("sub-submenu3")
                            }
                            // onMouseLeave={() =>
                            //   setHoveredSubSubmenuItem(null)
                            // }
                          >
                            <Link href="#">Sub-Item 23</Link>
                          </li> 
                          <li
                            onMouseEnter={() =>
                              setHoveredSubSubmenuItem("sub-submenu4")
                            }
                            // onMouseLeave={() =>
                            //   setHoveredSubSubmenuItem(null)
                            // }
                          >
                            <Link href="#">Sub-Item 24</Link>
                          </li>
                        </ul>
                        <motion.div
                          className="sub-submenu-image"
                          // initial={{ opacity: 0 }}
                          // animate={{ opacity: 1 }}
                          // exit={{ opacity: 0 }}
                          // transition={{ duration: 0.3 }}
                        >
                          <Image src={getSubSubmenuImage3()} alt="Submenu Image"  />
                        </motion.div>
                      </motion.div>
                    )}
                  </li>
                  <li
                    onMouseEnter={() => setHoveredSubmenuItem("submenu4")}
                    onMouseLeave={() => setHoveredSubmenuItem(null)}
                  >
                    <Link href="/products/sub-item-4">Product-Item 4</Link>
                  </li>
                  <li
                    onMouseEnter={() => setHoveredSubmenuItem("submenu5")}
                    onMouseLeave={() => setHoveredSubmenuItem(null)}
                  >
                    <Link href="/products/sub-item-5">Product-Item 5</Link>
                  </li>
                  <li
                    onMouseEnter={() => setHoveredSubmenuItem("submenu6")}
                    onMouseLeave={() => setHoveredSubmenuItem(null)}
                  >
                    <Link href="/products/sub-item-6">Product-Item 6</Link>
                  </li>
                </motion.ul>
                {/* Conditional image rendering based on hovered submenu */}
                {/* <div className="submenu-image">
                  {hoveredSubmenuItem === "submenu1" && (
                    <Image src={HoverImg1} alt="Submenu 1 Image" />
                  )}
                  {hoveredSubmenuItem === "submenu2" && (
                    <Image src={HoverImg2} alt="Submenu 2 Image" />
                  )}
                  {hoveredSubmenuItem === "submenu3" && (
                    <Image src={HoverImg3} alt="Submenu 3 Image" />
                  )}
                  {hoveredSubmenuItem === "submenu4" && (
                    <Image src={HoverImg4} alt="Submenu 3 Image" />
                  )}
                  {hoveredSubmenuItem === "submenu5" && (
                    <Image src={HoverImg1} alt="Submenu 3 Image" />
                  )}
                  {hoveredSubmenuItem === "submenu6" && (
                    <Image src={HoverImg2} alt="Submenu 3 Image" />
                  )}
                </div> */}
                <motion.div
                  className="submenu-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src={getSubmenuImage()} alt="Submenu Image" />
                </motion.div>
              </motion.div>
            )}
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.8,
              },
            }}
            viewport={{ once: true }}
            onMouseEnter={() =>{
              setHoveredItem("about")
              setHoveredSubmenuItem("submenu1");
              setHoveredSubSubmenuItem("sub-submenu1");
            }}
            onMouseLeave={() => {
              setHoveredItem(null);
              setHoveredSubmenuItem(null); // Clear submenu hover state when leaving main item
              setHoveredSubmenuItem(null);
            }}
          >
            <LinkHover
              url={"/about-us"}
              text={"About Us"}
              fontSize={"16px"}
              isHomePage={isHome}
            />
          </motion.li>
          {/* <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.2,
              },
            }}
            viewport={{ once: true }}
          >
            <LinkHover url={"#"} text={"What's New"} fontSize={"16px"} isHomePage={isHome}/>
          </motion.li> */}
        </ul>
        <motion.div
          className="logo"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.2,
            },
          }}
          viewport={{ once: true }}
        >
          <PageTransition href={"/"}>
            {isHome ? (
              <Image src={logo} alt="header_logo" />
            ) : (
              <Image src={logo} alt="header_logo" />
            )}
          </PageTransition>
        </motion.div>
        <ul className={isHome ? "dark" : "light"}>
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.6,
              },
            }}
            viewport={{ once: true }}
          >
            <LinkHover
              url={"/products"}
              text={"Catalogue"}
              fontSize={"16px"}
              isHomePage={isHome}
            />
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 2,
              },
            }}
            viewport={{ once: true }}
          >
            <LinkHover
              url={"#"}
              text={"Contact Us"}
              fontSize={"16px"}
              isHomePage={isHome}
            />
          </motion.li>
          {/* <div className="side_logo"> */}
          {/* {isHome ? (
              <Image src={logo2} alt="header_crown_logo" />
            ) : (
              <Image src={logo3} alt="header_crown_logo" />
            )} */}
          {/* </div> */}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
