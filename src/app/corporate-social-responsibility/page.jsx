"use client"
import { useEffect } from "react";
import CorporateImg from "@/components/corporateheader/page";
import CorporateTwoCards from "@/components/corporateTwoCards/page";
import CorporateTestimonial from "@/components/corporateTestimonial/corporateTestimonial";
import CorporateSwiper from "@/components/corporateSwiper/corporateSwiper";
import CorporateRecognition from "@/components/corporateRecognition/corporateRecognition";

const CorporateSocial =() =>{
    useEffect(() => {
        document.title = "Corporate Social Responsibility | Royal Crown";
      });
    return(
        <div>
          <CorporateImg />
          <CorporateTwoCards />
          <CorporateSwiper/>
          <CorporateTestimonial/>
          <CorporateRecognition/>
        </div>
    )
}
export default CorporateSocial;