import React from "react";

function MoreButton({ limit, addLimit }) {
  function handleClick() {
    addLimit(limit);
  }
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
