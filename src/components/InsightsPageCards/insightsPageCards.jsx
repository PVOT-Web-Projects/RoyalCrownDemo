'use client'
import { useState } from "react";
import Link from 'next/link'
import img1 from "@/images/HoverImg1.png";
import img2 from "@/images/HoverImg1.png";
import img3 from "@/images/HoverImg1.png";
import img4 from "@/images/HoverImg1.png";
import img5 from "@/images/HoverImg1.png";
import InsightsPageCardHover from "./insightsPageCardHover";
import InsightsPageCardItem from "./insightsPageCardItem";
import "./insightscommon.scss";
import {motion} from "framer-motion";
const projects = [
  {
    title: "Urban Design Trends with Royal Crown Luxury Laminates Urban Design Trends with Royal Crown Luxury Laminates",
    description:
      "26 July 2024",
    image1: img1,
    link1: "/",
  },
  {
    title: "Urban Design Trends with Royal Crown Luxury Laminates Urban Design Trends with Royal Crown Luxury Laminates",
    description:
      "26 July 2024",
    image1: img2,
    link1: "/",
  },
  {
    title: "Urban Design Trends with Royal Crown Luxury Laminates Urban Design Trends with Royal Crown Luxury Laminates",
    description:
      "26 July 2024",
    image1: img3,
    link1: "/",
  },
  {
    title: "Urban Design Trends with Royal Crown Luxury Laminates Urban Design Trends with Royal Crown Luxury Laminates",
    description:
      "26 July 2024",
    image1: img4,
    link1: "/",
  },
  {
    title: "Urban Design Trends with Royal Crown Luxury Laminates Urban Design Trends with Royal Crown Luxury Laminates",
    description:
      "26 July 2024",
    image1: img5,
    link1: "/",
  },
];
const ServicesPageCard = () => {
  const [hoverImage, setHoverImage] = useState({ active: false, index: 0 });
  return (
    <div className={"servicesPageCard"}>        
      <div className="InsightsTextInner">
      <motion.div
      className="InsightsTextInner"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Insights
        </motion.div>
        {/* <p>Insights</p> */}
      </div>
      <div className={"servicesPageCard_wrapper"}>
        {projects.map((project, index) => {
          return (
            <Link
              href={project.link1} // Use the link from the card or "/" as a fallback
              key={index}
            >
              <InsightsPageCardItem
                index={index}
                title={project.title}
                setHoverImage={setHoverImage}
                description={project.description}
              />
            </Link>
          );
        })}
      </div>
      <InsightsPageCardHover hoverImage={hoverImage} projects={projects} />
    </div>
  );
};

export default ServicesPageCard;
