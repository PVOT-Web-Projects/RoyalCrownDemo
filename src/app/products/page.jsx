"use client";
import ProductHero from "@/components/productHero/page";
import "./product.scss";
import Products from "@/components/product/page";
import AboutUs_products from "@/components/aboutUs_products/page";
import Form from "@/components/forms/form1/Form";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
import { useRef } from "react";
const AboutUs = () => {
  const section1 = useRef();
  const section2 = useRef();
  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <div ref={section1}
      >
        <ProductHero goToSectionRef={section2} scrollTo={scrollTo}/>
      </div>
      <div ref={section2}>
        <Products />
      </div>
      <AboutUs_products />
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
    </div>
  );
};
export default AboutUs;
