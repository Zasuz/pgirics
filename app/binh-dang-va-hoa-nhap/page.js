"use client"
import React, {useState} from "react";
import {AiOutlineArrowRight} from "react-icons/ai";
import DonutChart from "@/components/binh-dang-va-hoa-nhap/DonutChart";
import "../../css/equality-css.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const EqualityPage = () => {
    const [showIframe, setShowIframe] = useState(false);
    const [selectedLink, setSelectedLink] = useState("");
    const handleShowIframe = (src) => {
        console.log(src)
        setSelectedLink(src)
        setShowIframe(!showIframe);
    }
    const handleHideIframe = () => {
        setShowIframe(!showIframe);
    }
    const contentSection2 = [
        {
            backgroundImage: "https://images.ctfassets.net/ywowj8d94i8y/KiV1vNBRhnRsiqmbovgDA/328191319ea28d41bb3006036cd9dc60/EMPLOYEES.jpg?fm=webp",
            backgroundColor: "linear-gradient(243.83deg, #dcb4cb 1.53%, #e1b0c6 8.88%, #e2b1c7 16.23%, #e3b1c8 23.34%, #e5b2c7 29.02%, #ecb5be 39.38%, #efb6ba 47.79%, #f4bdba 56.86%, #f7c3bd 68.11%, #fac7bf 82.64%, #fac8bf 97.4%)",
            title: "NHÂN VIÊN",
            content: "Chúng tôi tận dụng sự khác biệt của mình để thực hiện các mục tiêu nhằm phát triển mạnh mẽ hơn ở cả quy mô công ty và cùng nhau phát triển với tư cách cá nhân, đội nhóm và cộng đồng.",
            link: "https://us.pg.com/equality-and-inclusion/citizenship-efforts/?filter=employee"
        },
        {
            backgroundImage: "https://images.ctfassets.net/ywowj8d94i8y/6YlFgerOMbqKDeIzEqY7Pe/70fa419097d1892b0405d4f33b385ec0/brand.jpg?fm=webp",
            backgroundColor: "linear-gradient(243.83deg,#c1bed2 1.53%,#bfc0d5 8.88%,#bdc4dd 16.23%,#bacae6 23.34%,#bacfed 29.02%,#bdd2ee 39.38%,#c4d7f0 47.79%,#cadbf0 56.86%,#cddef1 66.9%,#d7dff0 78.01%,#dcdeee 88.49%,#e2dded 97.4%)",
            title: "THƯƠNG HIỆU",
            content: "Chúng tôi xây dựng những thương hiệu được tin cậy và đánh giá cao nhất trên thế giới thông qua việc phục vụ tất cả mọi người, giúp họ bộc lộ sự độc đáo của mình với thế giới.\n" +
                "\n",
            link: "https://us.pg.com/equality-and-inclusion/citizenship-efforts/?filter=brand"
        },
        {
            backgroundImage: "https://images.ctfassets.net/ywowj8d94i8y/3QhPZRP6rUNWIbVLNWAY3/36d89542a64c60d25bfb3848277b2685/partners.jpg?fm=webp",
            backgroundColor: "linear-gradient(243.83deg,#e0d3b3 1.53%,#e2d2b9 8.88%,#e6d0c1 16.23%,#e9cec8 23.34%,#ebcdcc 29.02%,#eccdd2 39.38%,#ecced6 47.79%,#ecd0da 56.86%,#ecd2de 66.9%,#ecd4e3 78.01%,#ead6e6 88.49%,#e9d7e7 97.4%)",
            title: "ĐỐI TÁC",
            content: "Chúng tôi đưa sự bình đẳng và hòa nhập vào hệ sinh thái cung ứng và giá trị của mình, hợp tác cùng với các đối tác để đẩy nhanh tốc độ tăng trưởng.\n" +
                "\n",
            link: "https://us.pg.com/equality-and-inclusion/citizenship-efforts/?filter=partners"
        },
        {
            backgroundImage: "https://images.ctfassets.net/ywowj8d94i8y/5rTiBNr3sTt0zzO0LDehSs/bae657daa88c6c93187bbcbdd0066b72/comm.jpg?fm=webp",
            backgroundColor: "linear-gradient(243.83deg,#e9cec8 1.53%,#e8cfc6 8.88%,#e6d0c1 16.23%,#e5d1be 23.34%,#e2d2b8 29.02%,#e0d3b3 39.38%,#ded4ad 47.79%,#ddd4a9 56.86%,#e2d1a9 66.9%,#e5cea9 78.01%,#e9caaa 88.49%,#ebc7ab 97.4%)",
            title: "CỘNG ĐỒNG",
            content: "Chúng tôi hỗ trợ cộng đồng thông qua các thương hiệu, nhân sự, quan hệ đối tác và nền tảng của mình nhằm thúc đẩy sự công bằng và bình đẳng.\n" +
                "\n",
            link: "https://us.pg.com/equality-and-inclusion/citizenship-efforts/?filter=partners"
        },
    ]
    const contentSection3 = [
        {
            title: " HÒA NHẬP",
            img: "https://images.ctfassets.net/ywowj8d94i8y/1ntBm5itH05UwQXIqPr8B3/4050c4cc397df402962c94b7021fedca/image.png?fm=webp ",
            content: "Chúng tôi tin rằng sự hòa nhập là cảm giác không lạc lõng, được có không gian và được hỗ\
                trợ để sống đúng với “chất riêng” của mình.",
            youtubeEmbed: "https://www.youtube-nocookie.com/embed/nznxIurDGAM"
        },
        {
            title: <>ĐỘC ĐÁO VÀ ĐOÀN <br/> KẾT</>,
            img: " https://images.ctfassets.net/ywowj8d94i8y/whZSqndHWYRwk3Iw3WtX1/a4f7da072ac66df567b11ad21d6c72cc/image.png?fm=webp",
            content: "Chúng tôi tin vào sức mạnh của sự đa dạng và tác động mà chúng ta tạo ra khi đoàn kết với nhau thông qua các giá trị và mục đích chung.\n" +
                "\n",
            youtubeEmbed: "https://www.youtube-nocookie.com/embed/hGHwpYGz1Y8"

        },
        {
            title: "NHỮNG NGƯỜI TẠO RA THAY ĐỔI",
            img: " https://images.ctfassets.net/ywowj8d94i8y/2SvUTSBvTdpO9t7TBVyyn8/31b0e05754850925b0d6ec859cc713f4/image.png?fm=webp",
            content: "Các nhà lãnh đạo hòa nhập tạo điều kiện để nhân viên thể hiện toàn bộ con người thật của họ tại nơi làm việc và đạt năng suất cao hơn.\n" +
                "\n",
            youtubeEmbed: "https://www.youtube-nocookie.com/embed/i4YP9CUwWpU"

        }]
    const dataChart1 = {
        datasets: [
            {
                data: [41, 59],
                backgroundColor: [
                    'rgba(70, 130, 180, 0.6)',  // Màu xanh đậm
                    'rgba(183,183,183,0.6)',
                ],
                cutout: 160,


            }
        ]
    };
    const dataChart2 = {
        datasets: [
            {
                data: [28, 72],
                backgroundColor: [
                    'rgba(194,106,0,0.6)',// Màu xanh đậm
                    'rgba(183,183,183,0.6)',
                ],
                cutout: 160,


            }
        ]
    };
    const dataChart3 = {
        datasets: [
            {
                data: [45, 45, 10],
                backgroundColor: [
                    'rgba(70, 130, 180, 0.6)',
                    'rgba(194,106,0,0.6)',// Màu xanh đậm
                    'rgba(183,183,183,0.6)',
                ],
                cutout: 160,


            }
        ]
    };
    const contentSection4 = [{
        title: " GIỚI TÍNH",
        data: dataChart1,
        content: <>
            <h1 className={"text-4xl font-bold"}>41%</h1>
            <h3 className={"text-2xl font-bold"}>Phụ nữ</h3></>,

    },
        {
            title: "CHỦNG TỘC VÀ SẮC TỘC",
            data: dataChart2,
            content: <>
                <h1 className={"text-4xl font-bold"}>28%</h1>
                <h3 className={"text-2xl font-bold"}>ĐA VĂN HÓA</h3></>,
        },
        {
            title: " HỘI ĐỒNG QUẢN TRỊ ",
            data: dataChart3,
            content: <>
                <h1 className={"text-4xl font-bold"}>45%</h1>
                <h3 className={"text-2xl font-bold mb-5"}>ĐA VĂN HÓA</h3>
                <h1 className={"text-4xl font-bold"}>45%</h1>
                <h3 className={"text-2xl font-bold"}>PHỤ NỮ</h3></>,


        }]

    const contentSection5 = [
        {
            img: " https://images.ctfassets.net/ywowj8d94i8y/5qqPeOiEv1KJpyMYcXRJ2E/07b9b90f6ed36c63ff779e21b1a46b71/Novi_Projekt__13_.jpg?fm=webp",
            title: "GIỚI TÍNH",
            content: "Chúng tôi mong muốn xây dựng một thế giới không còn thiên kiến giới tính cho tất cả chúng ta."
        },
        {
            img: " https://images.ctfassets.net/ywowj8d94i8y/V2iSYi6gsUNgcUTCAfqYE/28adb3000bde012b81af30bee115be8b/E_I_Card_Item_-_PWD.jpg?fm=webp",
            title: "NGƯỜI KHUYẾT TẬT",
            content: "Chúng tôi mong muốn xây dựng một nền văn hóa tin tưởng vào người khuyết tật cả bên trong và bên ngoài P&G."
        },
        {
            img: "https://images.ctfassets.net/ywowj8d94i8y/4vONFVxQDogNQ4gbGmKRP7/c2989f9d1383081090db01015f475a1f/E_I_Card_Item_-_LGBTQ.jpg?fm=webp ",
            title: "LGBTQ+",
            content: "Chúng tôi đang sử dụng tiếng nói của mình để thúc đẩy sự đón nhận, hòa nhập và tình yêu thương cho cả nhân loại."
        },
        {
            img: "https://images.ctfassets.net/ywowj8d94i8y/7vMUZTYEwKneaISsuEL0R3/6c9fba2bde547f121c66ca066080d38a/Novi_Projekt__17_.jpg?fm=webp ",
            title: "CHỦNG TỘC VÀ SẮC TỘC",
            content: "Khi cùng chung tay, chúng ta có thể tạo ra sự thay đổi mang tính hệ thống và lâu dài đối với vấn đề bình đẳng chủng tộc và sắc tộc. Hãy cùng bắt đầu."
        },]
    const contentSection7a = {
        title: "ĐỐI TÁC",
        content: "Khi hợp tác chặt chẽ với các đối tác của mình, chúng tôi sử dụng ưu thế về mặt chuyên môn và phạm vi tiếp cận của các bên để thay đổi thế giới nhanh chóng hơn.\n" +
            "\n",
        items: [
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/69NkWjKp0brhPZW3dt2UCm/0e6efde772246f1052b101daaebd708e/image.png?fm=webp",
                link: "https://www.businessroundtable.org/"
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/7kRpMmWL8w5fTQyb0AVrR1/d762e17dccc89a56440e037caf9a3f77/image.png?fm=webp",
                link: "https://www.ceoaction.com/"
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/3NgutrMYuu9hivWlwtsYh4/d91b58ecb4043ae375972b6e529fa7bb/image.png?fm=webp",
                link: "https://www.conference-board.org/us"
            },]
    }
    const contentSection7 = [{
        title: "ĐỐI TÁC",
        content: "Khi hợp tác chặt chẽ với các đối tác của mình, chúng tôi sử dụng ưu thế về mặt chuyên môn và phạm vi tiếp cận của các bên để thay đổi thế giới nhanh chóng hơn.\n" +
            "\n",
        items: [
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/69NkWjKp0brhPZW3dt2UCm/0e6efde772246f1052b101daaebd708e/image.png?fm=webp",
                link: "https://www.businessroundtable.org/"
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/7kRpMmWL8w5fTQyb0AVrR1/d762e17dccc89a56440e037caf9a3f77/image.png?fm=webp",
                link: "https://www.ceoaction.com/"
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/3NgutrMYuu9hivWlwtsYh4/d91b58ecb4043ae375972b6e529fa7bb/image.png?fm=webp",
                link: "https://www.conference-board.org/us"
            },]
    },
        {
            title: "SỰ GHI NHẬN\n",
            content: "Chúng tôi tự hào khi được ghi nhận vì những nỗ lực cho sự bình đẳng và hòa nhập của mình.\n" +
                "\n",
            items: [
                {
                    img: "https://images.ctfassets.net/ywowj8d94i8y/7hzdDRyjyojiC3QsUJfWGf/4158a134a2370a914f61baac8f750e9b/image__21_.jpg?fm=webp",
                    link: "https://www.hrc.org/resources/best-places-to-work-for-lgbtq-equality-2022"
                },
                {
                    img: "https://images.ctfassets.net/ywowj8d94i8y/5KyLAoEk4ZH28VfVGCNOm4/44729a756a239000423f2e811c77b3c6/image__22_.jpg?fm=webp",
                    link: "https://www.bloomberg.com/company/press/bloombergs-2021-gender-equality-index-reveals-increased-disclosure-as-companies-reinforce-commitment-to-inclusive-workplaces/"
                },
                {
                    img: "https://images.ctfassets.net/ywowj8d94i8y/3PAvBTbFJgyhQYW2Ur8u88/9757d0190536b14d74a8168bc3053aff/image__23_.jpg?fm=webp",
                    link: "https://www.forbes.com/lists/best-employers-diversity/"
                },]
        }]
    return (
        <div>
            <section id={"section1"}
                     className=" justify-center bg-fill flex items-center h-screen w-screen overflow-hidden relative before:w-full before:z-10 before:h-full before:absolute before:top-0 before:left-0 before:bg-gradient-opacity">
                <img
                    className={"w-full h-full absolute "}
                    src={"https://images.ctfassets.net/ywowj8d94i8y/2x8tU9EXqTrTwcTsXw2Hzu/75b1acdee826fe31a1f9fe6d42957cd8/image__34_.jpg?fm=webp"}/>
                <div className={"clipPath-Carousel absolute w-full h-full bg-white z-30"}>

                </div>
                <div className={" text-start lg:items-start items-center flex flex-col w-full ml-32 z-30 gap-6 relative"}>
                    <div onClick={() => handleShowIframe("https://www.youtube-nocookie.com/embed/81gu-Q_QhoY")}
                         className={"flex justify-center items-center absolute top-32 right-1/2 lg:top-32 lg:right-32 bg-white rounded-full transition-icon w-32 h-32"}>
                        <img
                            src={"https://images.ctfassets.net/ywowj8d94i8y/6GhKypcvH4YouEJukx27nf/8d449835cce471edf046fdb19b4f5aad/image__2_.png?fm=webp"}/>
                    </div>

                    <h1 className={" text-4xl lg:text-8xl text-white font-[700] w-1/2"}>BÌNH ĐẲNG & H<span
                        className={"text-yellow-400 relative after:absolute after:top-0 after:left-0 after:bg-fill after:h-full after:bg-contain after:bg-center after:bg-no-repeat after:w-full after:bg-icon-equality"}>O</span>A
                        NHẬP</h1>
                    <p className={"lg:block hidden w-4/12 text-white text-wrap"}>Chúng tôi mong muốn xây dựng một công ty và một thế
                        giới nơi mọi người đều được bình đẳng và hòa nhập. Từ đó, chúng tôi có thể thúc đẩy tăng trưởng
                        cũng như tạo ra giá trị cho nhân viên thông qua thương hiệu của mình, cùng với các đối tác và
                        đóng góp cho cộng đồng.

                    </p>
                </div>
            </section>
            <section id={"section2"} className={"relative z-40 "}>
                <div className={"lg:flex hidden absolute -top-32 w-full flex-row gap-10 p-10 pt-0 "}>
                    {
                        contentSection2.map((item, index) => {
                            return (
                                <div className={" group relative w-1/4  bg-primary rounded-2xl"}>
                                    <img className={"rounded-2xl"}
                                         src={item.backgroundImage}/>
                                    <div style={{
                                        maskImage: "linear-gradient(1turn, rgb(0, 0, 0), rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0.5) 50%, transparent)",
                                        background: `${item.backgroundColor}`
                                    }}
                                         className={"  rounded-2xl flex justify-center items-end absolute top-0 left-0 w-full h-full "}>
                                        <h1 className={"pb-5 text-[#3C083B] text-3xl font-bold"}>{item.title}</h1>
                                    </div>
                                    <div style={{
                                        background: `${item.backgroundColor}`
                                    }}
                                         className={"p-6 pt-3 pb-0 rounded-2xl group-hover:flex flex-col justify-start items-start hover:opacity-100 transition-opacity  duration-300 hidden opacity-0  absolute top-0 left-0 w-full h-full "}>
                                        <p className={"mb-3"}>{item.content}
                                        </p>
                                        <h3><a
                                            className={"flex items-center justify-start font-bold text-[#3C083B] flex-row"}
                                            href={item.link}> Tìm hiểu thêm <AiOutlineArrowRight
                                            className={"ml-2"}/></a></h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <p className={"lg:hidden block text-center text-[14px] mb-10"}>Chúng tôi mong muốn xây dựng một công ty và một thế giới nơi mọi người đều được bình đẳng và hòa nhập. Từ đó, chúng tôi có thể thúc đẩy tăng trưởng cũng như tạo ra giá trị cho nhân viên thông qua thương hiệu của mình, cùng với các đối tác và đóng góp cho cộng đồng.
                </p>
                <Swiper
                    loop
                    pagination={true}
                    slidesPerView={1}
                    modules={[Pagination]}
                    spaceBetween={40}
                    className=" w-10/12 lg:w-0 lg:h-0 h-auto pt-40 items-center justify-center"
                >
                    {
                        contentSection2.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className={" group relative w-full bg-primary rounded-2xl"}>
                                        <img className={"rounded-2xl w-full"}
                                             src={item.backgroundImage}/>
                                        <div style={{
                                            maskImage: "linear-gradient(1turn, rgb(0, 0, 0), rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0.5) 50%, transparent)",
                                            background: `${item.backgroundColor}`
                                        }}
                                             className={"  rounded-2xl flex justify-center items-end absolute top-0 left-0 w-full h-full "}>
                                            <h1 className={"pb-5 text-[#3C083B] text-3xl font-bold"}>{item.title}</h1>
                                        </div>
                                        <div style={{
                                            background: `${item.backgroundColor}`
                                        }}
                                             className={"p-6 pt-3 pb-0 rounded-2xl group-hover:flex flex-col justify-start items-start hover:opacity-100 transition-opacity  duration-300 hidden opacity-0  absolute top-0 left-0 w-full h-full "}>
                                            <p className={"mb-3"}>{item.content}
                                            </p>
                                            <h3><a
                                                className={"flex items-center justify-start font-bold text-[#3C083B] flex-row"}
                                                href={item.link}> Tìm hiểu thêm <AiOutlineArrowRight
                                                className={"ml-2"}/></a></h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </section>
            <section id={"section3"} className={"mt-32 p-32 pt-0"}>
                <div className={"text-center flex justify-center items-center flex-col"}>
                    <p className={"mb-10"}>Để biết thêm thông tin về các nỗ lực vì sự Bình đẳng và Hòa nhập của chúng
                        tôi, hãy tải xuống
                        tài liệu giới thiệu "Khát vọng, Hành động và Kết quả" của chúng tôi.</p>
                    <button
                        className={"text-white font-bold bg-button-gradient border-2 border-black px-12 h-12 rounded-full mb-20"}>KHÁT
                        VỌNG,
                        HÀNH ĐỘNG VÀ KẾT QUẢ
                    </button>
                    <h1 className={"text-2xl lg:text-6xl text-[#3C083B] mb-16 font-bold"}>LỘ TRÌNH TƯƠNG LAI</h1>
                    <div className={"hidden lg:flex flex-row gap-10 justify-center items-center"}>
                        {
                            contentSection3.map((item, index) => {
                                return (
                                    <div onClick={() => {
                                        handleShowIframe(item.youtubeEmbed)
                                    }} className={"w-1/3 "}>
                                        <div className={"relative flex justify-center items-center"}>
                                            <img className={"mb-5"} src={item.img}/>
                                            <div
                                                className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col justify-center items-center w-full"}>
                                                <h1 className={"font-bold text-4xl mb-5 text-center"}>{item.title}</h1>
                                                <img className={""}
                                                     src={"https://images.ctfassets.net/ywowj8d94i8y/3NrfveStVLQDuqXO7oXKQb/2e9bde986868ac9f9751e033b17cc806/play_icn.png?fm=webp"}/>
                                            </div>
                                        </div>
                                        <p>{item.content}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Swiper
                        loop
                        pagination={true}
                        slidesPerView={1}
                        modules={[Pagination]}
                        spaceBetween={40}
                        className=" w-10/12 lg:w-0 lg:h-0 h-auto pt-40 items-center justify-center"
                    >
                        {
                            contentSection3.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div onClick={() => {
                                            handleShowIframe(item.youtubeEmbed)
                                        }} className={"w-full "}>
                                            <div className={"relative flex justify-center items-center"}>
                                                <img className={"mb-5"} src={item.img}/>
                                                <div
                                                    className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col justify-center items-center w-full"}>
                                                    <h1 className={"font-bold text-4xl mb-5 text-center"}>{item.title}</h1>
                                                    <img className={""}
                                                         src={"https://images.ctfassets.net/ywowj8d94i8y/3NrfveStVLQDuqXO7oXKQb/2e9bde986868ac9f9751e033b17cc806/play_icn.png?fm=webp"}/>
                                                </div>
                                            </div>
                                            <p>{item.content}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </section>
            <section id={"section4"} className={" text-[#3C083B] flex flex-col justify-center items-center mb-24"}>
                <h1 className={"p-32 py-0 font-bold text-2xl lg:text-6xl mb-5 text-center"}>SỰ ĐA DẠNG TRONG <br/> LỰC LƯỢNG LAO
                    ĐỘNG</h1>
                <p className={"p-10 lg:p-32 py-0 w-full lg:w-8/12 mb-16"}>Chúng tôi nhận ra rằng sự đại diện giúp chúng tôi thấu hiểu và
                    phục vụ hàng tỷ người tiêu dùng trên
                    khắp thế giới. Dù vẫn tiếp tục đạt được những tiến bộ ở nhiều lĩnh vực nhưng chúng tôi biết mình có
                    thể làm nhiều hơn thế. Để thực hiện điều này, tất cả chúng ta cần hợp tác với nhau nhằm tạo ra tác
                    động lớn hơn, mang lại lợi ích cho mọi người. Xem những tiến bộ chúng tôi đạt được tính đến nay.
                </p>
                <div className={" flex flex-col lg:flex-row gap-10 w-full items-center justify-evenly mb-14"}>
                    {
                        contentSection4.map((item, index) => {
                            return (
                                <div
                                    className={"relative w-6/12 lg:w-1/4 align-middle flex-col flex items-center justify-center "}>
                                    <h1 className={"font-bold text-2xl mb-5"}>{item.title}</h1>
                                    <DonutChart data={item.data}/>
                                    <div
                                        className={" absolute flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 transform -translate-y-1/2  w-full h-full"}>
                                        {item.content}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button
                    className={"text-white font-bold bg-button-gradient border-2 border-black px-12 h-12 rounded-full mb-20"}>XEM
                    THÊM DỮ LIỆU
                </button>

            </section>
            <section id={"section5"} className={"flex-col flex items-center text-center mb-32 text-[#3C083B]"}>
                <h1 className={"p-32 py-0 font-bold  text-2xl lg:text-6xl mb-5 text-center"}>TẠO RA MỘT <br/>
                    XÃ HỘI HÒA NHẬP</h1>
                <p className={"p-32 py-0 w-full lg:w-8/12 mb-56"}>Bình đẳng, sự hiện diện, khả năng tiếp cận, công bằng.
                </p>
                <div className={"flex flex-row justify-evenly gap-10 px-10"}>
                    {
                        contentSection5.map((item, index) => {
                            return (
                                <a className={"w-full h-full"} href={"#"}>
                                    <div className={"relative hidden lg:flex flex-col p-10 rounded-2xl bg-[#F7F2F8]"}>
                                        <img
                                            className={"absolute -top-28  w-9/12 left-1/2 -translate-x-1/2 rounded-full"}
                                            src={item.img}/>
                                        <div>
                                            <h1 className={"pt-28 text-4xl font-bold h-56"}>{item.title}</h1>
                                            <p className={"h-32 py-8"}>{item.content}</p>
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
                <Swiper
                    loop
                    pagination={true}
                    slidesPerView={1}
                    modules={[Pagination]}
                    spaceBetween={40}
                    className=" w-10/12 lg:w-0 lg:h-0 h-auto pt-40 items-center justify-center"
                >
                    {
                        contentSection5.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <a className={"w-full"} href={"#"}>
                                        <div className={"relative flex flex-col p-10 rounded-2xl bg-[#F7F2F8]"}>
                                            <img
                                                className={"absolute top-2  w-6/12 left-1/2 -translate-x-1/2 rounded-full"}
                                                src={item.img}/>
                                            <div>
                                                <h1 className={"pt-28 text-4xl font-bold h-56 mt-60"}>{item.title}</h1>
                                                <p className={"h-32 py-8"}>{item.content}</p>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </section>
            <section id={"section6"} className={"flex flex-col items-center justify-center mb-20 text-[#3C083B]"}>
                <h1 className={"p-32 py-0 font-bold text-2xl lg:text-6xl mb-5 text-center"}>HÀNH ĐỘNG CỦA CHÚNG TÔI
                </h1>
                <p className={"p-10 lg:p-32 py-0 w-full lg:w-8/12 mb-20"}>Tìm hiểu thêm về cách chúng tôi đang thúc đẩy sự bình đẳng và
                    hòa nhập bằng cách tạo ra tác động có ý nghĩa cho nhân viên của mình, thông qua các thương hiệu của
                    công ty, với sự hợp tác của các đối tác trong cộng đồng.
                </p>
                <div className={"flex flex-row flex-wrap w-full justify-center gap-5 mb-12"}>
                    <div className={"w-6/12 bg-black flex flex-col "}>
                        <div className={"relative"}>
                            <img className={"w-full h-[442px]"}
                                 src={"https://images.ctfassets.net/ywowj8d94i8y/2osoZyVQrUDaYIe49GvCpb/26e94a63f9f42d0b82b7392bb12e2269/image__25_.jpg?fm=webp"}/>
                            <div className={"absolute right-0 left-0 h-1/3  -bottom-1 w-full bg-equality-opacity"}>

                            </div>
                        </div>

                        <div className={"bg-[#F7F2F8] px-16 py-20 flex-grow"}>
                            <h1 className={"text-2xl font-bold "}>WIDEN THE SCREEN</h1>
                            <p className={"w-8/12"}>P&G đang ủng hộ những người sáng tạo Da màu. Hãy tham gia cùng chúng
                                tôi
                                để tìm kiếm, chia sẻ và chờ đón nhiều câu chuyện khác của những Người da màu.</p>
                        </div>
                    </div>
                    <div className={"w-4/12 bg-blue-500  "}>
                        <div className={"relative"}>
                            <img className={"w-full h-[442px] "}
                                 src={"https://images.ctfassets.net/ywowj8d94i8y/2A1EdJxxmfnhpF6YVqqg7m/7ea4db0648bfbbff8ce3f4b10ff60097/image__26_.jpg?fm=webp"}/>
                            <div className={"absolute right-0 left-0 h-1/3  -bottom-1 w-full bg-equality-opacity"}>
                            </div>
                        </div>
                        <div className={"bg-[#F7F2F8] px-16 py-20"}>
                            <h1 className={"text-2xl font-bold "}>WIDEN THE SCREEN</h1>
                            <p className={"w-full"}>P&G đang ủng hộ những người sáng tạo Da màu. Hãy tham gia cùng chúng
                                tôi
                                để tìm kiếm, chia sẻ và chờ đón nhiều câu chuyện khác của những Người da màu.</p>
                        </div>
                    </div>
                    <div className={"w-5/12 bg-[#F7F2F8]"}>
                        <div className={"relative"}>
                            <img className={"w-full h-[442px] "}
                                 src={"https://images.ctfassets.net/ywowj8d94i8y/2b2N2PHR2Po67OURB3AYla/06eb4041074a617145250695a2173d0a/image__27_.jpg?fm=webp"}/>
                            <div className={"absolute right-0 left-0 h-1/3  -bottom-1 w-full bg-equality-opacity"}>
                            </div>
                        </div>
                        <div className={" px-16 py-20 flex-grow"}>
                            <h1 className={"text-2xl font-bold "}>CAN'T CANCEL PRIDE 2021</h1>
                            <p className={"w-full"}>Can’t Cancel Pride: Sự kiện gây quỹ ủng hộ trực tuyến cho cộng đồng
                                LGBTQ+</p>
                        </div>
                    </div>
                    <div className={"w-5/12 bg-red-100 "}>
                        <div className={"relative"}>
                            <img className={"w-full h-[442px] "}
                                 src={"https://images.ctfassets.net/ywowj8d94i8y/1NJRYYJQcDiBEddApDT1tG/d8e3480b8ac86bdbd4b6a902eedd870f/image__28_.jpg?fm=webp"}/>
                            <div className={"absolute right-0 left-0 h-1/3  -bottom-1 w-full bg-equality-opacity"}>
                            </div>
                        </div>
                        <div className={"bg-[#F7F2F8] px-16 py-20"}>
                            <h1 className={"text-2xl font-bold "}>VAI TRÒ CỦA NAM GIỚI TRONG VIỆC CHĂM SÓC</h1>
                            <p className={"w-full"}>P&G sẽ tiếp tục ủng hộ và hỗ trợ các gia đình đang làm việc thông
                                qua những chính sách dựa trên nền tảng bình đẳng.</p>
                        </div>
                    </div>
                </div>
                <button
                    className={"text-white font-bold bg-button-gradient border-2 border-black px-12 h-12 rounded-full mb-20"}>XEM
                    THÊM DỮ LIỆU
                </button>

            </section>
            <section id={"section7"} className={"flex flex-col items-center justify-center mb-20 text-[#3C083B]"}>
                {
                    contentSection7.map((item, index) => {
                        return (
                            <div className={"mb-56 flex-col flex  items-center"}>
                                <h1 className={"p-10 lg:p-32 py-0 font-bold text-2xl lg:text-6xl mb-5 text-center"}>{item.title}
                                </h1>
                                <p className={"p-10 lg:p-32 py-0 w-full lg:w-8/12 mb-16 text-center"}>{item.content}
                                </p>
                                <div className={"hidden lg:flex flex-row justify-between gap-32"}>
                                    {
                                        item.items.map((item, index) => {
                                            return (
                                                <a href={item.link}> <img className={"rounded-full hover:shadow-2xl"}
                                                                          src={item.img}/></a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <Swiper
                    loop
                    pagination={true}
                    slidesPerView={1}
                    modules={[Pagination]}
                    spaceBetween={40}
                    className=" w-10/12 lg:w-0 lg:h-0 h-auto pt-40 items-center justify-center"
                >
                    {
                        contentSection7.map((section) => {
                            return section.items.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <a href={item.link}> <img className={"rounded-full hover:shadow-2xl"} src={item.img}/></a>
                                    </SwiperSlide>
                                )
                            })
                        })
                    }
                </Swiper>
            </section>
            <section id={"section8"} className={"relative clipPath-Footer-Equality-Page translate-y-14 text-[#3C083B]"}>
                <img
                    src={"https://images.ctfassets.net/ywowj8d94i8y/2yKwAd2mgp91t0QeRVIx2O/efc91bf6d1d9a8c5ce2f32cb9c02dd05/image__18_.jpg?fm=webp"}/>
                <a href={"https://www.pgcareers.com/"}>
                    <div
                        className={"before:bg-equality-conic-background before:rounded-full before:border-2 before:border-white before:w-80 before:h-80 before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2"}>
                        <div
                            className={"flex item-center text-center flex-col justify-center bg-white rounded-full border-2 border-white w-72 h-72 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"}>
                            <h1 className={"font-[800] mb-5"}>BẠN CÙNG CHUNG GIÁ <br/>TRỊ VỚI CHÚNG TÔI</h1>
                            <h1 className={"font-[800]"}>HÃY GIA NHẬP <br/> ĐỘI NGŨ P&G</h1>
                        </div>
                    </div>
                </a>
            </section>


            {
                showIframe ?
                    <div
                        className={"fixed top-0 w-screen h-screen bg-[rgba(0,0,0,.85)]  z-[999] flex justify-center items-center"}>
                        <p onClick={handleHideIframe}
                           className={"text-3xl text-white cursor-pointer absolute top-5 right-32"}>X</p>
                        <iframe allowFullScreen className={"w-2/3 h-2/3"} src={selectedLink}></iframe>
                    </div>
                    : null
            }
        </div>
    )
}
export default EqualityPage