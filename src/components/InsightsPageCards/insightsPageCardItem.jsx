import "./insightsPageCardItem.css";


export default function InsightsPageCardItem({
  index,
  title,
  setHoverImage,
  description,
}) {
  return (
  <div className="MainInsightPage">
      <div
      onMouseEnter={() => {
        setHoverImage({ active: true, index });
      }}
      onMouseLeave={() => {
        setHoverImage({ active: false, index });
      }}
      className={"project"}
    >
      <p className="InsightsTitle">{title}</p>
      <p className="InsightsDescription">{description}</p>
    </div>
  </div>
  );
}

// ServicesPageCardItem.propTypes = {
//   index: PropTypes.number,
//   title: PropTypes.string,
//   setHoverImage: PropTypes.func,
//   description: PropTypes.string,
// };
