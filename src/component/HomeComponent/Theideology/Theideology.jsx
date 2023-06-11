/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Theideology = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-12 mt-40">
      <div className="grid-cols-1 justify-self-end">
        <img
          className="h-64"
          src="../../images/publication/row-image-Mujib100.png"
          alt=""
        />
      </div>
      <div className="grid-cols-1">
        <h1 className="uppercase text-3xl font-semibold ">the ideology</h1>
        <p className="pt-5 text-lg">
          My greatest strength is the love for my people, My <br /> greatest
          weakness is that I love them too much.
        </p>
        <h1 className="pt-5 text-2xl font-semibold">
          -Bangabandhu Sheikh Mujibur Rahman
        </h1>

        <button className="btn border-black bg-white hover:text-white text-black hover:bg-green-900 btn-secondary mt-5 w-40 h-10">
          Learn More <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Theideology;
