import React, { useEffect, useState } from "react";

function Card({ rightClick, leftClick, card }) {
  const [clicked, setClicked] = useState(false);
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    card.title = title;
    card.description = description;
  }, [title, description]);

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer w-[30vh] h-[20vh] mt-10 bg-slate-600 flex flex-col justify-center items-center shadow-xl rounded-lg"
    >
      <input
        type="text"
        placeholder="Title"
        className=""
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Description"
        className="mt-4"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      {clicked ? (
        <div className="flex justify-around text-white mt-4">
          <button onClick={leftClick} className="mr-6">{`<`}</button>
          <button className="mr-6">-</button>
          <button onClick={rightClick} className="">{`>`}</button>
        </div>
      ) : null}
    </div>
  );
}

export default Card;
