"use client"
import { useState, useEffect } from "react";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
// import Headingwithbutton from "@/components/Headingwithbutton/headingwithbutton";
import "./Home.scss";
import "./variables.scss";
import dynamic from 'next/dynamic';
import Form from "@/components/forms/form1/Form";
import RoyalCrownSlider from "@/components/RoyalCrownSlider/RoyalCrownSlider";
import SocialMediaImg from "@/images/socials-image.png";
import SocialPage from "@/components/socialPage/socialpage";
import Certification from "@/components/Certifications/Certification";
// import ThreeSlider from "@/components/threedslider/page";
import NewRevealText from "@/components/newRevel/page";
import PlyMarquee from "@/components/plyMarquee/PlyMarquee";
import ServicesPageCard from "@/components/InsightsPageCards/insightsPageCards";
import TimelineHome from "@/components/timelinehome/page";
import HomeHeroSection from "@/components/homeHeroSection/page";
import NewThreeDSlider from "@/components/newthreedslider/newthreedslider";


const HomeBanner = dynamic(() => import("@/components/Home_page_Banner/page"));
const HomeBanner1 = dynamic(() => import("@/components/Home_page_Banner/page2"));

export default function Home() {
  const [width, setWidth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCounter,setCounter]= useState  (0);
  const paragraph =
    "Sturdily beautiful. Warm, bright. Naturally comforting. Timelessly modern.";
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
  
      handleResize(); // Initialize width
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    function handleLoad(data) {
      console.log("data", data);
      setIsLoading(data);
    }
    function handleCounter(data) {
      console.log("cc", data);
      setCounter(data);
    }
  return (
    <>  
      {width &&(
      <>
        {width > 575 ?(
          <HomeBanner loadImage={handleLoad} counter={handleCounter} />
        ):(
          <HomeBanner1 loadImage={handleLoad} counter={handleCounter} />
        )}
      </>
    )}
    <main className="main">
      <HeroBanner />
      <HomeHeroSection />
      <NewThreeDSlider />
      {/* <ThreeSlider /> */}
      <NewRevealText paragraph={paragraph} />
      <PlyMarquee />
      <RoyalCrownSlider />
      <ServicesPageCard />
      <Certification />
      <TimelineHome />
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
    </main>
    </>

  );
}
