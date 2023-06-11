/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faAt,
  faNewspaper,
  faPassport,
} from "@fortawesome/free-solid-svg-icons";

const Constituentservices = () => {
  return (
    <div className=" bg-sky-800 w-full">
      <div className="pt-5 pb-5 ">
        <div className=" border-y border-blue-500">
          <div className="grid grid-cols-1 pb-8 text-center ">
            <h1 className="uppercase text-white text-5xl font-bold tracking-wider mt-10">
              constituent Services
            </h1>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:ml-64 lg:pr-60 grid-cols-1 justify-items-center mb-10">
            <div className="w-36 h-36 rounded-full  bg-blue-500 text-center">
              <h1 className="mt-8 text-5xl font-bold tracking-wider text-white">
                <FontAwesomeIcon icon={faAt} />
              </h1>
              <h1 className="text-xl  text-white">Email Me</h1>
            </div>
            <div className="grid-col-1 w-36 h-36 rounded-full bg-blue-500 text-center">
              <h1 className="mt-8 text-5xl font-bold tracking-wider text-white">
                <FontAwesomeIcon icon={faPhone} />
              </h1>
              <h1 className="text-xl  text-white">Call me</h1>
            </div>
            <div className="grid-col-1 w-36 h-36 rounded-full bg-blue-500 text-center">
              <h1 className="mt-8 text-5xl font-bold tracking-wider text-white">
                <FontAwesomeIcon icon={faNewspaper} />
              </h1>
              <h1 className="text-xl  text-white">News</h1>
            </div>
            <div className="grid-col-1 w-36 h-36 rounded-full bg-blue-500 text-center">
              <h1 className="mt-8 text-5xl font-bold tracking-wider text-white">
                <FontAwesomeIcon icon={faPassport} />
              </h1>
              <h1 className="text-xl  text-white">Visit Us</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Constituentservices;
