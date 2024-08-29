import "./submitButton.scss";

const SubmitButton = ({ btnName }) => {
  return (
    <button className="submit_button" type="submit" role="button">
      {btnName}
    </button>
  );
};
export default SubmitButton;












