"use client";
// import Image from "next/image";
// import ClaimImage1 from "@/images/claim_banner.png"
import "./corporateheader.scss";
import { motion } from "framer-motion";
const CorporateImg = () => {
  return (
    <div className="PrivacyMainHeader">
      <div className="PrivacyMainHeaderInner">
        {/* <Image src={ClaimImage1} alt="Claim Banner" className="ClaimBannerImg"/> */}
        <div className="PrivacyMainHeaderInnerText">
          <motion.div
            className="PrivacyMainHeaderInnerTextinner"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Corporate social responsibility
          </motion.div>
          {/* <p >Privacy Policy</p> */}
          <div className="TextCommitInner">
            <p>
            Taking technology to the grassroots
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CorporateImg;
