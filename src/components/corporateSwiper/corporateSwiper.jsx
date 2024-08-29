"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./corporateSwiper.scss";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import CorporateSliderData from "./corporateSliderData";

export default function CorporateSwiper() {
  return (
    <div className="corporateSwiperWrapper">
      <div className="corporateSwiperContainer">
        <div className="corporateSwiperHeaderContainer">
          <motion.div
            className="swiperHeader"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Royal Crown in the community
          </motion.div>
          <div className="corporateSwiperArrowContainer">
            {/* Custom Previous Arrow */}
            <div className="swiper-button-prev custom-prev">
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                width="40"
              >
                <path
                  d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
            {/* Custom Next Arrow */}
            <div className="swiper-button-next custom-next">
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
              >
                <path
                  d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
        </div>
        <Swiper
          className="corporateSwiper"
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          freeMode={true}
          speed={1500}
          modules={[Pagination, FreeMode, Navigation]}
          breakpoints={{
            1600: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            675: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {CorporateSliderData.map((swiperData, index) => (
            <SwiperSlide className="corporateSwiperCardOuter" key={index}>
              <div className="coporateSwiperCardWrapper">
                <div className="corporateSwiperCardInner">
                  <Image
                    src={swiperData.image}
                    alt=""
                    className="corporateImage"
                  />
                </div>
                <div className="corporateSwiperContent">
                  <div className="swiperCardHeader">
                    <p className="swiperCardHeaderInner">{swiperData.header}</p>
                  </div>

                  {/* <div className="swiperCardButton">
                    <p>Read More</p>
                  </div> */}
                </div>
              </div>
              <div className="swiperCardDescription">
                <p className="swiperCardDescriptionInner">
                  {swiperData.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
