'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.scss'
import 'swiper/css';
import { AppLink } from '../Link/AppLink';
import { ReactNode } from 'react';
import Icon from '../Icon/Icon';
import { StaticImageData } from 'next/image';
import classNames from 'classnames';

export type Slider = {
    icon: ReactNode
    href?: string,
}

type SliderProps = {
    className?: string
    items: Slider[],
    borderRadiusImg?: boolean,
    slidesPerView?: number,
    loop?: boolean
}
export const Slider = ({ className, items, borderRadiusImg, slidesPerView = 3, loop = true }: SliderProps) => {
    return (
        <Swiper
            spaceBetween={1}
            centeredSlides={true}
            loop={loop}
            slidesPerView={slidesPerView}
            className={classNames('mySwiper', className)}
        >
            {items.map((item) => <SwiperSlide><AppLink href={''}>{item.icon}</AppLink></SwiperSlide>)}
        </Swiper>
    );
};