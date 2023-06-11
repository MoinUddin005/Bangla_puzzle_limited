/* eslint-disable no-unused-vars */
import React from "react";

const Initiatives = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 pb-5 justify-items-center">
      <div className="grid-cols-1 justify-self-end lg:pl-72">
        <h1 className="uppercase text-3xl font-semibold  text-sky-800 pt-5">
          INITIATIVES
        </h1>

        <p className=" pt-5">
          ICT Division has taken initiatives to build Digital Bangladesh. Our
          software and service industry is a billion-dollar market and is
          expected to grow our export to USD 5 Billion by 2025. We are serving
          clients in the array of domains –Financial Services, Telecom
          companies, Healthcare. Various Startup projects, High-Tech parks,
          Sheikh Kamal IT Training and Incubation Centers etc projects are
          underway across the country.
        </p>
      </div>
      <div className="grid-cols-1 pb-28">
        <div className="grid grid-cols-3 gap-3">
          <div className="shadow-bottom grid grid-cols-2 border justify-items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 mt-4">
            <div className="grid-cols-1 border-r-2">
              <img
                src="../../images/initiative/image5.jpg"
                alt=""
              />
            </div>
            <div className=" grid-cols-1 uppercase pt-8 text-4xl font-semibold text-sky-800">
              <h1>333</h1>
            </div>
          </div>
          <div className="shadow-bottom grid grid-cols-2 border justify-items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 mt-4">
            <div className="grid-cols-1 border-r-2">
              <img
                src="../../images/initiative/image5.jpg"
                alt=""
              />
            </div>
            <div className=" grid-cols-1 uppercase pt-8 text-4xl font-semibold text-sky-800">
              <h1>999</h1>
            </div>
          </div>

          <div></div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="overflow-hidden shadow-bottom grid grid-cols-2 border justify-items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 mt-4">
            <div className="grid-cols-1 border-r-2">
              <img
                src="../../../../public/images/initiative/image3.jpg"
                alt=""
              />
            </div>
            <div className=" grid-cols-1 pl-8 uppercase pt-5 text-xl tracking-tighter font-semibold text-sky-800">
              <h1>
                startup <br /> Bangladesh
              </h1>
            </div>
          </div>
          <div className="shadow-bottom grid grid-cols-2 border justify-items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 mt-4">
            <div className="grid-cols-1 border-r-2">
              <img
                src="../../images/initiative/image2.jpg"
                alt=""
              />
            </div>
            <div className=" grid-cols-1  uppercase pt-5 text-xl tracking-tighter font-bold text-sky-800">
              <h1>Porichoy</h1>
            </div>
          </div>

          <div></div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="shadow-bottom grid grid-cols-2 border justify-items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 mt-4">
            <div className="grid-cols-1 border-r-2">
              <img
                src="../../images/initiative/image1.png"
                alt=""
              />
            </div>
            <div className=" grid-cols-1  uppercase pt-2 text-xl tracking-tighter font-bold text-sky-800">
              <h1>
                Food <br />
                for <br />
                Nations
              </h1>
            </div>
          </div>
          <div className="shadow-bottom grid grid-cols-2 border justify-items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 mt-4">
            <div className="grid-cols-1 border-r-2">
              <img
                src="../../images/initiative/image.png"
                alt=""
              />
            </div>
            <div className=" grid-cols-1  uppercase pt-5 text-xl tracking-tighter font-bold text-sky-800">
              <h1>Surokkha</h1>
            </div>
          </div>

          <div></div>
        </div>
      </div>
       <img className="absolute hide  mt-96 z-10" src="../../images/logo/logot.png" alt="" />
    </div>
  );
};

export default Initiatives;
