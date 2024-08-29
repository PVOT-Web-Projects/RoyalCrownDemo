"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import "./laminates.scss";
import icon1 from "../../images/Icons-11-2048x2048.png";
import icon2 from "../../images/Icons-12.png";

export default function DissipativeLaminates() {
  return (
    <>
      <div className="laminatesHero">
        <div className="laminatesWrapper">
          <motion.div
            className="laminatesHeader"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div>ELECTROSTATIC DISSIPATIVE LAMINATES</div>
          </motion.div>
          <div className="laminatesBody">
            <div className="laminateBodyDescription">
              <div>
                Stylam Electrostatic Dissipative laminates (ESD) diﬀuse static
                electric charge to minimise electrostatic charge. These ESD
                laminates have excellent Electro Static Dissipative property
                with 1 X 108 Ω point to point resistance point to ground
                resistance of 1 X 108 Ω and meet all required speciﬁcations for
                electrostatic dissipative properties. ESD laminates is suitable
                for a wide range of applications in IT oﬃces, Call Centers,
                Laboratories, Electronic Industries and Pharmaceutical Labs.
              </div>
            </div>

            <div className="laminatesBoxOuter">
              <div className="laminatesBoxInner">
                <div className="laminatesBox1">
                  <div>
                    <Image src={icon1} alt="" className="laminateIconImage" />
                  </div>
                  <div>
                    <p className="laminatesBoxHeader">SHEET THICKNESS</p>
                  </div>
                  <div>
                    <div>0.7 mm & above</div>
                  </div>
                </div>
                <div className="laminatesBox1">
                  <div>
                    <Image src={icon2} alt="" className="laminateIconImage" />
                  </div>
                  <div>
                    <p className="laminatesBoxHeader">SHEET SIZE</p>
                  </div>
                  <div>
                    <ul>
                      <li>1220 mm x 2440 mm</li>
                      <li>1220 mm x 2440 mm</li>
                      <li>1220 mm x 2440 mm</li>
                      <li>1220 mm x 2440 mm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
