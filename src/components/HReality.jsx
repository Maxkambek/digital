import {} from "react";
import { useNavigate } from "react-router-dom";

const HReality = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="HReality">
        <div className="h_real_back"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 position-relative ">
              <div className="h_real_col"></div>
              <div className="h_real_left d-sm-flex d-none flex-column">
                <div className="h_real_h">От наброска / Wireframe’а</div>
                <img className="w-100" src="/img/h_real_1.svg" alt="" />
              </div>
              <div className="h_real_left d-sm-none d-flex flex-column">
                <div className="h_real_h">От наброска / Wireframe’а</div>
                <img className="w-100" src="/img/101.png" alt="" />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="h_real_text">
                <div className="h_real_name">Воплоти проект в реальность!</div>
                <div className="h_real_name_2">
                  Раскажите о проекте вкратце и другие слова оффера
                </div>
                <div onClick={() => nav("/quiz")} className="h_real_btn">
                  Начать <img src="/img/icon_right.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HReality;
