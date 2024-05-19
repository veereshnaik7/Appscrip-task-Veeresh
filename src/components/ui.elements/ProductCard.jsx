import React from "react";
import "./style.css";
import Image from "next/image";
import { png } from "@/constants/constants";

const ProductCard = ({ product }) => {
  return (
    <div className={"productCard"}>
      <div className={"productImage"}>
        <img
          src={product?.image}
          alt={product?.title}
          width={180}
          height={200}
        />
      </div>

      <div className="productDetails">
        <div className="productDescription">
          
          <div id="like">
          <p id="productTitle">{product?.title}</p>
            {" "}
            <Image
              src={png?.heart}
              alt="Heart Icon"
              width={19}
              height={19}
              className="heart-icon"
            />
          </div>
         
            <p id="sign">
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "gray",
                  marginRight:"2px"
                }}
              >
                Sign in 
              </span>
               or Create an account to <br /> see pricing
            </p>
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
