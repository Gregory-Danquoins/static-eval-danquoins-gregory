import React from "react";
import laptop from "../../../../public/laptop-comp.jpg";

export const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${laptop.src})` }}
      className="relative bg-cover bg-no-repeat w-[90vw] h-[40vw] lg:h-[30vw] flex flex-col justify-center mx-auto rounded-sm top-18"
    >
      <h1 className="text-white uppercase md:text-3xl">
        Travaillez <br /> intelligement <br />
        collaborez partout
      </h1>
    </div>
  );
};
