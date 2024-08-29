import React from "react";
import Image from "next/image";
import Footer_img from "@/images/white_logo.png";
import facebookIcon from "@/images/FacebookIcon.svg";
import instagramIcon from "@/images/InstaIcon.svg";
import youtubeIcon from "@/images/YoutubeIcon.svg";
import whatsappIcon from "@/images/WhatsappIcon.svg";
import linkedinIcon from "@/images/LinkedinIcon.svg";
import "./socialpage.scss";
const SocialPage = ({ socialMediaImgSrc }) => {
  const icons = [
    { src: facebookIcon, alt: "Facebook", link: "https://www.facebook.com/royalcrownlaminates/" },
    { src: instagramIcon, alt: "Instagram", link: "https://www.instagram.com/royalcrownlaminates/" },
    { src: youtubeIcon, alt: "YouTube", link: "https://www.youtube.com" },
    
    { src: linkedinIcon, alt: "LinkedIn", link: "https://www.linkedin.com" },
    { src: whatsappIcon, alt: "WhatsApp", link: "https://www.whatsapp.com" },
  ];
  return (
    <div className="socialPage">
      <div className="Footer_Logo">
        {/* <Image src={Footer_img} alt="Image" className="FooterImg" /> */}
      </div>
      <div className="SocialMediaImg">
        <Image src={socialMediaImgSrc} alt="Image" className="SocialImg" />
      </div>
      {/* <div className="SocialMediaMain">
        {icons.map((item, index) => (
          <div className="SocialIcons" key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="Link"
            >
              <Image src={item.src} alt={item.alt} className="ImageIconSvg" />
            </a>
          </div>
        ))}
      </div> */}
    </div>
  );
};
export default SocialPage;
