import TopLInk from "@/pageSection/ProductDetails/Links/TopLInk";
import style from "./productid.module.css";
import ProductData from "@/pageSection/ProductDetails/ProductDetailsApi/ProductData/ProductData";
interface ProductDetailsType {
  params: { productid: string };
}
const Product = ({ params }: ProductDetailsType) => {
  const { productid } = params;

  return (
    <div className={style.productDetailsId}>
      <TopLInk />
      <div className={`container`}>
        <ProductData productid={productid} />
      </div>
    </div>
  );
};

export default Product;
