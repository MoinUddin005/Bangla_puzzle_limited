/* eslint-disable no-unused-vars */
import React from "react";

const Vediogallery = () => {
  return (
    <div className="bg-sky-800">
      <div className="container ">
        <div className="pt-10 pb-8">
          <h1 className="text-white text-4xl font-bold tracking-widest pl-16">
            Video Gallery
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2   justify-items-center pb-5">
          <div className="lg:pl-40 ">
            <iframe
              src="https://www.youtube.com/embed/k0FC8biMK6A"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
          <iframe
              src="https://www.youtube.com/embed/YrpRgqawOBo"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="lg:pr-40">
          <iframe
              src="https://www.youtube.com/embed/Cn-q-gXmrBA"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2   justify-items-center pb-5">
          <div className="lg:pl-40">
          <iframe
              src="https://www.youtube.com/embed/sE64kscT1pA"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
          <iframe
              src="https://www.youtube.com/embed/o3rR5_O0hss"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="lg:pr-40">
          <iframe
              src="https://www.youtube.com/embed/sPWnaUul8OQ"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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

export default Vediogallery;
