import Link from "next/link";
import "./linkHover.scss";
import PageTransition from "../pageTransition/PageTransition";
const LinkHover = ({ url, text, color, fontSize, textTransform, HoverBtn, isHomePage , children }) => {
  return (
    <PageTransition
      href={url}
      style={{ color: color, fontSize: fontSize, textTransform:textTransform }}
      className={`linkHover ${isHomePage ? 'homePage' : ''}`}
    >
      <span> {text}</span>
      <span style={{color: HoverBtn}}>{text}</span>
    </PageTransition>
  );
};
export default LinkHover;
