"use client"

import React, {useEffect, useState} from "react";
import {AiFillPauseCircle, AiFillPlayCircle} from "react-icons/ai";
import ChangeNewSwiper from "@/components/doi-moi/ChangeNewSwiper";
import "../../css/change-new-page.css"
import CollapseHistory from "@/components/doi-moi/CollapseHistory";
import CrossLink from "@/components/ReuseComponent/CrossLink";
import "../config.js"

const ChangeNewPage = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const contentSection4 = "Chúng tôi yêu thích việc tìm ra giải pháp cho những vấn đề thường ngày mà người tiêu dùng gặp phải ở hiện tại và trong tương lai. Quá trình này bắt đầu bằng việc kết hợp hiểu biết sâu sắc về người tiêu dùng để tạo ra những sản phẩm vượt trội, không thể chối từ bằng khoa học và công nghệ tiên tiến nhất, có tác động đến cuộc sống hàng ngày của họ. Nhờ vậy, chúng tôi tạo ra giá trị cho mọi người."

    useEffect(() => {
        const video = document.querySelector('video');
        video.play();
    }, [])
    const handleVideo = () => {
        const video = document.querySelector('video');
        if (video.paused) {
            video.play().then(() => {

                setIsPlaying(true)
            }).catch((error) => {
                console.log("Error: ", error)
            })
        } else {
            setIsPlaying(false)
            video.pause();
        }
    }

    const contentSection1 = {
        title: "Đổi mới",
        content: "Tại P&G, đổi mới là điều chúng tôi am tường nhất. Chúng tôi yêu thích việc tìm ra giải pháp cho những vấn đề thường ngày mà người tiêu dùng gặp phải. Với trái tim nhiệt huyết của một công ty khởi nghiệp và nguồn lực của một tập đoàn toàn cầu, chúng tôi luôn tìm cách để đổi mới từng khía cạnh trong hoạt động kinh doanh của mình. Trong quá trình đổi mới, chúng tôi tìm cảm hứng ở con người cũng như những nhu cầu, giá trị, ước muốn và niềm đam mê của họ."
    }
    const contentSection2 = {
        title: "Đổi mới theo cách" +
            " của chúng tôi",
        content: "Điều gì sẽ xảy ra khi bạn đưa tinh thần khởi nghiệp vào một tập đoàn toàn cầu? Điều này sẽ mở ra vô vàn cách để đổi mới từng khía cạnh của hoạt động kinh doanh."
    }
    const items = [
        {
            title: "Connect + Develop",
            img: "https://images.ctfassets.net/ywowj8d94i8y/2l7MovIxFC9SfJKMjCrUCX/2349839fdb8aa275dec60f88eb0379cd/Connect___Develop.jpg?fm=webp",
            link: "https://www.pgconnectdevelop.com/",
            content: "Đội ngũ toàn cầu của chúng tôi tìm kiếm những người tiên phong từ bên ngoài công ty. Sau đó, chúng tôi xây dựng và vun đắp mối quan hệ đối tác với các nhà phát minh, chủ sở hữu bằng sáng chế này cùng nhiều nhà đổi mới khác. Mục tiêu cuối cùng là tạo ra những giải pháp mới trong mọi lĩnh vực của hoạt động kinh doanh, từ chuỗi cung ứng cho đến các công nghệ và sản phẩm phục vụ trải nghiệm mua sắm trên trang thương mại điện tử và tại cửa hàng.",
        },
        {
            title: "Triển lãm Điện tử tiêu dùng",
            img: "https://images.ctfassets.net/ywowj8d94i8y/1DPQh5PFrDvgdUX77b7iBB/c592d823e7113c8734f9aa2604cd6f0f/consumer-electronics-show.jpg__1_.png?fm=webp",
            link: "https://pglifelab.com/",
            content: "Trong năm 2021, chúng tôi đã định hình lại LifeLab thành P&G LifeLab Everyday Virtual Experience (Trải nghiệm ảo hàng ngày của P&G LifeLab). Qua đây, người xem có cơ hội chứng kiến những hoạt động diễn ra ở hậu trường để thấy được cam kết của chúng tôi trong việc tái tạo trải nghiệm của người tiêu dùng và hướng tới một tương lai tốt đẹp hơn cho cộng đồng và hành tinh của chúng ta.",
        },
        {
            title: "Nghiên cứu và phát triển",
            img: "https://images.ctfassets.net/ywowj8d94i8y/rCugBG5fwqdtAXBlMpCjE/3e32e431bfa8fac7a720e7fdda34e0e0/Research___Development.jpg?fm=webp",
            link: "https://pgresearchdevelop.com/",
            content: "Các trung tâm kiến thức đặc biệt với các chuyên gia hàng đầu phát hiện ra các công nghệ mới và những khả năng tiên tiến, dựa trên nhu cầu của người tiêu dùng ở hiện tại và trong tương lai. Từ đó, những hiểu biết mới mẻ được những chuyên gia đa lĩnh vực diễn giải, được xác thực bằng các sự thật về con người dựa trên khoa học nhận thức và nhân loại học. Cuối cùng, những hiểu biết ấy được các nhà khoa học, nhà thiết kế và kỹ sư của chúng tôi khai thác để cải biến hiện trạng theo khía cạnh xây dựng.",
        },
        {
            title: "P&G Ventures",
            img: "https://images.ctfassets.net/ywowj8d94i8y/4Ckll2uTsBG7tuoW6QVaUa/04dc228890298607bbd3b39057d72fad/P_G_Ventures.png?fm=webp",
            link: "https://pgventuresstudio.com/",
            content: "Trước tiên, chúng tôi xác định những vấn đề lớn mà hiện người tiêu dùng gặp phải nhưng chưa được giải quyết. Từ đó, chúng tôi tìm kiếm các đối tác công nghệ và kinh doanh để giải quyết những vấn đề ấy. Sau đó, chúng tôi sử dụng nguồn lực và chuyên môn của mình để phát triển, thử nghiệm và tinh chỉnh các thương hiệu để đảm bảo những thương hiệu ấy sẽ đạt được thành công lâu dài. Cuối cùng, chúng tôi giúp những thương hiệu mới tăng quy mô và phát triển hết tiềm năng của mình.",
        },
        {
            title: "Signal P&G",
            img: "https://images.ctfassets.net/ywowj8d94i8y/1ItkrzvNoaII8ONMZswSPa/118d53d53c3f7e47283f7baad1b49aee/Signal_P_G.png?fm=webp",
            link: "https://pgsignal.com/",
            content: "Vào năm 2012, chúng tôi tổ chức Signal P&G, một hội thảo “toàn diện” đặt biệt tại trụ sở chính của công ty ở Cincinnati, có sự tham dự của những nhà lãnh đạo doanh nghiệp đổi mới nhất trên khắp thế giới. Vào tháng 7 hàng năm, chúng tôi mời khoảng 20 diễn giả xuất sắc đến truyền cảm hứng cho hàng nghìn khán giả trên toàn cầu để họ học hỏi và hành động, từ đó thúc đẩy cải biến mang tính xây dựng trong toàn bộ hệ sinh thái P&G trên toàn cầu.",
        }
    ]
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
        <section className={"bg-[#f2f7ff]"}>
            <div id={"section1"}
                 className=" justify-center flex items-center h-screen w-screen overflow-hidden relative before:w-full before:z-10 before:h-full before:absolute before:top-0 before:left-0 before:bg-gradient-opacity lg:before:bg-gradient-opacity-lg">
                <video
                    autoPlay
                    loop
                    className={"w-full h-full absolute object-cover"}
                    src={"https://videos.ctfassets.net/ywowj8d94i8y/3ALv8867OhLEP27gvxe1Eh/0a2f8e082d39acb6e71fc01bd331f82a/4.11.22_Innovation_Evergreen_Video_v3.mp4"}/>
                <div className={"clipPath-Carousel absolute w-full h-full bg-[#f2f7ff] z-30"}>

                </div>
                <div
                    className={"items-center lg:items-start flex flex-col w-full ml-0 lg:ml-32 z-40 gap-6 mt-52 lg:mt-0 "}>
                    <div className={"absolute top-20 right-12 bg-white rounded-full transition-icon "}>
                        {
                            isPlaying ? <AiFillPauseCircle className={"cursor-pointer "} color={"blue"} size={60}
                                                           onClick={handleVideo}/>
                                : <AiFillPlayCircle className={"cursor-pointer"} color={"blue"} size={60}
                                                    onClick={handleVideo}/>
                        }
                    </div>
                    <img
                        className={"w-16 h-auto"}
                        src={"https://images.ctfassets.net/ywowj8d94i8y/2yhJRApjOzqg1hQkoJfm9P/77d84bc477ba9f991eee4c4fcef27a95/Innovation_Orange.svg"}/>
                    <h1 className={"text-xl lg:text-8xl text-white font-[700]"}>{contentSection1.title}</h1>
                    <p className={"w-8/12 text-white text-wrap"}>{contentSection1.content}</p>
                </div>
            </div>
            <div id={"section2"} className={"mt-10 p-32 bg-[#f2f7ff]"}>
                <h1 className={"w-8/12 lg:w-1/2 text-xl text-primary font-[700] lg:text-5xl "}>Đổi mới theo cách của
                    chúng tôi</h1>
                <p className={"text-black w-8/12 lg:w-1/2 text-wrap mt-5 mb-24"}>{contentSection2.content}</p>
                <div
                    className={"w-full h-auto bg-white text-primary flex flex-col justify-center items-center"}>
                    <ChangeNewSwiper items={items}/>
                </div>

            </div>
            <div id={"section3"} className={"bg-white p-10"}>
                <h1 className={"text-primary font-bold text-2xl "}>Những sự kiện đổi mới trong lịch sử</h1>
                <CollapseHistory/>
            </div>
            <div id={"section4"} className={"relative p-20 flex flex-row justify-between pr-0"}>
                <div className={"w-9/12 lg:w-1/2 flex flex-col text-primary lg:pl-20"}>
                    <h1 className={"lg:text-2xl font-bold lg:text-5xl"}>Con người là trung tâm của tất cả những gì chúng
                        tôi làm
                    </h1>
                    <img className={"w-[32px] mb-3"}
                         src={"https://images.ctfassets.net/ywowj8d94i8y/1m9sNz8ZiPaakmHc56Fgtq/b6812bb95e87e19bbd1f6e51aeb60c16/quote.svg"}/>
                    <i className={"w-full  text-wrap font-[500] font-[24px]"}>{contentSection4}</i>
                    <p className={"text-primary font-[600] my-3"}>Victor Aguilar</p>
                    <p className={"text-primary"}>Giám đốc Nghiên cứu, Phát triển và Sáng tạo của P&G</p>
                </div>
                <img className={"lg:relative absolute top-0 right-0 w-2/12 "}
                     src={"https://images.ctfassets.net/ywowj8d94i8y/11FC56TtuGrwxi728ataBi/595c9f99aa3098d15a81cb7c9a656857/Group.svg"}/>

            </div>
            <CrossLink items={crossLinkItems}/>
        </section>
    )
}
export default ChangeNewPage;