import React from "react";
import laptop from "../../../../public/laptop-comp.jpg";

const WhyCard = ({ title, sentence, image }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image.src})` }}
      className="rounded-sm pt-12 w-64 h-96 bg-cover bg-no-repeat p-4 "
    >
      <h3 className=" text-white text-left mb-6 text-2xl">{title}</h3>
      <p className=" text-white text-left">{sentence}</p>
    </div>
  );
};

export default WhyCard;
