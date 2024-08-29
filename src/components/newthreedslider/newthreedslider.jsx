// SwiperComponent.jsx
"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import "swiper/css";
// import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import Img1 from "@/images/SliderImg1.png";
import Img2 from "@/images/SliderImg2.png";
import Img3 from "@/images/SliderImg3.png";
import SvgBtn from "@/images/svgLogos/sliderBtn.svg";
import SvgBtnNext from "@/images/svgLogos/sliderBtnPrev.svg";

import {
  FreeMode,
  Thumbs,
  Autoplay,
  Navigation,
  EffectFade,
  EffectCoverflow,
} from "swiper/modules";
import "@/components/newthreedslider/newthreedslider.scss";
import SliderBtn from "@/components/buttons/sliderbtn/page";



const SwiperComponent = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="MainSwiperthreedContainer">
      <div className="ThreeText">
        <p className="ThreeTextInner">The Pinnacle of Luxury Laminates</p>
        <p className="ThreeTextInnerFirst">
          Discover the epitome of sophistication with our premium range of
          luxury laminates. Designed for those with discerning taste, our
          laminates offer a perfect blend of elegance and durability,
          transforming ordinary spaces into extraordinary masterpieces.
        </p>
      </div>
      <div className="swiperContainerOne">
        <Swiper
          modules={[ Navigation, EffectCoverflow, Thumbs]}
          slidesPerView={3}
          loop={true}
          effect="coverflow"
          centeredSlides={true}
          // spaceBetween={10}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 800,
            modifier: 1,
            slideShadows: false,
          }}
          // freeMode= {true}
          thumbs={{ swiper: thumbsSwiper }}
          speed={1500}
          allowTouchMove={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <div className="SliderThreeContent">
              <div className="SliderThreeContentTEXT">
                <p className="SliderThreeContentTEXTInner">Decorative</p>
              </div>
              <Image
                src={Img1}
                alt="carousel_image"
                className="SliderThreeImages"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SliderThreeContent">
              <div className="SliderThreeContentTEXT">
                <p className="SliderThreeContentTEXTInner">Xylem</p>
              </div>
              <Image
                src={Img2}
                alt="carousel_image"
                className="SliderThreeImages"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SliderThreeContent">
              <div className="SliderThreeContentTEXT">
                <p className="SliderThreeContentTEXTInner">Compact</p>
              </div>
              <Image
                src={Img3}
                alt="carousel_image"
                className="SliderThreeImages"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SliderThreeContent">
              <div className="SliderThreeContentTEXT">
                <p className="SliderThreeContentTEXTInner">Decorative</p>
              </div>
              <Image
                src={Img1}
                alt="carousel_image"
                className="SliderThreeImages"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SliderThreeContent">
              <div className="SliderThreeContentTEXT">
                <p className="SliderThreeContentTEXTInner">Xylem</p>
              </div>
              <Image
                src={Img2}
                alt="carousel_image"
                className="SliderThreeImages"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SliderThreeContent">
              <div className="SliderThreeContentTEXT">
                <p className="SliderThreeContentTEXTInner">Compact</p>
              </div>
              <Image
                src={Img3}
                alt="carousel_image"
                className="SliderThreeImages"
              />
            </div>
          </SwiperSlide>
          <div className="swiper-button-next">
            <Image src={SvgBtnNext} alt="btn" className="SvgBtnSlider" />
          </div>
          <div className="swiper-button-prev">
            <Image src={SvgBtn} alt="btn" className="SvgBtnSlider" />
          </div>
        </Swiper>
        {/* <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination"></div> */}

        <div className="SecondThumbsSwiper">
          <Swiper
            modules={[ Thumbs, Autoplay, EffectFade]}
            onSwiper={setThumbsSwiper}
            //   loop={true}
            // autoplay={{
            //   delay: 2500,
            // }}
            // navigation={true}
            slidesPerView={1}
            speed={1500}
            // navigation={{
            //   nextEl: ".swiper-button-next",
            //   prevEl: ".swiper-button-prev",
            // }}
            // pagination={{
            //   dynamicBullets: true,
            // }}
            // freeMode={true}
            allowTouchMove={false}
            fadeEffect={{ crossFade: true }}
            className="mySwiperThumbs"
          >
            <SwiperSlide>
              <div className="Carousel_text_maincontent">
                <p className="Text_InnerText">
                  It's a modern minimalist aesthetic look, our luxury laminates
                  cater to every desire, ensuring your interiors exude a refined
                  charm that captivates and endures.
                </p>
                <p className="carousel_text_Content">
                  Elevate your space with the ultimate expression of luxury and
                  grace.
                </p>
                <div className="SliderBtnOuter">
                   <SliderBtn url={"/"} btn_text={"GO TO DECORATIVE"}/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="Carousel_text_maincontent">
                <p className="Text_InnerText">
                  It's a modern minimalist aesthetic look, our luxury laminates
                  cater to every desire, ensuring your interiors exude a refined
                  charm that captivates and endures.
                </p>
                <p className="carousel_text_Content">
                  Elevate your space with the ultimate expression of luxury and
                  grace.
                </p>
                <div className="SliderBtnOuter">
                   <SliderBtn url={"/"} btn_text={"GO TO XYLEM"}/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="Carousel_text_maincontent">
                <p className="Text_InnerText">
                  It's a modern minimalist aesthetic look, our luxury laminates
                  cater to every desire, ensuring your interiors exude a refined
                  charm that captivates and endures.
                </p>
                <p className="carousel_text_Content">
                  Elevate your space with the ultimate expression of luxury and
                  grace.
                </p>
                <div className="SliderBtnOuter">
                   <SliderBtn url={"/"} btn_text={"GO TO COMPACT"}/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="Carousel_text_maincontent">
                <p className="Text_InnerText">
                  It's a modern minimalist aesthetic look, our luxury laminates
                  cater to every desire, ensuring your interiors exude a refined
                  charm that captivates and endures.
                </p>
                <p className="carousel_text_Content">
                  Elevate your space with the ultimate expression of luxury and
                  grace.
                </p>
                <div className="SliderBtnOuter">
                   <SliderBtn url={"/"} btn_text={"GO TO DECORATIVE"}/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="Carousel_text_maincontent">
                <p className="Text_InnerText">
                  It's a modern minimalist aesthetic look, our luxury laminates
                  cater to every desire, ensuring your interiors exude a refined
                  charm that captivates and endures.
                </p>
                <p className="carousel_text_Content">
                  Elevate your space with the ultimate expression of luxury and
                  grace.
                </p>
                <div className="SliderBtnOuter">
                   <SliderBtn url={"/"} btn_text={"GO TO XYLEM"}/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="Carousel_text_maincontent">
                <p className="Text_InnerText">
                  It's a modern minimalist aesthetic look, our luxury laminates
                  cater to every desire, ensuring your interiors exude a refined
                  charm that captivates and endures.
                </p>
                <p className="carousel_text_Content">
                  Elevate your space with the ultimate expression of luxury and
                  grace.
                </p>
                <div className="SliderBtnOuter">
                   <SliderBtn url={"/"} btn_text={"GO TO COMPACT"}/>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;
