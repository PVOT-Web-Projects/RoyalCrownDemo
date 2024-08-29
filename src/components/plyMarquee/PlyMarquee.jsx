"use client";
const { default: Image } = require("next/image");
const { default: Marquee } = require("react-fast-marquee");
import img1 from "@/images/newplyimg1.png";
import img2 from "@/images/newplyimg1.png";
import img3 from "@/images/newplyimg1.png";
import img4 from "@/images/newplyimg1.png";
import img5 from "@/images/newplyimg1.png";
import img6 from "@/images/newplyimg1.png";
import img7 from "@/images/newplyimg1.png";
import "./plyMarquee.scss";
import "./marquee.css";
import { motion } from "framer-motion";
const PlyMarquee = () => {
  return (
    <div className="ply_marquee">
      <div className="MarqueeTextFirst">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Catalogue
        </motion.div>
        {/* <p>Catalogue</p> */}
      </div>
      <div className="MarqueeTextSecond">
        <p>
          It's a modern minimalist aesthetic look, our luxury laminates cater to
          every desire, ensuring your interiors exude a refined charm that
          captivates and endures.
        </p>
        <p className="MarqueeTextSecondInner">
          Elevate your space with the ultimate expression of luxury and grace.
        </p>
      </div>
      <div className="MarqueMainSection">
        <Marquee class="r3f_marquee" speed={50} pauseOnHover={true}>
          <div className="ply_list">
            <div className="ply_item top1">
              <div className="ply_info">
                <div className="info_left">
                  <div className="num">6038</div>
                  <div className="text">tw</div>
                </div>
                <div className="info_right">
                  <div className="ply_name">Mauri</div>
                  <div className="ply_wood">true wood</div>
                </div>
              </div>
              <Image src={img1} alt="ply" />
            </div>
            <div className="ply_item bottom1">
              <div className="ply_info">
                <div className="info_left">
                  <div className="num">6038</div>
                  <div className="text">tw</div>
                </div>
                <div className="info_right">
                  <div className="ply_name">Mauri</div>
                  <div className="ply_wood">true wood</div>
                </div>
              </div>
              <Image src={img2} alt="ply" />
            </div>
            <div className="ply_item top1">
              <div className="ply_info">
                <div className="info_left">
                  <div className="num">6038</div>
                  <div className="text">tw</div>
                </div>
                <div className="info_right">
                  <div className="ply_name">Mauri</div>
                  <div className="ply_wood">true wood</div>
                </div>
              </div>
              <Image src={img3} alt="ply" />
            </div>
            <div className="ply_item bottom1">
              <div className="ply_info">
                <div className="info_left">
                  <div className="num">6038</div>
                  <div className="text">tw</div>
                </div>
                <div className="info_right">
                  <div className="ply_name">Mauri</div>
                  <div className="ply_wood">true wood</div>
                </div>
              </div>
              <Image src={img4} alt="ply" />
            </div>
            <div className="ply_item top1">
              <div className="ply_info">
                <div className="info_left">
                  <div className="num">6038</div>
                  <div className="text">tw</div>
                </div>
                <div className="info_right">
                  <div className="ply_name">Mauri</div>
                  <div className="ply_wood">true wood</div>
                </div>
              </div>
              <Image src={img5} alt="ply" />
            </div>
            <div className="ply_item bottom1">
              <div className="ply_info">
                <div className="info_left">
                  <div className="num">6038</div>
                  <div className="text">tw</div>
                </div>
                <div className="info_right">
                  <div className="ply_name">Mauri</div>
                  <div className="ply_wood">true wood</div>
                </div>
              </div>
              <Image src={img6} alt="ply" />
            </div>
            <div className="ply_item top1">
              <div className="ply_info">
                <div className="info_left">
                  <div className="num">6038</div>
                  <div className="text">tw</div>
                </div>
                <div className="info_right">
                  <div className="ply_name">Mauri</div>
                  <div className="ply_wood">true wood</div>
                </div>
              </div>
              <Image src={img7} alt="ply" />
            </div>
            <div className="ply_item bottom1">
              <div className="ply_info">
                <div className="info_left">
                  <div className="num">6038</div>
                  <div className="text">tw</div>
                </div>
                <div className="info_right">
                  <div className="ply_name">Mauri</div>
                  <div className="ply_wood">true wood</div>
                </div>
              </div>
              <Image src={img7} alt="ply" />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};
export default PlyMarquee;
