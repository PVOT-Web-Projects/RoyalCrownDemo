import React from "react";
import Image from "next/image";
import styles from "@/components/blogPosts/blog_post.module.css";

const BlogsCards = ({ item, handleReadMoreClick }) => (
  <div className={styles.gridItem}>
    <Image src={item.image} alt="grid" className={styles.ImageContainer} />
    <div className={styles.TitleMain}>{item.title}</div>
    <div className={styles.BlogsDate}>{item.date}</div>
    <div className={styles.BlogsDescription}>{item.blogPost_text}</div>
   <div className={styles.BlogsButton}>
   <button
      onClick={() => handleReadMoreClick(item.readMoreRoute)}
      className={styles.Blogscardlink}
      type="submit"
    >
      <span className={styles.Buttontext}>Read more</span>
    </button>
   </div>
  </div>
);

export default BlogsCards;
