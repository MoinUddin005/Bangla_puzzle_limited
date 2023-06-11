/* eslint-disable no-unused-vars */
import React from "react";

const Photogallery = () => {
  return (
    <div>
      <div className="container ">
        <div className="pt-10 pb-8">
          <h1 className="uppercase text-4xl font-bold tracking-widest pl-16">
            photo Gallery
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-1 justify-items-center pb-1 lg:pl-20">
          <div className="relative overflow-hidden">
            <img
              className="w-full h-72 transition-transform hover:scale-110"
              src="../../images/gallery/image4.jpg"
              alt=""
            />
          </div>
          <div className="relative overflow-hidden">
            <img
              className="w-full h-72 transition-transform hover:scale-110"
              src="../../images/gallery/image9.jpg"
              alt=""
            />
          </div>
          
          <div className="relative overflow-hidden">
            <img
              className="w-full h-72 transition-transform hover:scale-110"
              src="../../images/gallery/image7.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-1 justify-items-center pb-1 lg:pl-20">
        <div className="relative overflow-hidden">
            <img
              className="w-full h-72 transition-transform hover:scale-110"
              src="../../images/gallery/image10.jpg"
              alt=""
            />
          </div>
          <div className="relative overflow-hidden">
            <img
              className="w-full h-72 transition-transform hover:scale-110"
              src="../../images/gallery/image5.jpg"
              alt=""
            />
          </div>
          <div className="relative overflow-hidden">
            <img
              className="w-full h-72 transition-transform hover:scale-110"
              src="../../images/gallery/image5.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="grid justify-items-center pb-5">
          <button className="btn  border-white bg-sky-800 hover:text-black text-white hover:bg-white btn-secondary mt-5 w-40 h-10">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Photogallery;
