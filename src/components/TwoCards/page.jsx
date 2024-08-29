import React from "react";
import "./twocards.scss";
import Link from "next/link";
import Image from "next/image";
import Img1 from "@/images/Cardscareer.png";
import Img2 from "@/images/Cards2career.png";
const Card = ({ CardImage, CardTitle, CardDescription ,BtnText }) => {
  return (
    <div className="Twocard">
      <Image src={CardImage} alt="Image1" className="Twocard-image" />
      <div className="Twocard-content">
        <h3 className="Twocard-title">{CardTitle}</h3>
        <p className="Twocard-description">{CardDescription}</p>
        <div>
        <Link href="#" className="Twocard-link">
            {BtnText}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="Twocards-container">
      <Card 
        CardImage={Img1}
        CardTitle="Employee Benefits"
        CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        BtnText={"Learn More"}
      />
      <Card
        CardImage={Img2}
        CardTitle="How We Hire"
        CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        BtnText={"Learn More"}
      />
    </div>
  );
};

export default Cards;
