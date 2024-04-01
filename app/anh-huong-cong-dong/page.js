
import {AiOutlineDown} from "react-icons/ai";
import ButtonHover from "@/components/ReuseComponent/ButtonHover";
import {ArrowUpOutlined} from "@ant-design/icons";
import SwiperEffect from "@/components/anh-huong-cong-dong/SwiperEffect";
import CrossLink from "@/components/ReuseComponent/CrossLink";
import "../config.js"

const contentSection1 = {
    content: <>Tại P&G, chúng tôi cam kết làm điều đúng đắn, trở thành "Một động lực tốt và một động lực cho sự tăng
        trưởng". Đó là lý do mọi nhân viên và các thương hiệu của chúng tôi luôn thực hiện những điều tốt đẹp mỗi ngày.
        <br/>
        Từ hỗ trợ công tác giáo dục về vệ sinh đến cung cấp nhu cầu thiết yếu đơn giản như nước hoặc cung cấp nhu yếu
        phẩm tới các gia đình chịu ảnh hưởng từ thiên tai, mục tiêu của chúng tôi là cải thiện sức khỏe và phúc lợi cho
        các cộng đồng mà chúng tôi hoạt động.
        <br/>
        <a className={"text-primary"} href={"https://us.pg.com/community-impact/citizenship-efforts/"}> <u>Tìm hiểu
            thêm</u> </a> về những câu chuyện mới nhất về cách chúng tôi đang tạo ra sự khác biệt tích cực trong các
        cộng đồng trên khắp thế giới.</>,
    iconSection: [{
        icon: "https://images.ctfassets.net/ywowj8d94i8y/39ODmR3SlW6uME28uemSmI/7f5706971f999f1d5c2729cba84c16c2/handsake-icon.svg",
        title: "Các chương trình toàn cầu",
    },
        {
            icon: "https://images.ctfassets.net/ywowj8d94i8y/5reagJzieXID6QPEcg0ADT/5e3cc218e1bcdc488952f6912e52d428/Everyday_practices.png?fm=webp",
            title: "Các chương trình khu vực",
        },
        {
            icon: "https://images.ctfassets.net/ywowj8d94i8y/5c1P42bhsQc4QOeYsEEqyq/f89345330d6bca9bfda0cb8ad8881535/Innovative_products.png?fm=webp",
            title: "Các chương trình thương hiệu",
        },
        {
            icon: "https://images.ctfassets.net/ywowj8d94i8y/6mzypq1rdFTjhoIE7hxHT1/4b77644787ebb05f5e0e8968010762fc/Supporting_Communities_2.png?fm=webp",
            title: "Hỗ trợ phòng chống Covid-19",
        },]
}
const contentSection2 = [
    {
        title: "Sức mạnh của nước sạch",
        img: "https://images.ctfassets.net/ywowj8d94i8y/2fTJz41lBQ22sT17zMfSx8/e90e56357a392d94b96439a05664b36c/CSDW_Thailand__1_.jpg__1_.png?fm=webp",
        content: <>Trong một thế giới nơi gần một tỷ người đã và đang gặp khó khăn trong việc tìm nguồn nước
            uống sạch, Chương trình Nước uống Sạch cho Trẻ em (CSDW) của chúng tôi cung cấp nước uống
            sạch cho những người cần nhất. Gói bột lọc của chúng tôi là giải pháp mới cho vấn đề này
            bằng cách là cung cấp cho mọi người một phương tiện biến nước bẩn thành nước sạch có thể
            uống được.
            <br/>
            Mỗi gói lọc nước P&G có thể xử lý 10 lít nước bằng cách loại bỏ hiệu quả các vi khuẩn, vi
            rút, ký sinh trùng và chất rắn. Chỉ trong 30 phút, một gia đình năm người có thể có nước
            uống sạch cho cả ngày.
            <img className={""}
                 src={"https://images.ctfassets.net/ywowj8d94i8y/2U7U4UqEwg2kowksmuc480/8f4fcb2be519234e473d34a8fc8a1402/Group_91_2x.png?fm=webp"}/>
            <br/>Vào năm 2021, với sự trợ giúp từ hơn 150 đối tác trên toàn cầu, chúng tôi đã mang đến
            19 tỷ lít nước sạch nhằm hướng tới mục tiêu cung cấp 25 tỷ lít trước năm 2025.</>
    },
    {
        title: "Cứu trợ trong thời điểm cần thiết",
        img: "https://images.ctfassets.net/ywowj8d94i8y/5AaUEycsVeP48U2PZOCsZJ/d42d28b3361745620026a91d06099437/IMG_8075_resized__2_.jpg__1_.png?fm=webp",
        content: "Ở những thời điểm sau khi xảy ra thảm họa thiên nhiên, các thương hiệu của chúng tôi hành động để giúp đỡ những người bị ảnh hưởng, giúp họ có được nơi ở thoải mái để mang lại cảm giác bình thường và tốt đẹp hơn mỗi ngày. Chúng tôi đã ứng phó với hơn 30 thảm họa trên khắp thế giới trong năm vừa qua. "
    },]
const contentSection3 = [
    {
        img: " https://images.ctfassets.net/ywowj8d94i8y/3yb6NuclgJplUTQ7dzrY6z/d4c55bcb3dab254bfe4f048de12dcf34/Shiksha.png?fm=webp",
        content: "\"P&G Shiksha\" cam kết phá bỏ rào cản về định kiến ​​giới trong giáo dục ở Ấn Độ. Chương trình tập trung vào ba lĩnh vực chính – cải thiện cơ sở hạ tầng giáo dục, trao quyền cho trẻ em gái chịu thiệt thòi thông qua giáo dục và cải thiện kết quả học tập. Tính đến thời điểm hiện tại, P&G Shiksha đã hỗ trợ hơn 2.500 trường học trên khắp cả nước, tác động đến cuộc sống của hơn 2,3 triệu trẻ em. "
    },
    {
        img: "https://images.ctfassets.net/ywowj8d94i8y/1XoLKuqkLhF82Okp1WvXDw/6521888b60dbe8eb1307de7bddf1b46b/Unitedway.png?fm=webp ",
        content: " P&G, cùng với các nhân viên hiện tại và đã nghỉ hưu của chúng tôi, đã góp công lớn nhất cho Chiến dịch Cincinnati United Way 2020."
    },
    {
        img: "https://images.ctfassets.net/ywowj8d94i8y/11g6ufCxPMhkqfwhUccci0/962fca784e9b3ac8d5627f6850c5abcc/China_-_powerofhope.png?fm=webp ",
        content: "Năm nay đánh dấu kỷ niệm 25 năm P&G Trung Quốc hỗ trợ Dự án Hope. P&G đã giúp xây dựng và sửa chữa hơn 200 trường học ở Trung Quốc và trong năm nay, chúng tôi đã mở rộng chương trình để khám phá các mô hình giáo dục sức khỏe mang tính nghệ thuật, thú vị và hiệu quả nhằm thúc đẩy sức khỏe thể chất và tinh thần của trẻ em nông thôn. "
    },
]
const contentSection4 = [
    {
        img: "https://images.ctfassets.net/ywowj8d94i8y/43nDP9vumpVMT22GxQMxVB/eb7573f3ac753f1e16ade2cc5a69e2aa/pampers_unicef.png?fm=webp",
        content: "Pampers – Thông qua quan hệ đối tác với UNICEF, chúng tôi đã giúp loại bỏ MNT ở 26 quốc gia, mua và tặng hơn 300 triệu liều vắc-xin MNT, tăng số lượng trẻ sơ sinh được cứu sống ước tính lên một triệu em, bảo vệ 100 triệu phụ nữ và con của họ cũng như giảm 60% số lượng trẻ sơ sinh tử vong do MNT. "
    },
    {
        img: "https://images.ctfassets.net/ywowj8d94i8y/B2lvBQRW5t5hVbKyVPCK0/f29d0237ae7ea7ace05c54cf4a4a760b/crest12days-th__2_.png?fm=webp ",
        content: "Crest – Ở Bắc Mỹ, Crest đã phát động một chiến dịch vào năm 2020 có tên là 12 Ngày Nụ cười của Crest nhằm tôn vinh Crest là thương hiệu chính thức của Kem đánh răng Ông già Noel bằng cách tặng 12 điều ước độc đáo bằng nụ cười trên khắp Hoa Kỳ."
    },
    {
        img: "https://images.ctfassets.net/ywowj8d94i8y/mixedsOXN2FeF3MkfrGAl/6377c7d7f670b393c9a655e96658a725/safeguard-th__2___1___1_.png?fm=webp ",
        content: "Vào năm 2020, Safeguard đã khởi động chương trình #Spread Health Across China# (SHAC), tập trung thúc đẩy nhận thức về vệ sinh và thói quen rửa tay đúng cách. Mục tiêu là giáo dục về sức khỏe và thói quen vệ sinh cho 100 triệu người chậm nhất vào năm 2025. Ở vùng nông thôn Trung Quốc, chương trình đã tiếp cận hơn 500 trường học và cung cấp hơn 2.000 trang thiết bị rửa tay và các khóa giáo dục."
    },
]
const contentSection5 = {
    img: "https://images.ctfassets.net/ywowj8d94i8y/USbeCVllb7uzdpo1qXoEN/143a6e94f7308472f57d299536c5f537/Covid_19_Final.svg",
    title: " Hỗ trợ phòng chống COVID-19",
    content: <>Chúng tôi cùng chung tay hỗ trợ người tiêu dùng và cộng đồng vượt qua những thách thức bất ngờ, cung cấp
        các thương hiệu đáng tin cậy về chăm sóc sức khỏe và vệ sinh cá nhân cũng như xây dựng những tổ ấm sạch sẽ và
        khỏe mạnh.
        <br/>
        "Trong thời kỳ diễn ra đại dịch COVID-19, với hơn 50 thương hiệu đã quyên góp và hợp tác với hơn 200 tổ chức cứu
        trợ, chúng tôi đã tiếp cận người dân ở hơn 55 quốc gia để trợ giúp cho các viện dưỡng lão, mái ấm, nhóm cộng
        đồng, ngân hàng thực phẩm và nhiều cơ sở khác.
        <br/>
        "Chúng tôi sẽ đáp lại lời kêu gọi làm nhiều hơn nữa, với phương châm tuân theo ba nguyên tắc cốt lõi:</>,
    items: [
        {
            img: "https://images.ctfassets.net/ywowj8d94i8y/1PrJ6PcN3XyDCZRGNZ4IXY/ec28d7485eae9dfcf32997dfab73e6be/Keeping_Employees_Safe.png?fm=webp",
            title: "Bảo vệ an toàn cho nhân viên "
        },
        {
            img: "https://images.ctfassets.net/ywowj8d94i8y/6zokTgCMDPU33AKpauZQsc/049ae4d09aaa699a3a74d35a222b5359/Serving_Consumers.png?fm=webp",
            title: "Phục vụ người tiêu dùng"
        },
        {
            img: "https://images.ctfassets.net/ywowj8d94i8y/2J0LOmAliMyYVl3vLnyILo/e48adcf04fb1fc7d65727acc92ba2d1c/Supporting_Communities.png?fm=webp",
            title: "Hỗ trợ các cộng đồng"
        }]
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


const EffectPage = () => {
    return (
        <div>
            <div
                className="relative clipPath-Header  bg-center justify-center flex items-center  h-40 lg:h-96 mb-56 w-full bg-fill bg-no-repeat  ">
                <img className={"absolute top-0 left-0 w-full"}
                     src={"https://images.ctfassets.net/ywowj8d94i8y/3kemzDpWhZ5zrCqVrl5CVR/72ff04d87aeab829a900ea4b4270fd5c/Community_Impact_-_Hero_Banner_crop__1_.jpg?fm=webp"}/>
            </div>
            <section id={"section1"} className={"p-10 lg:p-56 pt-0 text-center flex flex-col items-center "}>
                <h1 className={"font-bold text-3xl lg:text-6xl mb-16 text-primary"}>Hỗ trợ cộng đồng <span
                    className={"text-yellow-400"}>.</span></h1>
                <h3 className={"font-medium text-primary text-lg mb-5"}>Cùng nhau xây dựng một thế giới tốt đẹp </h3>
                <p className={"w-9/12 mb-20"}>{contentSection1.content}</p>
                <i className={"mb-10"}>Nhấp chuột để di chuyển đến từng phần</i>
                <div className={"flex flex-row items-center justify-center gap-10 w-9/12"}>
                    {
                        contentSection1.iconSection.map((item, index) => {
                            return (
                                <div className={"group flex flex-col justify-center items-center text-primary"}>
                                    <img className={"h-12"} src={item.icon}/>
                                    <h3>{item.title}</h3>
                                    <AiOutlineDown className={"group-hover:translate-y-1.5 transition duration-300"}/>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section id={"section2"} className={"flex flex-col justify-center p-32 pt-16 items-center bg-[#F6F6F6]"}>
                <img className={"w-1/2 mb-5"}
                     src={"https://images.ctfassets.net/ywowj8d94i8y/6nBhQEujVJxL9ABXtlpGB7/d8f7623bd6dc9c2443d500e62f025cf5/supporting-communities-illustration.svg"}/>
                <h1 className={"text-primary text-lg font-medium mb-7 "}>Các chương trình toàn cầu</h1>
                <p className={"mb-20 text-center"}>Là một doanh nghiệp, chúng tôi có trách nhiệm phụng sự cho xã
                    hội.</p>
                {
                    contentSection2.map((item, index) => {
                        const flex = index % 2 === 0 ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"
                        return (
                            <div key={"index"} className={`flex ${flex} justify-center items-center gap-10 mb-20`}>
                                <div className={"w-1/2 flex justify-center"}>
                                    <img className={"w-10/12 rounded-full"}
                                         src={item.img}/>
                                </div>
                                <div className={"w-full lg:w-1/2 text-center px-10"}>
                                    <h1 className={"text-primary font-bold text-lg mb-3"}>{item.title}</h1>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        )
                    })
                }
                <p className={"text-center"}>Để tìm hiểu thêm về chương trình tài trợ của P&G, hãy nhấp vào <a
                    className={"text-primary"}
                    href={"https://www.grantinterface.com/Process/Apply?urlkey=pgfund"}><u>đây</u></a>.
                </p>

                {/*<div className={"flex flex-row justify-center items-center gap-10"}>*/}
                {/*   */}
                {/*    <div className={"w-1/2 flex justify-center"}>*/}
                {/*        <img className={"w-10/12 rounded-full  "}*/}
                {/*             src={"https://images.ctfassets.net/ywowj8d94i8y/2fTJz41lBQ22sT17zMfSx8/e90e56357a392d94b96439a05664b36c/CSDW_Thailand__1_.jpg__1_.png?fm=webp"}/>*/}
                {/*    </div>*/}

                {/*    <div className={"w-1/2 text-center px-10"}>*/}
                {/*        <h1 className={"text-primary font-bold text-lg mb-3"}>Sức mạnh của nước sạch</h1>*/}
                {/*        <p></p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
            <section id={"section3"} className={"flex flex-col p-32 justify-center items-center"}>
                <img className={"w-1/2"}
                     src={"https://images.ctfassets.net/ywowj8d94i8y/2aedhu4UsvkplQU5x6P0NG/9cd372318d351e893fbf662d2e922e9b/Regional_Effort_v3.svg"}/>
                <h1 className={"text-primary text-lg font-medium mb-7"}>Các chương trình toàn cầu</h1>
                <p className={"mb-20"}>Là một doanh nghiệp, chúng tôi có trách nhiệm phụng sự cho xã hội.</p>
                <div className={"hidden lg:flex flex-row justify-center gap-10 mb-20"}>
                    {
                        contentSection3.map((item, index) => {
                            return (
                                <div key={index} className={"flex flex-col w-1/4 "}>
                                    <img className={"rounded-full  mb-5"}
                                         src={item.img}/>
                                    <p>{item.content}</p>
                                </div>
                            )
                        })
                    }
                </div>

                <SwiperEffect items={contentSection3}/>


                <ButtonHover className={"lg:w-8/12 h-12"}>
                    <text className={"lg:text-xl text-sm "}>KHÁM PHÁ CÁC CHƯƠNG TRÌNH CÔNG DÂN TRONG KHU VỰC CỦA
                        P&G
                    </text>
                    <ArrowUpOutlined rotate={45}/></ButtonHover>
            </section>
            <section id={"section4"} className={"flex flex-col p-32 justify-center items-center  bg-[#F6F6F6]"}>
                <img className={"w-1/2"}
                     src={"https://images.ctfassets.net/ywowj8d94i8y/6zXxFBQOaUMGCqsqQ2ALie/db4d1aba905ce5075cd4b33ecf7b178c/brands-leading-the-way-illustration.svg"}/>
                <h1 className={"text-primary text-lg font-medium mb-7"}>Chương trình của các thương hiệu</h1>
                <p className={"mb-20"}>Các thương hiệu của P&G giúp hàng triệu gia đình cải thiện cuộc sống mỗi ngày, từ
                    giúp bạn dọn dẹp nhà bếp, giặt quần áo, thay tả tã cho bé... Các sản phẩm P&G được tin tưởng và giúp
                    tạo ra sự khác biệt trên toàn thế giới, nơi chúng tôi có thể tác động đến nhiều cuộc sống hơn
                    nữa.</p>
                <div className={"hidden lg:flex flex-row justify-center gap-10 mb-20"}>
                    {
                        contentSection4.map((item, index) => {
                            return (
                                <div key={index} className={"flex flex-col w-1/4 "}>
                                    <img className={"rounded-full  mb-5"}
                                         src={item.img}/>
                                    <p>{item.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <SwiperEffect items={contentSection4}/>
                <ButtonHover className={"lg:w-8/12 h-12"}>
                    <text className={"lg:text-xl text-sm "}>KHÁM PHÁ CÁC CHƯƠNG TRÌNH CÔNG DÂN TRONG KHU VỰC CỦA
                        P&G
                    </text>
                    <ArrowUpOutlined rotate={45}/></ButtonHover>
            </section>
            <section id={"section5"}
                     className={"flex flex-col justify-center p-32 items-center text-center bg-[rgb(246, 246, 246)]"}>
                <img
                    src={"https://images.ctfassets.net/ywowj8d94i8y/USbeCVllb7uzdpo1qXoEN/143a6e94f7308472f57d299536c5f537/Covid_19_Final.svg"}/>
                <h1 className={"text-primary text-lg font-medium mb-7"}>{contentSection5.title}</h1>
                <p className={"mb-20 w-8/12"}>{contentSection5.content}</p>
                <div className={"hidden lg:flex flex-row items-center justify-center gap-10 w-9/12"}>
                    {
                        contentSection5.items.map((item, index) => {
                            return (
                                <div key={index}
                                     className={"group flex flex-col justify-center items-center text-primary"}>
                                    <img className={"h-12"} src={item.img}/>
                                    <h3>{item.title}</h3>
                                    <AiOutlineDown className={"group-hover:translate-y-1.5 transition duration-300"}/>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <CrossLink items={crossLinkItems}/>
        </div>
    )

}
export default EffectPage;