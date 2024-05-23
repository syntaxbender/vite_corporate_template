import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimpleSlider from "../components/simpleSlider/index.jsx";
import CarouselTabs from "../components/carouselTabs/index.jsx";
import ctaImage from "../../public/assets/images/3d-modern-background-with-cyber-particles.jpg"
import { ParallaxBanner } from "react-scroll-parallax";
import sxpSlider from "../../public/assets/images/sxp_slider_bg2.png"
const Slide = () => {
  return (
    <div className="slider-page">
      <div className="slider-overlay">
        <img src={sxpSlider} alt="" className="slider-bg" />
      </div>
      <div className="slider-content">
        <div className="container" style={{ height: "100%" }}>
          <div className="row" style={{ height: "100%" }}>
            <div className="col-lg-6" style={{ display: "flex", alignItems: "center" }}>
              <div>
                <h2>
                  Softxpress ile
                  <em style={{ display: "block" }}>gerçek potansiyelini</em>
                  ortaya çıkar<em style={{display:"inline-block"}}>.</em>
                </h2>
                <div className="div-dec" />
                <p>Güçlü ve çözüm odaklı ve hizmetlerimizle her daim yanınızdayız!</p>
                <div className="buttons">
                  <div className="orange-button">
                    <a href="#">Teklif Al</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}
const Home = () => {
  return (
    <>
      <SimpleSlider>
        <Slide />
        <Slide />
      </SimpleSlider>
      {/* <div className="swiper-container" id="top">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="slide-inner" style={{ backgroundImage: "url(assets/images/path82.png)" }}>
              <div className="container" style={{ height: "100%" }}>
                <div className="row" style={{ height: "100%" }}>
                  <div className="col-lg-6" style={{ display: "flex", alignItems: "center" }}>
                    <div className="header-text">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-next swiper-button-white" />
        <div className="swiper-button-prev swiper-button-white" />
      </div> */}
      <section className="main-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h6>About Us</h6>
                <h4>Know Us Better</h4>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="service-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="left-image">
                      <img src="assets/images/service-image-01.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="right-text-content">
                      <i className="fas fa-archive" />
                      <h4>Digital Currencies</h4>
                      <p>You will see a bunch of free CSS templates when you search on Google. TemplateMo is the best one because it is 100% free for anyone. We do not ask you anything in return. You are free to use our templates for any purpose.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="service-item">
                <div className="row">
                  <div className="col-lg-6 align-self-center">
                    <div className="left-text-content">
                      <i className="fas fa-archive" />
                      <h4>Financial Solutions</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et ex massa. In ac laoreet urna. Curabitur eu enim nibh. Phasellus sodales nisi vel leo aliquam, ut tempus augue hendrerit. Pellentesque eu risus tincidunt, condimentum eros in, auctor augue. Vivamus et urna blandit, varius sapien sed.</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-image">
                      <img src="assets/images/service-image-02.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="service-item last-service">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="left-image">
                      <img src="assets/images/service-image-03.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="right-text-content">
                      <i className="fas fa-archive" />
                      <h4>Cryptocurrency Exchanges</h4>
                      <p>Mauris id efficitur ante, vitae ultrices metus. Donec et nunc massa. Nullam non felis dignissim, dapibus turpis semper, vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec. Aenean in dapibus risus, in euismod ligula. Aliquam vel scelerisque elit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="simple-cta">
        <ParallaxBanner
          layers={[{ image: ctaImage, speed: -15 }]}
          //className="aspect-[2/1]"
        >
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h4>
                Business
                <em>Solutions</em>
                {" "}
                and
                <strong>Crypto</strong>
                {" "}
                Investments
              </h4>
            </div>
            <div className="col-lg-7">
              <div className="buttons">
                <div className="green-button">
                  <a href="#">Discover More</a>
                </div>
                <div className="orange-button">
                  <a href="#">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxBanner>
    </section >
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h6>Investment in Details</h6>
                <h4>Upgrade your knowledge</h4>
              </div>
            </div>
      <CarouselTabs/>
             {/*<div className="col-lg-10 offset-lg-1">
              <div className="naccs">
                <div className="tabs">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menu">
                        <div className="active gradient-border"><span>Crypto Investments</span></div>
                        <div className="gradient-border"><span>Cryptocurrency Market</span></div>
                        <div className="gradient-border"><span>Financial Planning</span></div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <ul className="nacc">
                        <li className="active">
                          <div>
                            <div className="left-image">
                              <img src="assets/images/service-details-01.jpg" alt="" />
                            </div>
                            <div className="right-content">
                              <h4>Learn more about cryptocurrency investments</h4>
                              <p>Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.</p>
                              <span>- Top Crypto prices and charts</span>
                              <span>- Is Cryptocurrency a good investment?</span>
                              <span className="last-span">- Crypto Market Insiders and News</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="left-image">
                              <img src="assets/images/service-details-02.jpg" alt="" />
                            </div>
                            <div className="right-content">
                              <h4>Read more on Cryptocurrency Market</h4>
                              <p>Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.</p>
                              <span>- Digital Currency Exchange</span>
                              <span>- Trading Cryptocurrencies Online</span>
                              <span className="last-span">- Different Categories of Digital Currencies</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="left-image">
                              <img src="assets/images/service-details-03.jpg" alt="" />
                            </div>
                            <div className="right-content">
                              <h4>How to carefully plan on your online financials</h4>
                              <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus. Nulla facilisi. Mauris vitae lacinia magna. Nam euismod sapien sit amet elementum blandit. Nulla non placerat neque.</p>
                              <span>- Financial Planning and Investments</span>
                              <span>- Business Networking</span>
                              <span className="last-span">- Managing Digital Assets</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> 
            </div>*/}
          </div>
        </div>
      </section>
      <section className="calculator">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="left-image">
                <img src="assets/images/handshake_3.png" alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="section-heading">
                <h6>Your Freedom</h6>
                <h4>Get a Financial Plan</h4>
              </div>
              <form id="calculate" action="" method="get">
                <div className="row">
                  <div className="col-lg-6">
                    <fieldset>
                      <label htmlFor="name">Your Name</label>
                      <input type="name" name="name" id="name" placeholder="" autoComplete="on" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <label htmlFor="email">Your Email</label>
                      <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="subject">Subject</label>
                      <input type="subject" name="subject" id="subject" placeholder="" autoComplete="on" />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="chooseOption" className="form-label">Your Reason</label>
                      <select
                        name="Category"
                        className="form-select"
                        aria-label="Default select example"
                        id="chooseOption"
                      // onChange="this.form.click()"
                      >
                        <option value="Choose an Option">Choose an Option</option>
                        <option value="Online Banking">Online Banking</option>
                        <option value="Financial Control">Financial Control</option>
                        <option value="Yearly Profit">Yearly Profit</option>
                        <option value="Crypto Investment">Crypto Investment</option>
                      </select>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="orange-button">Submit Now</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
