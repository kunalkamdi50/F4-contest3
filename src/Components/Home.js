import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../redux/actions/productAction";
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from "../redux/actions/cartActions";
import"./Home.css"

const Home = () => {
 const {products} = useSelector(state => state.product)
    const dispatch = useDispatch()
   
const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProducts())
    },[]);

 const handleAddToCart = product =>{
    dispatch(addToCart(product));
 };

 const handleGoToCart = () => {
    navigate('/mycart');
  };

    return(
        <div className="homepage">
  <div className="navbar">
        <div className="left-section">
          <h1>Shopping Cart</h1>
        </div>
        <div className="right-section">
          <Link to="/">Home</Link>
          <Link to="/mycart">MyCart</Link>
        </div>
      </div>
            <h1>Home Page</h1>
            <div className="product-list">
             {
                products.length>0 &&(
                    
                        products.map(product =>(
                             <div className="product-card" key={product.id}
                              >
                                <img 
                                src={product.thumbnail} alt={product.title} />
                                <div className="product-details">
                                <h2>{product.title}</h2>
                               <h3> {product.brand}</h3>
                                <p>{product.description}</p>
                                <h3>Price: Rs{product.price}</h3>

                                <button onClick={()=>handleAddToCart(product)}>
                                    Add to Cart</button>
                                </div>

                             </div>
                                
                                )
                             )
                    
                )
             }
             </div>
        </div>
    )
}
export default Home;