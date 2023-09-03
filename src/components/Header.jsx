/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [turn, setTurn] = useState(false);
  const nav = useNavigate();

  return (
    <div className="Header">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6 d-sm-flex d-none align-items-center">
            <div className="header_box_1">
              <div className="header_name">Digital агенство полного цикла</div>
              <div className="header_h">
                Проектируем и воплощаем эффектные цифровые стратегии
              </div>
              <div className="header_p">
                Задача организации, в особенности же рамки и место обучения
                кадров представляет собой интересный эксперимент проверки систем
                массового участия.
              </div>
              <div onClick={() => nav("/contact")} className="header_btn">
                Связаться с нами
              </div>
            </div>
          </div>
          <div className="col-sm-6 d-sm-none d-flex align-items-center">
            <div className="header_box_1">
              <div className="header_name">
                Digital агенство полного цикла
                <img src="/img/lamp_1_1.png" alt="" className="head_img_1" />
              </div>
              <div className="header_h">
                Проектируем и воплощаем эффектные цифровые стратегии
              </div>
              <div className="header_p">
                Задача организации, в особенности же рамки и место обучения
                кадров представляет собой интересный эксперимент проверки систем
                массового участия.
              </div>
              <div onClick={() => nav("/contact")} className="header_btn">
                Связаться с нами
              </div>
            </div>
          </div>
          <div className="col-6 d-sm-flex d-none">
            <div className="header_box_2 d-flex align-items-center justify-content-between">
              <img
                src={turn ? "/img/lamp_1.svg" : "/img/lamp_2.svg"}
                alt=""
                className="head_img_1"
              />
              <img
                onClick={() => setTurn(!turn)}
                src={turn ? "/img/btn_1.svg" : "/img/btn_2.svg"}
                alt=""
                className="head_img_2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
