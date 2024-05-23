import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderStatus, setStickyStatus } from './headerSlice.jsx';
import TopMenu from "../topMenu/index.jsx";
import softxpressLogo from "../../../public/assets/images/softxpress_logo.png"
function Header() {
  const menuItems = {
    "anasayfa": {
      title: "Anasayfa",
      link: "/",
    },
    "hakkimizda": {
      title: "Hakkımızda",
      link: "/hakkimizda",
    },
    "hizmetlerimiz": {
      title: "Hizmetler",
      link: "/hizmetler",
      sub: [
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
      ]
    },
    "kariyer": {
      title: "Kariyer",
      link: "/kariyer",
    },
    "iletisim": {
      title: "İletişim",
      link: "/iletisim",
    }
  };
  const state = useSelector((state) => state.header);
  const dispatch = useDispatch();
  const handleStickyStatus = (status) => {
    dispatch(setStickyStatus(status));
  }
  const handleLoaderStatus = (status) => {
    dispatch(setLoaderStatus(status));
  }
  useEffect(() => {
    handleLoaderStatus(true);
    const handleScroll = (event) => {
      if (window.scrollY > 200) {
        handleStickyStatus(true);
      } else {
        handleStickyStatus(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })
  // if (window.scrollY > 200) {
  //   $("header").addClass("background-header");
  // } else {
  //   $("header").removeClass("background-header");
  // }
  return (
    <header className={`header-area header-sticky${(state.isSticky) ? " background-header" : ""}`}>
      <div className="header-top d-none d-sm-none d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-top-container">
                <div className="row">
                  <div className="col-lg-6 col-sm-12 ">
                    <div className="header-top-email">
                      <i className="fa-solid fa-envelope" />
                      {" "}
                      info@softxpress.com
                    </div>
                    <div className="header-top-phone">
                      <i className="fa-solid fa-phone" />
                      {" "}
                      0850 444 4444
                    </div>
                  </div>
                  <div className="col-6 hidden-sm">
                    <div className="header-top-social">
                      <i className="fa-brands fa-instagram" />
                      <i
                        className="fa-brands fa-linkedin-in"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <div className="logo-container">
                <a href="index.html" className="logo">
                  <img src={softxpressLogo} alt="" />
                </a>
              </div>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <TopMenu items={menuItems}></TopMenu>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
