import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../assets/img/svg/logo.svg";
import Accordion from "react-bootstrap/Accordion";
import dashboard_img from "../assets/img/svg/dashboard.svg";
import mail from "../assets/img/svg/email.svg";
import contact from "../assets/img/svg/contact.svg";
import apps from "../assets/img/svg/apps.svg";
import helpcenter from "../assets/img/svg/helpCenter.svg";
import folder from "../assets/img/svg/Folder.svg";
import setting from "../assets/img/svg/icon settings.svg";
import logout from "../assets/img/svg/logout.svg";
import globe from "../assets/img/svg/globe.svg";
import search from "../assets/img/svg/search.svg";
import notification from "../assets/img/svg/notification.svg";
import calender from "../assets/img/svg/calendar.svg";
import app_logo from "../assets/img/svg/layout-grid.svg";
import profile from "../assets/img/svg/profile.svg";
import bolt from "../assets//img/svg/bolt.svg";
import Card from "../Card";
import dots from "../assets/img/svg/dots.svg";
import axis from "../assets/img/png/Axis.png";
import bluedot from "../assets/img/svg/BlueDot.svg";
import greendot from "../assets/img/svg/GreenDot.svg";
import SmAxis from "../assets/img/png/Sm Axis.png";
import { Installed } from "../Card";
import { Zepplin } from "../Card";
import left_arrow from "../assets/img/svg/arrow-left.svg";
import right_arrow from "../assets/img/svg/arrow-right.svg";
import image from "../assets/img/svg/Zepplin.svg";
function Clonify() {
  const [show, setShow] = useState(0);
  if (show) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  const myNext = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="bg_dark_gray overflow-hidden">
        <div className="container-fluid">
          <div className="px-0 px-md-0 d-md-none">
            <div className={show ? "showNav  min-vh-100" : "hideNav"}>
              <div className=" bg-white min-vh-100 pt-4 pb-3 d-flex flex-column justify-content-between w-100">
                <div className=" px-2">
                  <a onClick={() => setShow(!show)} href="#">
                    <img src={logo} alt="logo" />
                  </a>
                  <p className="ff_inter fw_semibold fs_xl text_gray mt-5 pt-2">
                    D A S H B O A R D
                  </p>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item className=" mt-3" eventKey="5">
                      <Accordion.Header>
                        {" "}
                        <div className="d-flex align-items-center text_dark_black ps-0">
                          <img src={dashboard_img} alt="dashboard_img" />
                          <p className=" mb-0 ff_inter fw_semibold fs_2xl ms-2">
                            Dashboard
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="pt-0">
                        <div className=" ps-2">
                          <a href="#">
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_black">
                              Analytics
                            </p>
                          </a>
                          <a className=" py-3 d-inline-block" href="#">
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray">
                              Finance
                            </p>
                          </a>
                          <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray white_space">
                            Job Board
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Item
                        className=" bg-transparent text_secondary  outline_none"
                        eventKey="0"
                      >
                        <Accordion.Header className=" bg-transparent text_secondary outline_none border_none ">
                          <div className="d-flex align-items-center">
                            <img src={mail} alt="mail" />
                            <p className=" ff_inter fw_semibold fs_2xl text_dark_gray mb-0 ps-2">
                              Messages
                            </p>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className="pt-0">
                          <div className=" ps-2">
                            <a href="#">
                              <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_black">
                                Analytics
                              </p>
                            </a>
                            <a className=" py-3 d-inline-block" href="#">
                              {" "}
                              <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray">
                                Finance
                              </p>
                            </a>
                            <a href="#">
                              {" "}
                              <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray white_space">
                                Job Board
                              </p>
                            </a>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Body className="pt-0">
                        <p className="ff_grandstander fw_regular fs_md ps-4 ms-1 pt-0 mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <div className="d-flex align-items-center">
                          <img src={contact} alt="contact" />
                          <p className=" mb-0 ff_inter fw_semibold ps-2 fs_2xl text_dark_gray">
                            Friends
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="pt-0">
                        {" "}
                        <div className=" ps-2">
                          <a href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_black">
                              Analytics
                            </p>
                          </a>
                          <a className=" py-3 d-inline-block" href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray">
                              Finance
                            </p>
                          </a>
                          <a href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray white_space">
                              Job Board
                            </p>
                          </a>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        <div className="d-flex">
                          <img src={apps} alt="apps" />
                          <p className=" mb-0 ps-2 ff_inter fw_semibold fs_2xl text_dark_gray">
                            Apps
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="pt-0">
                        <div className=" ps-2">
                          <a href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_black">
                              Analytics
                            </p>
                          </a>
                          <a className=" py-3 d-inline-block" href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray">
                              Finance
                            </p>
                          </a>
                          <a href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray white_space">
                              Job Board
                            </p>
                          </a>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <p className="ff_inter fw_semibold fs_xl text_gray mt-5 pt-2">
                    P A G E S
                  </p>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item className=" mt-3" eventKey="10">
                      <Accordion.Header>
                        {" "}
                        <div className="d-flex align-items-center text_dark_black ps-0">
                          <img src={helpcenter} alt="helpcenter" />
                          <p className=" mb-0 ff_inter fw_semibold fs_2xl ms-2 text_dark_gray">
                            Help Center
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="pt-0">
                        <div className=" ps-2">
                          <a href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_black">
                              Analytics
                            </p>
                          </a>
                          <a className=" py-3 d-inline-block" href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray">
                              Finance
                            </p>
                          </a>
                          <a href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray white_space">
                              Job Board
                            </p>
                          </a>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="11">
                      <Accordion.Header>
                        {" "}
                        <div className="d-flex align-items-center text_dark_black ps-0">
                          <img src={folder} alt="folder" />
                          <p className=" mb-0 ff_inter fw_semibold fs_2xl ms-2 text_dark_gray">
                            File Manager
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="pt-0">
                        <div className=" ps-2">
                          <a href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_black">
                              Analytics
                            </p>
                          </a>
                          <a className=" py-3 d-inline-block" href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray">
                              Finance
                            </p>
                          </a>
                          <a href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray white_space">
                              Job Board
                            </p>
                          </a>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between after_line position-relative px-2">
                  <a href="#">
                    <img src={setting} alt="setting" />
                  </a>
                  <a href="#">
                    <img src={logout} alt="logout" />
                  </a>
                  <a href="#">
                    <img src={globe} alt="globe" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-2 px-md-0 d-md-flex d-none overflow-hidden">
              <div className=" bg-white  h_1024 pt-4 pb-3 d-flex flex-column justify-content-between w-100">
                <div className="z_index0 px-2">
                  <a href="#">
                    <img src={logo} alt="logo" />
                  </a>
                  <p className="ff_inter fw_semibold fs_xl text_gray mt-5 pt-2">
                    D A S H B O A R D
                  </p>
                  <Accordion className="" defaultActiveKey="0">
                    <Accordion.Item className=" mt-3" eventKey="5">
                      <Accordion.Header>
                        {" "}
                        <div className="d-flex align-items-center text_dark_black ps-0">
                          <img src={dashboard_img} alt="dashboard_img" />
                          <p className=" mb-0 ff_inter fw_semibold fs_2xl ms-2">
                            Dashboard
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="pt-0">
                        <div className=" ps-2">
                          <a href="#">
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_black">
                              Analytics
                            </p>
                          </a>
                          <a className=" py-3 d-inline-block" href="#">
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray">
                              Finance
                            </p>
                          </a>
                          <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray white_space">
                            Job Board
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Item
                        className=" bg-transparent text_secondary  outline_none"
                        eventKey="0"
                      >
                        <Accordion.Header className=" bg-transparent text_secondary outline_none border_none ">
                          <div className="d-flex align-items-center">
                            <img src={mail} alt="mail" />
                            <p className=" ff_inter fw_semibold fs_2xl text_dark_gray mb-0 ps-2">
                              Messages
                            </p>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className="pt-0">
                          <div className=" ps-2">
                            <a href="#">
                              <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_black">
                                Analytics
                              </p>
                            </a>
                            <a className=" py-3 d-inline-block" href="#">
                              {" "}
                              <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray">
                                Finance
                              </p>
                            </a>
                            <a href="#">
                              {" "}
                              <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray white_space">
                                Job Board
                              </p>
                            </a>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Body className="pt-0">
                        <p className="ff_grandstander fw_regular fs_md ps-4 ms-1 pt-0 mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <div className="d-flex align-items-center">
                          <img src={contact} alt="contact" />
                          <p className=" mb-0 ff_inter fw_semibold ps-2 fs_2xl text_dark_gray">
                            Friends
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="pt-0">
                        {" "}
                        <div className=" ps-2">
                          <a href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_black">
                              Analytics
                            </p>
                          </a>
                          <a className=" py-3 d-inline-block" href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray">
                              Finance
                            </p>
                          </a>
                          <a href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray white_space">
                              Job Board
                            </p>
                          </a>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        <div className="d-flex">
                          <img src={apps} alt="apps" />
                          <p className=" mb-0 ps-2 ff_inter fw_semibold fs_2xl text_dark_gray">
                            Apps
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="pt-0">
                        <div className=" ps-2">
                          <a href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_black">
                              Analytics
                            </p>
                          </a>
                          <a className=" py-3 d-inline-block" href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray">
                              Finance
                            </p>
                          </a>
                          <a href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray white_space">
                              Job Board
                            </p>
                          </a>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <p className="ff_inter fw_semibold fs_xl text_gray mt-5 pt-2">
                    P A G E S
                  </p>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item className=" mt-3" eventKey="10">
                      <Accordion.Header>
                        {" "}
                        <div className="d-flex align-items-center text_dark_black ps-0">
                          <img src={helpcenter} alt="helpcenter" />
                          <p className=" mb-0 ff_inter fw_semibold fs_2xl ms-2 text_dark_gray">
                            Help Center
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="pt-0">
                        <div className=" ps-2">
                          <a href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_black">
                              Analytics
                            </p>
                          </a>
                          <a className=" py-3 d-inline-block" href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray">
                              Finance
                            </p>
                          </a>
                          <a href="#">
                            {" "}
                            <p
                              className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray white_space
                            "
                            >
                              Job Board
                            </p>
                          </a>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="11">
                      <Accordion.Header>
                        {" "}
                        <div className="d-flex align-items-center text_dark_black ps-0">
                          <img src={folder} alt="folder" />
                          <p className=" mb-0 ff_inter fw_semibold fs_2xl ms-2 text_dark_gray">
                            File Manager
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="pt-0">
                        <div className=" ps-2">
                          <a href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_black">
                              Analytics
                            </p>
                          </a>
                          <a className=" py-3 d-inline-block" href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray">
                              Finance
                            </p>
                          </a>
                          <a href="#">
                            {" "}
                            <p className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_gray white_space">
                              Job Board
                            </p>
                          </a>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between after_line position-relative px-2">
                  <a href="#">
                    <img src={setting} alt="setting" />
                  </a>
                  <a href="#">
                    <img src={logout} alt="logout" />
                  </a>
                  <a href="#">
                    <img src={globe} alt="globe" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-10 px-md-0">
              <div className=" d-flex align-items-center justify-content-between bg-white  py-2 px-3 border mb-4 border-1">
                {" "}
                <span className="d-md-none">
                  {" "}
                  <a onClick={() => setShow(!show)} href="#">
                    <img src={logo} alt="logo" />
                  </a>
                </span>
                <div className="d-md-flex d-none w-75  justify-content-between align-items-center">
                  <span className=" w-100 border py-2 ps-4">
                    <a href="#">
                      <img src={search} alt="search" />
                    </a>
                    <input
                      className=" w-75 ms-2 outline_none border_none ff_inter fw_regular fs_2xl text_gray"
                      type="text"
                      placeholder="Search..."
                    />
                  </span>
                </div>{" "}
                <span className=" d-flex align-items-center justify-content-between w_25 gap-2 gap-md-0 ps-5">
                  <a className="icon_hover transition" href="#">
                    <img
                      className=" d-none d-sm-flex"
                      src={notification}
                      alt="notification"
                    />
                  </a>
                  <a className="icon_hover transition" href="#">
                    <img
                      className=" d-none d-sm-flex"
                      src={calender}
                      alt="calender"
                    />
                  </a>
                  <a className="icon_hover transition" href="#">
                    <img
                      className=" d-none d-sm-flex"
                      src={app_logo}
                      alt="app_logo"
                    />
                  </a>
                  <a className="icon_hover transition" href="#">
                    <img src={profile} alt="profile" />
                  </a>
                </span>{" "}
              </div>{" "}
              <div className=" d-md-none w-100 border  justify-content-between align-items-center">
                <span className=" w-100 py-2 ps-4">
                  <a href="#">
                    <img src={search} alt="search" />
                  </a>
                  <input
                    className=" w-75 ms-2 outline_none border_none ff_inter fw_regular fs_2xl text_gray"
                    type="text"
                    placeholder="Search..."
                  />
                </span>
              </div>{" "}
              <div className=" bg_dark_black py-5 mt-4 mx-md-4 rounded-4 px-4 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between">
                <div>
                  <h2 className="text-center text-sm-start text_white ff_inter fw_semibold fs_6xxl mb-0">
                    Unlock premium stats
                  </h2>
                  <p className="text-center text-sm-start text_white ff_inter fw_regular fs_2xl mb-0 mt-1">
                    Get up to 10TB of storage for a limited time
                  </p>
                </div>
                <div className=" text-center text-sm-start mt-4 mt-sm-0">
                  <a
                    className="bg-white rounded-5 d-inline-block px-3 px-sm-4 btn_hover py-3 ff_inter fw_semibold fs_3xl text_dark_black transition"
                    href="#"
                  >
                    <a className=" pe-2" href="#">
                      <img src={bolt} alt="bolt" />
                    </a>
                    Upgrade
                  </a>
                </div>
              </div>
              <div className="row mx-md-4">
                {Card.map((value) => {
                  return (
                    <div className="col-lg-3 col-sm-6">
                      <div className=" bg-white  py-3 px-3 mt-4 rounded-4">
                        <div className=" d-flex justify-content-between align-content-between flex-column">
                          <div>
                            <p className=" ff_inter fw_regular fs_3xl  text_dark_gray mb-0">
                              {value.para}
                            </p>
                            <h2 className=" ff_inter fw_semibold fs_5xxl">
                              {value.heading}
                            </h2>
                          </div>
                          <div className="d-flex align-items-center mt-4">
                            <div>
                              <button
                                style={{
                                  backgroundColor: `${value.bgcolor}`,
                                  color: `${value.color}`,
                                }}
                                className=" ff_inter fw_semibold fs_xl px-2 py-1 border_none rounded-5"
                              >
                                {value.btnText}
                              </button>
                            </div>
                            <p className=" ff_inter fw_semibold fs_xl mb-0 ms-2 text_gray">
                              {value.paragraph}
                            </p>

                            {/* <p
                              style={{
                                backgroundColor: `${value.color}`,
                                color: `${value.color}`,
                              }}
                            >
                              hello-world
                            </p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className=" position-relative  bg-white mx-md-4 rounded-4">
                <div className="  mx-md-4 mt-4 px-4 py-3">
                  <div className=" d-flex justify-content-between align-items-center after_line_performance">
                    <h2 className=" ff_inter fw_semibold fs_4xl text_dark_black mb-0">
                      Performance{" "}
                    </h2>
                    <a href="#">
                      <img src={dots} alt="dots" />
                    </a>
                  </div>
                  <img
                    className=" w-100 mt-5 d-none d-sm-flex"
                    src={axis}
                    alt="axis"
                  />
                  <img
                    className=" w-100 mt-5 d-sm-none "
                    src={SmAxis}
                    alt="SmAxis"
                  />
                  <div className=" d-flex justify-content-center mt-5">
                    <div className="d-flex align-items-center">
                      <img src={bluedot} alt="bluedot" />
                      <p className=" mb-0 ff_inter fw_regular fs_2xl ms-2 text_dark_gray">
                        Instagram
                      </p>
                    </div>
                    <div className="d-flex align-items-center ms-5">
                      <img src={greendot} alt="greendot" />
                      <p className=" mb-0 ff_inter fw_regular fs_2xl ms-2 text_dark_gray">
                        Facebook
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className=" bg-white rounded-4  mx-md-4  py-3 mt-4">
                <div className="">
                  <div className=" d-flex justify-content-between align-items-center px-5 py-3">
                    <h2 className=" ff_inter fw_semibold fs_4xl text_dark_black mb-0">
                      Installed apps
                    </h2>
                    <a href="#">
                      <img src={dots} alt="dots" />
                    </a>
                  </div>
                  <div className=" ">
                    <Slider className="w-100" ref={myNext} {...settings}>
                      <div className="  overflow-auto">
                        <div className=" d-flex flex-column align-items-center w_1144">
                          <div className="row bg_gray mx-md-0 ps-4 align-items-center w-100">
                            {Installed.map((value) => {
                              return (
                                <div className="col-2  w_1144">
                                  <div>
                                    <div className=" d-flex align-items-center justify-content-between pe-5">
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray py-3 ps-3">
                                          {value.source}
                                        </h2>
                                      </div>
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray py-3 ps-3">
                                          {value.amount}
                                        </h2>
                                      </div>
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray py-3 ps-3">
                                          {value.status}
                                        </h2>
                                      </div>
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray py-3 ps-3">
                                          {value.userId}
                                        </h2>
                                      </div>
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray py-3 ps-3">
                                          {value.joined}
                                        </h2>
                                      </div>
                                      <div className="col-2">
                                        {" "}
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray py-3 ps-3">
                                          {value.group}
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <div className="row justify-content-between  mx-md-0 align-items-center ">
                            {Zepplin.map((value) => {
                              return (
                                <div className=" position-relative ">
                                  <div className="col-2 w-100 ps-4 ">
                                    <div className=" d-flex align-items-center justify-content-between pe-5 installed_after_line">
                                      <div className="col-2">
                                        <div className="d-flex align-items-center">
                                          <img src={value.img} alt="" />
                                          <h2 className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_black">
                                            {value.title}
                                          </h2>{" "}
                                        </div>
                                      </div>
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray py-3 ps-3">
                                          {value.amount}
                                        </h2>
                                      </div>
                                      <div className="col-2">
                                        <button
                                          style={{
                                            backgroundColor: `${value.bgcolor}`,
                                            color: `${value.color}`,
                                          }}
                                          className=" ff_inter fw_semibold fs_xl text_green bg_green px-2 py-1 border_none rounded-5 ms-3"
                                        >
                                          {value.status}
                                        </button>
                                      </div>
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray ps-3">
                                          {value.userId}
                                        </h2>
                                      </div>
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray ps-3">
                                          {value.joined}
                                        </h2>
                                      </div>
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray ps-3">
                                          {value.group}
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="  overflow-auto">
                        <div className=" d-flex flex-column align-items-center w_1144">
                          <div className="row bg_gray mx-md-0 ps-4 align-items-center">
                            {Installed.map((value) => {
                              return (
                                <div className="col-2  w_1144">
                                  <div>
                                    <div className=" d-flex align-items-center justify-content-between pe-5">
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray py-3 ps-3">
                                          {value.source}
                                        </h2>
                                      </div>
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray py-3 ps-3">
                                          {value.amount}
                                        </h2>
                                      </div>
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray py-3 ps-3">
                                          {value.status}
                                        </h2>
                                      </div>
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray py-3 ps-3">
                                          {value.userId}
                                        </h2>
                                      </div>
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray py-3 ps-3">
                                          {value.joined}
                                        </h2>
                                      </div>
                                      <div className="col-2">
                                        {" "}
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray py-3 ps-3">
                                          {value.group}
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <div className="row justify-content-between  mx-md-0 align-items-center ">
                            {Zepplin.map((value) => {
                              return (
                                <div className=" position-relative ">
                                  <div className="col-2 w-100 ps-4 ">
                                    <div className=" d-flex align-items-center justify-content-between pe-5 installed_after_line">
                                      <div className="col-2">
                                        <div className="d-flex align-items-center">
                                          <img src={value.img} alt="" />
                                          <h2 className=" ff_inter fw_semibold fs_2xl mb-0 text_dark_black">
                                            {value.title}
                                          </h2>{" "}
                                        </div>
                                      </div>
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray py-3 ps-3">
                                          {value.amount}
                                        </h2>
                                      </div>
                                      <div className="col-2">
                                        <button
                                          style={{
                                            backgroundColor: `${value.bgcolor}`,
                                            color: `${value.color}`,
                                          }}
                                          className=" ff_inter fw_semibold fs_xl text_green bg_green px-2 py-1 border_none rounded-5 ms-3"
                                        >
                                          {value.status}
                                        </button>
                                      </div>
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray ps-3">
                                          {value.userId}
                                        </h2>
                                      </div>
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray ps-3">
                                          {value.joined}
                                        </h2>
                                      </div>
                                      <div className="col-2">
                                        <h2 className=" mb-0 ff_inter fw_regular fs_2xl text_dark_gray ps-3">
                                          {value.group}
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>{" "}
                <div className="text-center">
                  <div className="d-flex align-items-center gap-2 justify-content-center mt-4">
                    <span onClick={() => setShow(show - 1)}>
                      <img
                        onClick={() => myNext.current.slickPrev()}
                        src={left_arrow}
                        alt="left_arrow"
                      />
                    </span>
                    <h2 className=" ff_inter fw_regular fs_4xl text_dark_black mb-0">
                      {show}/15
                    </h2>
                    <span onClick={() => setShow(show + 1)}>
                      <img
                        onClick={() => myNext.current.slickNext()}
                        src={right_arrow}
                        alt="right_arrow"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Clonify;
