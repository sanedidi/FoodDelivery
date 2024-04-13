import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperMain = ({ preview, children }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      slidesPerView={preview}
      spaceBetween={30}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};
export default SwiperMain;
