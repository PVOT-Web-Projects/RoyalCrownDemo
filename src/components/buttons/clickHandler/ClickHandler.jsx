import "./clickHandler.scss";

const ClickHandler = ({ btn_text, handleClick }) => {
  return (
    <button className="yello_btn" onClick={handleClick}>
      <span className="button-content">{btn_text} </span>
    </button>
  );
};
export default ClickHandler;
