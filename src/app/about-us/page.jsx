"use client";
import "./Home.scss";
import AboutUsEstablishment from "@/components/aboutUsEstablishment/aboutUsEstablishment";
import AboutUsVision from "@/components/aboutUsVision/aboutUsVision";
import AboutUsWhyUs from "@/components/aboutUsWhyUs/aboutUsWhyUs";
import Form from "@/components/forms/form1/Form";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
import AboutUsDemo from "@/components/aboutdemohero/page";
import HomeHeroSection from "@/components/homeHeroSection/page";
import AboutUsHero from "@/components/aboutUsHero/aboutUsHero";
const AboutUs = () => {
  return (
    <div>
      {/* <AboutUsDemo /> */}
      <AboutUsHero />
      {/* <HomeHeroSection/> */}
      <AboutUsEstablishment />
      <AboutUsVision />
      <AboutUsWhyUs
        heading={"Why Us"}
        cardOneText={
          "We are known for providing high density laminates with unparalleled services in terms of quality and reliability. We are known for providing high density laminates with unparalleled services in terms of quality and reliability."
        }
        cardTwoText={
          "We are known for providing high density laminates with unparalleled services in terms of quality and reliability. We are known for providing high density laminates with unparalleled services in terms of quality and reliability."
        }
        cardThreeText={
          "We are known for providing high density laminates with unparalleled services in terms of quality and reliability. We are known for providing high density laminates with unparalleled services in terms of quality and reliability."
        }
        cardFourText={
          "We are known for providing high density laminates with unparalleled services in terms of quality and reliability. We are known for providing high density laminates with unparalleled services in terms of quality and reliability."
        }
      />
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
    </div>
  );
};
export default AboutUs;
