/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const Mediaconverages = () => {
  return (
    <div className="bg-sky-800 py-10 media ">
        <p className="uppercase  text-4xl font-bold tracking-widest text-white pl-5 pb-10">Media coverages</p>
      <div className="container px-28">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000 }}
          spaceBetween={30}
          slidesPerView={2}
        >
          <SwiperSlide>
            <div className=" border p-2 grid justify-items-center">
              <div className="h-72 border">
                <img className="border" src="/public/images/news/image1.jpg" alt="" />
              </div>
              <p className="pt-5">Jan 15 2023</p>
              <p className="pt-3"><b>Shishu Academy new Director General Anjir Liton</b></p>
              <p className="pt-3">
                  Children's author and rhymester Anjir Liton has been appointed
                  the new director general of Bangladesh Shishu Academy for the
                  next three years.&nbsp;The Ministry of Public Administration
                  issued a notification in this regard on Tuesday.Earlier on
                  Monda...
                </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" border p-2 grid justify-items-center">
              <div className="h-72 border">
                <img className="border" src="/public/images/news/image2.jpg" alt="" />
              </div>
              <p className="pt-5">Jan 15 2023</p>
              <p className="pt-3"><b>Shishu Academy new Director General Anjir Liton</b></p>
              <p className="pt-3">
                  Children's author and rhymester Anjir Liton has been appointed
                  the new director general of Bangladesh Shishu Academy for the
                  next three years.&nbsp;The Ministry of Public Administration
                  issued a notification in this regard on Tuesday.Earlier on
                  Monda...
                </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" border p-2 grid justify-items-center">
              <div className="h-72 border">
                <img className="border" src="/public/images/news/image3.jpg" alt="" />
              </div>
              <p className="pt-5">Jan 15 2023</p>
              <p className="pt-3"><b>Shishu Academy new Director General Anjir Liton</b></p>
              <p className="pt-3">
                  Children's author and rhymester Anjir Liton has been appointed
                  the new director general of Bangladesh Shishu Academy for the
                  next three years.&nbsp;The Ministry of Public Administration
                  issued a notification in this regard on Tuesday.Earlier on
                  Monda...
                </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" border p-2 grid justify-items-center">
              <div className="h-72 border">
                <img className="border" src="/public/images/news/image4.webp" alt="" />
              </div>
              <p className="pt-5">Jan 15 2023</p>
              <p className="pt-3"><b>Shishu Academy new Director General Anjir Liton</b></p>
              <p className="pt-3">
                  Children's author and rhymester Anjir Liton has been appointed
                  the new director general of Bangladesh Shishu Academy for the
                  next three years.&nbsp;The Ministry of Public Administration
                  issued a notification in this regard on Tuesday.Earlier on
                  Monda...
                </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Mediaconverages;
