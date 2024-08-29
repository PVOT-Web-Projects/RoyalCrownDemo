"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "./RoyalCrownSlider.scss";
import {
  EffectFade,
  FreeMode,
  Thumbs,
  Autoplay,
  Navigation,
} from "swiper/modules";
import testimonial1 from "@/images/Crownsliderimg1.png";
import { motion } from "framer-motion";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="royal_crown_slider">
      <div className="RoyalCrownText">
        <motion.div
          className="RoyalCrownTextInner"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          WHY
        </motion.div>
        {/* <p className="RoyalCrownTextInner">WHY</p> */}
        <motion.div
        className="RoyalCrownTextInnerFirst"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          ROYAL CROWN
        </motion.div>
        {/* <p className="RoyalCrownTextInnerFirst">ROYAL CROWN</p> */}
      </div>
      {/* <ShadowHeading text={"WHY ROYAL CROWN"}/> */}
      <div className="MainContainer" style={{ marginTop: "50px" }}>
        <div className="abc left">
          {/* <div className="LogoImg">
            <Image src={LogoImg} alt="none" />
          </div> */}
          {/* <ShadowHeading text={"Why Royal Crown"} /> */}
          <div className="Carousel_Slider_container">
            <Swiper
              className="mySwiper"
              modules={[FreeMode, Thumbs, Autoplay, Navigation]}
              slidesPerView={1}
              // autoplay={{
              //   delay: 2500,
              // }}
              // loop={true}
              // navigation={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              speed={1500}
              thumbs={{ swiper: thumbsSwiper }}
            >
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial1}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial1}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial1}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial1}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial1}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
            </Swiper>

            {/* <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div> */}
          </div>
        </div>

        <div className="abc right">
          {/* <div className="Rc_Text_Main">
            <p className="Rc_Text_MainInner">Royal Crown Laminates</p>
          </div> */}
          <div className="Carousel_Slider_container2">
            <Swiper
              modules={[Thumbs, Autoplay, EffectFade]}
              onSwiper={setThumbsSwiper}
              // loop={true}
              // autoplay={{
              //   delay: 2500,
              // }}
              // navigation={true}
              slidesPerView={1}
              speed={1500}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              // navigation={{
              //   nextEl: ".swiper-button-next",
              //   prevEl: ".swiper-button-prev",
              // }}
              // pagination={{
              //   dynamicBullets: true,
              // }}
              allowTouchMove={false}
              className="mySwiper2"
            >
              <SwiperSlide>
                <div className="Carousel_text_maincontent">
                  {/* <p className="Text_InnerText">Unparalled Services</p> */}
                  <p className="carousel_text_Content">
                    We are known for providing high density laminates with
                    unparalleled services in terms of quality and reliability.
                    We are known for providing high density laminates with
                    unparalleled services in terms of quality and reliability.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Carousel_text_maincontent">
                  {/* <p className="Text_InnerText">Unparalled Services</p> */}
                  <p className="carousel_text_Content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem esse quaerat quisquam, cupiditate possimus
                    optio earum quibusdam. Nam aperiam voluptate iste ullam
                    laboriosam maxime asperiores, sequi quibusdam quae.
                    Praesentium, earum.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Carousel_text_maincontent">
                  {/* <p className="Text_InnerText">Unparalled Services</p> */}
                  <p className="carousel_text_Content">
                    We are known for providing high density laminates with
                    unparalleled services in terms of quality and reliability.
                    We are known for providing high density laminates with
                    unparalleled services in terms of quality and reliability.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Carousel_text_maincontent">
                  {/* <p className="Text_InnerText">Unparalled Services</p> */}
                  <p className="carousel_text_Content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem esse quaerat quisquam, cupiditate possimus
                    optio earum quibusdam. Nam aperiam voluptate iste ullam
                    laboriosam maxime asperiores, sequi quibusdam quae.
                    Praesentium, earum.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Carousel_text_maincontent">
                  {/* <p className="Text_InnerText">Unparalled Services</p> */}
                  <p className="carousel_text_Content">
                    We are known for providing high density laminates with
                    unparalleled services in terms of quality and reliability.
                    We are known for providing high density laminates with
                    unparalleled services in terms of quality and reliability.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="tenExp" style={{ marginBottom: "50px" }}>
            <div className="tenExpBorder">
              <p className="tenExpBorderText">10</p>
            </div>
            <div>
              <p className="tenExpBorderTextInner">years of experience</p>
            </div>
            {/* <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
