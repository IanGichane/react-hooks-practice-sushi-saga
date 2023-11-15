import React from "react";
import { useState } from "react";

function Sushi({ item }) {
  const [eatSushi,setEatSushi] =useState(false)
  function handleOrderSushi() {
    setEatSushi(!eatSushi);
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleOrderSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {eatSushi ? null : (
          <img src={item.img_url} alt={item.name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {item.name} - ${item.price}
      </h4>
    </div>
  );
}

export default Sushi;

//  "id": 3,
//       "name": "Oh Sake",
//       "img_url": "./sushi/sake.png",
//       "price": 10,
//       "created_at": "2018-07-27T18:53:16.248Z"
