import axios from "axios";
import React, { useEffect, useState } from "react";

const Demo6About3 = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []); //eslint-disable-line

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://medical-dashboard12.herokuapp.com/api/service-card-sections?populate=*`
      );
      debugger;
      setData(response.data.data);
      return response;
    } catch (error) {
      return error.response;
    }
  };
  return (
    <section id="about-3" className="about-section division">
      <div className="container">
        <div className="abox-3-holder">
          <div className="row d-flex align-items-center">
            {/* ABOUT BOX #1 */}
            {data?.map((item) => {
              debugger;
              return (
                <>
                  <div className="col-lg-4">
                    <div
                      className="abox-3 b-right wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      {/* Small Title */}
                      <p className="blue-color">
                        {item?.attributes.primaryheading}
                      </p>
                      {/* Title */}
                      <h5 className="h5-xs">
                        {item?.attributes.SecondaryHeading}
                      </h5>
                      {/* Text */}
                      <p>{item?.attributes.Para}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </div>
    </section>
  );
};

export default Demo6About3;
