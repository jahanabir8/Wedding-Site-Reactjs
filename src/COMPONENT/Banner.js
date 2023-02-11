import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import { Container } from 'react-bootstrap';
import "./Banner.css"

import img1 from "../image/slider1.jpg"
import img2 from "../image/slider2.jpg"
import img3 from "../image/slider3.jpg"

export default function App(){

  const Datas = [
    {
      id : 1,
      bg : img1,
      title: "Romeo & Juliet",
      info : "WE ARE GETTING MARRIED"
    },
    {
      id : 2,
      bg : img2,
      title: "Romeo & Juliet",
      info : "WE ARE GETTING MARRIED"
    },
    {
      id : 3,
      bg : img3,
      title: "Romeo & Juliet",
      info : "WE ARE GETTING MARRIED"
    },
  ]

  return(
    <div className="banner__section">
        {/* <Container> */}
            <div className="banner__inner">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {Datas.map((data, index) =>
                        <SwiperSlide key={index} 
                        style={{background: `url(${data.bg})`, backgroundPosition: "center", backgroundSize: "cover"}}
                        className="d-flex justify-content-center align-items-center">
                            <div className="banner__content">
                                <h1>{data.title}</h1>
                                <h3>{data.info}</h3>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        {/* </Container> */}
    </div>
  )
}

