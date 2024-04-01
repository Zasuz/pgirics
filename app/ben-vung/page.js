import React from "react";
import {AiOutlineDown} from "react-icons/ai";
import ButtonHover from "@/components/ReuseComponent/ButtonHover";
import {ArrowUpOutlined} from "@ant-design/icons";


const EnduringPage = () => {
    const contentSection1 = {
        title: "PHÁT TRIỂN MÔI TRƯỜNG BỀN VỮNG",
        content: "Tại P&G, sự bền vững về môi trường luôn gắn liền với hoạt động kinh doanh của doanh nghiệp. Chúng tôi luôn mong muốn góp phần cải thiện cuộc sống hằng ngày của người tiêu dùng. Mặc dù cam kết cải thiện cuộc sống người tiêu dùng của chúng tôi chưa bao giờ thay đổi, nhưng tiêu chuẩn mà chúng tôi cần đạt được hiện nay đã được nâng lên. Đối với người tiêu dùng ngày nay, sự cải thiện sẽ không có ý nghĩa nếu nó không có lợi cho môi trường. Và chúng tôi cũng chia sẻ niềm tin đó. Nỗ lực đổi mới sáng tạo không thể đem lại lợi ích vượt trội nếu thiếu sự bền vững. Cùng nhau hợp tác, chúng ta có thể xây dựng một tương lai tốt đẹp hơn cho tất cả mọi người. Suy cho cùng, hành tinh này là nhà của chúng ta. Và thời điểm tốt nhất để hành động chính là ngay từ bây giờ.",
        img: "https://images.ctfassets.net/ywowj8d94i8y/1L1A0vHqA3CNR1uESaNvq1/8c7ce31271fe1226b904bb618a6dcc11/P_G_HouseGraphic_VN_450x415.png?fm=webp",
        subContent: "Tầm nhìn môi trường 2030 của P&G chú trọng đến việc phát triển các thương hiệu có khả năng mang lại lợi ích vượt trội và bền vững, nhằm cải thiện cuộc sống cho cả thế hệ hiện tại và mai sau. Nền tảng của tầm nhìn đó là nỗ lực cải thiện cuộc sống của mọi người trong các hoạt động vận hành, chuỗi cung ứng và cộng đồng mà chúng tôi phục vụ. Tham vọng này được xây dựng dựa trên bốn lĩnh vực – Khí hậu, Rác thải, Nước và Thiên nhiên – đó là những yếu tố giúp chúng tôi tạo ra sự khác biệt lớn nhất cho hành tinh của chúng ta và hoạt động kinh doanh của mình.",
        iconSection: [
            {
                icon: "https://images.ctfassets.net/ywowj8d94i8y/5kfG738kKjKWRjicIF0RHb/c7ee6e78d54aeca6273c792965e67d50/Icon-Climate.png?fm=webp",
                title: "Khí hậu",
            },
            {
                icon: "https://images.ctfassets.net/ywowj8d94i8y/1gwSnjR60mA6WiTxxEzj4k/b0dbe49ac10d1e8de75db0977d7a14c5/Icon-Waste.png?fm=webp",
                title: "Rác thải",
            },
            {
                icon: "https://images.ctfassets.net/ywowj8d94i8y/1ocU4YxxYVMq5x67mMbpKx/29735f5876bf9940ad88c003566b6520/Icon-Water.png?fm=webp",
                title: "Nước",
            },
            {
                icon: "https://images.ctfassets.net/ywowj8d94i8y/5NAk5l9LwKf4MWmlFI8JR5/2bbda4a672689456f8c68a35e13e3150/Icon-Forestry.png?fm=webp",
                title: "Thiên nhiên",
            },

        ]
    }
    const contentSection2 = {
        icon: "https://images.ctfassets.net/ywowj8d94i8y/5kfG738kKjKWRjicIF0RHb/c7ee6e78d54aeca6273c792965e67d50/Icon-Climate.png?fm=webp",
        subTitle: "TẦM NHÌN HƯỚNG ĐẾN MỤC TIÊU ĐẠT LƯỢNG PHÁT THẢI KHÍ NHÀ KÍNH BẰNG 0 TRƯỚC NĂM 2040",
        title: "Khí hậu",
        content: <>
            Vào tháng 9 năm 2021, P&G đặt ra tầm nhìn mới là đạt được tổng mức phát thải khí nhà kính (GHG) bằng 0 trong
            các hoạt động và chuỗi cung ứng của mình, từ khâu xử lý nguyên liệu thô đến khi vận chuyển đến nhà bán lẻ.
            P&G cũng đã chia sẻ Kế hoạch hành động chuyển đổi khí hậu, phác thảo cách tiếp cận toàn diện để thúc đẩy
            hành động vì khí hậu và đối phó những thách thức chính ở phía trước. Ngoài các thông tin chi tiết về tầm
            nhìn nói trên của P&G đến năm 2040, Kế hoạch hành động chuyển đổi khí hậu còn đề cập đến lượng khí thải
            trong toàn bộ vòng đời của các sản phẩm và bao bì của chúng tôi, bao gồm toàn bộ chuỗi cung ứng, vận hành,
            cũng như quá trình sử dụng sản phẩm của người tiêu dùng.
            <br/>
            "Để tìm hiểu thêm về tiến trình thực hiện của chúng tôi so với các mục tiêu về khí hậu của mình,<a
            className={"text-primary"} href={"https://www.pginvestor.com/esg/environmental/climate/default.aspx"}><u>hãy
            nhấp vào đây</u></a>.</>,
        img: "https://images.ctfassets.net/ywowj8d94i8y/6OobLWoB4mkaIjKSbDZ8n4/cc8684aa4824bbb59cfcfdeea13006a9/NETZERO.png?fm=webp",
    }
    const contentSection3 =
        {
            icon: "https://images.ctfassets.net/ywowj8d94i8y/1gwSnjR60mA6WiTxxEzj4k/b0dbe49ac10d1e8de75db0977d7a14c5/Icon-Waste.png?fm=webp",
            // subTitle: "TẦM NHÌN HƯỚNG ĐẾN MỤC TIÊU ĐẠT LƯỢNG PHÁT THẢI KHÍ NHÀ KÍNH BẰNG 0 TRƯỚC NĂM 2040",
            title: "Rác thải",
            content: <>
                Rác thải nhựa trong môi trường là một vấn đề nghiêm trọng, đặc biệt là khi rác thải tập kết lại trên
                sông ngòi và đại dương của chúng ta. Đây là thách thức toàn cầu phức tạp và đòi hỏi cần có một phương
                pháp mang tính toàn diện và hợp tác trong toàn bộ vòng đời của nhựa. Để giải quyết thách thức này và kéo
                dài vòng tuần hoàn của nhựa, chúng ta cần có sự hợp tác giữa nhiều bên liên quan, bao gồm toàn ngành,
                chính phủ, tổ chức xã hội và nghiên cứu học thuật. Mặc dù nhựa có thể giúp giảm số lượng vật liệu đóng
                gói, bảo vệ sản phẩm và giảm phát thải khí nhà kính từ quá trình vận chuyển, nhưng chúng ta phải sử dụng
                và tái sử dụng nó một cách có trách nhiệm.
                <br/>
                Tại P&G, chúng tôi đang nỗ lực hướng tới mục tiêu đến năm 2030 thiết kế toàn bộ bao bì hàng tiêu dùng có
                thể tái chế được hoặc tái sử dụng. Chúng tôi đang phát minh và nhân rộng các giải pháp tái chế mới, sử
                dụng vật liệu thay thế và hợp tác với các đơn vị bên ngoài để giúp thúc đẩy cơ sở hạ tầng quản lý rác
                thải nhằm cải thiện khả năng tiếp cận địa điểm tập kết, qua đó giữ lại nhựa để tiếp tục sử dụng và không
                bị thải vào môi trường tự nhiên.
                <br/>
                Để tìm hiểu thêm về tiến độ thực hiện các mục tiêu về bao bì của mình của chúng
                tôi, <a className={"text-primary"}
                        href={"https://www.pginvestor.com/esg/environmental/climate/default.aspx"}><u>hãy nhấp vào
                đây</u></a>.</>,
            link: "https://vn.pg.com/cong-bo-thong-tin-epr/",
            img: "https://images.ctfassets.net/ywowj8d94i8y/4RzXqZusqfIIdBpw2VnnIq/16ab7e7deec4b8b8dfc47c41e2bbe3e3/PACKAGING.png?fm=webp",
        }
    const contentSection4 =
        {
            icon: "https://images.ctfassets.net/ywowj8d94i8y/1ocU4YxxYVMq5x67mMbpKx/29735f5876bf9940ad88c003566b6520/Icon-Water.png?fm=webp",
            // subTitle: "TẦM NHÌN HƯỚNG ĐẾN MỤC TIÊU ĐẠT LƯỢNG PHÁT THẢI KHÍ NHÀ KÍNH BẰNG 0 TRƯỚC NĂM 2040",
            title: "Nước",
            content: <>
                Tại P&G, chúng tôi mong muốn góp phần xây dựng một tương lai với nguồn nước dồi dào, có thể duy trì sự
                sống của con người và tự nhiên trong cả hiện tại và các thế hệ mai sau. Vào tháng 6 năm 2022, chúng tôi
                đã công bố một chiến lược toàn diện, bao gồm mục tiêu khôi phục nước ở những khu vực thiếu nước cho con
                người và thiên nhiên, ứng phó với những thách thức về nước thông qua đổi mới và quan hệ đối tác, đồng
                thời giảm lượng nước trong các hoạt động của chúng tôi để bảo tồn nguồn cung cấp nước tại địa phương.
                Chúng tôi cũng đã đặt mục tiêu đến năm 2030 là khôi phục lượng nước nhiều hơn mức tiêu thụ1 tại các cơ
                sở sản xuất của P&G ở 18 khu vực thiếu nước trên khắp thế giới; cũng như khôi phục lượng nước nhiều hơn
                mức tiêu thụ2 khi sử dụng các sản phẩm của P&G tại hai khu vực đô thị có áp lực cao về nhu cầu nước là
                Los Angeles và Thành phố Mexico. Chúng tôi sẽ đạt được những mục tiêu này thông qua quan hệ đối tác và
                các dự án phục hồi nhằm cải thiện, quản lý và bảo vệ nguồn nước.
                <br/>
                Để tìm hiểu thêm về tiến độ thực hiện các mục tiêu về nước của chúng tôi, <a className={"text-primary"}
                                                                                             href={"https://www.pginvestor.com/esg/environmental/water/default.aspx"}><u>hãy
                nhấp vào đây</u></a>
                <br/>
                <br/>
                <sup> Nước bốc hơi trong quá trình sản xuất các sản phẩm hoặc được đưa vào thành phẩm được sản xuất tại
                    các địa điểm này.</sup>
                <sup>Nước từ các hộ gia đình rò rỉ và bốc hơi trong quá trình sử dụng sản phẩm.</sup>
            </>,
            img: "https://images.ctfassets.net/ywowj8d94i8y/ctRHTNH0TevihlUiFJ94B/eebb4d0be116cd5f3577261b66733be9/WATER.png?fm=webp",
        }
    const contentSection5 =
        {
            icon: "https://images.ctfassets.net/ywowj8d94i8y/5NAk5l9LwKf4MWmlFI8JR5/2bbda4a672689456f8c68a35e13e3150/Icon-Forestry.png?fm=webp",
            // subTitle: "TẦM NHÌN HƯỚNG ĐẾN MỤC TIÊU ĐẠT LƯỢNG PHÁT THẢI KHÍ NHÀ KÍNH BẰNG 0 TRƯỚC NĂM 2040",
            title: "Thiên nhiên",

            content: <>
                Tại P&G, chúng tôi cam kết bảo vệ các hệ sinh thái tự nhiên. Các hệ sinh thái tự nhiên mang tính thiết
                yếu đối với con người, cũng như tính đa dạng sinh học và hoạt động kinh doanh của chính chúng tôi. Nỗ
                lực của P&G bắt đầu từ việc đảm bảo tìm nguồn cung ứng có trách nhiệm đối với các mặt hàng chính như bột
                gỗ, dầu cọ và bao bì giấy.
                <br/>
                Chúng tôi cũng hướng mục tiêu ra xa hơn chuỗi cung ứng trực tiếp của mình để có thể bảo vệ, cải thiện và
                phục hồi hệ sinh thái ở nhiều nơi hơn, tại những địa điểm quan trọng nhất. Chúng tôi đang hợp tác và đầu
                tư vào các giải pháp từ tự nhiên để tác động tích cực đến hơn 1,5 triệu mẫu đất, cân bằng lượng khí thải
                carbon còn sót lại từ các hoạt động sản xuất trong thập kỷ này, đồng thời mang lại kết quả tích cực cho
                con người và tính đa dạng sinh học.
                <br/>
                Để tìm hiểu thêm về tiến độ thực hiện các mục tiêu của chúng tôi, <a className={"text-primary"}
                                                                                     href={"https://www.pginvestor.com/esg/environmental/forestry/default.aspx"}><u>hãy
                nhấp vào đây</u></a>

            </>,
            img: "https://images.ctfassets.net/ywowj8d94i8y/3GpYBxT1oZr7L2SrovaimT/f0df98550545f89f435e73d2188eb783/FORESTRY.png?fm=webp",
        }
    const contentSection6 =
        {
            icon: "https://images.ctfassets.net/ywowj8d94i8y/2f0vWhmsLECcGjssBjXflZ/13b570fe49d0db6383bcd3cd2061b2d2/House-icon.png?fm=webp",
            // subTitle: "TẦM NHÌN HƯỚNG ĐẾN MỤC TIÊU ĐẠT LƯỢNG PHÁT THẢI KHÍ NHÀ KÍNH BẰNG 0 TRƯỚC NĂM 2040",
            title: "Tiết kiệm năng lượng tại nhà",

            content: "Kể từ năm 2015, hai thương hiệu Tide và Ariel của P&G đã giúp người tiêu dùng tăng cường sử dụng các chu trình giặt tiêu tốn ít năng lượng để tránh phát thải khoảng 15 triệu tấn carbon dioxide. Chúng tôi đã tận dụng sáng kiến đổi mới sáng tạo và phổ biến thông tin cho người tiêu dùng để giảm thiểu phần lớn lượng khí thải carbon – năng lượng cần để đun nóng nước trong quá trình sử dụng sản phẩm.\n" +
                "\n",
            img: ["https://images.ctfassets.net/ywowj8d94i8y/2U0q4vv3yTYvJckz8SbDJp/81d1c3bfe42fd290487e09fad92f0b5b/Ariel_turn_to_30.png?fm=webp", "https://images.ctfassets.net/ywowj8d94i8y/1CiC8zvD7UZEdLYW6gR90n/341fe8eff73aebfd85755d5b6e07f850/Tide_Cold_Water__1_.png?fm=webp"]
        }
    const contentSection7 = {
        title: " Hoạt động của chúng tôi không dừng lại ở đó\n",
        content: <>
            Để biết thêm thông tin, hãy truy cập <a className={"text-primary"}
                                                    href={"https://www.pginvestor.com/esg/esg-overview/default.aspx"}><u>Cổng
            thông tin nhà đầu tư ESG</u></a>, tại đây bạn có thể tìm hiểu thêm về các
            mục tiêu, nỗ lực và tiến bộ của P&G trong quá trình thực hiện các mục tiêu về nước, chất thải, khí hậu, lâm
            nghiệp, bình đẳng và hòa nhập và quản trị, cùng những mục tiêu khác. Để biết thông tin cụ thể về các chương
            trình và hoạt động khác nhau liên quan đến cách thức chúng tôi đang giúp đỡ để làm cho ngôi nhà của chúng ta
            trở nên đẹp hơn trong các lĩnh vực lâm nghiệp, bao bì nhựa, nước và khí hậu, hãy xem phần <a
            className={"text-primary"} href={"https://us.pg.com/mapping-our-impact/"}><u>Lập bản đồ về tác
            động của chúng tôi </u></a>trên trang web công khai của chúng tôi.
        </>
    }
    const contentSection8 = {
        title: "Lịch sử phát triển bền vững của P&G.",
        content: "Để xem toàn bộ thông tin về những nỗ lực phát triển bền vững có lợi cho môi trường của chúng tôi từ trước đến nay, hãy xem dòng thời gian của chúng tôi.",
        img: " https://images.ctfassets.net/ywowj8d94i8y/2wS1sEl3T41yHLRehuIPvS/7885cee181b8e47297ed2133780f9250/1880s_Bartlett_Store.jpg__1_1__1_.png?fm=webp",
        link: "https://us.pg.com/pg-history/"

    }

    return (
        <div>
            <div
                className="relative clipPath-Header  bg-center justify-center flex items-center  h-96 mb-56 w-full">
                <img className={"absolute -top-14 left-0 w-full"}
                     src={"https://images.ctfassets.net/ywowj8d94i8y/6iAbxeqSnUkSXFFk1pyR2/5465754c310607b9e876f58a36db5aee/1.10.23_Sustainability_Page_Key_Image_-_Mom_and_baby__1_.jpg?fm=webp"}/>
            </div>
            <section id={"section1"} className={"flex p-32 pt-0 flex-col items-center justify-center"}>
                <h1 className={"font-bold text-6xl text-primary mb-10"}>{contentSection1.title}<span
                    className={"text-yellow-400"}>.</span></h1>
                <p className={"mb-20 w-10/12 text-center"}>{contentSection1.content}</p>
                <img src={contentSection1.img}/>
                <p className={"mb-5 w-6/12 text-center"}>{contentSection1.subContent}</p>
                <p className={"mb-5 w-6/12 text-center"}><i>Nhấp chuột để chuyển đến từng phần.</i></p>
                <div className={"flex flex-row  justify-center gap-10 w-9/12"}>
                    {
                        contentSection1.iconSection.map((item, index) => {
                            return (
                                <div className={"group flex flex-col items-center text-primary"}>
                                    <img className={"h-12"} src={item.icon}/>
                                    <h3>{item.title}</h3>
                                    <AiOutlineDown className={"group-hover:translate-y-1.5 transition duration-300"}/>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section id={"section2"} className={`flex flex-col justify-center p-32 pb-0 pt-16 items-center }`}>
                <div className={`flex  justify-center items-center gap-10 mb-20`}>
                    <div className={"w-1/2 text-center px-10 flex flex-col items-center"}>
                        <img className={"w-1/6 mb-3"} src={contentSection2.icon}/>
                        <h1 className={"text-primary font-bold text-lg mb-3"}>{contentSection2.title}</h1>
                        <h3 className={"font-bold text-black mb-3"}>{contentSection2.subTitle}</h3>
                        <p className={"mb-5"}>{contentSection2.content}</p>
                    </div>
                    <div className={"group  w-1/2 flex justify-center rounded-full"}>
                        <img className={" w-full rounded-full"}
                             src={contentSection2.img}/>
                    </div>
                </div>
            </section>
            <div className={"flex flex-row p-5 items-center gap-7 justify-center"}>
                <ButtonHover className={"h-12 text-[14px] font-bold"}>MỤC TIÊU ĐẠT LƯỢNG PHÁT THẢI KHÍ NHÀ KÍNH BẰNG 0
                    TRƯỚC NĂM 2040<ArrowUpOutlined rotate={45}/> </ButtonHover>
                <ButtonHover className={"h-12 text-[14px] font-bold"}>KẾ HOẠCH HÀNH ĐỘNG CHUYỂN ĐỔI KHÍ
                    HẬU</ButtonHover>
                <ButtonHover className={"h-12 text-[14px] font-bold"}>TIẾN TRÌNH THỰC HIỆN SO VỚI MỤC TIÊU VỀ KHÍ
                    HẬU</ButtonHover>
            </div>
            <section id={"section3"} className={`flex flex-col justify-center p-32 pb-0 pt-16 items-center }`}>
                <div className={`flex  justify-center items-center gap-10 mb-20 `}>
                    <div className={"group  w-1/2 flex flex-col justify-center rounded-full items-center "}>
                        <img className={" w-full rounded-full"}
                             src={contentSection3.img}/>
                    </div>
                    <div className={"w-1/2 text-center px-10 flex flex-col items-center"}>
                        <img className={"w-1/6 mb-3"} src={contentSection3.icon}/>
                        <h1 className={"text-primary font-bold text-lg mb-3"}>{contentSection3.title}</h1>
                        <h3 className={"font-bold text-black mb-3"}>{contentSection3.subTitle}</h3>
                        <p className={"mb-5"}>{contentSection3.content}</p>
                        <a href={"https://vn.pg.com/cong-bo-thong-tin-epr/"}><ButtonHover className={"h-12"}>Công bố
                            Thông tin EPR</ButtonHover></a>
                    </div>
                </div>
            </section>
            <section id={"section4"} className={`flex flex-col justify-center p-32 pb-0 pt-16 items-center }`}>
                <div className={`flex  justify-center items-center gap-10 mb-20 `}>
                    <div className={"w-1/2 text-center px-10 flex flex-col items-center"}>
                        <img className={"w-1/6 mb-3"} src={contentSection4.icon}/>
                        <h1 className={"text-primary font-bold text-lg mb-3"}>{contentSection4.title}</h1>
                        <p className={"mb-5"}>{contentSection4.content}</p>
                    </div>
                    <div className={"group  w-1/2 flex flex-col justify-center rounded-full items-center "}>
                        <img className={" w-full rounded-full"}
                             src={contentSection4.img}/>
                    </div>
                </div>
            </section>
            <div className={"flex flex-row p-5 items-center gap-3 justify-center"}>
                <ButtonHover className={"h-12 text-[14px] font-bold mr-3"}>TÌM HIỂU SÂU HƠN VỀ CÁC MỤC TIÊU MỚI CỦA
                    CHÚNG TÔI<ArrowUpOutlined rotate={45}/> </ButtonHover>
                <ButtonHover className={"h-12 text-[14px] font-bold mr-3"}>CHIẾN LƯỢC XÂY DỰNG TƯƠNG LAI VỚI NGUỒN NƯỚC
                    DỒI DÀO <ArrowUpOutlined rotate={45}/>
                </ButtonHover>
                <ButtonHover className={"h-12 text-[14px] font-bold mr-3"}>TIẾN ĐỘ BẢO TỒN NGUỒN NƯỚC<ArrowUpOutlined
                    rotate={45}/>
                </ButtonHover>
            </div>
            <section id={"section5"} className={`flex flex-col justify-center p-32 pb-0 pt-16 items-center }`}>
                <div className={`flex  justify-center items-center gap-10 mb-20 `}>
                    <div className={"group  w-1/2 flex flex-col justify-center rounded-full items-center "}>
                        <img className={" w-full rounded-full"}
                             src={contentSection5.img}/>
                    </div>
                    <div className={"w-1/2 text-center px-10 flex flex-col items-center"}>
                        <img className={"w-1/6 mb-3"} src={contentSection5.icon}/>
                        <h1 className={"text-primary font-bold text-lg mb-3"}>{contentSection5.title}</h1>
                        <p className={"mb-5"}>{contentSection5.content}</p>
                    </div>
                </div>
            </section>
            <section id={"section6"} className={`flex flex-col justify-center p-32 pb-0 pt-16 items-center }`}>
                <img className={"w-1/6 mb-3"} src={contentSection6.icon}/>
                <h1 className={"text-primary font-bold text-lg mb-3"}>{contentSection6.title}</h1>
                <p className={"w-8/12 mb-5"}>{contentSection6.content}</p>
                <div className={"flex w-1/6 items-center justify-center"}>
                    {
                        contentSection6.img.map((item, index) => {
                            return (
                                <img className={"w-1/2"} src={item}/>
                            )
                        })
                    }
                </div>
            </section>
            <section id={"section7"} className={`flex flex-col justify-center p-32 pb-0 pt-16 items-center }`}>
                <h1 className={"text-primary font-bold text-lg mb-3"}>{contentSection7.title}</h1>
                <p className={"w-8/12 mb-5"}>{contentSection7.content}</p>
            </section>
            <section id={"section8"} className={`flex flex-col justify-center p-32 pb-0 items-center }`}>
                <div className={`flex justify-center items-center gap-10 mb-20 `}>
                    <div className={"w-1/2 text-center px-10 flex flex-col items-center"}>
                        <h1 className={"text-primary font-bold text-lg mb-3"}>{contentSection8.title}</h1>
                        <p className={"mb-5"}>{contentSection8.content}</p>
                        <a href={contentSection8.link}> <ButtonHover
                            className={"h-12 text-[14px] font-bold"}>TÌM HIỂU THÊM<ArrowUpOutlined rotate={45}/>
                        </ButtonHover></a>
                    </div>
                    <div className={"group  w-1/2 flex flex-col justify-center rounded-full items-center "}>
                        <img className={" w-full rounded-full"}
                             src={contentSection8.img}/>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default EnduringPage;