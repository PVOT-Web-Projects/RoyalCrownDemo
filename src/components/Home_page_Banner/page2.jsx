"use client"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import MusicPlayer from "@/Components/musicPlayer/page";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/components/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import styles from "@/components/Home_page_Banner/Banner.module.css";
import "./scroll.css";
gsap.registerPlugin(ScrollTrigger);

const Animation = ({ loadImage, counter }) => {
  const [info, setInfo] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });
  const [loading, setLoading] = useState(true);
  const [loadingCounter, setLoadingCounter] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  console.log(loadingCounter);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    const setCanvasSize = () => {
      const originalWidth = 519;
      const originalHeight = 918;
      const aspectRatio = originalWidth / originalHeight;
      const availableWidth = window.innerWidth;

      if (availableWidth < 200) {
        canvas.width = originalWidth / 2;
        canvas.height = originalHeight / 2;
        canvas.style.width = "100vw";
        canvas.style.height = "100vh";
      } else {
        canvas.width = originalWidth;
        canvas.height = originalHeight;
        canvas.style.width = "100%";
        canvas.style.height = "100vh";
      }
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    // https://interiormaataassets.humbeestudio.xyz/mainsiteassets/mobile/0001.webp
    const frameCount = 1199;
    const currentFrame = (index) =>
      `https://interiormaataassets.humbeestudio.xyz/mainsiteassets/NewRcFrames/${(
        index + 1
      )
        .toString()
        .padStart(4, "0")}.jpg`;

    let imgL = [];
    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      imagesRef.current.push(img);
      imgL.push(img.src);
    }

    const loadImages = async () => {
      try {
        const loadImagePromises = imgL.map((imageUrl, index) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => {
              setLoadingCounter(index + 1);
              resolve();
            };
          });
        });

        await Promise.all(loadImagePromises);
        setLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };
    loadImages();
    console.log(imgL);
    console.log("Counter", loadingCounter);

    const animationTimeline = gsap.timeline({
      onUpdate: render,
      onComplete: () => setAnimationEnded(true),
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: true, // Increase scrub value for smoother transitions effect it will take 2 seconds to scroll use true for default effect
  //       smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  // effects: true, // looks for data-speed and data-lag attributes on elements
  // smoothTouch: 100,
        end: "+=1200%",
      },
    });

    animationTimeline.to(airpodsRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      duration: 1,
    });

    imagesRef.current[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        imagesRef.current[airpodsRef.current.frame],
        0,
        0,
        canvas.width,
        canvas.height
      );
    }

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [loadingCounter]);

  console.log(loadImage(loading));

  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const totalScroll = documentHeight - windowHeight;
      const currentScrollPercentage = (scrollPosition / totalScroll) * 100;
      setScrollPercentage(currentScrollPercentage);
    };

    window.addEventListener("scroll", updateScrollPercentage);

    return () => window.removeEventListener("scroll", updateScrollPercentage);
  }, []);

  const loadingProgress = (loadingCounter / 250) * 100;
  console.log(counter(loadingProgress));
  const scrollDownByTenPercent = () => {
    const tenPercentOfHeight = window.innerHeight * 1.7;
    window.scrollBy({
      top: tenPercentOfHeight,
      behavior: "smooth",
    });
    setIsVisible(false);
  };



  //  code for video show and hide 
// useEffect(() => {
//   // Function to handle scroll direction and video visibility
//   const handleScroll = () => {
//     const video = document.querySelector(`.${styles.videoBg}`);
//     if (window.scrollY > 0) {
//       // Check if window has scrolled down
//       video.style.visibility = "hidden";
//     } else {
//       video.style.visibility = "visible";
//     }
//   };

//   // Add scroll event listener
//   window.addEventListener("scroll", handleScroll);
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [buttonRef, buttonInView] = useInView();

  const buttonVariants = {
    hidden: { opacity: 0, y: 120 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    upsideDown: { opacity: 0, y: 180, transition: { duration: 0.3 } }
  };

  return (
    <section>
      <section ref={sectionRef}>
        <canvas
          className={styles.canvas_factory_settings}
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100vh",
            willChange: "transform", // Hint the browser for optimization
          }}
        ></canvas>
      </section>
      {/* <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.9 }}
        className={styles.text1}
      >
        <HeadingTextAnimation
          heading={"Where Tradition find"}
          justifyContent={"center"}
        />
        <HeadingTextAnimation
          heading={" it’s modern muse"}
          justifyContent={"left"}
        />
      </motion.div> */}

      {/* <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.9 }}
        className={styles.interiormaata}
      >
        <HeadingTextAnimation
          heading={"interior माता"}
          justifyContent={"center"}
        />
      </motion.div> */}

      <div class="scroll-down-wrap no-border">
        {isVisible && (
          <div
            className="section-down-arrow"
            onClick={scrollDownByTenPercent}
          >
            <svg
              class="nectar-scroll-icon"
              viewBox="0 0 30 45"
              enableBackground="new 0 0 30 45"
            >
              <path
                class="nectar-scroll-icon-path"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeMiterlimit="10"
                d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"
              ></path>
            </svg>
            <div className="scroll">Scroll to explore</div>
          </div>
        )}
      </div>

{/* just add the second video new one link here >> source is in public folder  */}

       {/* <video
        className={styles.videoBg}
        width="750"
        height="500"
        autoPlay
        loop
        muted
      >
        <source src="./video/mobile_video.mp4" type="video/mp4" />
      </video> */}





      {/* <MusicPlayer /> */}
      {scrollPercentage >= 45 && (
        <div className={styles.buttonOuter} ref={buttonRef}>
          <motion.button
            className={styles.buttonX}
            role="button"
            initial="hidden"
            animate={
              window.innerWidth < 768
                ? scrollPercentage >= 55
                  ? "upsideDown"
                  : "visible"
                : window.innerWidth < 1024
                ? scrollPercentage >= 62
                  ? "upsideDown"
                  : "visible"
                : window.innerWidth < 1400
                ? scrollPercentage >= 65
                  ? "upsideDown"
                  : "visible"
                : window.innerWidth < 500
                ? scrollPercentage >= 58
                  ? "upsideDown"
                  : "visible"
                : window.innerWidth < 1600
                ? scrollPercentage >= 60
                  ? "upsideDown"
                  : "visible"
                : scrollPercentage >= 63
                ? "upsideDown"
                : "visible"
            }
            variants={buttonVariants}
          >
            <a href="tel:+917404040286" className={styles.textX}>
              Contact Us | +917404040286
            </a>
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Animation;
