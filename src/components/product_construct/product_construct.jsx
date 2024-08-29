"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Image1 from "../../images/5-2048x749.png";
import "./product_construct.scss";
export default function ProductConstruct() {
  return (
    <>
      <div className="product_construct_wrapper">
        <motion.div
          className="product_construct_header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div>PRODUCT CONSTRUCT</div>
        </motion.div>
        <div>
          <Image src={Image1} alt="" className="product_construct_image" />
        </div>
      </div>
    </>
  );
}
