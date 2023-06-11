/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shishuacademy = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 pb-5 bg-sky-800">
      <div className="grid-cols-1 justify-self-end lg:pl-52">
        <h1 className="uppercase text-3xl font-semibold  text-white pt-5">
          MY JOURNEY WITH SHISHU ACADEMY
        </h1>

        <p className="text-white pt-5">
          One of the strengths to build a golden Bengal in the ideology of
          Father of the Nation Bangabandhu Sheikh Mujibur Rahman is our future
          generation, who are today's children. Bangladesh Shishu Academy is for
          children. Bangladesh Shishu Academy is working to develop latent
          talents including creative and gentle scholarship for the purpose of
          creating the spirit of great liberation war, love of country, moral
          education, discipline and sense of responsibility among the children.
          Under the leadership of Hon'ble Prime Minister Sheikh Hasina, a child
          friendly environment has been created in the country today. At present
          children's academy activities are being carried out in 64 districts
          and 6 upazilas (Keshabpur, Parshuram, Mithapukur, Kulaura, Srinagar
          and Babuganj upazilas) for the creative development and protection of
          children's rights. Under this program, various programs are being
          implemented in collaboration with the local administration for the
          participation of children across the country.
        </p>

        <button className="btn border-white bg-sky-800 hover:text-black text-white hover:bg-white btn-secondary mt-5 w-40 h-10">
          Learn More <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="grid-cols-1 lg:pt-52">
        <img className="h-48" src="/public/images/home/image2.jpg" alt="" />
      </div>
    </div>
  );
};

export default Shishuacademy;
