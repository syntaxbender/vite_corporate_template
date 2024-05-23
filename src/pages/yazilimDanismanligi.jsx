import React from 'react'
import BreadCrumbs from '../components/breadcrumb';

const YazilimDanismanligi = () => {
  const header = "Yazılım Danışmanlığı";
  //const description = "İş güvenliği ve sağlığı hizmetleriyle işletmenizin güvenliğini sağlayın. Uzman ekibimizle iletişime geçin ve güvenliği birlikte artıralım.";
  const canonical = "/hizmetler/yazilim-danismanligi";
  const routes = [
    {
      text: "home_icon",
      link: "/",
    },
    {
      text: "Hizmetler",
      link: "/hizmetler",
    },
    {
      text: header,
      link: canonical,
    },
  ];
  return (

    <>
      <BreadCrumbs route={routes}></BreadCrumbs>
      <section className="servicedetails-section">

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="col-12">
                <div className="section-heading">
                  <h6>Teknolojik Dönüşümde Çözüm Ortağınız</h6>
                  <h4>Özel Yazılım Hizmetleri ve Danışmanlık Hizmetleri</h4>
                </div>
              </div>
              <div className="quaternary-card">
                {/* <div style={{ position: "absolute", top: "0", transform: "translateX(-50%)", left: "50%", height: "100%", width: "5px", background: "red", zIndex: "99" }}>

                </div>
                <div style={{ position: "absolute", left: "0", transform: "translateY(-50%)", top: "50%", height: "5px", width: "100%", background: "red", zIndex: "99" }}>

                </div> */}
                <div>
                  <div className="content-area">
                    <div className="content-number">01</div>
                    <h3 className="quaternary-heading">
                      Modern Web Sunucularının Kurulumu ve Yönetimi
                    </h3>
                    <p className="quaternary-text">
                      WebLogic, Tomcat, JBoss, GlassFish gibi modern web sunucularının kurulumu, yönetimi ve konfigürasyonu konularında teknik danışmanlık hizmeti sunuyoruz. Aynı zamanda erişim yönetimi alanında müşterilerimize çözümler sağlıyoruz.
                    </p>
                  </div>
                  <div className="content-area">
                    <div className="content-number">02</div>
                    <h3 className="quaternary-heading">
                      Özel Yazılım İhtiyaçlarına Çözümler Üretme
                    </h3>
                    <p className="quaternary-text">
                      Müşterilerimizin özel yazılım ihtiyaçlarına yönelik olarak, özelleştirilmiş çözümler üretiyoruz ve onların iş süreçlerini verimli bir şekilde destekliyoruz.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="content-area">
                    <div className="content-number">03</div>
                    <h3 className="quaternary-heading">
                      DevOps ve Açık Kaynak Çözümleri</h3>
                    <p className="quaternary-text">
                      Kuruluşların ihtiyaçlarını karşılayan mükemmel açık kaynaklı yazılım çözümlerini sunarak, müşterilerimize profesyonel, uygun maliyetli ve yüksek kaliteli hizmetler sunuyoruz.
                    </p>
                  </div>
                  <div className="content-area">
                    <div className="content-number">04</div>
                    <h3 className="quaternary-heading">
                      ERP Süreç Yönetimi
                    </h3>
                    <p className="quaternary-text">
                      Kurumsal Kaynak Planlaması (ERP), işletmelerin finans, muhasebe, üretim, satış ve diğer departmanlarını entegre bir şekilde yöneten bir yazılım sistemidir. ERP süreçleri, işletme içindeki faaliyetleri optimize ederek verimliliği artırır ve sistem yönetimiyle bilgi akışını düzenler. Modül tabanlı yapısı sayesinde farklı işlevselliği temsil eden modüller arasında entegrasyon sağlar. ERP yönetimi, organizasyonlara genel bir görünürlük sunarak veri bütünlüğünü artırır ve karar alıcılarına gerçek zamanlı erişim imkanı tanır.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default YazilimDanismanligi