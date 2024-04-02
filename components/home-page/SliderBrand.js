import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from "swiper/modules";
import {motion} from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import BrandItem from "@/components/home-page/BrandItem";

const SliderBrand = ({items, isHaveWebsite}) => {


    return (
        <Swiper
            pagination={true}
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            className="mySwiper w-full h-auto bg-white pt-40"
            breakpoints={{
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 30
                }
            }}
        >
            {
                items.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className={"mt-20 relative group"}>
                                <BrandItem title={item.title} img={item.img}></BrandItem>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}
export default SliderBrand;