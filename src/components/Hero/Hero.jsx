import React from 'react';
import s from './Hero.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { useHeroProps } from './useHeroProps';
import SwiperMain from '../Swiper/Swiper';

export const Hero = () => {
  const { banner } = useHeroProps();

  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.hero__wrapper}>
          <SwiperMain preview={1}>
            {banner.map((el) => (
              <SwiperSlide key={el.id}>
                <Link to={'/'}>
                  <img src={el.img} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </SwiperMain>
        </div>
      </div>
    </section>
  );
};
