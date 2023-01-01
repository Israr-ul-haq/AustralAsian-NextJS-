import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { baseURL } from "../../BaseUrl/baseUrl1";
import { heroSliderProps } from "../../sliderProps";

const Demo2Hero2 = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []); //eslint-disable-line

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://medical-dashboard12.herokuapp.com/api/home-pages?populate=*`
      );
      setData(response.data.data);
      return response;
    } catch (error) {
      return error.response;
    }
  };
  return (
    <section id="hero-2" className="hero-section division">
      {/* SLIDER */}
      <div className="slider blue-nav">
        <Swiper {...heroSliderProps} className="slides">
          {/* SLIDE #1 */}
          {data?.map((item) => {
            return (
              <>
                <SwiperSlide className="li">
                  <div
                    className="img"
                    data-bg={
                      baseURL + item.attributes.Slider1Image.data.attributes.url
                    }
                  />
                  {/* Image Caption */}
                  <div className="caption d-flex align-items-center left-align">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-9 col-lg-7">
                          <div className="caption-txt">
                            {/* Title */}
                            <h2 className="steelblue-color">
                              {item?.attributes.Slider1PrimaryText}
                              <span className="blue-color">
                                {item?.attributes.Slider1SecondaryText}
                              </span>
                            </h2>
                            {/* Option Box #1 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-md">
                                {item?.attributes.Slider1FirstPoint}
                              </p>
                            </div>
                            {/* Option Box #2 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-md">
                                {item?.attributes.Slider1SecoundPoint}
                              </p>
                            </div>
                            {/* Option Box #3 */}
                            <div className="box-list mb-15">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-md">
                                {item?.attributes.Slider1ThirdPoint}
                              </p>
                            </div>
                            {/* Button */}
                            {/* <Link href="/about-us">
                        <a className="btn btn-blue blue-hover">
                          More About Clinic
                        </a>
                      </Link> */}
                          </div>
                        </div>
                      </div>
                      {/* End row */}
                    </div>
                    {/* End container */}
                  </div>
                </SwiperSlide>
              </>
            );
          })}

          {/* END SLIDE #1 */}
          {/* SLIDE #2 */}

          {/* END SLIDE #3 */}
          <div className="indicators"></div>
        </Swiper>
      </div>
      {/* END SLIDER */}
    </section>
  );
};

export default Demo2Hero2;
