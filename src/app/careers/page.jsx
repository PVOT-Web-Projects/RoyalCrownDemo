"use client"
import { useEffect } from "react";
import CareerGetStarted from "@/components/career_get_started/page";
import CareerJob from "@/components/career_job/page";
import CareerForm from "@/components/forms/careerform/page";

const Career =() =>{
    useEffect(() => {
        document.title =
            "Careers | Royal Crown";
    });
    return(
        <div>
            <CareerJob />
            <CareerGetStarted />
           <CareerForm />
        </div>
    )
}
export default Career;