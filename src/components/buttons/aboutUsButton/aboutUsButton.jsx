import "./aboutUsButton.scss";
export default function AboutUsButton({ text }) {
  return (
    <>
      <div className="aboutUsButtonWrapper">
        <button
          className="btn-inner"
        >
          {text}
        </button>
      </div>
    </>
  );
}
