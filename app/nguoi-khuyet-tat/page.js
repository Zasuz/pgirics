"use client"
import {AiOutlineDown} from "react-icons/ai";
import React, {useState} from "react";
import LayoutComponent from "@/components/nguoi-khuyet-tat/LayoutComponent";

const disabilityPage = () => {
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
    const contentSection1 = {
        title: "NGƯỜI KHUYẾT TẬT",
        content: "Chúng tôi cam kết tạo ra một thế giới hòa nhập hơn dành cho mọi người cả trong và ngoài công ty, trong đó bao gồm những người mang khiếm khuyết lâu dài về thể chất lẫn tâm thần. Chúng tôi nhận thức được trách nhiệm của mình trong việc thúc đẩy sự thay đổi dành cho nhân viên, với các thương hiệu của công ty, thông qua đối tác và trong các cộng đồng nơi chúng tôi hoạt động. Chúng tôi nhận ra cơ hội phát triển kinh doanh khi giúp mọi người dễ tiếp cận với công ty và các sản phẩm của chúng tôi. Chúng tôi đang đạt được tiến bộ mỗi ngày và hiểu rằng còn nhiều việc phải làm để công ty, thương hiệu và dịch vụ của mình phù hợp hơn nữa với người khuyết tật.\n" +
            "\n",
        subTitle: "Nhấp vào từng mục để tìm hiểu thêm.\n",

        iconSection: [
            {
                icon: "https://images.ctfassets.net/ywowj8d94i8y/707DFi6gMgwY8HLXDSbl9T/0af25a3d8345980c82db18b4613a43a6/Putting_people_first.png?fm=webp",
                title: "Nhân viên"
            },
            {
                icon: "https://images.ctfassets.net/ywowj8d94i8y/74bV5UefRBTmr1HzVTimjz/7b3a658330b2743f9d482fcc111fcdfa/Innovative_products.png?fm=webp",
                title: "Thương hiệu",
            },
            {
                icon: "https://images.ctfassets.net/ywowj8d94i8y/OrZGP3MnWbf5ALSg1LxXu/63907bd86ce8829c5329cb9073337d7f/society-icon.svg",
                title: <>Đối tác & <br/>cộng đồng</>,
            },
        ]
    }
    const contentSection2 = {
        title: " Nhân viên\n",
        content: "Chúng tôi cam kết tôn trọng tính cá nhân và những đóng góp đặc biệt của đội ngũ nhân sự, cũng như đảm bảo rằng mỗi nhân viên đều có thể hoàn toàn là chính mình tại nơi làm việc. Chúng tôi nỗ lực tạo nên một môi trường làm việc hòa nhập cho toàn bộ nhân viên P&G thông qua các chương trình tuyển dụng và quản lý nhằm mở rộng đội ngũ nhân sự bằng cách tuyển dụng đa dạng và đảm bảo mọi nhân viên đều được sắp xếp phù hợp.\n" +
            "\n",
        items: [
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/Yw4ogZEx0Ikem12FrdRNW/f2df83a10b30652ef1c6966143d7821e/ScottVannice_circlecrop__1_.jpg__1_.png?fm=webp",
                title: "Hòa nhập từ Ngày Đầu Tiên\n",
                content: "Scott Vannice, người dẫn dắt cộng đồng khiếm thính tại P&G, cũng đã hỗ trợ việc hợp tác với Đại học Gallaudet và Viện Công nghệ Rochester để tạo ra nguồn cung ứng nhân lực bao gồm cả các ứng viên khiếm thính. Qua chương trình này, đã có 2 nhân viên khiếm thính được tuyển dụng và 4 thực tập sinh khiếm thính tham gia Kỳ thực tập mùa hè 2020. Tìm hiểu thêm về #SigningEcosystem.\n",
                link: "https://us.pg.com/blogs/inclusive-from-day-one/",
                youtubeEmbed: "https://www.youtube-nocookie.com/embed/b9gGq7nsJJY",
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/1LCBEjkYBpVmFhLpk5ObGg/4bf6fbe4c71e61b9fa30640e81a015a1/4.JPG__1_.png?fm=webp",
                title: "Cảm giác được hòa nhập",
                content: <>
                    Những nhân viên có trải nghiệm cá nhân về đa dạng thần kinh đang giúp chúng tôi tuyển dụng những
                    người có các tình trạng đa dạng thần kinh như tự kỷ, rối loạn tăng động giảm chú ý (ADHD), chứng khó
                    đọc, rối loạn phối hợp vận động. Chúng tôi đã triển khai các chương trình tại văn phòng P&G ở Vương
                    quốc Anh, Boston, Costa Rica và Cincinnati để tìm hiểu cách thức Công ty có thể tuyển dụng nhóm nhân
                    sự đầy nghị lực này cũng như khai thác kỹ năng giải quyết vấn đề độc đáo của ứng viên.
                    <br/>
                    Tìm hiểu câu chuyện cá nhân của nhân viên P&G Danny Lakes về đa dạng thần kinh và các biện pháp hòa
                    nhập tại nơi làm việc đã tác động đến cuộc đời anh ấy như thế nào.</>,
                link: "https://us.pg.com/blogs/how-it-feels-to-be-included/",
                youtubeEmbed: "",
            },
        ]
    }
    const contentSection4 = {
        title: " Cộng đồng và Đối tác\n",
        content: "Chúng tôi xây dựng những mối quan hệ hợp tác để mở rộng cơ hội cũng như tạo khả năng tiếp cận và hòa nhập, giúp có thêm nhiều người có thể phát triển trong những cộng đồng mà chúng tôi đang sinh sống và làm việc tại đó.\n" +
            "\n" +
            "Để thể hiện cam kết không ngừng nghỉ của mình trong việc giúp người khuyết tật hòa nhập, chúng tôi đã tham gia The Valuable 500, một phong trào toàn cầu nhằm đưa vấn đề khuyết tật vào chương trình nghị sự của các nhà lãnh đạo doanh nghiệp. Là thành viên của The Valuable 500, chúng tôi sẽ tiếp tục:\n" +
            "\n" +
            "đưa ra các chính sách và phương thức về cơ hội tiếp cận/điều chỉnh thích nghi tại nơi làm việc trên toàn cầu để đáp ứng nhu cầu của nhân viên với những khả năng đa dạng;\n" +
            "mở rộng đội ngũ nhân sự bằng cách tuyển dụng, thuê và giữ chân những người có các khả năng đa dạng;\n" +
            "hợp tác với các nhà lãnh đạo doanh nghiệp và tập đoàn để chủ động tạo ra các sản phẩm và dịch vụ dễ tiếp cận nhằm đáp ứng nhu cầu của người tiêu dùng khuyết tật.",
        items: [
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/4OQbCv8g8hNQkmDOcDpBYQ/1061329343073ddfb4a922df8e07814f/Blind_user_-_Home_Screen_3.jpg.png?fm=webp",
                title: "Be My Eyes",
                content: "Kết hợp với các đối tác từ thiện và phát sóng trong sự kiện cứu trợ người chịu ảnh hưởng của dịch COVID-19 mang tên Một thế giới: Cùng ở nhà (One World: Together At Home) của Global Citizen và Saving Our Selves của BET, chúng tôi hợp tác cùng Be My Eyes, một nền tảng đặc biệt giúp kết nối các tình nguyện viên với cộng đồng người khiếm thị và suy giảm thị lực để hỗ trợ họ trong cuộc sống hàng ngày. Các nhân viên của P&G đã tận tâm mô tả âm thanh trực tiếp cho các cá nhân. Nhờ vậy, người khiếm thị và suy giảm thị lực có thể theo dõi và thưởng thức những chương trình giải trí trên ứng dụng Be My Eyes. Các tình nguyện viên của P&G đã trực điện thoại và sẵn sàng mô tả mọi thứ người dùng muốn biết về sự kiện. Họ đọc thứ tự biểu diễn, hỗ trợ người dùng truy cập chương trình phát sóng và trả lời câu hỏi về những điều đang diễn ra trong chương trình.\n" +
                    "\n ",
                link: "https://us.pg.com/blogs/be-my-eyes/",
                youtubeEmbed: "",
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/vdG52gB6gOKz0qI4jrfz1/1a8904b9513e70477cdf6b0c61e72e0b/P_G_Logo_RGB.svg",
                title: "Nhận ra tầm nhìn để vươn tay giúp đỡ\n",
                content: "Cam kết của chúng tôi đối với cộng đồng người khiếm thị và suy giảm thị lực ở Cincinnati đã kéo dài hơn 117 năm qua. Chúng tôi hợp tác với Trung tâm Clovernook cùng các đồng nghiệp và bạn bè tại BLV để vận chuyển sản phẩm tới các cộng đồng gặp khó khăn trong dịch COVID-19.\n" +
                    "\n",
                link: "https://us.pg.com/blogs/world-sight-day-2020/",
                youtubeEmbed: "https://www.youtube-nocookie.com/embed/Yf28efjZWj0",
            },
        ]
    }
    const contentSection3 = {
        title: " Thương hiệu",
        content: "Chúng tôi để những người tiêu dùng và nhân viên khuyết tật tham gia thiết kế sản phẩm, bao bì, quảng cáo và cơ sở hạ tầng để tạo ra một thế giới dễ tiếp cận hơn cùng những trải nghiệm tuyệt vời hơn cho tất cả. Khi các sản phẩm, bao bì, quảng cáo và môi trường góp phần làm cuộc sống dễ tiếp cận hơn, sẽ có ít người cảm thấy bản thân khiếm khuyết hơn.\n" +
            "\n",
        items: [
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/7z9O0YnFs8bhZCtf1rSZs9/1a261faae3b15c2fed97c175949d4745/image__1_.png?fm=webp",
                title: "Herbal Essences góp phần giúp cuộc sống của người suy giảm hoặc mất thị lực dễ dàng hơn với #WorldSightDay\n",
                content: "Herbal Essences là thương hiệu chăm sóc tóc lớn đầu tiên tại Bắc Mỹ sử dụng các ký hiệu xúc giác để hỗ trợ người suy giảm thị lực phân biệt dầu gội và dầu xả.\n" +
                    "\n",
                link: "",
                youtubeEmbed: "https://www.youtube-nocookie.com/embed/6Vuta8iiQFE",
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/4O1QqA6amsULFLlcMdrMd6/34d549a3989bca54f174c6626c567aaf/Red_jar_2.jpg__1_.png?fm=webp",
                title: "Làm mới nắp đậy cho sản phẩm Olay\n",
                content: "Sau khi nghe khách hàng phản hồi rằng nắp lọ Olay khó mở, đội ngũ phụ trách Olay đã xây dựng một nhóm đa dạng gồm các chuyên gia, nhà vận hành và khách hàng bị suy giảm thị lực hoặc suy giảm kỹ năng vận động tinh, trong đó có Sam Latif, Trưởng bộ phận Hỗ trợ tiếp cận của Công ty. Nhóm nhận ra rằng vấn đề không nằm ở nắp lọ, mà ở phần đĩa đậy. Họ đã khảo sát các thiết kế và làm sản phẩm mẫu, cũng như đánh giá các lựa chọn nhằm tìm hiểu và giải quyết nhiều vấn đề tồn tại nhất có thể. Trong quá trình đánh giá thiết kế, nhóm sử dụng công cụ tính tỷ lệ loại trừ của Cambridge để đo lường các kỹ năng thị giác, khéo léo và nhận thức cần có khi sử dụng bao bì của chúng tôi. Đĩa đậy mới được thiết kế mang tính trực giác cao hơn và dễ mở hơn để phù hợp hơn với những người tiêu dùng có mức độ khéo léo thấp và/hoặc thị lực kém.\n" +
                    "\n",
                link: "",
                youtubeEmbed: "",
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/399KxzM8MhDbfAQjRDUElC/a548c607bf2a76e2b0114880d761bdf0/Olay-Sarah-Michele-Gellar-1140x570.jpg__1_.png?fm=webp",
                title: "Xây dựng thế giới hòa nhập hơn cho người khuyết tật\n",
                content: <>
                    Chúng tôi đang nỗ lực đưa thông tin mô tả bằng âm thanh vào các quảng cáo thương mại. Đây chỉ là một
                    cách thúc đẩy cách tiếp cận giúp tăng tính hòa nhập. Chúng tôi đã đưa thông tin mô tả bằng âm thanh
                    vào phần lớn quảng cáo của mình ở Vương quốc Anh, Hoa Kỳ và Tây Ban Nha. Nhờ vậy, khoảng 30 triệu
                    người khiếm thị hoặc suy giảm thị lực có thể nghe mô tả về các thao tác trực quan. Hãy xem ví dụ
                    một <a className={"text-primary"}
                           href={"https://www.youtube.com/watch?v=j2EytK0cTsA&feature=youtu.be&ab_channel=CC"}><u>quảng
                    cáo Olay không có phần mô tả bằng âm thanh</u></a> dành cho người tiêu dùng bị suy giảm thị lực
                    và <a className={"text-primary"}
                          href={"https://www.youtube.com/watch?v=jfcn79gUJd4&feature=youtu.be&ab_channel=CC"}><u>một
                    quảng cáo Olay có phần mô tả bằng âm thanh..</u></a>
                </>,
                link: "",
                youtubeEmbed: "https://www.youtube-nocookie.com/embed/jfcn79gUJd4",
            },
        ]
    }
    return (
        <div>
            <div
                className="relative clipPath-Header  bg-center justify-center flex items-center  h-96 mb-56 w-full">
                <img className={"absolute -top-12 left-0 w-full"}
                     src={"https://images.ctfassets.net/ywowj8d94i8y/2AOBXUvoUdxJBytRB0ENwk/056490aa09417a1e1d8bb80bb3cefc95/People_with_Disabilities_-_Hero_Banner_crop.jpg?fm=webp"}/>
            </div>
            <section id={"section1"} className={"flex p-32 pt-0 flex-col items-center justify-center"}>
                <h1 className={"font-bold text-6xl text-primary mb-10"}>{contentSection1.title}<span
                    className={"text-yellow-400"}>.</span></h1>
                <p className={"mb-20 w-10/12 text-center"}>{contentSection1.content}</p>
                <p className={"mb-5 w-6/12 text-center"}>{contentSection1.subTitle}</p>
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
            <LayoutComponent handleShowIframe={handleShowIframe} className={"bg-white"} items={contentSection2}/>
            <LayoutComponent handleShowIframe={handleShowIframe} className={"bg-[#F6F6F6]"} items={contentSection3}/>
            <LayoutComponent handleShowIframe={handleShowIframe} items={contentSection4}/>

            {/*<section id={"section2"} className={" flex flex-col justify-center p-32 pt-16 items-center bg-[#F6F6F6]"}>*/}
            {/*    <h1 className={"text-primary text-lg font-medium mb-7"}>{contentSection2.title}</h1>*/}
            {/*    <p className={"mb-20 w-8/12"}>{contentSection2.content}</p>*/}
            {/*    {*/}
            {/*        contentSection2.items.map((item, index) => {*/}
            {/*            const flex = index % 2 === 0 ? "flex-row" : "flex-row-reverse"*/}
            {/*            let afterDisplay ="";*/}
            {/*            let overplayDisplay ="";*/}
            {/*            if( item.youtubeEmbed === "" ){*/}

            {/*                 overplayDisplay = "hidden"*/}
            {/*                 afterDisplay = "after:hidden"*/}
            {/*                console.log("item.youtubeEmbed")*/}
            {/*            }*/}
            {/*            return (*/}
            {/*                <div key={"index"} className={`flex ${flex} justify-center items-center gap-10 mb-20`}>*/}
            {/*                    <div*/}
            {/*                        className={"group relative w-1/2 flex justify-center overflow-hidden rounded-full"}>*/}

            {/*                        <div className={` relative w-10/12 rounded-full overflow-hidden after:absolute ${afterDisplay} after:bg-[#003da5] after:opacity-30 after:hover:opacity-0 after:transition-opacity after:duration-500  after:top-0 after:left-0 after:w-full after:h-full`}>*/}
            {/*                            <img className={"group-hover:scale-[1.2] w-full rounded-full transition duration-300"}*/}
            {/*                                 src={item.img}/>*/}
            {/*                        </div>*/}

            {/*                        <div className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ${overplayDisplay}`}>*/}
            {/*                            <button*/}
            {/*                                className="bg-primary group-hover:text-primary group-hover:bg-opacity-50 group-hover:bg-white border-2 border-primary text-white p-5 rounded-full flex items-center justify-center">*/}
            {/*                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24"*/}
            {/*                                     stroke="currentColor">*/}
            {/*                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
            {/*                                          d="M5 3l14 9-14 9V3z"/>*/}
            {/*                                </svg>*/}
            {/*                            </button>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className={"w-1/2 text-center px-10 flex flex-col items-center"}>*/}
            {/*                        <h1 className={"text-primary font-bold text-lg mb-3"}>{item.title}</h1>*/}
            {/*                        <p className={"mb-5"}>{item.content}</p>*/}
            {/*                        <ButtonHover className={"h-12 px-5 w-1/3 bg-transparent"}>Đọc Thêm <ArrowUpOutlined*/}
            {/*                            className={"ml-3"} rotate={45}/></ButtonHover>*/}
            {/*                    </div>*/}

            {/*                </div>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</section>*/}
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
export default disabilityPage;