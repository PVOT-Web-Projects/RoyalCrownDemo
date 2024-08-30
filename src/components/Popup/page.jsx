"use client"
import { useEffect } from "react";
import Image from "next/image";
import styles from "./popup.module.css";
// import popupImage from "@/images/consultancy3.png";
// import Button from "@/Common/Buttons/button8";
import closeIcon from "@/images/closeIcon.svg";
import PopupSlider from "../popupSwiper/popupSlider";
// import YellowSubmitButton from "../buttons/yellowSubmitButton/YellowSubmitButton";
const Popup = ({ close }) => {
  
  return (
    <div className={styles.popupFix}>
      <div className={styles.popup}>
        <div className={styles.close} onClick={close}>
          <Image src={closeIcon} alt="close" />
        </div>
        <div className={styles.popup_wrapper}>
          {/* <div className={styles.image}>
            <Image src={popupImage} alt="PopuImage" />
          </div> */}
          <div className={styles.content}>
            <p className={styles.ContentInner}>Move Between Wishes</p>
            <p>
              Use the direction arrows or select the miniature lamps in the menu
              to move between the four wishes that the IKEA business for you.
            </p>
            <PopupSlider />
            <p className={styles.ContentInner}>Read the wishes</p>
            <p>
              Select the wishes you want to see by clicking on the lamp or
              TRADFRI switch to see details for each of the prizes.
            </p>
            {/* <YellowSubmitButton btn_text={"Connect with us"} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popup;
