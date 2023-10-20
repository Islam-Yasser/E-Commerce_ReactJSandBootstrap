import { Link } from "react-router-dom";
function Product(props){
    const {product,showbutton}=props;
    return(
        <>
          <div className="card"></div>
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                {product.description}
              </p>
              <p>Price : {product.price}$</p>
              {showbutton ? <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>:null}
              
            </div>
        </>
    );
}
export default Product;