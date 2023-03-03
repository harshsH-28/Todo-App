import React, { useEffect } from "react";
import Card from "./Card";

function Todo({ todo, handleRight }) {
  return (
    <div>
      <h1 className="w-28 h-10 font-semibold text-2xl text-center bg-green-600 shadow-xl rounded-lg">
        Todo
      </h1>
      {todo.map((item) => {
        return <Card rightClick={handleRight} />;
      })}
    </div>
  );
}

export default Todo;
