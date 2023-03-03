import React, { useState } from "react";
import Todo from "../components/Todo.js";
import InProgress from "../components/InProgress.js";
import Done from "../components/Done.js";

function Home() {
  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  const handleTodoRight = () => {
    const card = todo.splice(0, 1)[0];
    setTodo([...todo]);
    setInProgress([...inProgress, card]);
  };

  const handleInProgressRight = () => {
    const card = inProgress.splice(0, 1)[0];
    setInProgress([...inProgress]);
    setDone([...done, card]);
  };

  const handleInProgressLeft = () => {
    const card = inProgress.splice(0, 1)[0];
    setInProgress([...inProgress]);
    setTodo([...todo, card]);
  };

  const handleDoneLeft = () => {
    const card = done.splice(0, 1)[0];
    setDone([...done]);
    setInProgress([...inProgress, card]);
  };

  const addinTodo = () => {
    const newTodo = {
      title: "",
      description: "",
    };
    setTodo([...todo, newTodo]);
  };
  return (
    <div className="relative">
      <div className="flex justify-around mt-10">
        <Todo todo={todo} handleRight={handleTodoRight} />
        <InProgress
          inProgress={inProgress}
          handleRight={handleInProgressRight}
          handleLeft={handleInProgressLeft}
        />
        <Done done={done} handleLeft={handleDoneLeft} />
      </div>
      <button
        onClick={addinTodo}
        className="fixed w-16 h-16 inset-0 boder-2 border-black rounded-full bg-[#FFC93C] shadow-md"
      >
        +
      </button>
    </div>
  );
}

export default Home;
