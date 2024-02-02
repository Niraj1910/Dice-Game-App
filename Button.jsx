import React from "react";

function Button({ number, onClick, clicked, color = "500" }) {
  return (
    <button
      onClick={() => onClick(number)}
      className={`w-10 h-10 mx-2 my-3 bg-emerald-${
        clicked === number ? "800" : 500
      } rounded-xl hover:bg-emerald-800`}
    >
      {number}
    </button>
  );
}

export default Button;
