/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_PATH } from "../tools/constants";

const Blog = () => {
  const nav = useNavigate();
  const [active, setActive] = useState(1);
  const [news, setNews] = useState([]);
  const [cat, setCat] = useState([]);
  const [count, setCount] = useState();

  const getCat = () => {
    axios.get(API_PATH + "api/v1/blog-categroy/").then((res) => {
      setCat(res.data);
    });
  };

  const getNews = () => {
    axios
      .get(API_PATH + `api/v1/blog/?pk=${active == 1 ? "" : active}`)
      .then((res) => {
        setNews(res.data);
        setCount(res.data.length);
      });
  };

  useEffect(() => {
    getNews();
    getCat();
  }, [active]);

  return (
    <div className="Blog">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="blog_header">Blog</div>
          </div>
          <div className="col-12 d-flex flex-column flex-sm-row justify-content-center align-items-center">
            {cat?.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setActive(item.id)}
                  className={`blog_a ${active === item.id ? "active" : ""}`}
                >
                  {item.name} {item.id == 1 ? count : item.get_count}
                </div>
              );
            })}
          </div>
          <div className="col-12">
            <img className="blog_line" src="/img/separator.png" alt="" />
          </div>
          {news?.map((item, index) => (
            <>
              <div className="col-lg-3 mb-lg-0 mb-3">
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
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
