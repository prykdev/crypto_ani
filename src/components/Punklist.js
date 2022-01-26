import React from "react";
import CollectionCard from "./CollectionCard";
import "./Punklist.css"

const Punklist = ({ punklistData, setSelectedPunk }) => {
  console.log(punklistData)
  return <>
  <div className="punklist">
      {
          punklistData.map(punk=>
          
              <div onClick={()=> setSelectedPunk(punk.token_id)}>
                <CollectionCard
                  key={punk.token_id}
                  id={punk.token_id}
                  name={punk.name}
                  traits={punk.traits}
                  image={punk.image_preview_url}
                  link = {punk.permalink}
                
                />
                  
              </div>
          )
      }
  </div>
  </>;
};

export default Punklist;
