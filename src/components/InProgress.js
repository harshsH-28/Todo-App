import React from "react";
import Card from "./Card";

function InProgress({ inProgress, handleRight, handleLeft }) {
  return (
    <div>
      <h1 className="w-40 h-10 font-semibold text-2xl text-center bg-green-600 shadow-xl rounded-lg">
        InProgress
      </h1>
      {inProgress.map((item) => {
        return <Card leftClick={handleLeft} rightClick={handleRight} />;
      })}
    </div>
  );
}

export default InProgress;
