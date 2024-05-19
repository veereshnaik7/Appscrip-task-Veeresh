import React from 'react';
import './style.css';
const Spinner = () => {
    return (
        <div className={"productCard skeleton"}>
        <div className={"productImage skeleton"}></div>
        <div className="productDetails">
            <div className="productTitle skeleton"></div>
            <div className="productDescription skeleton">
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
            </div>
        </div>
    </div>
    
    );
};

export default Spinner;