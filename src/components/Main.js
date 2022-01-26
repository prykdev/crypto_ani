import React, { useState, useEffect } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";
const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setactivePunk] = useState(punkListData[0]);
  const [activeLink, setactiveLink] = useState(punkListData[0]);

  useEffect(() => {
    console.log(activePunk)
  
    setactivePunk(punkListData[selectedPunk]);
    setactiveLink(punkListData[activeLink]);

  }, [punkListData, selectedPunk]);

  return (
    <>
      <div className="main">
        <div className="mainContent">
          <div className="punkHighlight">
            <div className="punkContainer">
              
            </div>
          </div>
          <div className="punkContainer">
              
            </div>
          <div className="punkDetails" style={{ color: "#fff" }}>
            <div className="merge">
            <div className="punkContainer">
              <img
                className="selectedPunk"
                src={activePunk.image_preview_url}
                alt=""
              />
            </div>
            <div className="title-num">
              <div className="title">{activePunk.name}</div>
              <div>
                <span className="itemNumber">.#{activePunk.token_id}</span>
              </div>
              </div>

            </div>
          </div>
          <div className="owner">
              <img
                className="ownerImageContainer"
                src={activePunk.owner.profile_img_url}
                alt=""
              />
            <div className="ownerDetails">
              <div className="ownerNameAndHandel">
                <div>{activePunk.owner.address}</div>
                <div className="ownerHandel">@priyanka prasad</div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
