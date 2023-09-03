import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_PATH } from "../tools/constants";

const NewsHome = () => {
  const nav = useNavigate();
  const [news, setNews] = useState([]);

  const getNews = () => {
    axios.get(API_PATH + "api/v1/blog/").then((res) => {
      setNews(res.data);
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <div className="NewsHome">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="home_news_name">Последние статьи</div>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={40}
              breakpoints={{
                576: {
                  slidesPerView: 1,
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
              {news?.map((item, index) => (
                <>
                  <SwiperSlide>
                    <div className="blog_box">
                      <img src={item.image} alt="" />
                      <div className="blog_date">{item.created_at}</div>
                      <div className="blog_h">{item.title}</div>
                      <div className="blog_p">{item.content.slice(0, 100)}</div>
                      <div
                        onClick={() => nav(`/blog/${item.id}`)}
                        className="blog_btn"
                      >
                        Читать подробнее
                        <div className="blog_btn_text"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsHome;
