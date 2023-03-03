import React from "react";
import Card from "./Card";

function Done({ done, handleLeft }) {
  return (
    <div>
      <h1 className="w-28 h-10 font-semibold text-2xl text-center bg-green-600 shadow-xl rounded-lg">
        Done
      </h1>
      {done.map((item) => {
        return <Card card={item} leftClick={handleLeft} />;
      })}
    </div>
  );
}

export default Done;
