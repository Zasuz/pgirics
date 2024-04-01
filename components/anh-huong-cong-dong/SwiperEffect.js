"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperEffect = ({items}) => {
    return(
        <Swiper
            loop
            pagination={true}
            slidesPerView={1}
            modules={[Pagination]}
            spaceBetween={40}
            className="w-6/12 flex lg:w-0 lg:h-0 h-auto pt-40 items-center justify-center"
        >
            {
                items.map((item, index) => {
                    return (
                        <SwiperSlide className={"flex lg:hidden"} key={index}>
                                <img src={item.img}/>
                                <p>{item.content}</p>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}
export default SwiperEffect;