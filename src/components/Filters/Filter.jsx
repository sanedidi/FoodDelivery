import React from "react";
import s from "./Filter.module.scss";
import { useFilterProps } from "./useFilterProps";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import SwiperMain from "../Swiper/Swiper";
const Filter = () => {
  const { filters, activeIndex, setActiveIndex } = useFilterProps();

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={s.filter}>
      <div className="container">
        <div className={s.filter__wrapper}>
          <SwiperMain preview={6}>
            {filters.map((el, index) => (
              <SwiperSlide
                onClick={() => handleClick(index)}
                className={`${s.filter__slider} ${
                  activeIndex === index ? s.active : ""
                }`}
                key={index}
              >
                <Link to={""}>
                  <div className={s.filter__slider_slide}>
                    <img src={el.img} alt="" />
                    <p
                      className={`${s.filter__slider_text} ${
                        activeIndex === index ? s.active : ""
                      }`}
                    >
                      {el.desc}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </SwiperMain>
        </div>
      </div>
    </section>
  );
};

export default Filter;
