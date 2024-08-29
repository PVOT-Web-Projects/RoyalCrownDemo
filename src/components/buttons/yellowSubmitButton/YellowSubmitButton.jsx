import "../yellowButton/yellowButton.scss"

const YellowSubmitButton = ({ btn_text }) => {
  return (
    <button type="submit" className="yello_btn">
      <span className="button-content">{btn_text} </span>
    </button>
  );
};
export default YellowSubmitButton;
