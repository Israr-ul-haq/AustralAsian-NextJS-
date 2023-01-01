import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { service3Props } from "../../sliderProps";
import { baseURL } from "../../BaseUrl/baseUrl1";
import axios from "axios";

const Demo6Services5 = () => {
  const [data, setData] = useState();
  const [data1, setData1] = useState();
  useEffect(() => {
    getData();
  }, []); //eslint-disable-line

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://medical-dashboard12.herokuapp.com/api/post-sliders?populate=*`
      );
      const response1 = await axios.get(
        `https://medical-dashboard12.herokuapp.com/api/post-silder-headers`
      );
      debugger;
      setData(response.data.data);
      setData1(response1.data.data[0].attributes);
      return response;
    } catch (error) {
      return error.response;
    }
  };
  return (
    <section
      id="services-5"
      className="bg-lightgrey wide-100 services-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-lg-10 offset-lg-1 section-title">
            {/* Title 	*/}
            <h3 className="h3-md steelblue-color">{data1?.primaryheading}</h3>
            {/* Text */}
            <p>{data1?.SecondaryHeading}</p>
          </div>
        </div>
        {/* SERVICES CONTENT */}
        <div className="row">
          <div className="col-md-12">
            <Swiper
              {...service3Props}
              className="owl-carousel owl-theme services-holder"
            >
              {/* SERVICE BOX #1 */}
              {data?.map((item) => {
                return (
                  <>
                    <SwiperSlide className="sbox-5">
                      {/* Image */}

                      <img
                        className="img-fluid"
                        src={
                          baseURL +
                          item.attributes.postImage.data.attributes.url
                        }
                        alt="content-image"
                      />
                      {/* Text */}
                      <div className="sbox-5-txt">
                        {/* Title */}
                        <h5 className="h5-sm blue-color">
                          {item?.attributes.primaryText}
                        </h5>
                        {/* Text */}
                        <p>{item?.attributes.para}</p>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}

              {/* SERVICE BOX #2 */}
              <div className="owl-dots"></div>
            </Swiper>
          </div>
        </div>
        {/* END SERVICES CONTENT */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo6Services5;
