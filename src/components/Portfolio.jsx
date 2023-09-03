/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { API_PATH } from "../tools/constants";
import axios from "axios";

const Portfolio = () => {
  const nav = useNavigate();
  const [active, setActive] = useState(1);
  const [port, setPort] = useState([]);
  const [portCategory, setPortCategory] = useState([]);
  const [count, setCount] = useState();

  const getPort = () => {
    axios
      .get(API_PATH + `api/v1/portfolio/?pk=${active == 1 ? "" : active}`)
      .then((res) => {
        setPort(res.data);
        setCount(res.data.length);
      });
  };

  const getPortCategory = () => {
    axios.get(API_PATH + "api/v1/portfolio-category/").then((res) => {
      setPortCategory(res.data);
    });
  };
  useEffect(() => {
    getPort();
    getPortCategory();
  }, [active]);

  return (
    <div className="Portfolio">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 d-flex flex-sm-row flex-column justify-content-between">
            <div className="port_left">
              <div className="portfolio_h">Портфолио</div>
            </div>
            <div className="port_right">
              {portCategory?.map((item, index) => (
                <>
                  <div
                    key={index}
                    onClick={() => setActive(item.id)}
                    className={`port_a ${active === item.id ? "active" : ""}`}
                  >
                    {item.name} {item.id == 1 ? count : item.get_count}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {port?.map((item, index) => (
                <>
                  <SwiperSlide key={index}>
                    <div className="swiper_port ">
                      <div className="port_type_name">{item.category.name}</div>
                      <div className="port_name">{item.name}</div>
                      <div className="port_p">{item.description}</div>
                      <a href={item.link}>
                        <div className="port_btn">Перейти на сайт</div>
                      </a>
                    </div>
                    <div className="swiper_port">
                      <img className="w-100" src={item.image} alt="" />
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
