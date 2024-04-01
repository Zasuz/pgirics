"use client"
import React from "react";
import {ArrowUpOutlined} from "@ant-design/icons";
import ButtonHover from "@/components/ReuseComponent/ButtonHover";
import FadeInDownOnScroll from "@/components/ReuseComponent/FadeInDownOnScroll";
import {Swiper, SwiperSlide} from "swiper/react";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCruelty from "@/components/cruelty-free/SwiperCruelty";
import {Pagination} from "swiper/modules";
import CrossLink from "@/components/ReuseComponent/CrossLink";
import "../config.js"
const CrueltyFreePage = () => {
    const contentSection1 = {
        title: "CAM KẾT CỦA CHÚNG TÔI ĐỐI VỚI CHIẾN DỊCH #BECRUELTYFREE",
        content: <>Chúng tôi đang kêu gọi chấm dứt tất cả các thử nghiệm sản phẩm mỹ phẩm trên động vật trên toàn cầu và
            chúng tôi tự hào được hợp tác với Chiến dịch #BeCrueltyFree của Tổ chức Nhân đạo Quốc tế nhằm thúc đẩy tầm
            nhìn đó." <br/>
            "Sự ủng hộ của chúng tôi đối với chiến dịch #BeCrueltyFree là một bước nữa trong cam kết lâu dài của chúng
            tôi nhằm xóa bỏ hành vi thử nghiệm sản phẩm trên động vật. Chúng tôi đã bắt đầu hành trình này từ hơn 40 năm
            trước thông qua các hoạt động nghiên cứu, đầu tư và hợp tác liên tục nhằm phát triển và thúc đẩy việc sử
            dụng các phương pháp thay thế cho thử nghiệm sản phẩm trên động vật. Những nỗ lực này đã góp phần mang lại
            lợi ích lớn hơn, cho phép chúng tôi và các công ty khác phát triển các sản phẩm chưa được thử nghiệm trên
            động vật. Những đóng góp của chúng tôi bao gồm:"</>,
        img: "https://images.ctfassets.net/ywowj8d94i8y/31xAvy6pNljGA0mptkL4W4/b33ac9be5ca55354b46fbdc6c0e63fd2/Be_cruelty_free.jpg?fm=webp",
        item: [{
            content: <><strong>Đầu tư</strong> hơn 480 triệu USD trong hơn 40 năm vào các phương pháp thay thế thử
                nghiệm sản phẩm trên động vật, các nhà nghiên cứu của chúng tôi đi tiên phong trong hơn 25 phương pháp
                thử nghiệm sản phẩm không sử dụng động vật, xuất bản hơn 1.000 bài báo khoa học.</>,
            img: "https://images.ctfassets.net/ywowj8d94i8y/3PzqJdW4tpfDrEjcyObmr0/fb07f1a280ccad7ac46eaf05c054101a/developed-icon_animated.svg"
        }, {
            content: <><strong>Hợp tác</strong> với các tổ chức bảo vệ động vật quốc tế hàng đầu, học viện và các liên
                minh trong ngành nhằm thúc đẩy việc sử dụng các phương pháp thử nghiệm sản phẩm không sử dụng, không
                ngược đãi động vật trên toàn thế giới.</>,
            img: "https://images.ctfassets.net/ywowj8d94i8y/4a7a24CzUICiDAnw39jBGD/4e5120e163cd4ea38dadfa3ccdbfa592/Partnering_animated.svg"
        }, {
            content: <><strong>Vận động </strong>sử dụng công khai các phương pháp thử nghiệm sản phẩm không sử dụng
                động vật và được các nhà khoa học cũng như các nhà hoạch định chính sách trên toàn thế giới thông qua
                trong hơn 25 năm.</>,
            img: "https://images.ctfassets.net/ywowj8d94i8y/3CXu2dAEewC95L1v5xBKZj/bf140f4bb4fc48eee70340f6d4c43180/Megaphone_animated.svg"

        }]
    }
    const contentSection2 = {
        title: "Phối hợp cùng nhau để chấm dứt thử nghiệm sản phẩm trên động vật",
        content: "P&G đã đầu tư vào phát triển phương pháp thử nghiệm sản phẩm không sử dụng động vật trong nhiều thập kỷ và đang hợp tác với các tổ chức bảo vệ động vật quốc tế hàng đầu, học viện, liên minh trong ngành và các nhà hoạch định chính sách để thúc đẩy các phương pháp thay thế cho việc sử dụng động vật. Chúng tôi đã cùng nhau đạt được nhiều thành tích, bao gồm cả việc chấm dứt hành vi thử nghiệm sản phẩm trên động vật đối với các sản phẩm mỹ phẩm của chúng tôi từ nhiều năm trước. Trên thực tế, P&G không còn tiến hành thử nghiệm bất kỳ sản phẩm tiêu dùng nào trên động vật nữa trừ khi theo yêu cầu của luật pháp và chúng tôi cam kết chấm dứt hành vi thử nghiệm sản phẩm trên động vật",
        img: ["https://images.ctfassets.net/ywowj8d94i8y/4H4MjhgUOdon6thERHCbyQ/4d2d1e21a8a3052fa9a7b93aaf238f40/human_society.jpg?fm=webp", "https://images.ctfassets.net/ywowj8d94i8y/1VBOpXCk2MwR7fsOdjab5Z/a0b756b364956765985a2c1a83104190/hsi_logo.jpg?fm=webp", "https://images.ctfassets.net/ywowj8d94i8y/1n3itj9Ypxq80NnsGPkHIe/d7999316e847b94a0f42670a6d27fe2c/Peta_logo.svg__1_.png", "https://images.ctfassets.net/ywowj8d94i8y/ZDsr84wFdfkaDuynzlXGX/6d0c1367eba7bc001ae66d3d43139c4b/human_toxicology.jpg?fm=webp", "https://images.ctfassets.net/ywowj8d94i8y/4KaRHW2UTkbRACkmmwvTc6/339e43cf99925b7cecb721f6514333d6/european_partnership.jpg?fm=webp", "https://images.ctfassets.net/ywowj8d94i8y/6nrgVmsAzsq8febfcSm9OV/75880c0f13c5c694a0c46004abbf2ccf/logo-afsa.png?fm=webp"],
    }


    let middleIndex = Math.ceil(contentSection2.img.length / 2);

    let firstItem = contentSection2.img.slice(0, middleIndex);
    let secondItem = contentSection2.img.slice(middleIndex);


    const contentSection3 = [
        {
            img: "https://images.ctfassets.net/ywowj8d94i8y/1nVTrUwDNeAP8gc6jBli3g/2cbc296fccf870eb76d8e509edfcabfd/Seidle.jpg?fm=webp",
            content: "Trong hơn 20 năm, các nhóm thuộc Tổ chức Nhân đạo Quốc tế đã hợp tác với Procter & Gamble để thúc đẩy sự phát triển và đồng thuận theo quy tắc đối với các phương pháp thử nghiệm sản phẩm không sử dụng động vật. Chúng tôi rất vui mừng được chào đón P&G với tư cách là tổ chức ủng hộ chính thức cho chiến dịch #BeCrueltyFree của chúng tôi nhằm đạt được mục tiêu chấm dứt hành vi thử nghiệm sản phẩm mỹ phẩm trên động vật và buôn bán mỹ phẩm được thử nghiệm trên động vật ở tất cả các thị trường mỹ phẩm lớn trên toàn thế giới.",
            name: "Troy Seidle,",
            role: "Phó Chủ tịch Tổ chức Nhân đạo Quốc tế",
        },
        {
            img: "https://images.ctfassets.net/ywowj8d94i8y/39hFHA1CF1331l9ToGi5bq/ef17f957a686b143be1f79c8f4d9d181/undefined.png?fm=webp",
            content: "Chúng tôi rất vui được hỗ trợ Tổ chức Nhân đạo Quốc tế trong nỗ lực chấm dứt thử nghiệm sản phẩm mỹ phẩm trên động vật. Đến nay, Procter & Gamble đã đầu tư hơn 480 triệu USD trong 40 năm qua vào việc phát triển các phương pháp thử nghiệm sản phẩm không sử dụng động vật và chúng tôi sẽ tiếp tục hành động vì mục đích tốt đẹp trong lĩnh vực này khi chúng tôi hợp tác để chấm dứt hành vi thử nghiệm sản phẩm trên động vật một cách hiệu quả.",
            name: "Victor Aguilar,",
            role: "Giám đốc Nghiên cứu, Phát triển và Đổi mới của Procter and Gamble",

        },
        {
            img: "https://images.ctfassets.net/ywowj8d94i8y/InLcWz6lTdr5Xf7Xo4N5G/048a117bb76886f3106301979d7b84f8/Kathy-Guilermo.jpg?fm=webp",
            content: "PETA rất vui mừng được hợp tác với Procter & Gamble trong việc chứng nhận các sản phẩm của mình là sản phẩm không được thử nghiệm trên động vật và chấm dứt các yêu cầu đối với các thử nghiệm này của các cơ quan quản lý. Mối quan hệ đối tác của chúng tôi về vấn đề cực kỳ quan trọng này là cùng mang lại lợi ích cho các loài động vật và người tiêu dùng.",
            name: "Kathy Guillermo,",
            role: "Phó Chủ tịch, People for the Ethical Treatment of Animals (PETA)\n",

        },
    ]
    const contentSection4 = {
        title: "P&G hỗ trợ Save Ralph",
        content: <>P&G hỗ trợ #SaveRalph, chiến dịch kêu gọi loại bỏ thử nghiệm mỹ phẩm trên động vật trên toàn
            cầu<br/> của Tổ chức Nhân đạo Quốc tế"</>,
        img: "https://images.ctfassets.net/ywowj8d94i8y/56ROYQNXM1BFnxD8Dk1pQ4/0da5a5698bcf5047547b7e6f7dba4f4f/RALPH_shot01_01_X1_02991__1_.jpg?fm=webp",
    }
    const crossLinkItems = [
        {
            title: "Xem tất cả các nhãn hiệu và sản phẩm của chúng tôi",
            link: BASE_URL+"/cac-nhan-hieu-va-cac-san-pham/",
            img: "https://images.ctfassets.net/ywowj8d94i8y/2MnKwlqWRD6s5TNsYhnmx5/14a8821750477c168fd550d0f60110e7/1.12.23_Brands.png",
        },
        {
            title: "Xem những nỗ lực môi trường của chúng tôi",
            link: BASE_URL+"/phat-trien-ben-vung/",
            img: "https://images.ctfassets.net/ywowj8d94i8y/2MnKwlqWRD6s5TNsYhnmx5/14a8821750477c168fd550d0f60110e7/1.12.23_Brands.png",
        },
        {
            title: "Khám phá cách chúng tôi chọn thành phần — và những thành phần chúng tôi tránh",
            link: BASE_URL+"/thanh-phan-san-pham/",
            img: "http://images.ctfassets.net/ywowj8d94i8y/6XLtEWiTB52qJpGuCDANdl/0f462f34bd7b864f4a2cb15b5f6b6418/1.11.23_Ingredients_Page_Key_Image_Option_4.png",
        },
    ]

    return (
        <div>
            <div
                className="relative clipPath-Header  bg-center justify-center flex items-center  h-96 mb-56 w-full bg-fill bg-no-repeat  ">
                <img className={"absolute top-0 left-0 w-full"}
                     src={"https://images.ctfassets.net/ywowj8d94i8y/1J7GG4Z5QxLciWu9DOpIpJ/c759cf7457ddc86e85d7b7fa047735a5/cruelty_dt.jpg?fm=webp"}/>
            </div>
            <FadeInDownOnScroll>
                <section id={"section1"} className={"p-32 pt-0 z-30"}>
                    <h1 className={"text-2xl text-center lg:text-5xl font-bold text-primary mb-10"}>
                        {contentSection1.title}<span className={"text-yellow-400 "}>.</span>
                    </h1>
                    <div className={"flex flex-col lg:flex-row gap-12 items-center"}>
                        <img className={"w-1/2 h-1/2"} src={contentSection1.img}/>
                        <div className={"w-full lg:w-1/2"}>
                            <p className={"text-center mb-5"}>{contentSection1.content}</p>
                            <div
                                className={"flex flex-col lg:flex-row gap-5 justify-center items-center lg:items-start"}>
                                {
                                    contentSection1.item.map((item, index) => {
                                        return (
                                            <div className={"w-1/2 lg:w-1/3 flex flex-col justify-center"}>
                                                <img className={"h-16 text-center mb-4"} src={item.img}/>
                                                <p className={" text-[10px] lg:text-[16px]"}>{item.content}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </section>
            </FadeInDownOnScroll>
            <div className={"flex flex-row items-center justify-center"}>
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
                    className=" w-6/12 flex h-auto pt-40  items-center justify-center"
                >

                    <SwiperSlide>
                        <img
                            src={"https://images.ctfassets.net/ywowj8d94i8y/2ABt69wghz24UpDkPz70H7/6b7d34f6d7f1abfcac3eb56b1444d6a2/3.23.22_Animal_Welfare_Science_Hero.png?fm=webp"}/>
                        <a className={"text-primary mt-5"}
                           href={"https://vn.pg.com/cruelty-free/khoa-hoc-bao-ve-dong-vat-cua-pg/"}><u>Khoa học Bảo vệ
                            Động vật của P&G</u></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={"https://images.ctfassets.net/ywowj8d94i8y/5IMMkcfvcWPOEQhIxXO7Qx/7459bf928a4e8248b985ba805be3857f/Achievments_Hero_Image.png?fm=webp"}/>
                        <a className={"text-primary mt-5"}
                           href={"https://vn.pg.com/cruelty-free/thanh-tich-bao-ve-dong-vat-cua-pg/"}><u>Thành tích bảo
                            vệ động vật của P&G</u></a>
                    </SwiperSlide>


                </Swiper>
            </div>
            {/*<FadeInDownOnScroll>*/}
                <section id={"section2"} className={"p-10 lg:p-32 pt-10 text-center mt-20"}>
                    <h1 className={"text-2xl text-primary font-bold mb-3"}>{contentSection2.title}</h1>
                    <p className={"p-20 pt-0"}>{contentSection2.content}</p>
                    <div className={"hidden lg:grid grid-cols-3 grid-rows-2  place-items-center gap-32 p-60 pt-0"}>
                        {
                            contentSection2.img.map((item, index) => {
                                return (
                                    <img src={item}/>
                                )
                            })
                        }
                    </div>
                    <SwiperCruelty items={firstItem}/>
                    <SwiperCruelty items={secondItem}/>

                </section>
            {/*</FadeInDownOnScroll>*/}

            {/*<FadeInDownOnScroll>*/}
            <section id={"section3"}>
                <div className={"flex flex-col p-32 bg-[#f6f6f6] "}>
                    <h1 className={"text-2xl font-bold text-center text-primary mb-24"}>Lời chứng thực</h1>
                    {
                        contentSection3.map((item, index) => {
                            const flex = index % 2 === 0 ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"
                            return (
                                <div className={`flex mb-20 ${flex} items-center justify-center`}>
                                    <div
                                        className={"w-1/2 text-center flex items-center justify-center before:contents-[]"}>
                                        <img className={"w-full lg:w-1/2 rounded-full"} src={item.img}/>
                                    </div>
                                    <div className={"w-full lg:w-1/2 text-center  text-primary  px-10 "}>
                                        <img className={"w-12 mb-2"} src={"https://vn.pg.com/assets/icons/quote.svg"}/>
                                        <p className={"text-md lg:text-2xl mb-3"}>{item.content}</p>
                                        <h5 className={"font-bold"}>{item.name}</h5>
                                        <h6 className={"font-medium"}>{item.role}</h6>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
            {/*</FadeInDownOnScroll>*/}
            <section id={"section4"} className={"p-32 flex flex-col items-center text-center "}>
                <h1 className={"text-primary font-bold text-2xl mb-10"}>{contentSection4.title}</h1>
                <p className={"mb-10"}>{contentSection4.content}</p>
                <img className={"mb-10 "} src={contentSection4.img}/>
                <ButtonHover className={"w-1/2 lg:w-1/6 h-12"}>TÌM HIỂU THÊM <ArrowUpOutlined rotate={45}/></ButtonHover>
            </section>
            <CrossLink items={crossLinkItems}/>
        </div>



    )
}
export default CrueltyFreePage;
