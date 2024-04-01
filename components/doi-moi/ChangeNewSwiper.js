import {Swiper, SwiperSlide} from "swiper/react";
import ItemSwiper from "@/components/doi-moi/ItemSwiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Pagination} from "swiper/modules";


const ChangeNewSwiper = ({items}) => {

  return (
      <Swiper
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
                  slidesPerView: 4,
                  spaceBetween: 40
              }
          }}
          spaceBetween={40}
          className="mySwiper w-full h-auto pt-40 bg-[#f2f7ff]"
      >
          {
              items.map((item, index) => {
                  return (
                      <SwiperSlide key={index} className={"bg-[#f2f7ff]"}>
                          <ItemSwiper items={item} />
                      </SwiperSlide>
                  )
              })
          }
      </Swiper>
  )
}
export default ChangeNewSwiper;