import "./findstoreButton.scss"

const FindStoreButton = ({ btn_text, OnClickSearch }) => {
  return (
    <button type="submit" className="yello_btn1" onClick={OnClickSearch}>
      <span className="button-content" >{btn_text} </span>
    </button>
  );
};
export default FindStoreButton;
