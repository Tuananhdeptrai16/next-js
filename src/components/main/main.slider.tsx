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
          top: "50%",
          zIndex: 2,
          minWidth: 30,
          width: 35,
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
          top: "50%",
          zIndex: 2,
          minWidth: 30,
          width: 35,
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
            margin : '0 50px', 
            background : "#ccc"
        }}
      >
        TA
      </Box>
    );
  };
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings} className="slider-container">
      <div style={{ width: 200 }} className="slider-item">
        {divItemBox()}
      </div>
      <div style={{ width: 200 }} className="slider-item">
        {divItemBox()}
      </div>
      <div style={{ width: 200 }} className="slider-item">
       {divItemBox()}
      </div>
      <div style={{ width: 200 }} className="slider-item">
       {divItemBox()}
      </div>
      <div style={{ width: 200 }} className="slider-item">
        {divItemBox()}
      </div>
      <div style={{ width: 200 }} className="slider-item">
      {divItemBox()}
      </div>
    </Slider>
  );
};

export default MainSlider;
