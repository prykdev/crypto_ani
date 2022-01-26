import React from "react";
import "./CollectionCard.css";
import weth from "../assets/weth.png";

const CollectionCard = ({ id, name, traits, image, link }) => {
  console.log(id);
  return (
    <>
      <div className="collectionCard">
        <img src={image} />
        <div className="details">
          <div className="name">
            {name} <div className="id">.#{id} </div>
          </div>
          <div className="priceContainer">
            <img src={weth} className="wethImage" alt="" />
            <div className="price">{traits[0]?.value} </div>
          </div>

          <div className="BuyContainer">
            <a href={link} className="buyme" target="_blank">
              BUY ME
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionCard;
