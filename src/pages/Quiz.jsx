/** @format */

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_PATH } from "../tools/constants";

const Quiz = () => {
  const [next, setNext] = useState(true);
  const [site, setSite] = useState("Landing page");
  const [logo, setLogo] = useState("Yes firm logo");
  const [levelCreative, setLevelCreative] = useState(
    "Сдержанно и консервативно"
  );
  const [levelFunc, setLevelFunc] = useState("Minimum");
  const [link, setLink] = useState("No");
  const [name, setName] = useState("test");
  const [phone, setPhone] = useState("test");
  const [message, setMessage] = useState("test");
  console.log(site);

  const nav = useNavigate();

  const formData = new FormData();
  formData.append("type_site", site);
  formData.append("logo", logo);
  formData.append("level_creative", levelCreative);
  formData.append("level_functionality", levelFunc);
  formData.append("site_exist", link);
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("message", message);

  const nextFunc = () => {
    axios.post(API_PATH + "api/v1/quiz/", formData);
    then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="Quiz">
      <div className="container">
        <div className="row">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={false}
            pagination={{
              clickable: false,
            }}
            navigation={{
              nextEl: next ? ".quiz_btn_2" : "",
              prevEl: `.quiz_btn_1`,
            }}
            modules={[Pagination, Navigation]}
            className="quiz_swiper"
          >
            <SwiperSlide>
              <div className="col-sm-7 col-12 d-flex flex-column justify-content-center">
                <div className="quiz_h">
                  Пройдите опрос из 7 вопросов и получите
                </div>
                <div className="quiz_p">
                  Стоимость и сроки разработки. Краткий анализ вашей компании и
                  рекомендации. План работ и маркетинговую стратегию.
                </div>
                <div className="quiz_step">
                  <span>Шаг 1. </span>Тип сайта
                </div>
                <div className="quiz_img_box">
                  <div className="quiz_box_item">
                    <img src="/img/vec.png" alt="" />
                    <div className="quiz_check_box">
                      <input
                        defaultChecked={true}
                        type="radio"
                        id="topping"
                        name="topping"
                        value="Landing"
                        onChange={(e) => setSite(e.target.value)}
                      />
                      <div>Landing page</div>
                    </div>
                  </div>
                  <div className="quiz_box_item">
                    <img src="/img/10.png" alt="" />
                    <div className="quiz_check_box">
                      <input
                        type="radio"
                        id="topping"
                        name="topping"
                        value="Mnogo stranitsa"
                        onChange={(e) => setSite(e.target.value)}
                      />
                      <div>Многстраничный сайт</div>
                    </div>
                  </div>
                  <div className="quiz_box_item">
                    <img src="/img/11.png" alt="" />
                    <div className="quiz_check_box">
                      <input
                        type="radio"
                        id="topping"
                        name="topping"
                        value="Internet shop"
                        onChange={(e) => setSite(e.target.value)}
                      />
                      <div>Интернет-магазин</div>
                    </div>
                  </div>
                  <div className="quiz_box_item">
                    <img src="/img/12.png" alt="" />
                    <div className="quiz_check_box">
                      <input
                        type="radio"
                        id="topping"
                        name="topping"
                        value="I dont know"
                        onChange={(e) => setSite(e.target.value)}
                      />
                      <div>Не уверен(-а)</div>
                    </div>
                  </div>
                </div>
                <div className="quiz_btn_box d-sm-flex d-none">
                  <div className="quiz_btn_1 d-none">
                    <img src="/img/quiz_1.png" alt="" />
                    Назад
                  </div>
                  <div disabled={site ? true : false} className="quiz_btn_2">
                    Продолжить
                    <img src="/img/quiz_2.png" alt="" />
                  </div>
                </div>
                <div className="quiz_btn_box d-sm-none d-flex">
                  <div className="quiz_btn_1 d-none">
                    <img src="/img/43.png" alt="" />
                    Назад
                  </div>
                  <div className="quiz_btn_2">
                    Продолжить
                    <img src="/img/44.png" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-sm-7 col-12 d-flex flex-column justify-content-center">
                <div className="quiz_h">
                  Пройдите опрос из 7 вопросов и получите
                </div>
                <div className="quiz_p">
                  Стоимость и сроки разработки. Краткий анализ вашей компании и
                  рекомендации. План работ и маркетинговую стратегию.
                </div>
                <div className="quiz_step">
                  <span>Шаг 2. </span>Наличие фир. стиля / логотипа
                </div>
                <div className="quiz_img_box">
                  <div className="quiz_box_item">
                    <img src="/img/13.png" alt="" />
                    <div className="quiz_check_box">
                      <input
                        onChange={(e) => setLogo(e.target.value)}
                        defaultChecked={true}
                        type="radio"
                        id="2"
                        name="LogoTiop"
                        value="Yes Fir.Stil"
                      />
                      <div>Есть фир.стиль</div>
                    </div>
                  </div>
                  <div className="quiz_box_item">
                    <img src="/img/14.png" alt="" />
                    <div className="quiz_check_box">
                      <input
                        onChange={(e) => setLogo(e.target.value)}
                        type="radio"
                        id="2"
                        name="LogoTiop"
                        value="Yes Logo"
                      />
                      <div>Есть логотип</div>
                    </div>
                  </div>
                  <div className="quiz_box_item">
                    <img src="/img/15.png" alt="" />
                    <div className="quiz_check_box">
                      <input
                        onChange={(e) => setLogo(e.target.value)}
                        type="radio"
                        id="2"
                        name="LogoTiop"
                        value="No"
                      />
                      <div>Нет ничего</div>
                    </div>
                  </div>
                </div>
                <div className="quiz_btn_box d-sm-flex d-none">
                  <div className="quiz_btn_1">
                    <img src="/img/quiz_1.png" alt="" />
                    Назад
                  </div>
                  <div className="quiz_btn_2">
                    Продолжить
                    <img src="/img/quiz_2.png" alt="" />
                  </div>
                </div>
                <div className="quiz_btn_box d-sm-none d-flex">
                  <div className="quiz_btn_1">
                    <img src="/img/43.png" alt="" />
                    Назад
                  </div>
                  <div className="quiz_btn_2">
                    Продолжить
                    <img src="/img/44.png" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-sm-7 col-12 d-flex flex-column justify-content-center">
                <div className="quiz_h">
                  Пройдите опрос из 7 вопросов и получите
                </div>
                <div className="quiz_p">
                  Стоимость и сроки разработки. Краткий анализ вашей компании и
                  рекомендации. План работ и маркетинговую стратегию.
                </div>
                <div className="quiz_step">
                  <span>Шаг 3. </span>Уровень “Креатива”
                </div>
                <div className="quiz_img_box">
                  <div className="quiz_box_item">
                    <img src="/img/16.png" alt="" />
                    <div className="quiz_check_box">
                      <input
                        onChange={(e) => setLevelCreative(e.target.value)}
                        type="radio"
                        defaultChecked={true}
                        id="10"
                        name="Abc"
                        value="Сдержанно и консервативно"
                      />
                      <div>Сдержанно и консервативно</div>
                    </div>
                  </div>
                  <div className="quiz_box_item">
                    <img src="/img/17.png" alt="" />
                    <div className="quiz_check_box">
                      <input
                        onChange={(e) => setLevelCreative(e.target.value)}
                        type="radio"
                        id="10"
                        name="Abc"
                        value="Умеренный креатив"
                      />
                      <div>Умеренный креатив</div>
                    </div>
                  </div>
                  <div className="quiz_box_item">
                    <img src="/img/18.png" alt="" />
                    <div className="quiz_check_box">
                      <input
                        onChange={(e) => setLevelCreative(e.target.value)}
                        type="radio"
                        id="10"
                        name="Abc"
                        value="Смело, дерзко и ярко"
                      />
                      <div>Смело, дерзко и ярко.</div>
                    </div>
                  </div>
                </div>
                <div className="quiz_btn_box d-sm-flex d-none">
                  <div className="quiz_btn_1">
                    <img src="/img/quiz_1.png" alt="" />
                    Назад
                  </div>
                  <div className="quiz_btn_2">
                    Продолжить
                    <img src="/img/quiz_2.png" alt="" />
                  </div>
                </div>
                <div className="quiz_btn_box d-sm-none d-flex">
                  <div className="quiz_btn_1">
                    <img src="/img/43.png" alt="" />
                    Назад
                  </div>
                  <div className="quiz_btn_2">
                    Продолжить
                    <img src="/img/44.png" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-sm-7 col-12 d-flex flex-column justify-content-center">
                <div className="quiz_h">
                  Пройдите опрос из 7 вопросов и получите
                </div>
                <div className="quiz_p">
                  Стоимость и сроки разработки. Краткий анализ вашей компании и
                  рекомендации. План работ и маркетинговую стратегию.
                </div>
                <div className="quiz_step">
                  <span>Шаг 4. </span>Уровень функциональности
                </div>
                <div className="quiz_img_box">
                  <div className="quiz_box_item">
                    <img src="/img/20.png" alt="" />
                    <div className="quiz_check_box">
                      <input
                        onChange={(e) => setLevelFunc(e.target.value)}
                        defaultChecked={true}
                        type="radio"
                        id="4"
                        name="Creative"
                        value="Minimum"
                      />
                      <div>Минимум.</div>
                    </div>
                  </div>
                  <div className="quiz_box_item">
                    <img src="/img/21.png" alt="" />
                    <div className="quiz_check_box">
                      <input
                        onChange={(e) => setLevelFunc(e.target.value)}
                        type="radio"
                        id="4"
                        name="Creative"
                        value="Awerage"
                      />
                      <div>Средний</div>
                    </div>
                  </div>
                  <div className="quiz_box_item">
                    <img src="/img/22.png" alt="" />
                    <div className="quiz_check_box">
                      <input
                        onChange={(e) => setLevelFunc(e.target.value)}
                        type="radio"
                        id="4"
                        name="Creative"
                        value="Maximum"
                      />
                      <div>Максимум</div>
                    </div>
                  </div>
                </div>
                <div className="quiz_btn_box d-sm-flex d-none">
                  <div className="quiz_btn_1">
                    <img src="/img/quiz_1.png" alt="" />
                    Назад
                  </div>
                  <div className="quiz_btn_2">
                    Продолжить
                    <img src="/img/quiz_2.png" alt="" />
                  </div>
                </div>
                <div className="quiz_btn_box d-sm-none d-flex">
                  <div className="quiz_btn_1">
                    <img src="/img/43.png" alt="" />
                    Назад
                  </div>
                  <div className="quiz_btn_2">
                    Продолжить
                    <img src="/img/44.png" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-sm-7 col-12 d-flex flex-column justify-content-center">
                <div className="quiz_h">
                  Пройдите опрос из 7 вопросов и получите
                </div>
                <div className="quiz_p">
                  Стоимость и сроки разработки. Краткий анализ вашей компании и
                  рекомендации. План работ и маркетинговую стратегию.
                </div>
                <div className="quiz_step">
                  <span>Шаг 5. </span>Есть ли у вас существующий сайт?
                </div>
                <div className="quiz_site_link_box">
                  <div className="link_box_input">
                    <img src="/img/globus.png" alt="" />
                    <input
                      onChange={(e) => setLink(e.target.value)}
                      required={true}
                      type="text"
                      name=""
                      id=""
                      placeholder="Ccылка на сайт"
                    />
                  </div>
                </div>
                <div className="link_checkbox">
                  <div className="link_checkbox_1">
                    <input type="radio" id="5" name="Exist Site" value="yes" />
                    <div className="link_checkbox_p">Есть</div>
                  </div>
                  <div className="link_checkbox_1">
                    <input
                      defaultChecked={true}
                      type="radio"
                      id="5"
                      name="Exist Site"
                      value="No"
                    />
                    <div className="link_checkbox_p">Нет</div>
                  </div>
                </div>
                <div className="quiz_btn_box d-sm-flex d-none">
                  <div className="quiz_btn_1">
                    <img src="/img/quiz_1.png" alt="" />
                    Назад
                  </div>
                  {() => setNext(false)}
                  <div onClick={() => setNext(false)} className="quiz_btn_2">
                    Продолжить
                    <img src="/img/quiz_2.png" alt="" />
                  </div>
                </div>
                <div className="quiz_btn_box d-sm-none d-flex">
                  <div className="quiz_btn_1">
                    <img src="/img/43.png" alt="" />
                    Назад
                  </div>
                  <div onClick={() => setNext(false)} className="quiz_btn_2">
                    Продолжить
                    <img src="/img/44.png" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-sm-7 col-12 d-flex flex-column justify-content-center">
                <div className="quiz_h">
                  Пройдите опрос из 7 вопросов и получите
                </div>
                <div className="quiz_p">
                  Стоимость и сроки разработки. Краткий анализ вашей компании и
                  рекомендации. План работ и маркетинговую стратегию.
                </div>
                <div className="quiz_step">
                  <span>Шаг 6. </span>Завершение
                </div>
                <form action="">
                  <div className="step_6_box">
                    <div className="step_6_name">
                      <img src="/img/user_icon.svg" alt="" />
                      <input
                        required
                        type="text"
                        placeholder="Имя"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="step_6_phone">
                      <img src="/img/phone_icon.svg" alt="" />
                      <input
                        required
                        type="number"
                        minLength={13}
                        maxLength={13}
                        placeholder="Телефон"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="step_6_message">
                      <img src="/img/comment_icon.png" alt="" />
                      <input
                        required
                        type="text"
                        placeholder="Здесь могут быть ваши пожелания и комментарии..."
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="quiz_btn_box d-sm-flex d-none">
                    <div className="quiz_btn_1">
                      <img src="/img/quiz_1.png" alt="" />
                      Назад
                    </div>
                    <div
                      onClick={() => nextFunc()}
                      type="submit"
                      className={`quiz_btn_2 ${
                        phone && name && message ? "" : "inactive"
                      }`}
                    >
                      Продолжить
                      <img src="/img/quiz_2.png" alt="" />
                    </div>
                  </div>
                  <div className="quiz_btn_box d-sm-none d-flex">
                    <div className="quiz_btn_1">
                      <img src="/img/43.png" alt="" />
                      Назад
                    </div>
                    <div onClick={() => nextFunc()} className="quiz_btn_2">
                      Продолжить
                      <img src="/img/44.png" alt="" />
                    </div>
                  </div>
                </form>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-sm-7 col-12 d-flex flex-column justify-content-center">
                <div className="quiz_h_7">Спасибо, что прошли наш квиз!</div>
                <div className="quiz_p_7">
                  Наши менеджеры обработают вашу заявку и свяжуться с вами в
                  ближайшее время
                </div>
                <div className="quiz_btn_box d-flex">
                  <div onClick={() => nav("/")} className="quiz_btn_2">
                    <img src="/img/100.png" alt="" />
                    Вернуться на главную
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
