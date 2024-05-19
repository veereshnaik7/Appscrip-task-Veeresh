import React from "react";
import './style.css';
import Image from "next/image";
import { png } from "@/constants/constants";

const ProductCard = ({ product }) => {
    return (
        <div className={"productCard"}>
            <div className={"productImage"} >
                <Image src={product?.image} alt={product?.title} width={180} height={200} />
            </div>

            <div className="productDetails">
                <h2 className="productTitle">{product?.title}</h2>

                <div className="productDescription" >
                    <div>
                        <p>
                        <span style={{ textDecoration: 'underline', textDecorationColor: 'gray' }}>Sign in</span> or Create an account to see pricing
                        </p>
                    </div>
                    <div>  <Image src={png?.heart}
                        alt="Heart Icon"
                        width={19}
                        height={19}
                        className="heart-icon"
                    /></div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
