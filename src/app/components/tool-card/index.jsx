import React from "react";

const ToolCard = ({ number, title, sentence }) => {
  return (
    <div className="size-64 p-4 bg-white rounded-2xl hover:bg-primary group ">
      <p className=" text-left text-primary font-bold text-3xl mb-2 group-hover:text-white">
        {number}
      </p>
      <h2 className="mb-2 text-left">{title}</h2>
      <p className="text-text text-left group-hover:text-white">{sentence}</p>
    </div>
  );
};

export default ToolCard;
