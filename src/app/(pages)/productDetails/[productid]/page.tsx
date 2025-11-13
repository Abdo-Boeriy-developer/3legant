import TopLInk from "@/pageSection/ProductDetails/Links/TopLInk";
import style from "./productid.module.css";
import ProductData from "@/pageSection/ProductDetails/ProductDetailsApi/ProductData/ProductData";
import WriteReviews from "@/pageSection/ProductDetails/CustomerReviews/WriteReviews";
interface ProductDetailsType {
  params: { productid: string };
}
const Product = ({ params }: ProductDetailsType) => {
  const { productid } = params;

  return (
    <div className={`${style.productDetailsId} container`}>
      <TopLInk />
      <div className={`container`}>
        <ProductData productid={productid} />
      </div>
      <WriteReviews />
    </div>
  );
};

export default Product;
