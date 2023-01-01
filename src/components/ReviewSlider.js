import { Swiper, SwiperSlide } from "swiper/react";
import { testimonial2Props } from "../sliderProps";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../BaseUrl/baseUrl1";
const ReviewSlider = () => {
  const [data, setData] = useState();

  const [image, setImage] = useState();

  useEffect(() => {
    getData();
  }, []); //eslint-disable-line

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://medical-dashboard12.herokuapp.com/api/patients-reviews?populate=PatientImage`
      );
      const response1 = await axios.get(
        `https://medical-dashboard12.herokuapp.com/api/patients-reviews?populate=PatientImage`
      );
      debugger;
      setData(response.data.data);
      setImage(
        response1.data.data[0].attributes.Slider1Image.data.attributes.url
      );

      return response;
    } catch (error) {
      return error.response;
    }
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <Swiper
          {...testimonial2Props}
          className="owl-carousel owl-theme reviews-holder"
        >
          {/* TESTIMONIAL #1 */}
          {data?.map((item) => {
            debugger;
            return (
              <>
                <SwiperSlide className="review-2">
                  <div className="review-txt text-center">
                    {/* Quote */}
                    <div className="quote">
                      <img src="images/quote.png" alt="quote-img" />
                    </div>
                    {/* Author Avatar */}
                    <div className="testimonial-avatar">
                      <img
                        src={
                          baseURL +
                          item?.attributes.PatientImage.data.attributes.url
                        }
                        alt="testimonial-avatar"
                      />
                    </div>
                    {/* Testimonial Text */}
                    <p>{item?.attributes.PatientReviewPara}</p>
                    {/* Testimonial Author */}
                    <div className="review-author">
                      <h5 className="h5-sm">{item?.attributes.PatientName}</h5>
                      <span>{item?.attributes.PatientProfession}</span>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}

          {/* END TESTIMONIAL #9 */}
          <div className="owl-dots"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlider;
