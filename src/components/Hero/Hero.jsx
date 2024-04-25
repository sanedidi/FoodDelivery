import React from 'react';
import s from './Hero.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { useHeroProps } from './useHeroProps';
import SwiperMain from '../Swiper/Swiper';
import { Icon } from '@chakra-ui/icons';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

export const Hero = () => {
  const { banner } = useHeroProps();

  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.hero__wrapper}>
          <button className={s.hero__btn__left}><Icon as={SlArrowLeft} /></button>
          <SwiperMain preview={1}>
            {banner.map((el) => (
              <SwiperSlide key={el.id}>
                <Link to={'/'}>
                  <img src={el.img} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </SwiperMain>
          <button className={s.hero__btn__right}><Icon as={SlArrowRight} /></button> 
        </div>
      </div>
    </section>
  );
};
