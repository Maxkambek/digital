/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_PATH } from "../tools/constants";

const BlogDetail = () => {
  const pk = useParams();
  const [news, setNews] = useState([]);
  const [blog, setBlog] = useState([]);

  const getNews = () => {
    axios.get(API_PATH + `api/v1/blog/`).then((res) => {
      setNews(res.data);
    });
  };
  const getBlog = () => {
    axios.get(API_PATH + `api/v1/blog/${pk.id}/`).then((res) => {
      setBlog(res.data[0]);
    });
  };

  useEffect(() => {
    getBlog();
    getNews();
  }, []);

  const nav = useNavigate();

  return (
    <div className="BlogDetail">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div onClick={() => nav("/blog")} className="detail_header d-flex">
              <img src="/img/sss.svg" alt="" />
              Вернуться назад
            </div>
          </div>
          <div className="col-12 blog_detail">
            <div className="blog_detail_big_img">
            <img className="w-100"
              
              src={blog?.main_big_image}
              alt=""
            />

            </div>
          </div>
          <div className="blog_detail_relative_h">{blog?.title}</div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="detail_leftside">
              <div className="leftside_name">{blog?.introduction}</div>
              <div className="leftside_p">{blog?.introduction_text}</div>
              <div className="detail_main_img_box d-sm-flex">
                <div className="side_1">
                  <img src={blog?.image_1} alt="" />
                </div>
                <div className="side_2 d-flex">
                  <div className="side_2_1">
                    <img src={blog?.image_2} alt="" />
                  </div>
                  <div className="side_2_2">
                    <img src={blog?.image_3} alt="" />
                    <img src={blog?.image_4} alt="" />
                  </div>
                </div>
              </div>
              <div className="detail_title">{blog?.title}</div>
              <div className="detail_title_p">{blog?.content} </div>
              <div className="detail_subtitle">{blog?.sub_title}</div>
              <div className="detail_title_p">{blog?.sub_content}</div>

              <div className="detail_double_img_box">
                <img src={blog?.image_double_1} alt="" />
                <img
                  className="img_2_2"
                  src={blog?.image_double_2 ? blog?.image_double_2 : ""}
                  alt=""
                />
              </div>
              <div className="detail_title">{blog?.title}</div>
              <div className="detail_title_p">{blog?.content} </div>
              <div className="detail_subtitle">{blog?.sub_title}</div>
              <div className="detail_title_p">{blog?.sub_content}</div>
            </div>
          </div>
          <div className="col-1 d-sm-flex d-none"></div>
          <div className="col-3 d-sm-flex flex-column d-none">
            <div className="detail_sidebar_name">
              Возможно, вам будет интересно
            </div>
            {news?.map((item, index) => (
              <>
                <div key={item.id} className="blog_box">
                  <img src={item.image} alt="" />
                  <div className="blog_date">{item.created_at}</div>
                  <div className="blog_h">{item.title}</div>
                  <div className="blog_p">{item.content.slice(0, 100)}</div>
                  <div
                    onClick={() => nav(`/blog/${item.id}`)}
                    className="blog_btn"
                  >
                    Читать подробнее <div className="blog_btn_text"></div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
