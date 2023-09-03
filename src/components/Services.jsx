/** @format */

import React, { useState } from "react";

const Services = () => {
  const [paska, setPaska] = useState("");

  return (
    <div className="Services">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service_header">Услуги</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-lg-0 mb-4">
            <div className="service_box">
              <div className="service_box_h">Маркетинг</div>
              <div className="service_box_p">SEO</div>
              <div className="service_box_p">Контекстная реклама</div>
              <div className="service_box_p">SMM</div>
              <div className="service_box_p">Вирусная реклама</div>
              <div className="service_box_p">Подключение онлайн-оплаты</div>
              <div className="service_box_p">SEO</div>
              <div className="service_box_p ">Analitika big data</div>
              <div
                className={`service_box_p ser_none ${
                  paska === 1 ? "active" : ""
                }`}
              >
                Analitika big{" "}
              </div>
              <div
                className={`service_box_p ser_none ${
                  paska === 1 ? "active" : ""
                }`}
              >
                Analitika data
              </div>
              <div
                className={`service_box_shadow ${paska === 1 ? "active" : ""}`}
              >
                <img
                  onClick={paska === 1 ? () => setPaska(0) : () => setPaska(1)}
                  src="/img/icon_ser_down.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-lg-0 mb-4">
            <div className="service_box">
              <div className="service_box_h">Разработка</div>
              <div className="service_box_p">Frot-end</div>
              <div className="service_box_p">Backend</div>
              <div className="service_box_p">Создание web-приложений</div>
              <div className="service_box_p">Вирусная реклама</div>
              <div className="service_box_p">Подключение онлайн-оплаты</div>
              <div className="service_box_p">SEO</div>
              <div className="service_box_p">Analitika big data</div>
              <div
                className={`service_box_p ser_none ${
                  paska === 2 ? "active" : ""
                }`}
              >
                Analitika big{" "}
              </div>
              <div
                className={`service_box_p ser_none ${
                  paska === 2 ? "active" : ""
                }`}
              >
                Analitika data
              </div>
              <div
                className={`service_box_shadow ${paska === 2 ? "active" : ""}`}
              >
                <img
                  onClick={paska === 2 ? () => setPaska(0) : () => setPaska(2)}
                  src="/img/icon_ser_down.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="service_box">
              <div className="service_box_h">Дизайн</div>
              <div className="service_box_p">Дизайн интернет-магазинов</div>
              <div className="service_box_p">Дизайн лендингов</div>
              <div className="service_box_p">Брендинг</div>
              <div className="service_box_p">Разработка логотипов</div>
              <div className="service_box_p">UI Дизайн</div>
              <div className="service_box_p">UX Аналитика</div>
              <div className="service_box_p">Analitika big data</div>
              <div
                className={`service_box_p ser_none ${
                  paska === 3 ? "active" : ""
                }`}
              >
                Analitika big{" "}
              </div>
              <div
                className={`service_box_p ser_none ${
                  paska === 3 ? "active" : ""
                }`}
              >
                Analitika data
              </div>
              <div
                className={`service_box_shadow ${paska === 3 ? "active" : ""}`}
              >
                <img
                  onClick={paska === 3 ? () => setPaska(0) : () => setPaska(3)}
                  src="/img/icon_ser_down.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
