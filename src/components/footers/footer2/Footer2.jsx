"use client";

import Form3 from "@/components/forms/form3/Form3";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/svgLogos/FinalHeaderLogo.svg";
import "./footer2.scss";
import LinkHover from "@/components/linkHover/LinkHover";
import telIcon from "@/images/svgLogos/phone_icon.svg";
import mailIcon from "@/images/svgLogos/mail_icon.svg";
import fb from "@/images/svgLogos/facebook.svg";
import ig from "@/images/svgLogos/insta.svg";
import yt from "@/images/svgLogos/youtube.svg";
import wa from "@/images/svgLogos/whatsapp.svg";
import li from "@/images/svgLogos/Linkedin.svg";
import PageTransition from "@/components/pageTransition/PageTransition";
import border from "@/images/svgLogos/FooterBorder.svg";
import { usePathname } from "next/navigation";

const Footer2 = ({ bgColor }) => {
  const pathname = usePathname();
  console.log("path", pathname);
  // return pathname === "/" || pathname === "/store" ? null : (
  return(
    <footer className="footer2" style={{ backgroundColor: bgColor }}>
      <div className="wrapper">
        <div className="left">
          <div className="left_wrapper">
          <PageTransition href={"/"}>
                <Image src={logo} alt="logo"/>
              </PageTransition>
            <div className="footer_logo">
             <Form3 />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right_wrapper">
            <div className="top">
              <div className="col col1">
                <div className="title">Company</div>
                <ul>
                  <li>
                    <LinkHover
                      url={"/about-us"}
                      text={"About Us"}
                      color={"#000"}
                      borderColor={"white"}
                      fontSize={"18px"}
                      textTransform={"capitalize"}
                      HoverBtn={"#5b3524"}
                    />
                  </li>
                  {/* <li>
                    <LinkHover
                      url={"/"}
                      text={"Annual Return"}
                      color={"#000"}
                      borderColor={"white"}
                      fontSize={"18px"}
                      textTransform={"capitalize"}
                      HoverBtn={"#5b3524"}
                    />
                  </li> */}
                  <li>
                    <LinkHover
                      url={"/corporate-social-responsibility"}
                      text={"Corporate Social Responsibility"}
                      color={"#000"}
                      borderColor={"white"}
                      fontSize={"18px"}
                      textTransform={"capitalize"}
                      HoverBtn={"#5b3524"}
                    />
                  </li>
                  <li>
                    <LinkHover
                      url={"/vigil-mechanism-policy"}
                      text={"Vigil Mechanism Policy"}
                      color={"#000"}
                      borderColor={"white"}
                      fontSize={"18px"}
                      textTransform={"capitalize"}
                      HoverBtn={"#5b3524"}
                    />
                  </li>
                </ul>
              </div>
              <div className="col col2">
                <div className="title">Resources</div>
                <ul>
                  <li>
                    <LinkHover
                      url={"/"}
                      text={"Gallery"}
                      color={"#000"}
                      borderColor={"white"}
                      fontSize={"18px"}
                      textTransform={"capitalize"}
                      HoverBtn={"#5b3524"}
                    />
                  </li>
                  <li>
                    <LinkHover
                      url={"/find-store"}
                      text={"Store locator"}
                      color={"#000"}
                      borderColor={"white"}
                      fontSize={"18px"}
                      textTransform={"capitalize"}
                      HoverBtn={"#5b3524"}
                    />
                  </li>
                  <li>
                    <LinkHover
                      url={"/products"}
                      text={"Catalogue"}
                      color={"#000"}
                      borderColor={"white"}
                      fontSize={"18px"}
                      textTransform={"capitalize"}
                      HoverBtn={"#5b3524"}
                    />
                  </li>
                  <li>
                    <LinkHover
                      url={"/blogs"}
                      text={"Blogs"}
                      color={"#000"}
                      borderColor={"white"}
                      fontSize={"18px"}
                      textTransform={"capitalize"}
                      HoverBtn={"#5b3524"}
                    />
                  </li>
                </ul>
              </div>
              <div className="col col3">
                <div className="title">Use cases </div>
                <ul>
                  <li>
                    <LinkHover
                      url={"/faqs"}
                      text={"FAQs"}
                      color={"#000"}
                      borderColor={"white"}
                      fontSize={"18px"}
                      textTransform={"capitalize"}
                      HoverBtn={"#5b3524"}
                    />
                  </li>
                  <li>
                    <LinkHover
                      url={"/careers"}
                      text={"Career"}
                      color={"#000"}
                      borderColor={"white"}
                      fontSize={"18px"}
                      textTransform={"capitalize"}
                      HoverBtn={"#5b3524"}
                    />
                  </li>
                  <li>
                    <LinkHover
                      url={"/privacy-policy"}
                      text={"Privacy Policy"}
                      color={"#000"}
                      borderColor={"white"}
                      fontSize={"18px"}
                      textTransform={"capitalize"}
                      HoverBtn={"#5b3524"}
                    />
                  </li>
                </ul>
              </div>
              <div className="col col4">
                <div className="box">
                  <Link href={"tel:9904990400"}>
                    <Image src={telIcon} alt="" /> <span>+91 9904990400</span>
                  </Link>
                </div>
                <div className="box">
                  <Link href={"mailto:info@royalcrown.com"}>
                    <Image src={mailIcon} alt="" />{" "}
                    <span>info@royalcrown.com</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bottom">
              <ul>
                <li>
                  <Link href={"https://www.facebook.com/royalcrownlaminates/"} target="_blank">
                    <Image src={fb} alt="fb" /> <span>Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.instagram.com/royalcrownlaminates/"} target="_blank">
                    <Image src={ig} alt="ig" /> <span>Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.youtube.com/"} target="_blank">
                    <Image src={yt} alt="yt" /> <span>Youtube</span>
                  </Link>
                </li>
                <li>
                  <Link href={"https://in.linkedin.com/"} target="_blank">
                    <Image src={li} alt="li" /> <span>Linkedin</span>
                    {/* <LinkHover url={"https://in.linkedin.com/"} text={"Linkedin"} fontSize={"16"} color={"white"} textTransform={"capitalize"} /> */}
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.whatsapp.com/"} target="_blank">
                    <Image src={wa} alt="wa"/> <span>WhatsApp</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Image src={border} alt="border" className="ImageBorder"/>
      <div className="copyright">© 2024 All Rights Reserved</div>
    </footer>
  );
};
export default Footer2;
