import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../card';

import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


export default function SwiperCo() {
    return (
        <Swiper
            breakpoints={{
                768: {
                slidesPerView: 2,
                slidesOffsetBefore: 20,
                slidesOffsetAfter: 20,
                },
                1300: {
                slidesOffsetBefore: 70,
                slidesOffsetAfter: 70,
                },
                1400: {
                slidesOffsetBefore: 100,
                slidesOffsetAfter: 100,
                },
                1600: {
                slidesPerView: 3,
                slidesOffsetBefore: 200,
                slidesOffsetAfter: 200,
                },
            }}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}

        >
            <SwiperSlide><Card/></SwiperSlide>
            <SwiperSlide><Card/></SwiperSlide>
            <SwiperSlide><Card/></SwiperSlide>
            <SwiperSlide><Card/></SwiperSlide>
            <SwiperSlide><Card/></SwiperSlide>
        </Swiper>
    )
}