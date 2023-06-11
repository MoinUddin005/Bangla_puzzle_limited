/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Inspiration = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 bg-sky-800">
      <div className="grid-cols-1 justify-self-end">
        <h1 className="uppercase text-3xl font-semibold pt-20 text-white" >MY LEADER AND INSPIRATION</h1>
       
        <h1 className="pt-5 text-2xl font-semibold text-white">
        - Hon'ble Prime Minister Sheikh Hasina
        </h1>

        <button className="btn border-white bg-sky-800 hover:text-black text-white hover:bg-white btn-secondary mt-5 w-40 h-10">
          Learn More <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="grid-cols-1 justify-self-start">
        <img
          src="/public/images/achievement/achievement1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Inspiration;
