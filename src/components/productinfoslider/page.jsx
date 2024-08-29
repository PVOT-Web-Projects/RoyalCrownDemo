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
import "./productslider.scss";
import {
  FreeMode,
  Thumbs,
  Autoplay,
  Navigation,
  EffectFade,
} from "swiper/modules";
import testimonial1 from "@/images/productsliderImg1.png";
import YellowSubmitButton from "../buttons/yellowSubmitButton/YellowSubmitButton";
// import ShadowHeading from "../shadowHeading/ShadowHeading";
// import LogoImg from "../../images/crown_light_logo.png";
import slidesData from "./productdata";
import YellowButton from "../buttons/yellowButton/YellowButton";
import { motion } from "framer-motion";

const SlidesContent = ({
  mainText,
  subText,
  collection,
  category,
  designNumber,
  designName,
  buttonText,
  buttonUrl,
  finishName,
  finishCode,
  Thickness,
  DimensionsMm,
  DimensionsFt,
  PfnPF,
}) => (
  <div className="Carousel_text_maincontent">
    <div className="FirstSSliderText">
      <p className="Text_InnerText">{mainText}</p>
      <p className="TextInner1">{subText}</p>
      <div className="TextButtonoUTER">
        <p className="TextInnerCollection">{collection}</p>
        <div className="submit_btn">
          {/* <YellowSubmitButton btn_text={"Subscribe"} /> */}
          <button type="submit" className="yello_btn">
            <span className="button-content">Enquire Now</span>
          </button>
        </div>
      </div>
    </div>
    <div className="SecondSliderText">
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">PRODUCT CATEGORY</p>
          <p className="ProductCategoryText2">{category}</p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">design number</p>
          <p className="ProductCategoryText2">{designNumber}</p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">Design Name</p>
          <p className="ProductCategoryText2">{designName}</p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">finish Name</p>
          <p className="ProductCategoryText2">{finishName}</p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">finish code</p>
          <p className="ProductCategoryText2">{finishCode}</p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">Thickness (MM)</p>
          <p className="ProductCategoryText2">{Thickness}</p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">dimension (MM)</p>
          <p className="ProductCategoryText2">{DimensionsMm}</p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">dimension (ft)</p>
          <p className="ProductCategoryText2">{DimensionsFt}</p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">PF / NPF</p>
          <p className="ProductCategoryText2">{PfnPF}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function ProductInfoSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="ProductInfoSliderMain">
      {/* <ShadowHeading text={"WHY ROYAL CROWN"}/> */}
      <div className="MainContainer" style={{ marginTop: "50px" }}>
        <div className="abc left">
          {/* <div className="LogoImg">
            <Image src={LogoImg} alt="none" />
          </div> */}
          <div className="Carousel_Slider_container">
            <Swiper
              className="mySwiper"
              modules={[FreeMode, Thumbs, Navigation, EffectFade]}
              slidesPerView={1}
              // autoplay={{
              //   delay: 2500,
              // }}
              // loop={true}
              // navigation={true}
              effect="fade"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              speed={1500}
              thumbs={{ swiper: thumbsSwiper }}
              fadeEffect={{ crossFade: true }}
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <SlidesContent {...slide} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
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
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              // loop={true}
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
              allowTouchMove={false}
              className="mySwiper2"
            >
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial1}
                    alt="carousel_image"
                    className="third_section_image1"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial1}
                    alt="carousel_image"
                    className="third_section_image1"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial1}
                    alt="carousel_image"
                    className="third_section_image1"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial1}
                    alt="carousel_image"
                    className="third_section_image1"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial1}
                    alt="carousel_image"
                    className="third_section_image1"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="tenExp" style={{ marginBottom: "50px" }}>
            <div className="ProductInfoText">
              <p className="ProductInfoTextInner">
                Disclaimer:
                <span> Colours on screen may vary from actual product</span>
              </p>
            </div>
            {/* <div>
              <p className="tenExpBorderTextInner">years of experience</p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="productMainContainer">
            <div className="productMain">
                <div className="productNumber">
                    <p>03</p>
                </div>
                <div className="productDescription">
                    <motion.div
                        className="productDescriptionBorder"
                        initial={{ width: '0%' }}
                        whileInView={{ width: '60%' }} // Adjust this width to fit your design
                        transition={{ duration: 1, ease: 'easeOut' }}
                    />
                    <div className="productDescriptionHeader">
                        Craftsmanship at its best
                    </div>
                    <div className="productDescriptionContent">
                        <p>
                            Customers are at the heart of our unique business model. Royal Crown thrives at providing royal service to everyone. Our work is all about our customers and we believe their experience should be worth a thousand memories. However, we do have a tiny tale to tell, a sneak peek to our story. It all started on that historic Indian summer day when the long days almost stretch into each other, when the scorching heat of the sun turns the wands of the grasses golden, when the beautiful and radiant flowers are swaying with the wind and when a faint sound of birds chirping is heard; A born businessman had a vision which was brought into reality by Royal Crown creators.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
