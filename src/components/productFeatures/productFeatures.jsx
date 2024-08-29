"use client";
import Image from "next/image";
import Image1 from "../../images/1_LOW-ELECTRICAL-RESISTANT.svg";
import "./productFeatures.scss";
import { motion } from "framer-motion";

export default function ProductFeatures() {
  const productFeatures = [
    {
      image: Image1,
      description: "Low Electrical Resistant",
    },
    {
      image: Image1,
      description: "Absolute Charge Drainage",
    },
    {
      image: Image1,
      description: "Zero Voltage Suppression",
    },
    {
      image: Image1,
      description: "Dust Repellant",
    },
    {
      image: Image1,
      description: "Impact Resistant",
    },
  ];

  return (
    <div className="productFeaturesWrapper">
      <div className="productFeaturesInner">
        <motion.div
          className="productFeaturesHeader"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div>FEATURES & ATTRIBUTES</div>
        </motion.div>
        <div className="productFeaturesContainer">
          {productFeatures.map((feature, index) => (
            <div className="productFeaturesContainerInner" key={index}>
              <div className="productImage">
                <Image
                  src={feature.image}
                  alt={feature.description}
                  className="productFeatureImage"
                />
              </div>
              <div className="productDescription">
                <div>{feature.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
