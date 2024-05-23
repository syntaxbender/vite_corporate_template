import React from 'react'
import BreadCrumbs from '../components/breadcrumb';
import yapayzekaanalitik1 from "../../public/assets/images/yapayzekaanalitik1.jpg"
import yapayzekaanalitik2 from "../../public/assets/images/yapayzekaanalitik2.jpg"
import yapayzekaanalitik3 from "../../public/assets/images/yapayzekaanalitik3.jpg"
import aiImage from "../../public/assets/images/ai_image.jpg"
const YapayZekaAnalitik = () => {
  const header = "Yapay Zeka ve İleri Analitik";
  //const description = "İş güvenliği ve sağlığı hizmetleriyle işletmenizin güvenliğini sağlayın. Uzman ekibimizle iletişime geçin ve güvenliği birlikte artıralım.";
  const canonical = "/hizmetler/yapay-zeka-ve-ileri-analitik";
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
                <div className="section-paragraph">
                  <div className="row">
                    <div className="col-lg-5">
                      <img src={aiImage} />
                    </div>
                    <div className="col-lg-7">
                      <div className="paragraph-heading">
                        <h6>İşinize verilerinizle yön verin.</h6>
                        <h4>Geleceğinizi Şekillendiren Veri ve Yapay Zeka Çözümleriyle Tanışın: Softxpress İle İleri Analitik Dönüşüm</h4>
                      </div>
                      <p>
                        Softxpress, yapay zeka ve ileri analitik konularında derin uzmanlığa sahiptir. Müşterilerimize, her türlü veriyi işleyebilecek altyapılar sağlayarak, bu verileri stratejik iş kararlarını destekleyecek çözümlere dönüştürüyoruz. Sürekli gelişim içinde olan çözümlerimiz, yenilikçi bakış açıları ve Ar-Ge projeleriyle zenginleştiriliyor, bu da müşterilerimize ve sektöre yeni deneyimler sunuyor. En güncel teknolojileri kullanarak geleceğinizi sağlam temeller üzerine inşa ediyoruz.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="content-area">
                  <div className="triple-card">
                    <div className="triple-card-container">
                      <div className="triple-card-image">
                        <img src={yapayzekaanalitik2} alt="" />
                      </div>
                      <div className="triple-card-content">
                        <h4 className="triple-card-heading">
                          Yapay Zekâ ile Değerli Fikirler Elde Edin
                        </h4>
                        <p className="triple-card-text">
                          Özel büyük veri çözümlerimizle, müşterilerimiz için değerli fikirler elde etmelerine yardımcı oluyoruz ve şirketleri için yol haritası oluşturmalarını destekliyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="triple-card-container">
                      <div className="triple-card-image">
                        <img src={yapayzekaanalitik3} alt="" />
                      </div>
                      <div className="triple-card-content">
                        <h4 className="triple-card-heading">
                          İleri Teknoloji Çözümleri
                        </h4>
                        <p className="triple-card-text">
                          Veri akışını doğru bir yöntemle sağlamak için, müşterilerimize ileri teknoloji çözümlerini sunuyoruz ve potansiyel verilerden yararlanmalarını sağlıyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="triple-card-container">
                      <div className="triple-card-image">
                        <img src={yapayzekaanalitik1} alt="" />
                      </div>
                      <div className="triple-card-content">
                        <h4 className="triple-card-heading">
                          Veri Akışını Bozan Zorlukları Çözme
                        </h4>
                        <p className="triple-card-text">
                          Büyük veri analitiği ve yapay zekâ ile, müşterilerimizin karşılaştığı en büyük zorlukları kararlı bir şekilde çözüyoruz. İleri teknoloji çözümleri ve modelleri sayesinde, verilerin değerini ortaya çıkarıyor ve şirketlerin ihtiyaç duyduğu hizmetleri sağlıyoruz.
                        </p>
                      </div>
                    </div>
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

export default YapayZekaAnalitik