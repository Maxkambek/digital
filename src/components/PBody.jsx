/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_PATH } from "../tools/constants";

const PBody = () => {
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
    <>
      <div className="Phead">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="phead_h">Портфолио</div>
            </div>
            <div className="col-12 d-flex flex-column flex-sm-row justify-content-center align-items-center">
              {portCategory?.map((item, index) => (
                <>
                  <div
                    key={index}
                    onClick={() => setActive(item.id)}
                    className={`phead_a ${active === item.id ? "active" : ""}`}
                  >
                    {item.name}{" "}
                    {item.id == 1 ? port[0]?.get_count : item.get_count}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      {port?.map((item, index) => (
        <>
          {item.id % 2 != 0 ? (
            <>
              <div key={index} className="PBody">
                <div className="container">
                  <div className="row flex-sm-row flex-column-reverse align-items-center">
                    <div className="col-sm-5 d-flex flex-column ">
                      <div className="pbody_box">
                        <div className="pbody_type">{item.category.name}</div>
                        <div className="pbody_name">{item.name}</div>
                        <div className="pbody_p">{item.description}</div>
                        <a href={item.link}>
                          <div className="pbody_btn">Перейти на сайт</div>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-7 d-flex justify-content-center align-items-center">
                      <img className="w-100" src={item.image} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div key={item.id + 100} className="PBody2">
                <div className="container">
                  <div className="row flex-sm-row flex-column align-items-center">
                    <div className="col-sm-7 d-flex justify-content-center align-items-center">
                      <img className="w-100" src={item.image} alt="" />
                    </div>
                    <div className="col-sm-5 d-flex flex-column ">
                      <div className="pbody_box">
                        <div className="pbody_type">{item.category.name}</div>
                        <div className="pbody_name">{item.name}</div>
                        <div className="pbody_p">{item.description}</div>
                        <a href={item.link}>
                          <div className="pbody_btn">Перейти на сайт</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ))}

      <div className="PBody2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 d-flex justify-content-center align-items-center">
              <img className="w-100" src="/img/sketch.png" alt="" />
            </div>
            <div className="col-sm-5 d-flex flex-column ">
              <div className="pbody_box">
                <div className="pbody_name">
                  Здесь может быть
                  <br /> ваш проект!
                </div>
                <div className="pbody_p">
                  Раскажите о проекте вкратце и другие слова оффера
                </div>
                <div onClick={() => nav("/quiz")} className="pbody_btn">
                  Начать <img src="/img/strelka.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PBody;
