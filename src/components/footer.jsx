import React from "react";
import { Link } from "react-router-dom";
import raporlamaiszekasi from "../../public/assets/images/486.jpg"
import egitimhizmetleri from "../../public/assets/images/16288.jpg"
import butceplanlama from "../../public/assets/images/47022.jpg"
import veriambari from "../../public/assets/images/108506.jpg"
import yapayzekailerianalitik from "../../public/assets/images/124727.jpg"
import insankaynaklari from "../../public/assets/images/2148826470.jpg"
import veridepolama from "../../public/assets/images/2149406772.jpg"
import yazilimdanismanligi from "../../public/assets/images/2150061955.jpg"
import softxpressLogo from "../../public/assets/images/softxpress_logo.png"
function Footer() {
  const serviceList = Object.values({
    "raporlama-ve-is-zekasi-cozumleri":{
        title: "Raporlama ve İş Zekası Çözümleri",
        link: "/hizmetler/detay/raporlama-ve-is-zekasi-cozumleri",
        img:raporlamaiszekasi,
        sub: []
    },
    "yazilim-danismanligi":{
        title: "Yazılım Danışmanlığı",
        link: "/hizmetler/detay/yazilim-danismanligi",
        img:yazilimdanismanligi,
        sub: []
    },
    "veri-ambari-ve-yonetimi":{
        title: "Veri Ambarı ve Yönetimi ",
        link: "/hizmetler/detay/veri-ambari-ve-yonetimi",
        img:veriambari,
        sub: []
    },
    "veri-depolama-cozumleri":{
        title: "Veri Depolama Çözümleri",
        link: "/hizmetler/detay/veri-depolama-cozumleri",
        img:veridepolama,
        sub: []
    },
    "yapay-zeka-ve-ileri-analitik":{
        title: "Yapay Zeka ve İleri Analitik",
        link: "/hizmetler/detay/yapay-zeka-ve-ileri-analitik",
        img:yapayzekailerianalitik,
        sub: []
    },
    "butce-planlama-cozumleri":{
        title: "Bütçe Planlama Çözümleri",
        link: "/hizmetler/detay/butce-planlama-cozumleri",
        img:butceplanlama,
        sub: []
    },
    "egitim-hizmetleri":{
        title: "Eğitim Hizmetleri",
        link: "/hizmetler/detay/egitim-hizmetleri",
        img:egitimhizmetleri,
        sub: []
    },
    "ik-hizmetleri":{
        title: "IK Hizmetleri",
        link: "/hizmetler/detay/ik-hizmetleri",
        img:insankaynaklari,
        sub: []
    }
});
  const servicesJSX = [];
  const countPerSide = Math.floor(serviceList.length / 3);
  let divideRemainder = serviceList.length - countPerSide * 3;
  let stepper = countPerSide;
  let sideIndicator = 0;
  for (let i = 0; i < countPerSide * 3; i++) {
    if (stepper === i) {
      sideIndicator += 1;
      stepper += countPerSide;
    }
    if (!servicesJSX[sideIndicator]) servicesJSX[sideIndicator] = [];
    servicesJSX[sideIndicator].push(
      <div className="footer-service"><Link to={serviceList[i].link}>{serviceList[i].title}</Link></div>
    )
  }
  for (let i2 = 0; i2 < divideRemainder; i2++) {
  //console.log(i2);
    if (!servicesJSX[i2]) servicesJSX[i2] = [];
    let serviceElement = serviceList[(serviceList.length - (i2+1))];
    servicesJSX[i2].push(
      <div className="footer-service"><Link to={serviceElement.link}>{serviceElement.title}</Link></div>
    )
  }
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer">
              <h2>Softxpress</h2>
              <img src={softxpressLogo} />
              <div className="social-links">
                <div className="social-link">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="social-link">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="single-footer">
              <h2>Hizmetler</h2>
              <div className="row">
                <div className="footer-service-list col-lg-4 col-md-4 col-12">
                  {/* <div className="footer-service"><a href="#">Veri Analizi ve İşlemleri</a></div>
                  <div className="footer-service"><a href="#">Veri Analizi ve İşlemleri</a></div>
                  <div className="footer-service"><a href="#">Veri Analizi ve İşlemleri</a></div>
                  <div className="footer-service"><a href="#">Veri Analizi ve İşlemleri</a></div> */}
                  {servicesJSX[0]}
                </div>
                <div className="footer-service-list col-lg-4 col-md-4 col-12">
                  {servicesJSX[1]}
                </div>
                <div className="footer-service-list col-lg-4 col-md-4 col-12">
                  {servicesJSX[2]}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer">
              <h2>İletişim</h2>
              <div className="contact-detail">
                <i className="fa fa-phone"></i>
                <span>0850 444 4444</span>
              </div>
              <div className="contact-detail">
                <i className="fa fa-envelope"></i>
                <span>info@softxpress.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
