import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, price, key} = props.product;
    console.log("from review item",props.product.quantity);
    const {handleRemove} = props;
    return (
        <div className="product">
            {/* <div>
                <img src={img} alt="" />
            </div> */}
            <div>
            <h3 className="product-name">{name}</h3>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => handleRemove(key)} className="btn-regular">Remove Item</button>
            </div>
        </div>
    );
};

export default ReviewItem;