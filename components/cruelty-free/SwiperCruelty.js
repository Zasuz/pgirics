import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

const SwiperCruelty = ({items}) => {

    return(
        <Swiper
            loop
            pagination={true}
            modules={[Pagination]}
            breakpoints={{
                // when window width is >= 640px
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 40
                }
            }}
            spaceBetween={40}
            className=" w-6/12  lg:w-0 lg:h-0 flex h-auto pt-40  items-center justify-center"
        >
            {
                items.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className={"bg-[#f2f7ff]"}>
                            <SwiperSlide>
                                <img src={item}/>
                            </SwiperSlide>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}
export default SwiperCruelty;