import React from 'react'
import res1 from "../../public/assets/images/31215.jpg"
import res2 from "../../public/assets/images/47.jpg"
import res3 from "../../public/assets/images/2148793751.jpg"
import res4 from "../../public/assets/images/79.jpg"
import res5 from "../../public/assets/images/vector.png"
import bg33 from "../../public/assets/images/bg_top.png"
import planning from "../../public/assets/images/52.jpg"
import saving from "../../public/assets/images/26731.jpg"
import competitive from "../../public/assets/images/2149352606.jpg"
import management from "../../public/assets/images/133858.jpg"
import architecture from "../../public/assets/images/2150440925.jpg"
import relational from "../../public/assets/images/2148999168.jpg"
import reporting from "../../public/assets/images/3585415_66260.jpg"
import BreadCrumbs from '../components/breadcrumb'
import CarouselTabs from '../components/carouselTabs'
const RaporlamaIsZekasi = () => {
  const header = "Raporlama ve İş Zekası Çözümleri";
  //const description = "İş güvenliği ve sağlığı hizmetleriyle işletmenizin güvenliğini sağlayın. Uzman ekibimizle iletişime geçin ve güvenliği birlikte artıralım.";
  const canonical = "/hizmetler/raporlama-ve-is-zekasi-cozumleri";
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

  const carouselContents = [
    {
      image: management,
      content: (
        <>
          <h4>Stratejik Yönetim</h4>
          <p>Verilerin stratejik birer varlık olarak kullanılmasını sağlayarak, iş süreçlerinizi daha etkin bir şekilde yönetmenize olanak tanır. </p>
        </>
      )
    },
    {
      image: competitive,
      content: (
        <>
          <h4>Rekabet Avantajı</h4>
          <p>Pazardaki değişikliklere hızlı adapte olmanızı sağlar, rekabet avantajınızı artırır.</p>
        </>
      )
    },
    {
      image: saving,
      content: (
        <>
          <h4>Maliyet Tasarrufu</h4>
          <p>Veri tabanlı kararlar alarak, operasyonel süreçlerinizi optimize eder ve maliyet tasarrufu elde edersiniz.</p>
        </>
      )
    },
    {
      image: planning,
      content: (
        <>
          <h4>Gelecek Odaklı Planlama</h4>
          <p>Veri analitiği ve öngörüsel analizlerle, gelecekteki eğilimlere dair önceden bilgi sahibi olmanızı sağlar.</p>
        </>
      )
    }
  ];
  const coruselTabs = ["Stratejik Yönetim", "Rekabet Avantajı", "Maliyet Tasarrufu", "Gelecek Odaklı Planlama"];
  return (
    <>
      <BreadCrumbs route={routes}></BreadCrumbs>
      <section style={{ margin: "0", position: "relative" }} className="servicedetails-section">
        <div style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", zIndex: "1" }} className="section-overlay">
          <img src={bg33} style={{height:"100%"}} className="section-overlay-image" />
        </div>
        <div style={{ position: "relative", zIndex: "2" }} className="container">
          <div className="row">
            <div className="col-12">
              <div style={{ margin: "50px 0px 100px 0px" }} className="section-paragraph">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="section-paragraph-container">
                      <div className="paragraph-heading">
                        <h6>Rekabette Avantaj Elde Etmenin Anahtarı</h6>
                        <h4>Raporlama ve İş Zekası Çözümleri</h4>
                      </div>
                      <p>
                        Softxpress Raporlama ve İş Zekası Çözümleri: Softxpress'in Raporlama ve İş Zekası Çözümleri, kurumların verilerini analiz ederek stratejik karar alma süreçlerini destekler. Bu çözümler ile eyleme dönüşebilir içgörüler elde ederek, karar alma süreçlerini basitleştirmek mümkündür. Verileri toplayıp işleyerek analiz ediyor ve görselleştiriyoruz, bu sayede büyük hacimli veriler üzerinde kontrol sağlanıyor. Verilerinizi güvenle Cloud veya On-prem ortamlarında depolayarak, çeşitli analitik araçlara kesintisiz erişim imkanı sunuyoruz.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="section-image-container">
                      <img style={{ boxShadow: "none", height: "auto" }} src={res5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="servicedetails-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-paragraph">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="section-image-container">
                      <img src={res1} />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="section-paragraph-container">
                      <div className="paragraph-heading">
                        <h6>Verilerinizi Güçlü Bir Stratejiyle Aydınlatın </h6>
                        <h4>İş Zekası Danışmanlığı</h4>
                      </div>
                      <p>
                        Günümüz iş dünyasında, hızla değişen pazar koşulları ve artan veri hacmiyle başa çıkabilmek, rekabet avantajı elde etmek için iş zekası danışmanlığı kaçınılmaz bir gereklilik haline gelmiştir. İşte tam da burada, iş zekası danışmanlığı devreye girerek, organizasyonların veri varlıklarını en üst düzeye çıkarmalarına yardımcı olur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-paragraph">
                <div className="row">

                  <div className="col-lg-7">
                    <div className="section-paragraph-container">
                      <div className="paragraph-heading">
                        <h6>Stratejik İş Zekası Çözümleri ile Başarıya Ulaşın</h6>
                        <h4>Çözüm Odaklı Hizmetler</h4>
                      </div>
                      <p>
                        İş zekası danışmanlığı, organizasyonların sahip oldukları veri kaynaklarını analiz etmek, bu verilerden anlamlı bilgiler çıkarmak ve stratejik kararlar alabilmek için gelişmiş çözümler sunar. Bu kapsamlı hizmet, iş süreçlerinizi iyileştirmek ve veri tabanlı karar almanızı desteklemek için tasarlanmıştır.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="section-image-container">
                      <img src={res2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-paragraph">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="section-image-container">
                      <img src={res3} />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="section-paragraph-container">
                      <div className="paragraph-heading">
                        <h6>Verileri İş Sonuçlarına Dönüştürme Yolculuğunda Rehberlik</h6>
                        <h4>Hedeflenen İş Sonuçları İçin Özelleştirilmiş Çözümler</h4>
                      </div>
                      <p>
                        İş zekası danışmanlığı, organizasyonunuzun ihtiyaçlarına özel olarak tasarlanan çözümler sunarak, verilerinizi hedeflenen iş sonuçlarına dönüştürmenize yardımcı olur. Power BI, Tableau, Qlik Sense gibi önde gelen iş zekası araçlarıyla entegre edilen çözümler, interaktif ve etkileşimli raporlama ile karar alıcılarına anında erişim sağlar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-paragraph">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="section-paragraph-container">
                      <div className="paragraph-heading">
                        <h6>İş Zekası Danışmanlığının Temel Taşları</h6>
                        <h4>Veri Analitiği ve Görselleştirme</h4>
                      </div>
                      <p>
                        İş zekası danışmanlığında ön planda olan veri analitiği ve görselleştirme, karmaşık veri setlerinden anlamlı içgörüler elde etmenizi sağlar. Organizasyonunuzun sağlığı hakkında detaylı bilgiler sunan interaktif raporlar ve görsel analizler, karar alıcılarınızın bilinçli ve hızlı kararlar almasına yardımcı olur.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="section-image-container">
                      <img src={res4} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="servicedetails-section blue-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h6>İş Süreçlerinizi Daha İyi Hale Getirin</h6>
                <h4>İş Zekası Danışmanlığı Avantajları</h4>
              </div>
              <CarouselTabs tabs={coruselTabs} contents={carouselContents} />
            </div>
          </div>
        </div>
      </section>

      <section className="servicedetails-section">

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h6>İş Süreçlerinizi Daha İyi Hale Getirin</h6>
                <h4>Responsive Dashboard ve Raporlama</h4>
              </div>
              <div className="triple-card">
                <div className="triple-card-container">
                  <div className="triple-card-image">
                    <img src={reporting} alt="" />
                  </div>
                  <div className="triple-card-content">
                    <h4 className="triple-card-heading">
                      Dashboard ve Raporlama Çözümleri
                    </h4>
                    <p className="triple-card-text">
                      SSRS, QlikSense, DevExpress Report Builder gibi farklı platformlarda responsive, native dashboard ve ad-hoc raporlama danışmanlık hizmetleri sunuyoruz.
                    </p>
                  </div>
                </div>
                <div className="triple-card-container">
                  <div className="triple-card-image">
                    <img src={relational} alt="" />
                  </div>
                  <div className="triple-card-content">
                    <h4 className="triple-card-heading">
                      Structure ve Unstructure Veri Kaynakları ile İlişkisel Modelleme
                    </h4>
                    <p className="triple-card-text">
                      SSIS Programı aracılığıyla, yapınızı veya yapınızı temsil etmek için kullanmak isteyebileceğiniz, ihtiyaca göre ilişkisel star veya snowflake, incremental veya clustered column store veri ambarı modelleme danışmanlık hizmetleri veriyoruz.
                    </p>
                  </div>
                </div>
                <div className="triple-card-container">
                  <div className="triple-card-image">
                    <img src={architecture} alt="" />
                  </div>
                  <div className="triple-card-content">
                    <h4 className="triple-card-heading">
                      OLAP Veri Mimarisi Danışmanlık Hizmetleri
                    </h4>
                    <p className="triple-card-text">
                      Dimensional veya tabular in-memory, pivot mimarilerle excel'de kendi raporlarını üretebilecekleri analitik OLAP veri mimarisi danışmanlık hizmetleri sunuyoruz.
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

export default RaporlamaIsZekasi