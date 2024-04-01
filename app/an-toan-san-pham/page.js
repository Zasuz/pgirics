"use client"
import React, {useState} from "react";
import {Button} from "antd";
import ButtonHover from "@/components/ReuseComponent/ButtonHover";

const ProductSafetyPage = () => {
    const [showIframe, setShowIframe] = useState(false);

    const contentSection1 = {
        title: <>An toàn sản phẩm</>,
        subTitle: "Chúng tôi luôn tự đặt cho mình tiêu chuẩn cao nhất",
        content: "Trong hơn 185 năm, sự an toàn của bạn và sự an toàn của thế giới quanh bạn là tôn chỉ của những gì chúng tôi làm. Đó là lý do tại sao chúng tôi cần một đội ngũ hơn 500 nhà khoa học và chuyên gia với một quy trình an toàn và nghiêm ngặt để phân tích mọi thành phần trước khi xem xét đưa vào một trong những sản phẩm của chúng tôi."
    }

    const contentSection2 = {
        title: <>Quy trình 4 bước <br/> của chúng tôi</>,
        content: "An toàn là tôn chỉ của tất cả những gì chúng tôi làm. Trước khi tiếp thị một sản phẩm mới, chúng tôi không chỉ tuân thủ mà còn làm tốt hơn cả quy định để đảm bảo an toàn cho mọi thành phần của quy trình thông qua quy trình bốn bước, dựa trên cơ sở khoa học. Chúng tôi sử dụng quy trình tương tự như các cơ quan quản lý trên toàn thế giới, bao gồm FDA Hoa Kỳ, EPA, EU, WHO và các cơ quan khác.",
        slideItem: [
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/6fFicLITTwbcbgxl28RErm/7681a6060450517658d6cf4175ef6d90/PG_01_Doubt.png?fm=webp",
                title: "Nghi ngờ",
                content: "Trước khi sử dụng bất kỳ thành phần nào, các nhà khoa học của chúng tôi bắt đầu bằng những câu hỏi. Nếu có bất kỳ nghi ngờ nào về sự an toàn hoặc lợi ích của các thành phần đối với con người, chúng tôi sẽ không sử dụng.",
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/2823T5rxSPJyy3kgqCoe45/ad1baa0af91a6f7a2b0e0eda22e08f92/PG_02_Define.png?fm=webp",
                title: "Xác định",
                content: "Chúng tôi xác định phạm vi an toàn của các thành phần bằng cách sử dụng các tiêu chuẩn dựa trên khoa học tương tự như các cơ quan quản lý lớn trên thế giới.",
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/1Kut9ZaVnIPQV6p4hmMyom/86a35be9fd98d9fc1734347d03c62f1c/PG_03_Determine.png?fm=webp",
                title: "Quyết định",
                content: "Chúng tôi đánh giá tất cả các thành phần trong sản phẩm để đảm bảo an toàn khi sử dụng — cả cho bạn và môi trường. Nếu chúng tôi không thể khẳng định, chúng tôi sẽ bắt đầu lại với thiết kế ban đầu.",
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/1HYOSLnu1pAVGT5oZ98DOz/774b10ccadf23cac561d1f2ec2ece1f7/PG_04_Diligence.png?fm=webp",
                title: "Chất vấn",
                content: <>Bước cuối cùng của chúng tôi không bao giờ thật sự kết thúc. Khi một sản phẩm được lên kệ,
                    chúng tôi sẽ cập nhật thông tin mới về từng thành phần, hợp tác về các phương pháp an toàn sản phẩm
                    mới với các cơ quan quản lý và các nhà khoa học bên ngoài P & G để đảm bảo rằng luôn thực sự cập
                    nhật những thông tin mới nhất về các thành phần đó.\n" +
                    <br/>
                    "Quan trọng nhất là, chúng tôi lắng nghe bạn — đảm bảo các sản phẩm chúng tôi sẽ được thiết kế để
                    đáp ứng mong đợi của bạn về an toàn và hiệu suất.</>,
            },]
    }
    const contentSection4 = {
        title: "Thành phần",
        content: "An toàn sản phẩm tiêu dùng bắt đầu với các nguyên liệu. Chúng tôi hiểu rằng bạn có thể có câu hỏi và mối quan tâm về những nguyên liệu cụ thể. Tại đây, bạn sẽ tìm thấy nhiều chi tiết hơn về các câu hỏi phổ biến mà chúng tôi nhận được liên quan đến các thành phần sản phẩm mà chúng tôi chọn và chúng tôi chủ động không sử dụng.",
        img: "https://images.ctfassets.net/ywowj8d94i8y/19PMsqHTqOtQJmZxhwygma/59c93ee6a49d2101e03b4267f89cdce9/1.11.23_Ingredients_Page_Key_Image_Option_4.png?fm=webp"
    }
    const handleShowIframe = () => {
        console.log("showIframe")
        setShowIframe(!showIframe);
    }

    return (
        <section>
            <section id={"section1"}
                     className="bg-product-safety-page bg-center justify-center flex items-center h-screen w-screen overflow-hidden relative before:w-full before:z-10 before:h-full before:absolute before:top-0 before:left-0 before:bg-gradient-opacity lg:before:bg-gradient-opacity-lg">

                <div className={"clipPath-Carousel absolute w-full h-full bg-white z-40"}>

                </div>
                <div
                    className={"items-center lg:items-start flex text-center lg:text-start flex-col w-full ml-0 lg:ml-32 z-50 gap-6 mt-44 lg:mt-0 "}>

                    <img
                        className={"w-16 h-auto"}
                        src={"https://images.ctfassets.net/ywowj8d94i8y/1SI038m6YWUZEWTWfQE8ok/5b214d2a62ff727b717c7cbafb8e67d7/Brands_Purple.svg"}/>
                    <h1 className={"text-xl lg:text-8xl  lg:w-5/12 text-white font-[700]"}>{contentSection1.title}</h1>
                    <p className={"w-1/2 lg:w-4/12 text-white font-[600]"}>{contentSection1.subTitle}</p>
                    <p className={"w-1/2 text-white text-wrap"}>{contentSection1.content}</p>
                </div>
            </section>
            <section id={"section2"} className={"p-32"}>
                <h1 className={"text-5xl text-primary font-[700] mb-3"}>{contentSection2.title}</h1>
                <p className={" text-black w-1/2 lg:w-5/12 mb-5"}>{contentSection2.content}</p>
                <div className={"flex flex-col lg:flex-row gap-10"}>
                    {
                        contentSection2.slideItem.map((item, index) => {
                            return (
                                <div className={"w-full lg:w-1/4 h-auto"}>
                                    <img
                                        src={item.img}/>
                                    <div className={"px-10"}>
                                        <h3 className={"font-[700] text-[22px] text-primary mb-3"}>
                                            {index + 1}
                                            <span className={"text-[#f1b434]"}>.</span>
                                            {item.title}</h3>
                                        <p className={"text-black"}>{item.content}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section id={"section4"} className={"p-32 relative  bg-[#f2f7ff]"}>
                <div className={""}>
                    <p>Xem để tìm hiểu thêm về cách các nhà khoa học của chúng tôi tạo ra các sản phẩm an toàn cho
                        bạn.</p>
                    <div onClick={handleShowIframe}
                         className={"group relative w-full flex overflow-hidden justify-center rounded-2xl transition-all duration-1000"}>


                        <img className={" w-full group-hover:scale-[1.2] transition-transform duration-1000 "}
                             src={"//images.ctfassets.net/ywowj8d94i8y/6EZnUNs3Icy4mEqSWUeMcK/523cc152b5e37f051f38ecd5a9f74cff/product-safety-video-thumbnail.jpg?fm=webp"}/>
                        <div
                            className={"absolute w-full h-full top-0 bg-blue-500 opacity-40 group-hover:opacity-0 transition-all duration-1000"}>

                        </div>
                        <div className={"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"}>
                            <button
                                className="bg-primary group-hover:text-primary group-hover:bg-opacity-50 group-hover:bg-white border-2 border-primary text-white p-5 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M5 3l14 9-14 9V3z"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>

            </section>
            <section id={"section4"} className={"flex flex-col-reverse lg:flex-row p-32 gap-10 bg-[#f2f7ff]"}>
                <div className={"mb-3 flex justify-center flex-col"}>
                    <h1 className={"text-5xl text-primary font-[700] mb-5"}>
                        {contentSection4.title}</h1>
                    <p className={"mb-8"}>{contentSection4.content}</p>
                    <ButtonHover className={"border-primary text-primary text-bold rounded-full w-1/2 h-12 font-[600]"}>Xem
                        nguyên liệu của chúng tôi</ButtonHover>
                </div>
                <img className={"rounded-full"}
                     src={"https://images.ctfassets.net/ywowj8d94i8y/19PMsqHTqOtQJmZxhwygma/59c93ee6a49d2101e03b4267f89cdce9/1.11.23_Ingredients_Page_Key_Image_Option_4.png?fm=webp"}/>

            </section>
            {
                showIframe ?
                    <div
                        className={"fixed top-0 w-screen h-screen bg-[rgba(0,0,0,.85)]  z-[999] flex justify-center items-center"}>
                        <p onClick={handleShowIframe}
                           className={"text-3xl text-white cursor-pointer absolute top-5 right-32"}>X</p>
                        <iframe allowFullScreen className={"w-2/3 h-2/3"}
                                src={"https://www.youtube-nocookie.com/embed/zoKiUj0AFmc?autoplay=1"}></iframe>
                    </div>
                    : null
            }
        </section>
    )
}
export default ProductSafetyPage;