import {Swiper, SwiperSlide} from "swiper/react";
import ItemSwiper from "@/components/binh-dang-gioi/ItemSwiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination,} from "swiper/modules";

const EqualitySwiper = ({items}) => {

    return (
        <Swiper
            navigation = {
                {
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }
            }
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            slidesPerView={4}
            loop
            autoplay={{
                stopOnLastSlide: false,
            }}
            // spaceBetween={20}
            className="w-8/12 h-auto pt-40"
        >
            <div className="swiper-button-prev custom-prev"></div>
            <div className="swiper-button-next custom-next"></div>
            {
                items.map((item, index) => {
                    return (

                        <SwiperSlide key={index} className={"bg-white"}>
                            <ItemSwiper item={item} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}
export default EqualitySwiper;