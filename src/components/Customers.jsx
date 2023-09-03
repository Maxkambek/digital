/** @format */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Customers = () => {
  return (
    <div className="Customers">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="customers_h">
              Клиенты <span>Didgikey</span>
            </div>
          </div>
        </div>
        <div className="col-12">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              767: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="customers_swiper"
          >
            <SwiperSlide>
              <div className="customers_box">
                <img className="" src="/img/customers.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="customers_box">
                <img className="" src="/img/125.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="customers_box">
                <img className="" src="/img/126.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="customers_box">
                <img className="" src="/img/customers.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="customers_box">
                <img className="" src="/img/126.png" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Customers;
