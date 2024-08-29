"use client";
import React from "react";
import "./product_info.scss";
import Image from "next/image";
import svg1 from "../../images/svgLogos/Group 145.svg";
import {motion} from "framer-motion";
// const cards = [
//   {
//     title: "HIGHLY RESISTANT TO CHEMICALS",
//     description:
//       "Specially treated EB cured layer makes resistant to all kinds of chemicals.",
//     icon: Img1,
//     backgroundColor: "#CBCBCB",
//   },
//   {
//     title: "HIGH ABRASION RESISTANCE",
//     description:
//       "Our products have a high resistance to abrasion, which allows for their use in all kinds of applications on surfaces that hold tools, glassware and other laboratory equipment.",
//     icon: Img2,
//     backgroundColor: "#E3E1E1",
//   },
//   {
//     title: "LOW MAINTENANCE",
//     description:
//       "Laminates are generally easy to care for, and with the exceptional properties of Our laminates, maintenance & care becomes even easier.",
//     icon: Img3,
//     backgroundColor: "#CBCBCB",
//   },
//   {
//     title: "HIGHLY DURABLE",
//     description:
//       "With superior chemical and physical properties, products are highly durable and recommended for areas that involve working, storing and disposing of chemicals.",
//     icon: Img4,
//     backgroundColor: "#E3E1E1",
//   },
//   {
//     title: "SCRATCH RESISTANT",
//     description:
//       "Performance laminates and compact panel have higher scratch resistance than other products and laminates in the market.",
//     icon: Img5,
//     backgroundColor: "#CBCBCB",
//   },
//   {
//     title: "HIGHLY DURABLE",
//     description:
//       "With superior chemical and physical properties, products are highly durable and recommended for areas that involve working, storing and disposing of chemicals.",
//     icon: Img4,
//     backgroundColor: "#E3E1E1",
//   },
// ];

const KeyFeaturesInfo = () => (
  <>
    <div className="whyUsContainer">
      <div className="whyUsWrapper">
        <motion.div className="whyusHeader" initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>Key Features</motion.div>
        <div className="whyUsCardWrapper">
          <div className="cardouter_1">
            <div className="cardinner">
              <div className="card_header">
                <div>
                  <Image src={svg1} alt="" />
                </div>
                <div className="header">
                  <div>Scratch Resistant</div>
                </div>
              </div>
              <div className="card_description">
                Performance laminates and compact panel have higher scratch
                resistance than other products and laminates in the market.
              </div>
            </div>
          </div>
          <div className="cardouter_2">
            <div className="cardinner_1">
              <div className="card_header">
                <div>
                  <Image src={svg1} alt="" />
                </div>
                <div className="header">
                  <div>Scratch Resistant</div>
                </div>
              </div>
              <div className="card_description">
                Our products have a high resistance to abrasion, which allows
                for their use in all kinds of applications on surfaces that hold
                tools, glassware and other laboratory equipment.
              </div>
            </div>
            <div className="cardinner_2">
            <div className="card_header">
                <div>
                  <Image src={svg1} alt="" />
                </div>
                <div className="header">
                  <div>Scratch Resistant</div>
                </div>
              </div>
              <div className="card_description">
                Laminates are generally easy to care for, and with the
                exceptional properties of Our laminates, maintenance & care
                becomes even easier
              </div>
            </div>
          </div>
          <div className="cardouter_3">
            <div className="cardinner">
            <div className="card_header">
                <div>
                  <Image src={svg1} alt="" />
                </div>
                <div className="header">
                  <div>Scratch Resistant</div>
                </div>
              </div>
              <div className="card_description">
                With superior chemical and physical properties, products are
                highly durable and recommended for areas that involve working,
                storing and disposing of chemicals.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default KeyFeaturesInfo;
