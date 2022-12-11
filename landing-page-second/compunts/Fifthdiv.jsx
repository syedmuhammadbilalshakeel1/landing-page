import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
function fifthdiv() {
  return (
    <>
      <div className="fifthslidermain">
        <div className="headingnewdivfiife">
          <h1 className="headinginslider">Customers love us</h1>
          <p className="paragraph12">
            Create custom landing pages with Omega
            <br /> that converts more visitors than any website.
          </p>
        </div>
        <div className="sectionfifhslider">
          <section className="sa">
            <div className="container slider2_container">
              <div className="row">
                <div className="col mt-5 py-5">
                  {/* swiper start*/}

                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    speed={900}
                    loopFillGroupWithBlank={true}
                    pagination={{
                      clickable: true,
                    }}
                    // breakpoints={{
                    //   280: {
                    //     slidesPerView: 1,
                    //   },
                    //   567: {
                    //     slidesPerView: 3,
                    //   },
                    //   768: {
                    //     slidesPerView: 5,
                    //   },
                    // }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6">
                            <img
                              className="text-center mx-auto"
                              width="90%"
                              src="../assets/slider-images/testimonial-image-2.png"
                              alt=""
                            />
                          </div>
                          <div className="col-md-6 text-start pt-5">
                            <div className="mt-3 mt-lg-0">
                              <h3 className="fw-bold">
                                <span
                                  style={{
                                    color: "#593CFB",
                                    fontWeight: "bolder",
                                  }}
                                ></span>
                              </h3>
                              <p className="detailfifthfour1">
                                OMG! I cannot believe that I have got a brand
                                new landing page after getting Omega. It was
                                <br />
                                super easy to edit and publish.
                              </p>
                              <div className="mx-auto mx-md-0">
                                {/* <button className="slide2_btn ">
                                Browse Cars
                              </button> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6">
                            <img
                              className="text-center mx-auto"
                              width="90%"
                              src="../assets/slider-images/testimonial-image.png"
                              alt=""
                            />
                          </div>
                          <div className="col-md-6 text-start pt-5">
                            <div className="mt-3 mt-lg-0">
                              <p className="detailfifthfour1">
                                OMG! I cannot believe that I have got a brand
                                new landing page
                                <br /> after getting Omega. It was super easy to
                                edit and publish.
                              </p>
                              <div className="mx-auto mx-md-0">
                                {/* <button className="slide2_btn ">
                                Browse Cars
                              </button> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  {/* swiper end*/}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default fifthdiv;
