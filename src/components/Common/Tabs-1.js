import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import { baseURL } from "../../BaseUrl/baseUrl1";

const Tabs1 = () => {
  const [data, setData] = useState();
  const [image, setImage] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();
  const [image5, setImage5] = useState();
  const [image6, setImage6] = useState();
  const [image7, setImage7] = useState();
  useEffect(() => {
    getData();
  }, []); //eslint-disable-line

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://medical-dashboard12.herokuapp.com/api/tab-sections?populate=*`
      );
      setData(response.data.data);
      return response;
    } catch (error) {
      return error.response;
    }
  };
  return (
    <section id="tabs-1" className="wide-100 tabs-section division">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Tab.Container defaultActiveKey="tab-1">
              {/* TABS NAVIGATION */}
              <div id="tabs-nav" className="list-group text-center">
                <Nav className="nav nav-pills" id="pills-tab" as="ul">
                  {/* TAB-1 LINK */}
                  <Nav.Item className="nav-item icon-xs" as="li">
                    <Nav.Link className="nav-link " eventKey="tab-1">
                      <span className="" />
                      <img
                        className="img-fluid"
                        src={baseURL + image}
                        alt="tab-image"
                      />
                      {data?.Tab1Heading}
                    </Nav.Link>
                  </Nav.Item>
                  {/* TAB-2 LINK */}
                  <Nav.Item className="nav-item icon-xs" as="li">
                    <Nav.Link className="nav-link" eventKey="tab-2">
                      {/* <span className="flaticon-005-blood-donation-3" /> */}
                      <img
                        className="img-fluid"
                        src={baseURL + image1}
                        alt="tab-image"
                      />
                      {data?.Tab2Heading}
                    </Nav.Link>
                  </Nav.Item>
                  {/* TAB-3 LINK */}
                  <Nav.Item className="nav-item icon-xs" as="li">
                    <Nav.Link className="nav-link" eventKey="tab-3">
                      {/* <span className="flaticon-031-scanner" /> */}
                      <img
                        className="img-fluid"
                        src={baseURL + image2}
                        alt="tab-image"
                      />
                      {data?.Tab3Heading}
                    </Nav.Link>
                  </Nav.Item>
                  {/* TAB-4 LINK */}
                  <li className="nav-item icon-xs">
                    <Nav.Link className="nav-link" eventKey="tab-4">
                      {/* <span className="flaticon-048-lungs" /> */}
                      <img
                        className="img-fluid"
                        src={baseURL + image3}
                        alt="tab-image"
                      />
                      {data?.Tab4Heading}
                    </Nav.Link>
                  </li>
                </Nav>
              </div>
              {/* END TABS NAVIGATION */}
              {/* TABS CONTENT */}
              <Tab.Content className="tab-content" id="pills-tabContent">
                {/* TAB-1 CONTENT */}
                <Tab.Pane className="tab-pane fade show" eventKey="tab-1">
                  <div className="row d-flex align-items-center">
                    {/* TAB-1 IMAGE */}
                    <div className="col-lg-6">
                      <div className="tab-img">
                        <img
                          className="img-fluid"
                          src={baseURL + image4}
                          alt="tab-image"
                        />
                      </div>
                    </div>
                    {/* TAB-1 TEXT */}
                    <div className="col-lg-6">
                      <div className="txt-block pc-30">
                        {/* Title */}
                        <h3 className="h3-md steelblue-color">
                          {data?.Tab1PrimaryHeading}
                        </h3>
                        {/* Text */}
                        <p className="mb-30">{data?.Tab1Para}</p>
                        {/* Options List */}
                        <div className="row">
                          <div className="col-xl-6">
                            {/* Option #1 */}
                            <div className="box-list m-top-15">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.TabPoint1}</p>
                            </div>
                            {/* Option #2 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab1Point2}</p>
                            </div>
                            {/* Option  #3 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab1Point3}</p>
                            </div>
                          </div>
                          <div className="col-xl-6">
                            {/* Option #4 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab1Point4}</p>
                            </div>
                            {/* Option #5 */}
                            <div className="box-list m-top-15">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab1Point5}</p>
                            </div>
                            {/* Option #6 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab1Point6}</p>
                            </div>
                          </div>
                        </div>
                        {/* End Options List */}
                        {/* Button */}
                        {/* <Link href="/service-1">
                          <a className="btn btn-blue blue-hover mt-30">
                            View More Details
                          </a>
                        </Link> */}
                      </div>
                    </div>
                    {/* END TAB-1 TEXT */}
                  </div>
                </Tab.Pane>
                {/* END TAB-1 CONTENT */}
                {/* TAB-2 CONTENT */}
                <Tab.Pane className="tab-pane fade" eventKey="tab-2">
                  <div className="row d-flex align-items-center">
                    {/* TAB-2 IMAGE */}
                    <div className="col-lg-6">
                      <div className="tab-imgs">
                        <img
                          className="img-fluid"
                          src={baseURL + image5}
                          alt="tab-image"
                        />
                      </div>
                    </div>
                    {/* TAB-2 TEXT */}
                    <div className="col-lg-6">
                      <div className="txt-block pc-30">
                        {/* Title */}
                        <h3 className="h3-md steelblue-color">
                          {" "}
                          {data?.Tab2PrimaryHeading}
                        </h3>
                        {/* Text */}
                        <p className="mb-30">{data?.Tab2Para}</p>
                        {/* Options List */}
                        <div className="row">
                          <div className="col-xl-6">
                            {/* Option #1 */}
                            <div className="box-list m-top-15">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab2Point1}</p>
                            </div>
                            {/* Option #2 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm"> {data?.Tab2Point2}</p>
                            </div>
                            {/* Option #3 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab2Point3}</p>
                            </div>
                          </div>
                          <div className="col-xl-6">
                            {/* Option #4 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab2Point4}</p>
                            </div>
                            {/* Option #5 */}
                            <div className="box-list m-top-15">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab2Point5}</p>
                            </div>
                            {/* Option #6 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm"> {data?.Tab2Point6}</p>
                            </div>
                          </div>
                        </div>
                        {/* End Options List */}
                        {/* Button */}
                        {/* <Link href="/service-2">
                          <a className="btn btn-blue blue-hover mt-30">
                            View More Details
                          </a>
                        </Link> */}
                      </div>
                    </div>
                    {/* END TAB-2 TEXT */}
                  </div>
                </Tab.Pane>
                {/* END TAB-2 CONTENT */}
                {/* TAB-3 CONTENT */}
                <Tab.Pane className="tab-pane fade" eventKey="tab-3">
                  <div className="row d-flex align-items-center">
                    {/* TAB-3 IMAGE */}
                    <div className="col-lg-6">
                      <div className="tab-img">
                        <img
                          className="img-fluid"
                          src={baseURL + image6}
                          alt="tab-image"
                        />
                      </div>
                    </div>
                    {/* TAB-3 TEXT */}
                    <div className="col-lg-6">
                      <div className="txt-block pc-30">
                        {/* Title */}
                        <h3 className="h3-md steelblue-color">
                          {data?.Tab3PrimaryHeading}
                        </h3>
                        {/* Text */}
                        <p className="mb-30">{data?.Tab3Para}</p>
                        {/* Options List */}
                        <div className="row">
                          <div className="col-xl-6">
                            {/* Option #1 */}
                            <div className="box-list m-top-15">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab3Point1}</p>
                            </div>
                            {/* Option #2 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab3Point2}</p>
                            </div>
                            {/* Option #3 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab3Point3}</p>
                            </div>
                          </div>
                          <div className="col-xl-6">
                            {/* Option #4 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab3Point4}</p>
                            </div>
                            {/* Option #5 */}
                            <div className="box-list m-top-15">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab3Point5}</p>
                            </div>
                            {/* Option #6 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab3Point6}</p>
                            </div>
                          </div>
                        </div>
                        {/* End Options List */}
                        {/* Button */}
                        {/* <Link href="/service-1">
                          <a className="btn btn-blue blue-hover mt-30">
                            View More Details
                          </a>
                        </Link> */}
                      </div>
                    </div>
                    {/* END TAB-3 TEXT */}
                  </div>
                </Tab.Pane>
                {/* END TAB-3 CONTENT */}
                {/* TAB-4 CONTENT */}
                <Tab.Pane className="tab-pane fade" eventKey="tab-4">
                  <div className="row d-flex align-items-center">
                    {/* TAB-4 IMAGE */}
                    <div className="col-lg-6">
                      <div className="tab-img">
                        <img
                          className="img-fluid"
                          src={baseURL + image7}
                          alt="tab-image"
                        />
                      </div>
                    </div>
                    {/* TAB-4 TEXT */}
                    <div className="col-lg-6">
                      <div className="txt-block pc-30">
                        {/* Title */}
                        <h3 className="h3-md steelblue-color">
                          {data?.Tab4PrimaryHeading}
                        </h3>
                        {/* Text */}
                        <p className="mb-30">{data?.Tab4Para}</p>
                        {/* Options List */}
                        <div className="row">
                          <div className="col-xl-6">
                            {/* Option #1 */}
                            <div className="box-list m-top-15">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab4Point1}</p>
                            </div>
                            {/* Option #2 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm"> {data?.Tab4Point2}</p>
                            </div>
                            {/* Option #3 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab4Point3}</p>
                            </div>
                          </div>
                          <div className="col-xl-6">
                            {/* Option #4 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab4Point4}</p>
                            </div>
                            {/* Option #5 */}
                            <div className="box-list m-top-15">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm">{data?.Tab4Point5}</p>
                            </div>
                            {/* Option #6 */}
                            <div className="box-list">
                              <div className="box-list-icon blue-color">
                                <i className="fas fa-angle-double-right" />
                              </div>
                              <p className="p-sm"> {data?.Tab4Point6}</p>
                            </div>
                          </div>
                        </div>
                        {/* End Options List */}
                        {/* Button */}
                        {/* <Link href="/service-2">
                          <a className="btn btn-blue blue-hover mt-30">
                            View More Details
                          </a>
                        </Link> */}
                      </div>
                    </div>
                    {/* END TAB-4 TEXT */}
                  </div>
                </Tab.Pane>
                {/* END TAB-4 CONTENT */}
              </Tab.Content>
              {/* END TABS CONTENT */}
            </Tab.Container>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Tabs1;
