import Link from "next/link";
import "./sliderbtn.scss";

const SliderBtn = ({ url, btn_text }) => {
  return (
    <Link href={url} className="yello_btn">
      <span className="button-content">{btn_text} </span>
    </Link>
  );
};
export default SliderBtn;
