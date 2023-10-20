import { useEffect, useState } from "react";
import Product from "./product";
import Spinner from "./Spinner";
function ProductList() {
  const url_prod = "https://fakestoreapi.com/products";
  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);
  function getproducts(prod) {
    console.log(prod);
    if (prod === "All" || prod ===undefined) {
      fetch(`${url_prod}`)
        .then((response) => response.json())
        .then((data) => setproducts(data));
    } else {
      fetch(`${url_prod}/category/${prod}`)
        .then((response) => response.json())
        .then((data) => setproducts(data));
    }
  }
  function getCategories() {
    fetch(`${url_prod}/categories`)
      .then((res) => res.json())
      .then((json) => setcategories(json));
  }
  useEffect(() => {
    getCategories();
    getproducts();
  }, []);
  return (
    <>
      <h2 className="text-center p-3">Our-Products</h2>
      <div className="container">
        <button
          onClick={() => {
            getproducts("All");
          }}
          class="btn btn-primary ms-5 me-3"
        >
          All
        </button>
        {categories.map((cat) => {
          return (
            <button
              onClick={() => {
                getproducts(cat);
              }}
              class="btn btn-primary ms-3 me-3"
            >
              {cat}
            </button>
          );
        })}
        <div className="row">
          {products.length==0 ? <Spinner/> : products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showbutton={true} />
              </div>
            );
          })}

        </div>
      </div>
    </>
  );
}
export default ProductList;
