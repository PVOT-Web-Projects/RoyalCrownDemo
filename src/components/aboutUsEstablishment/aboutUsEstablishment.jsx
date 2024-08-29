"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./aboutUsEstablishment.scss";
import establish_image from "../../images/laminate - about-us 5.jpg";
import Image from "next/image";
import crown from "../../images/crown11.png";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const AboutUsEstablishment = () => {
  const container = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    create();
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createText();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createBoll();
  }, []);

  const createAnimation = () => {
    gsap.to(".triggered-element", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 100%",
        end: "bottom 10%",
      },
      opacity: 1,
      ease: "out",
      duration: 1.5,
      ease: "slow(0.7,0.7,false)",
      scale: 1.8,
      stagger: 0.9,
    });
  };

  const create = () => {
    gsap.to(".triggered-section", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 100%",
        end: "bottom 20%",
      },
      opacity: 1,
      ease: "out",
      scale: 2,
      duration: 1.5,
      ease: "slow(0.7,0.7,false)",
      stagger: 0.9,
    });
  };
  const createText = () => {
    gsap.to(".triggered-text", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 100%",
        end: "bottom 20%",
      },
      opacity: 1,
      ease: "out",
      scale: 1.2,
      duration: 1.5,
      ease: "slow(0.7,0.7,false)",
      stagger: 0.9,
    });
  };

  const createBoll = () => {
    gsap.to(".triggered-bead", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 100%",
        end: "bottom 20%",
      },
      opacity: 1,
      backgroundColor: "#C3A464",
      duration: 1.5,
      ease: "slow(0.7,0.7,false)",
      scale: 2.2,
      stagger: 0.9,
    });
  };
  return (
    <>
      <div>
        <div className="Establishment_timeline_outer">
          <div className="Establishment_timeline_wrapper">
            <motion.div
              className="Establishment_header "
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="Establishment_header_1">The Royal</div>
              <div className="Establishment_header_bottom">Establishment</div>
            </motion.div>
            <div className="Establishment_timeline_main_outer">
              <div className="Establishment_timeline_width">
                <div className="Establishment_timeline" ref={container}>
                  <div className="Establishment_line"></div>

                  <div className="Establishment_section">
                    <div className="Establishment_timeline_year triggered-section">
                      1990
                    </div>
                    <p className="Establishment_timeline_comment triggered-text">
                      Customers are at the heart of our unique business model.
                      Royal Crown thrives at providing royal service to
                      everyone. Our work is all about our customers and we
                      believe their experience should be worth a thousand
                      memories.
                    </p>
                    <div className="Establishment_bead_outer">
                      <div className="Establishment_bead"></div>
                    </div>
                    <div className="Establishment_content triggered-element">
                      <Image
                        src={establish_image}
                        alt="Your Image"
                        className="Establishment_timeline_image"
                      />
                    </div>
                  </div>
                  <div className="Establishment_section">
                    <div className="Establishment_timeline_year triggered-section">
                      1990
                    </div>
                    <p className="Establishment_timeline_comment triggered-text">
                      Customers are at the heart of our unique business model.
                      Royal Crown thrives at providing royal service to
                      everyone. Our work is all about our customers and we
                      believe their experience should be worth a thousand
                      memories.
                    </p>
                    <div className="Establishment_bead_outer">
                      <div className="Establishment_bead"></div>
                    </div>
                    <div className="Establishment_content triggered-element">
                      <Image
                        src={establish_image}
                        alt="Your Image"
                        className="Establishment_timeline_image"
                      />
                    </div>
                  </div>
                  <div className="Establishment_section">
                    <div className="Establishment_timeline_year triggered-section">
                      1990
                    </div>
                    <p className="Establishment_timeline_comment triggered-text">
                      Customers are at the heart of our unique business model.
                      Royal Crown thrives at providing royal service to
                      everyone. Our work is all about our customers and we
                      believe their experience should be worth a thousand
                      memories.
                    </p>
                    <div className="Establishment_bead_outer">
                      <div className="Establishment_bead"></div>
                    </div>
                    <div className="Establishment_content triggered-element">
                      <Image
                        src={establish_image}
                        alt="Your Image"
                        className="Establishment_timeline_image"
                      />
                    </div>
                  </div>
                  <div className="Establishment_section">
                    <div className="Establishment_timeline_year triggered-section">
                      1990
                    </div>
                    <p className="Establishment_timeline_comment triggered-text">
                      Customers are at the heart of our unique business model.
                      Royal Crown thrives at providing royal service to
                      everyone. Our work is all about our customers and we
                      believe their experience should be worth a thousand
                      memories.
                    </p>
                    <div className="Establishment_bead_outer">
                      <div className="Establishment_bead"></div>
                    </div>
                    <div className="Establishment_content triggered-element">
                      <Image
                        src={establish_image}
                        alt="Your Image"
                        className="Establishment_timeline_image"
                      />
                    </div>
                  </div>
                  <div className="Establishment_section">
                    <div className="Establishment_timeline_year triggered-section">
                      1990
                    </div>
                    <p className="Establishment_timeline_comment triggered-text">
                      Customers are at the heart of our unique business model.
                      Royal Crown thrives at providing royal service to
                      everyone. Our work is all about our customers and we
                      believe their experience should be worth a thousand
                      memories.
                    </p>
                    <div className="Establishment_bead_outer">
                      <div className="Establishment_bead"></div>
                    </div>
                    <div className="Establishment_content triggered-element">
                      <Image
                        src={establish_image}
                        alt="Your Image"
                        className="Establishment_timeline_image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsEstablishment;
