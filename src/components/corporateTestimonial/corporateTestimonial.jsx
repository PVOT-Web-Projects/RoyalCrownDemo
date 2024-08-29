import "./corporateTestimonial.scss";
import testimonialImage from "../../images/testimonial.png";
import Image from "next/image";
export default function CorporateTestimonial() {
  return (
    <div className="corporateTestimonialWrapper">
      <div className="coporateTestimonialContainer">
        <div>
          <div className="coporateTestimonialSvg">
            <svg
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              height="100"
              width="100"
              fill="#5B3524"
            >
              <path
                d="m21.301 4c.411 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.738 4.129-4.308 4.129-3.24 0-4.83-2.547-4.83-5.307 0-5.98 6.834-10.693 8.468-10.693zm-10.833 0c.41 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.739 4.129-4.308 4.129-3.241 0-4.83-2.547-4.83-5.307 0-5.98 6.833-10.693 8.468-10.693z"
                fill-rule="nonzero"
              />
            </svg>
          </div>
          <div className="corporateTestimonialContent">
            <p>
              In a free enterprise, the community is not just another
              stakeholder in business, but is in fact the very purpose of its
              existence.
            </p>
          </div>
        </div>
        <div className="corporateTestimonialFooterContainer">
          <div className="testimonialFooterImage">
            <Image src={testimonialImage} alt="" className="testimonialFooterImageInner"/>
          </div>
          <div className="testimonialFooterDesciption">
            <div className="testimonialFooterHeader">
              <p>Jitendra Patel</p>
            </div>
            <div className="testimonialFooterDescription">
              <p>Chairman / Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
