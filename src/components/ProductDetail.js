import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./product";

function ProductDetail() {
  const params = useParams();
  const api_url = "https://fakestoreapi.com/products";
  const [product, setproduct] = useState({});
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((respo) => respo.json())
      .then((prod) => setproduct(prod));
    }, []);
  return (
    <>
    <Product product ={product} showbutton={false}/>
    </>
  );
}
export default ProductDetail;
