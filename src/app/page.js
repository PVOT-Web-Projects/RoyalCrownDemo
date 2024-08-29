import HeroBanner from "@/components/HeroBanner/HeroBanner";
// import Headingwithbutton from "@/components/Headingwithbutton/headingwithbutton";
import "./Home.scss";
import "./variables.scss";
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

export default function Home() {
  const paragraph =
    "Sturdily beautiful. Warm, bright. Naturally comforting. Timelessly modern.";

  return (
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
  );
}
