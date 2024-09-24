import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis"; // Import Lenis
// import MusicPlayer from "@/Components/musicPlayer/page";
import { motion, useAnimation } from "framer-motion";
// import HeadingTextAnimation from "@/components/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import styles from "@/components/Home_page_Banner/Banner.module.css";
import "./scroll.css";
import Link from "next/link";
import Popup from "@/components/Popup/page";
// import Image from "next/image";
// import Img1 from "@/images/livingroom.svg"
gsap.registerPlugin(ScrollTrigger);

const Animation = ({ loadImage, counter }) => {
  const [info, setInfo] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  // const [animationEnded, setAnimationEnded] = useState(false);
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
  const [popup, setPopup] = useState(false);
  const [frameCount, setFrameCount] = useState(0);
  const [imageBaseUrl, setImageBaseUrl] = useState("");
  const handlePopup = () => {
    setPopup(true);
  };
  const handlePopupClose = () => {
    setPopup(false);
  };
  console.log(loadingCounter);
  // Define frame counts and base URLs for each tab
  const tabs = [
    {
      frameCount: 290,
      imageBaseUrl:
        "https://interiormaataassets.humbeestudio.xyz/mainsiteassets/desktop/",
    },
    {
      frameCount: 250,
      imageBaseUrl:
        "https://interiormaataassets.humbeestudio.xyz/mainsiteassets/desktop/",
    },
    {
      frameCount: 300,
      imageBaseUrl:
        "https://interiormaataassets.humbeestudio.xyz/mainsiteassets/desktop/",
    },
  ];
  useEffect(() => {
    const defaultTabIndex = 0; // Set default tab index
    setActiveTab(defaultTabIndex);
    setFrameCount(tabs[defaultTabIndex].frameCount);
    setImageBaseUrl(tabs[defaultTabIndex].imageBaseUrl);
    loadImages(tabs[defaultTabIndex].frameCount, tabs[defaultTabIndex].imageBaseUrl);
  }, []);
  const handleTabChange = (index) => {
    console.log(`Tab clicked: ${index}`); // Log the clicked tab index
    setActiveTab(index);
    setFrameCount(tabs[index].frameCount);
    setImageBaseUrl(tabs[index].imageBaseUrl);
    imagesRef.current = []; // Clear previous images
    setLoading(true); // Reset loading state
    // Reset the frame to 0 for the new tab
  airpodsRef.current.frame = 0; // Reset frame to the first frame
  loadImages(tabs[index].frameCount, tabs[index].imageBaseUrl); // Load images for the new tab
  };
  // const loadImages = async (frameCount, baseUrl) => {
  //   const imgUrls = Array.from(
  //     { length: frameCount },
  //     (_, i) => `${baseUrl}${(i + 1).toString().padStart(4, "0")}.webp`
  //   );
  //   try {
  //     await Promise.all(
  //       imgUrls.map(
  //         (url, index) =>
  //           new Promise((resolve) => {
  //             const img = new Image();
  //             img.src = url;
  //             img.onload = () => {
  //               imagesRef.current.push(img);
  //               setLoadingCounter(index + 1);
  //               resolve();
  //             };
  //             img.onerror = () => {
  //               console.error(`Error loading image: ${url}`);
  //               resolve(); // Resolve even on error to continue loading others
  //             };
  //           })
  //       )
  //     );
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error loading images:", error);
  //   }
  // };

  const loadImages = async (frameCount, baseUrl) => {
    const imgUrls = Array.from(
      { length: frameCount },
      (_, i) => `${baseUrl}${(i + 1).toString().padStart(4, "0")}.webp`
    );
    setLoading(true); // Set loading to true immediately
    
    const promises = imgUrls.map((url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          imagesRef.current.push(img);
          resolve();
        };
        img.onerror = () => {
          console.error(`Error loading image: ${url}`);
          resolve(); // Resolve to allow other images to load
        };
      });
    });
  
    await Promise.all(promises);
    // Reset to the first frame once images are loaded
  airpodsRef.current.frame = 0; 
  render(); // Call render to display the first image
    setLoading(false);
  };
  
  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    const setCanvasSize = () => {
      // const originalWidth = 1632;
      // const originalHeight = 918;
      // const aspectRatio = originalWidth / originalHeight;
      // const availableWidth = window.innerWidth;
      const aspectRatio = 1632 / 918;
      const availableWidth = window.innerWidth;

      if (availableWidth < 200) {
        canvas.width = 1632 / 2;
        canvas.height = 918 / 2;
        canvas.style.width = "1301px";
        canvas.style.height = "100vh";
      } else {
        canvas.width = 1632;
        canvas.height = 918;
        canvas.style.width = "100%";
        canvas.style.height = "100vh";
      }
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    // https://interiormaataassets.humbeestudio.xyz/mainsiteassets/desktop/0001.webp
    // const frameCount = 290;
    // const currentFrame = (index) =>
    //   `https://interiormaataassets.humbeestudio.xyz/mainsiteassets/desktop/${(
    //     index + 1
    //   )
    //     .toString()
    //     .padStart(4, "0")}.webp`;

    // let imgL = [];
    // for (let i = 0; i < frameCount; i++) {
    //   let img = new Image();
    //   img.src = currentFrame(i);
    //   imagesRef.current.push(img);
    //   imgL.push(img.src);
    // }

    // const loadImages = async () => {
    //   try {
    //     const loadImagePromises = imgL.map((imageUrl, index) => {
    //       return new Promise((resolve) => {
    //         const img = new Image();
    //         img.src = imageUrl;
    //         img.onload = () => {
    //           setLoadingCounter(index + 1);
    //           resolve();
    //         };
    //       });
    //     });

    //     await Promise.all(loadImagePromises);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error("Error loading images:", error);
    //   }
    // };
    // loadImages();
    // console.log(imgL);
    // console.log("Counter", loadingCounter);

    const animationTimeline = gsap.timeline({
      onUpdate: render,
      // onComplete: () => setAnimationEnded(true),
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: false, // Increase scrub value for smoother transitions effect it will take 2 seconds to scroll use true for default effect
        //       smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        // effects: true, // looks for data-speed and data-lag attributes on elements
        // smoothTouch: 100,
        end: "+=1400%",
        onUpdate: (self) => {
          const progress = self.progress;
          airpodsRef.current.frame = Math.floor(progress * (frameCount - 1));
          render();
        },
      },
    });
    // Check if there are images loaded before setting the onload
    if (imagesRef.current.length > 0) {
      imagesRef.current[0].onload = render;
    }

    function render() {
      if (imagesRef.current[airpodsRef.current.frame]) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          imagesRef.current[airpodsRef.current.frame],
          0,
          0,
          canvas.width,
          canvas.height
        );
      }
    }
    // animationTimeline.to(airpodsRef.current, {
    //   frame: frameCount - 1,
    //   snap: "frame",
    //   ease: "none",
    //   duration: 1,
    // });

    // imagesRef.current[0].onload = render;

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
  }, [frameCount, loadingCounter]);

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
    upsideDown: { opacity: 0, y: 180, transition: { duration: 0.3 } },
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
         {/* {loading && <div className={styles.loadingPlaceholder}>Loading...</div>} */}
      </section>

      {scrollPercentage >= 10 && (
        <div className={styles.buttonOuter} ref={buttonRef}>
          <div>
            <motion.div
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
              {/* <div className={styles.tabContainer}> */}
                {tabs.map((tab, index) => (
                  <div
                    className={styles.textX}
                    key={index}
                    onClick={() => handleTabChange(index)}
                  >
                    <svg
                      width="48"
                      height="60"
                      viewBox="0 0 48 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Path Definitions Here */}
                      <path
                        d="M16 59H32"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M24 59V38"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M23.9999 1C30.9609 1 34.4414 1 37.1636 2.61138C37.9527 3.07849 38.6824 3.63776 39.337 4.27717C41.5955 6.48283 42.47 9.82051 44.2191 16.4959L44.461 17.4194C46.8393 26.4947 48.0283 31.0323 45.8683 34.22C45.6532 34.5382 45.4162 34.8413 45.1596 35.1279C42.588 38 37.8565 38 28.3931 38H19.607C10.1435 38 5.41184 38 2.84017 35.1279C2.58367 34.8413 2.34691 34.5382 2.13151 34.22C-0.0282107 31.0323 1.16081 26.4947 3.5388 17.4194L3.7808 16.4959C5.52996 9.82051 6.40457 6.48283 8.6628 4.27717C9.31745 3.63776 10.0472 3.07849 10.8363 2.61138C11.3596 2.30163 11.9109 2.05143 12.5096 1.84932"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M40 38V45"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                ))}
              {/* </div> */}
            </motion.div>
          </div>
        </div>
      )}
      {/* info button  */}
      {scrollPercentage >= 10 && (
        <div className={styles.buttonOuter} ref={buttonRef}>
          <div className={styles.ModalPopupOuter}>
            <div className={styles.footerPopup}>
              {popup && <Popup close={handlePopupClose} />}
            </div>
            <motion.div
              onClick={handlePopup}
              className={styles.buttonXInner}
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
              <div className={styles.textX}>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="white"
                >
                  <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm.5 17h-1v-9h1v9zm-.5-12c.466 0 .845.378.845.845 0 .466-.379.844-.845.844-.466 0-.845-.378-.845-.844 0-.467.379-.845.845-.845z" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Animation;
