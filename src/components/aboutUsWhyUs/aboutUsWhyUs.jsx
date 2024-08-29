import { useEffect, useRef } from "react";
import AboutUsButton from "../buttons/aboutUsButton/aboutUsButton";
import "./aboutUsWhyUs.scss";
import {motion} from "framer-motion";
import gsap from "gsap";
export default function AboutUsWhyUs({heading , cardOneText , cardTwoText , cardThreeText , cardFourText}) {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach(card => {
      const svg = card.querySelector(".cardSvg svg");

      card.addEventListener("mouseenter", () => {
        gsap.to(svg, { rotation: -50, duration: 0.3 });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(svg, { rotation: 0, duration: 0.3 });
      });
    });
  }, []);
  return (
    <>
      <div className="whyUsContainer">
        <div className="whyUsWrapper">
          <motion.div className="whyusHeader" initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>{heading}</motion.div>
          <div className="whyUsCardWrapper">
            <div className="cardouter_1"  ref={el => cardRefs.current[0] = el} 
            >
              <div className="cardSvg">
              <svg
                    width="40"
                    height="40"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35" cy="35" r="34.5" stroke="#5B3524" />
                    <path
                      d="M48.9558 25.0002C48.9558 24.1718 48.2843 23.5002 47.4558 23.5002L33.9558 23.5002C33.1274 23.5002 32.4558 24.1718 32.4558 25.0002C32.4558 25.8286 33.1274 26.5002 33.9558 26.5002L45.9558 26.5002L45.9558 38.5002C45.9558 39.3286 46.6274 40.0002 47.4558 40.0002C48.2843 40.0002 48.9558 39.3286 48.9558 38.5002L48.9558 25.0002ZM23.0607 51.5167L48.5165 26.0609L46.3952 23.9396L20.9393 49.3954L23.0607 51.5167Z"
                      fill="#5B3524"
                    />
                  </svg>
              </div>
              <div className="cardinner">
                <div className="card_header">20+</div>
                <div className="card_description">
                  {cardOneText}
                </div>
                <div className="card-button">
                  <AboutUsButton text={"Legacy"} />
                </div>
              </div>
            </div>
            <div className="cardouter_2" >
              <div className="cardinner_1" ref={el => cardRefs.current[1] = el}>
                <div className="cardSvg">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35" cy="35" r="34.5" stroke="#5B3524" />
                    <path
                      d="M48.9558 25.0002C48.9558 24.1718 48.2843 23.5002 47.4558 23.5002L33.9558 23.5002C33.1274 23.5002 32.4558 24.1718 32.4558 25.0002C32.4558 25.8286 33.1274 26.5002 33.9558 26.5002L45.9558 26.5002L45.9558 38.5002C45.9558 39.3286 46.6274 40.0002 47.4558 40.0002C48.2843 40.0002 48.9558 39.3286 48.9558 38.5002L48.9558 25.0002ZM23.0607 51.5167L48.5165 26.0609L46.3952 23.9396L20.9393 49.3954L23.0607 51.5167Z"
                      fill="#5B3524"
                    />
                  </svg>
                </div>
                <div className="card-button">
                  <AboutUsButton text={"categories"} />
                </div>
                <div className="card_description">
                  
                  {cardTwoText}
                </div>
              </div>
              <div className="cardinner_2">
                <div className="card_description">
                  {cardThreeText}
                </div>
                <div className="card-button">
                  <AboutUsButton text={"innovation"} />
                </div>
              </div>
            </div>
            <div className="cardouter_3" ref={el => cardRefs.current[2] = el}>
              <div className="cardinner">
                <div className="cardSvg">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35" cy="35" r="34.5" stroke="#5B3524" />
                    <path
                      d="M48.9558 25.0002C48.9558 24.1718 48.2843 23.5002 47.4558 23.5002L33.9558 23.5002C33.1274 23.5002 32.4558 24.1718 32.4558 25.0002C32.4558 25.8286 33.1274 26.5002 33.9558 26.5002L45.9558 26.5002L45.9558 38.5002C45.9558 39.3286 46.6274 40.0002 47.4558 40.0002C48.2843 40.0002 48.9558 39.3286 48.9558 38.5002L48.9558 25.0002ZM23.0607 51.5167L48.5165 26.0609L46.3952 23.9396L20.9393 49.3954L23.0607 51.5167Z"
                      fill="#5B3524"
                    />
                  </svg>
                </div>
                <div className="card_header">5+</div>
                <div className="card_description">
                 {cardFourText}
                </div>
                <div className="card-button">
                  <AboutUsButton text={"certificates"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
