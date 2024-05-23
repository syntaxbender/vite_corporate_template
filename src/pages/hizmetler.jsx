import React from 'react'
import BreadCrumbs from '../components/breadcrumb'
import ColoredCard from '../components/coloredCard';
import raporlamaiszekasi from "../../public/assets/images/486.jpg"
import butceplanlama from "../../public/assets/images/47022.jpg"
import veriambari from "../../public/assets/images/108506.jpg"
import yapayzekailerianalitik from "../../public/assets/images/124727.jpg"
import veridepolama from "../../public/assets/images/2149406772.jpg"
import yazilimdanismanligi from "../../public/assets/images/2150061955.jpg"
const IsAnalitigi = () => {
    const header = "Veri Analitiği ve İş Zekası Çözümleri";
    //const description = "İş güvenliği ve sağlığı hizmetleriyle işletmenizin güvenliğini sağlayın. Uzman ekibimizle iletişime geçin ve güvenliği birlikte artıralım.";
    const canonical = "/hizmetler/veri-analitigi-ve-is-zekasi-cozumleri";
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
    const serviceList = [
        {
          title: "Veri Analitiği ve İş Zekası Çözümleri",
          link: "/hizmetler/veri-analitigi-ve-is-zekasi-cozumleri",
        },
        {
          title: "IK Hizmetleri",
          link: "/hizmetler/detay/ik-hizmetleri"
        },
        {
          title: "Eğitim",
          link: "/hizmetler/detay/egitim-hizmetleri"
        }
      ];
    
    const serviceCards = [];
    for (let i in serviceList) {
        serviceCards.push(
            <ColoredCard link={serviceList[i].link} img={serviceList[i].img} title={serviceList[i].title} />
        )
    }
    return (
        <>
            <BreadCrumbs route={routes}></BreadCrumbs>
            <section className="card-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <h6>İş Dünyasında Bir Aklınız Olsun.</h6>
                                <h4>Veri Analitiği ve İş Zekası Çözümleri</h4>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                {serviceCards}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IsAnalitigi