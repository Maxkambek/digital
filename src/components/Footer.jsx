import { } from 'react'

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="foot_box">
                <img src="/img/logo.svg" alt="" />
                <div className="foot_line"></div>
                <div className="foot_h">
                  Digital агенство полного цикла
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <div className="foot_p">
                © 1999-2020 Интернет-компания DidgiKey
                Информация на сайте не является публичной офертой
                Актуальные цены уточняйте у менеджеров
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Footer