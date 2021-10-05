import React, { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // products to be rendered on the UI
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setFilterData(data);
        })
    }, [])

    useEffect(() => {
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
                const addedProduct = products.find(product => product.key === key);

                if(addedProduct){

                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);

                }
                // console.log(key, addedProduct);
            }
            setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = product => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);

        // Save to local storage for now
        addToDb(product.key);
    }

    const handleSearch = event =>{

        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilterData(matchedProducts);
        console.log(matchedProducts.length);

    }

    return (
        <div>
            <div className="search-container">
            <input 
            type="text" 
            onChange = {handleSearch}
            placeholder="type here to search" />
        </div>
        <div className="shop-container">
            <div className="product-container">
                
                {
                    filterData.map(product => <Product 
                        key = {product.key}
                        product={product}
                        handleAddToCart = {handleAddToCart}
                        >
                        </Product>)
                }
            </div>
            <div className="cart-container">
                {/* <h3>Order Summary</h3>
                <h5>Items Ordered: {cart.length}</h5> */}
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="btn-regular">Review Your Order</button>
                    </Link>

                </Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;