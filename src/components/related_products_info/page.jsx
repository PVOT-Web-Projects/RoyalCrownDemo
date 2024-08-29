"use client";
import { useState } from "react";
import "./relatedProduct.scss";
import Image from "next/image";
import Img1 from "@/images/PRODUCT1.png";
import Img2 from "@/images/PRODUCT2.png";
import Img3 from "@/images/PRODUCT3.png";
import Img4 from "@/images/SliderImg_2.png"
import LineHeaderText from "../lineheadertext/page";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const RelatedProductInfo = () => {
  const [liked, setLiked] = useState([false, false, false, false]);

  const toggleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  const Images = [
    { ProductImage: Img1 },
    { ProductImage: Img2 },
    { ProductImage: Img3 },
    { ProductImage: Img4 },
    { ProductImage: Img1 },
    { ProductImage: Img2 },
    { ProductImage: Img3 },
    { ProductImage: Img4 },
  ];

  return (
    <div className="RelatedProductMainContainer">
      <motion.div initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
        <LineHeaderText text={"RELATED PRODUCTS"} />
      </motion.div>
      <Swiper
        className="RelatedProductCards"
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2500,
        }}
        slidesPerGroup={2}
        loop = {true}
        speed={1500}
        modules={[FreeMode, Pagination , Autoplay]}

        breakpoints={{
          1600 : {
            slidesPerView : 5,
          },
          1200:{
            slidesPerView: 4
          },
          768 : {
            slidesPerView: 3,
            spaceBetween : 20,
          },
          575 : {
            spaceBetween : 40,
          },
          475 : {
            slidesPerView: 2,
            spaceBetween : 20
          },
          300 : {
            slidesPerView: 1,
            spaceBetween : 20
          }
        }}
      >
        {Images.map((item, index) => (
          <SwiperSlide key={index} className="RelatedProductCard">
            <Image
              src={item.ProductImage}
              alt="Related Product"
              className="ImageProductImg"
            />
            <div className="heart-container" title="Like">
              <input
                type="checkbox"
                className="checkbox"
                id={`checkbox-${index}`}
                onChange={() => toggleLike(index)}
                checked={liked[index]}
              />
              <div className="svg-container">
                <svg
                  viewBox="0 0 24 24"
                  className="svg-outline"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  className="svg-filled"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
                </svg>
                <svg
                  className="svg-celebrate"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="10,10 20,20" />
                  <polygon points="10,50 20,50" />
                  <polygon points="20,80 30,70" />
                  <polygon points="90,10 80,20" />
                  <polygon points="90,50 80,50" />
                  <polygon points="80,80 70,70" />
                </svg>
              </div>
            </div>
            <div className="ImageHover">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="white"
              >
                <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
              </svg>
              <div className="TextSvg">
                <p className="TextSvgInner">KNOW MORE</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProductInfo;
