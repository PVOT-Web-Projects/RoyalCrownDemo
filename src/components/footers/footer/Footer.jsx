"use client";

import "./footer.scss";
import LinkHover from "../../linkHover/LinkHover";
import { usePathname } from "next/navigation";
import Image from "next/image";
import border from "@/images/svgLogos/yellow_footer_border.svg";
const footerUrls = [
  {
    url1: "/about-us",
    url1Text: "About",
    url2: "#",
    url2Text: "Annual Return",
  },
  {
    url1: "#",
    url1Text: "Corporate Social Responsibility",
    url2: "#",
    url2Text: "Vigil Mechanism Policy",
  },
  {
    url1: "#",
    url1Text: "Career",
    url2: "#",
    url2Text: "Privacy Policy",
  },
  {
    url1: "#",
    url1Text: "Copyright 2024",
    url2: "#",
    url2Text: "Royal Crown Laminates",
  },
  {
    url1: "tel:9904990400",
    url1Text: "+91 9904990400",
    url2: "mailto:info@royalcrown.com",
    url2Text: "info@royalcrown.com",
  },
];

const Footer = () => {
  const pathname = usePathname();
  console.log("url", pathname);
  return (
    (pathname === "/" || pathname === "/store") && (
      <footer>
        <nav>
          {footerUrls.map((item, index) => (
            <ul key={index}>
              <li>
                <LinkHover
                  url={item.url1}
                  text={item.url1Text}
                  color={"#fff"}
                  borderColor={"white"}
                  fontSize={"16px"}
                  HoverBtn={"rgb(254, 197, 84)"}
                />
              </li>
              <li key={index}>
                <LinkHover
                  url={item.url2}
                  text={item.url2Text}
                  color={"#fff"}
                  borderColor={"white"}
                  fontSize={"16px"}
                  HoverBtn={"rgb(254, 197, 84)"}
                />
              </li>
            </ul>
          ))}
        </nav>
        <div>
        <Image src={border} alt="border" className="FooteriMg"/>
        <div className="copyright">© 2024 All Rights Reserved</div>
        </div>
      </footer>
    )
  );
};
export default Footer;
