import Link from "next/link";
import "./yellowButton.scss";

const YellowButton = ({ url, btn_text }) => {
  return (
    <Link href={url} className="yello_btn">
      <span className="button-content">{btn_text} </span>
    </Link>
  );
};
export default YellowButton;
