import ProductCategoryHeader from "@/components/product_category_header/page";
import "./category.scss";
import DissipativeLaminates from "@/components/Dissipative_laminates/page";
import ProductConstruct from "@/components/product_construct/product_construct";
import ProductFeatures from "@/components/productFeatures/productFeatures";
import ProductApplication from "@/components/product_application/product_application";
const Category = () => {
  return (
    <>
      <ProductCategoryHeader />
      <DissipativeLaminates/>
      <ProductConstruct/>
      <ProductFeatures/>
      <ProductApplication/>
    </>
  );
};
export default Category;
