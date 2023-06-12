import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  // get single product
  const product = products.find((item) => item.id === parseInt(id));
  // console.log(product);
  if (!product) {
    return <section className="h-screen flex justify-center items-center">Loading...</section>;
  }
  // destructure product
  const { title, description, price, image } = product;
  return (
    <section className="pb-12 pt-32 lg:py-32 flex items-center h-screen">
      <div className="container mx-auto">
        {/* image & text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 items-center justify-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
            <div className="font-medium text-red-500 text-xl mb-6">{price}</div>
            <p className="mb-8">{description}</p>
            <button onClick={() => addToCart(product, product.id)} className="bg-primary py-4 px-8 text-white" type="button">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
