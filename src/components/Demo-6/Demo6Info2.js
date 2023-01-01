import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../BaseUrl/baseUrl1";

const Demo6Info2 = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []); //eslint-disable-line

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://medical-dashboard12.herokuapp.com/api/home-care-sections?populate=*`
      );
      debugger;
      console.log(response.data.data);
      setData(response.data.data[0].attributes);

      return response;
    } catch (error) {
      return error.response;
    }
  };
  return (
    <section id="info-2" className="wide-60 info-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-lg-6">
            <div
              className="txt-block pc-30 mb-40 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              {/* Section ID */}
              <span className="section-id blue-color">
                {data?.CarePrimaryHeading}
              </span>
              {/* Title */}
              <h3 className="h3-md steelblue-color">
                {data?.CareSecondaryHeading}
              </h3>
              {/* Text */}
              <p className="mb-30">{data?.CarePara}</p>
              {/* Options List */}
              <div className="row">
                <div className="col-xl-6">
                  {/* Option #1 */}
                  <div className="box-list m-top-15">
                    <div className="box-list-icon blue-color">
                      <i className="fas fa-angle-double-right" />
                    </div>
                    <p className="p-sm">{data?.CarePoint1}</p>
                  </div>
                  {/* Option #2 */}
                  <div className="box-list">
                    <div className="box-list-icon blue-color">
                      <i className="fas fa-angle-double-right" />
                    </div>
                    <p className="p-sm">{data?.CarePoint2}</p>
                  </div>
                  {/* Option #3 */}
                  <div className="box-list">
                    <div className="box-list-icon blue-color">
                      <i className="fas fa-angle-double-right" />
                    </div>
                    <p className="p-sm">{data?.CarePoint3}</p>
                  </div>
                </div>
                <div className="col-xl-6">
                  {/* Option #4 */}
                  <div className="box-list">
                    <div className="box-list-icon blue-color">
                      <i className="fas fa-angle-double-right" />
                    </div>
                    <p className="p-sm">{data?.CarePoint4}</p>
                  </div>
                  {/* Option #5 */}
                  <div className="box-list m-top-15">
                    <div className="box-list-icon blue-color">
                      <i className="fas fa-angle-double-right" />
                    </div>
                    <p className="p-sm">{data?.CarePoint5}</p>
                  </div>
                  {/* Option #6 */}
                  <div className="box-list">
                    <div className="box-list-icon blue-color">
                      <i className="fas fa-angle-double-right" />
                    </div>
                    <p className="p-sm">{data?.CarePoint6}</p>
                  </div>
                </div>
              </div>
              {/* End Options List */}
            </div>
          </div>
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div className="col-lg-6">
            <div className="info-2-img wow fadeInUp" data-wow-delay="0.6s">
              <img
                className="img-fluid"
                src={baseURL + data?.CareMainImage.data.attributes.url}
                alt="info-image"
              />
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo6Info2;
