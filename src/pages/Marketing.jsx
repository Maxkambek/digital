/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,
} from "reactstrap";
const Marketing = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="Marketing">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="market_type">PERFORMANCE MARKETING</div>
              <div className="market_name">Попадем в цель?</div>
              <div className="market_p">
                Мы понимаем, что для успешного продвижения в интернет-среде
                требуется комплексный подход. Для каждого клиента мы подбираем
                инструменты исходя из особенностей его бизнеса.
              </div>
              <div onClick={() => nav("/contact")} className="market_btn">
                Заказать услуги
              </div>
            </div>
            <div className="col-6 d-sm-flex d-none">
              <img src="/img/oq.png" alt="" />
            </div>
            <div className="col-6 d-sm-flex d-sm-none">
              <img className="w-100" src="/img/oq_2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="how_work">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="how_work_h">Как мы работаем</div>
              <div className="how_work_p">
                Креативная, опытная команда, которая любит решать сложные
                задачи. Делаем то, что другим не под силу. Залог нашего успеха в
                углубленном анализе и желании стать не просто компанией, которая
                Вам помогает, а быть надежным и, самое главное, эффективным
                партнером на долгие годы.
              </div>
            </div>
            <div className="col-lg-3 mb-lg-0 mb-3">
              <div className="how_work_box">
                <div className="how_work_box_h">Анализ</div>
                <div className="how_work_box_p">
                  Товарищи! укрепление и развитие структуры представляет собой
                  интересный эксперимент проверки.
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-lg-0 mb-3">
              <div className="how_work_box">
                <div className="how_work_box_h">Анализ</div>
                <div className="how_work_box_p">
                  Товарищи! укрепление и развитие структуры представляет собой
                  интересный эксперимент проверки.
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-lg-0 mb-3">
              <div className="how_work_box">
                <div className="how_work_box_h">Анализ</div>
                <div className="how_work_box_p">
                  Товарищи! укрепление и развитие структуры представляет собой
                  интересный эксперимент проверки.
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-lg-0 mb-3">
              <div className="how_work_box">
                <div className="how_work_box_h">Анализ</div>
                <div className="how_work_box_p">
                  Товарищи! укрепление и развитие структуры представляет собой
                  интересный эксперимент проверки.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="smm">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 d-sm-none">
              <img className="w-100" src="/img/img.png" alt="" />
            </div>
            <div className="col-sm-6 col-12 d-flex align-items-center">
              <UncontrolledAccordion defaultOpen="1">
                <AccordionItem className="mb-3">
                  <AccordionHeader targetId="1">
                    <div className="acor_name">SMM</div>
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    <div className="acor_h">Контекстная реклама</div>
                    <div className="acor_p">
                      Креативная, опытная команда, которая любит решать сложные
                      задачи. Делаем то, что другим не под силу. Залог нашего
                      успеха в углубленном анализе и желании стать не просто
                      компанией, которая Вам помогает, а быть надежным и, самое
                      главное, эффективным партнером на долгие годы.
                    </div>
                    <div onClick={() => nav("/contact")} className="acor_btn">
                      Заказать услугу
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="mb-3">
                  <AccordionHeader targetId="2">
                    <div className="acor_name">SEO Продвижение</div>
                  </AccordionHeader>
                  <AccordionBody accordionId="2">
                    <div className="acor_h">Контекстная реклама</div>
                    <div className="acor_p">
                      Креативная, опытная команда, которая любит решать сложные
                      задачи. Делаем то, что другим не под силу. Залог нашего
                      успеха в углубленном анализе и желании стать не просто
                      компанией, которая Вам помогает, а быть надежным и, самое
                      главное, эффективным партнером на долгие годы.
                    </div>
                    <div onClick={() => nav("/contact")} className="acor_btn">
                      Заказать услугу
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="mb-3">
                  <AccordionHeader targetId="3">
                    <div className="acor_name">Таргет</div>
                  </AccordionHeader>
                  <AccordionBody accordionId="3">
                    <div className="acor_h">Контекстная реклама</div>
                    <div className="acor_p">
                      Креативная, опытная команда, которая любит решать сложные
                      задачи. Делаем то, что другим не под силу. Залог нашего
                      успеха в углубленном анализе и желании стать не просто
                      компанией, которая Вам помогает, а быть надежным и, самое
                      главное, эффективным партнером на долгие годы.
                    </div>
                    <div onClick={() => nav("/contact")} className="acor_btn">
                      Заказать услугу
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="mb-3">
                  <AccordionHeader targetId="4">
                    <div className="acor_name">Perfomance-стратегия</div>
                  </AccordionHeader>
                  <AccordionBody accordionId="4">
                    <div className="acor_h">Контекстная реклама</div>
                    <div className="acor_p">
                      Креативная, опытная команда, которая любит решать сложные
                      задачи. Делаем то, что другим не под силу. Залог нашего
                      успеха в углубленном анализе и желании стать не просто
                      компанией, которая Вам помогает, а быть надежным и, самое
                      главное, эффективным партнером на долгие годы.
                    </div>
                    <div onClick={() => nav("/contact")} className="acor_btn">
                      Заказать услугу
                    </div>
                  </AccordionBody>
                </AccordionItem>
              </UncontrolledAccordion>
            </div>
            <div className="col-sm-5 d-sm-flex d-none">
              <img src="/img/smm.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
