import KeyFeaturesInfo from "@/components/key_features_info/page";
import ProductInfoSlider from "@/components/productinfoslider/page";
import RelatedProductInfo from "@/components/related_products_info/page";
import SocialPage from "@/components/socialPage/socialpage";
import Form from "@/components/forms/form1/Form";
import "./productInfo.scss";
import SocialMediaImg from "@/images/socials-image.png";
const ProductInformation = () => {
  return (
    <div>
      <ProductInfoSlider />
      {/* Need to change */}
      <KeyFeaturesInfo />
      <RelatedProductInfo />
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
    </div>
  );
};
export default ProductInformation;
