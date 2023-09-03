import React from "react";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center">
          <div className="contact_h">Есть проект?</div>
          <div className="contact_p">С нетерпением приступим к нему</div>
          <div className="contact_add">г.Москва ул. Освобождения, д.3</div>
          <div className="contact_tel">+7(066) 364 19 19 / info@DidgiKey</div>
          <a href="tel:998977165434">
            <div className="contact_btn">Связаться с нами</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
