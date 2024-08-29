import AnimatedTextWord from "@/components/AnimatedText/HeadingAnimation"

const HeadingTextAnimation = ({ heading, fontSize, justifyContent , className }) => {
  return (
    <div
      className="animatedText"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
    >
      <AnimatedTextWord
        text={heading ? heading : ""}
        fontSize={fontSize ? fontSize : ""}
        justifyContent={justifyContent ? justifyContent : ""}
       className={className ? className : ""}
      />
    </div>
  );
};
export default HeadingTextAnimation;
