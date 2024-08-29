// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import Image from "next/image";
// import Img1 from "@/images/SliderImg1.png";
// import Img2 from "@/images/SliderImg2.png";
// import Img3 from "@/images/SliderImg3.png";
// import SvgBtn from "@/images/svgLogos/sliderBtn.svg";
// import SvgBtnNext from "@/images/svgLogos/sliderBtnPrev.svg";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import "./threedslider.scss";
// import {
//   FreeMode,
//   Thumbs,
//   Autoplay,
//   Navigation,
//   EffectCoverflow,
// } from "swiper/modules";

// export default function App() {
//   return (
//     <div className="ThreedSliderMain">
//       <div className="ThreeText">
//         <p className="ThreeTextInner">The Pinnacle of Luxury Laminates</p>
//         <p className="ThreeTextInnerFirst">
//           Discover the epitome of sophistication with our premium range of
//           luxury laminates. Designed for those with discerning taste, our
//           laminates offer a perfect blend of elegance and durability,
//           transforming ordinary spaces into extraordinary masterpieces.
//         </p>
//       </div>
//       <div className="MainContainer" style={{ marginTop: "50px" }}>
//         <div className="">
//           <div className="Carousel_Slider_container">
//             <Swiper
//               className="mySwiper"
//               modules={[
//                 FreeMode,
//                 Thumbs,
//                 Autoplay,
//                 Navigation,
//                 EffectCoverflow,
//               ]}
//               slidesPerView={3}
//               effect="coverflow"
//               coverflowEffect={{
//                 rotate: 0,
//                 stretch: 0,
//                 depth: 800,
//                 modifier: 1,
//                 slideShadows: false,
//               }}
//               spaceBetween={300}
//               navigation={{
//                 nextEl: ".swiper-button-next",
//                 prevEl: ".swiper-button-prev",
//               }}
//               speed={1500}
//             >
//               <SwiperSlide>
//                 <div className="SliderThreeContent">
//                   <div className="SliderThreeContentTEXT">
//                     <p className="SliderThreeContentTEXTInner">Decorative</p>
//                   </div>
//                   <Image
//                     src={Img1}
//                     alt="carousel_image"
//                     className="SliderThreeImages"
//                   />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="SliderThreeContent">
//                   <div className="SliderThreeContentTEXT">
//                     <p className="SliderThreeContentTEXTInner">Xylem</p>
//                   </div>
//                   <Image
//                     src={Img2}
//                     alt="carousel_image"
//                     className="SliderThreeImages"
//                   />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="SliderThreeContent">
//                   <div className="SliderThreeContentTEXT">
//                     <p className="SliderThreeContentTEXTInner">Compact</p>
//                   </div>
//                   <Image
//                     src={Img3}
//                     alt="carousel_image"
//                     className="SliderThreeImages"
//                   />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="SliderThreeContent">
//                   <div className="SliderThreeContentTEXT">
//                     <p className="SliderThreeContentTEXTInner">Decorative</p>
//                   </div>
//                   <Image
//                     src={Img1}
//                     alt="carousel_image"
//                     className="SliderThreeImages"
//                   />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="SliderThreeContent">
//                   <div className="SliderThreeContentTEXT">
//                     <p className="SliderThreeContentTEXTInner">Xylem</p>
//                   </div>
//                   <Image
//                     src={Img2}
//                     alt="carousel_image"
//                     className="SliderThreeImages"
//                   />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="SliderThreeContent">
//                   <div className="SliderThreeContentTEXT">
//                     <p className="SliderThreeContentTEXTInner">Compact</p>
//                   </div>
//                   <Image
//                     src={Img3}
//                     alt="carousel_image"
//                     className="SliderThreeImages"
//                   />
//                 </div>
//               </SwiperSlide>
//               <div className="swiper-button-next">
                
//               <Image src={SvgBtnNext} alt="btn" className="SvgBtnSlider" />
//               </div>
//               <div className="swiper-button-prev">
                
//               <Image src={SvgBtn} alt="btn" className="SvgBtnSlider" />
//               </div>
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
