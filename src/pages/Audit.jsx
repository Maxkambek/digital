/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Audit = () => {
  const nav = useNavigate();
  const [paska, setPaska] = useState(0);

  return (
    <>
      <div className="Audit">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-6 d-flex flex-column align-items-center justify-cont">
              <div className="audit_name">Мы знаем как улучшить ваш сайт.</div>
              <div className="audit_h">
                Воспользуйтесь нашим бесплатным аудитом сайта и узнайет как.
              </div>
              <div className="audit_p">
                Задача организации, в особенности же рамки и место обучения
                кадров представляет собой интересный эксперимент проверки систем
                массового участия.{" "}
              </div>
            </div>
            <div className="col-sm-5 d-sm-flex d-none">
              <img className="w-100" src="/img/raketa.png" alt="" />
            </div>
            <div className="col-sm-5 col-5 d-sm-none d-flex align-items-center">
              <img className="w-100" src="/img/raketa_2.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="for_back_color">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="audit_second_bar_name">
                Хотим немного <br /> расказать
              </div>
              <div className="audit_second_bar_p">
                О том, как работет наш аудит
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-3 ml-lg-0 audit_items">
              <img src="/img/icon.svg" alt="" />
              <div className="audit_items_name">
                <span>Шаг 1. </span> Поступление заявки
              </div>
              <div className="audit_items_p">
                Товарищи! укрепление и развитие структуры представляет собой
                интересный эксперимент проверки.
              </div>
            </div>
            <div className="col-lg-3 ml-lg-0 audit_items">
              <img src="/img/icon.svg" alt="" />
              <div className="audit_items_name">
                <span>Шаг 2.</span> Составление аудита
              </div>
              <div className="audit_items_p">
                Товарищи! укрепление и развитие структуры представляет собой
                интересный эксперимент проверки.
              </div>
            </div>
            <div className="col-lg-3 ml-lg-0 audit_items">
              <img src="/img/icon.svg" alt="" />
              <div className="audit_items_name">
                <span>Шаг 3. </span> Подбор рекомендаций
              </div>
              <div className="audit_items_p">
                Товарищи! укрепление и развитие структуры представляет собой
                интересный эксперимент проверки.
              </div>
            </div>
            <div className="col-lg-3 ml-lg-0 audit_items">
              <img src="/img/icon.svg" alt="" />
              <div className="audit_items_name">
                <span>Шаг 4. </span> Выдача клиенту
              </div>
              <div className="audit_items_p">
                Товарищи! укрепление и развитие структуры представляет собой
                интересный эксперимент проверки.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our_pred">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="our_pred_name">Наши предложения</div>
            </div>
            <div className="col-lg-3 mb-lg-0 mb-4">
              <div className="our_pred_box">
                <div className="our_pred_box_name">Базовый</div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Проверка на соответствие законодательству</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Проверка консультации менеджером в рамках чата</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Основы контент-маркетинга</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Тестирование верстки на Windows</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div className="our_pred_box_a ">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div
                  className={`our_pred_box_a ser_none $${
                    paska === 1 ? "active" : ""
                  }`}
                >
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="our_pred_box_price">8 900 ₽</div>
                  <div
                    onClick={() => nav("/contact")}
                    className="our_pred_box_btn"
                  >
                    Заказать
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-lg-0 mb-4">
              <div className="our_pred_box">
                <div className="our_pred_box_name">Medium</div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Проверка на соответствие законодательству</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Проверка консультации менеджером в рамках чата</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Основы контент-маркетинга</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Тестирование верстки на Windows</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div
                  className={`our_pred_box_a ser_none $${
                    paska === 2 ? "active" : ""
                  }`}
                >
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="our_pred_box_price">14 900 ₽</div>
                  <div
                    onClick={() => nav("/contact")}
                    className="our_pred_box_btn"
                  >
                    Заказать
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-lg-0 mb-4">
              <div className="our_pred_box">
                <div className="our_pred_box_name">
                  Pro <img src="/img/star.png" alt="" />
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Проверка на соответствие законодательству</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Проверка консультации менеджером в рамках чата</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Основы контент-маркетинга</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Тестирование верстки на Windows</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div
                  className={`our_pred_box_a ser_none $${
                    paska === 3 ? "active" : ""
                  }`}
                >
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="our_pred_box_price">18 900 ₽</div>
                  <div
                    onClick={() => nav("/contact")}
                    className="our_pred_box_btn"
                  >
                    Заказать
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-lg-0 mb-4">
              <div className="our_pred_box">
                <div className="our_pred_box_name">Онлайн магазин</div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Проверка на соответствие законодательству</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Проверка консультации менеджером в рамках чата</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Основы контент-маркетинга</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Тестирование верстки на Windows</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div className="our_pred_box_a">
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>
                <div
                  className={`our_pred_box_a ser_none $${
                    paska === 4 ? "active" : ""
                  }`}
                >
                  <img src="/img/done.png" alt="" />
                  <div>Базовая SEO оптимизация</div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="our_pred_box_price">28 900 ₽</div>
                  <div
                    onClick={() => nav("/contact")}
                    className="our_pred_box_btn"
                  >
                    Заказать
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="chemodan">
        <div className="row justify-content-lg-between">
          <div className="col-sm-5 col-12 d-flex align-items-center justify-content-end">
            <img src="/img/chemodan.png" alt="" />
          </div>
          <div className="for_back_image col-sm-6 col-12 d-flex flex-column align-items-start justify-content-center">
            <div className="chemodan_text_box">
              <div className="chemodan_h">Готовы к взлету?</div>
              <div className="chemodan_p">
                Раскажите о проекте вкратце и другие слова оффера
              </div>
              <div className="chemodan_btn">
                Начать
                <img src="/img/strelka.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Audit;
