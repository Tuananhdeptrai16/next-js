"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import "./index.style.scss";
import { Box, Button } from "@mui/material";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
const MainSlider = () => {
  const NextArrow = (props: any) => {
    return (
      <Button
        onClick={props.onClick}
        sx={{
          position: "absolute",
          right: 0,
          top: "40%",
          zIndex: 2,
          minWidth: 30,
          width: 35,
          border: "1px solid #1976d2",
        }}
      >
        <ChevronRightOutlined />
      </Button>
    );
  };
  const PrevArrow = (props: any) => {
    return (
      <Button
        onClick={props.onClick}
        sx={{
          position: "absolute",
          left: 0,
          top: "40%",
          zIndex: 2,
          minWidth: 30,
          width: 35,
          border: "1px solid #1976d2",
        }}
      >
        <ChevronLeftOutlined />
      </Button>
    );
  };
  const divItemBox = () => {
    return (
      <Box
        sx={{
          margin: "0 10px",
          background: "#ccc",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        TA
      </Box>
    );
  };
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <h1 className="slider-title">Tiêu đề 1 </h1>
      <Slider {...settings} className="slider-container">
        <div className="slider-item">{divItemBox()}</div>
        <div className="slider-item">{divItemBox()}</div>
        <div className="slider-item">{divItemBox()}</div>
        <div className="slider-item">{divItemBox()}</div>
        <div className="slider-item">{divItemBox()}</div>
        <div className="slider-item">{divItemBox()}</div>
      </Slider>
    </>
  );
};

export default MainSlider;
