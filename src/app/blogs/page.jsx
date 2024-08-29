"use client";
import { useEffect, useRef } from "react";
import BlogsPage from "@/components/blogspage/page";
import BlogsMain from "@/components/blogPosts/page";
import "./blogs.scss";
const Blogs = () => {
  const section1 = useRef();
  const section2 = useRef();
  useEffect(() => {
    document.title = "Blogs | Royal Crown";
  });

  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <div ref={section1}>
        <BlogsPage goToSectionRef = {section2} scrollTo={scrollTo}/>
      </div>
      <div ref={section2}>
        <BlogsMain />
      </div>
    </div>
  );
};
export default Blogs;
