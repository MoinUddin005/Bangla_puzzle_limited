/* eslint-disable no-unused-vars */
import React from "react";

import Constituentservices from "../Constituentservices/Constituentservices";
import Theideology from "../Theideology/Theideology";
import Inspiration from "../Inspiration/Inspiration";
import Upcomingevent from "../Upcomingevent/Upcomingevent";
import Shishuacademy from "../Shishuacademy/Shishuacademy";
import Initiatives from "../Initiatives/Initiatives";
import Fixedbg from "../Fixedbg/Fixedbg";
import Vediogallery from "../Vediogallery/Vediogallery";
import Photogallery from "../Photogallery/Photogallery";
import Mediaconverages from "../Mediaconverages/Mediaconverages";
import Address from "../Address/Address";
import Newsletter from "../Newsletter/Newsletter";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <Carousel/>
      <Constituentservices />
      <Theideology/>
      <Inspiration/>
      <Upcomingevent/>
      <Shishuacademy/>
      <Initiatives/>
      <Fixedbg/>
      <Vediogallery/>
      <Photogallery/>
      <Mediaconverages/>
      <Address/>
      <Newsletter/>
    </div>
  );
};

export default Home;
