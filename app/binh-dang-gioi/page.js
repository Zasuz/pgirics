"use client"
import React, {useState} from "react";
import {AiOutlineDown} from "react-icons/ai";
import EqualitySwiper from "@/components/binh-dang-gioi/EqualitySwiper";
import ButtonHover from "@/components/ReuseComponent/ButtonHover";

const GenderEqualityPage = () => {
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
        content: <>Chúng tôi mong muốn xây dựng một thế giới tốt đẹp hơn cho mọi người, dù họ có thuộc P&G hay không.
            Một thế giới không còn định kiến giới tính, nơi mọi cá nhân đều có tiếng nói và được nhìn nhận một cách công
            bằng. Một thế giới nơi mọi người đều quan niệm tất cả bình đẳng. Khi chúng ta làm được điều này, kinh tế sẽ
            phát triển, các cộng đồng sẽ lớn mạnh hơn, doanh nghiệp tăng trưởng và thế giới sẽ là trở nên tốt đẹp hơn
            cho tất cả mọi người.
            <br/>
            Tại P&G, chúng tôi tập trung vào ba lĩnh vực mà mình có thể tạo ra ảnh hưởng lớn nhất. Thứ nhất, chúng tôi
            tận dụng tiếng nói mạnh mẽ của mình trong lĩnh vực quảng cáo và truyền thông để giải quyết vấn đề thiên kiến
            giới. Thông qua những chương trình của doanh nghiệp và các thương hiệu cùng với hoạt động vận động chính
            sách, chúng tôi cũng gỡ bỏ rào cản ngăn các bé gái tiếp cận giáo dục và phụ nữ tiếp cận các cơ hội kinh tế.
            Đồng thời, chúng tôi tạo ra một môi trường hòa nhập và bình đẳng giới tính ngay trong P&G, cũng như vận động
            bình đẳng giới và bình đẳng nhiều yếu tố tại chỗ làm việc ở mọi nơi. Chỉ có như vậy, mọi người mới có thể
            đóng góp toàn bộ khả năng của mình. Trong mỗi lĩnh vực này, chúng tôi đều hợp tác với các tổ chức hoạt động
            mạnh mẽ và có chung cam kết với P&G để cùng kết hợp nguồn lực, con người, kỹ năng và tạo ra một tác động lớn
            lao hơn.</>,
        subTitle: "Chúng tôi tập trung vào ba lĩnh vực mà chúng tôi có thể tạo ra sự khác biệt đặc trưng. Nhấn vào đây để đến từng phần và tìm hiểu thêm.",
        iconSection: [{
            icon: "https://images.ctfassets.net/ywowj8d94i8y/6edV5MWfy8sOKEIGQE82YO/11c064fbdfbb20a8c8cd721b4322211b/advertising-icon.svg",
            title: <>Quảng cáo & <br/>truyền thông</>,
        },
            {
                icon: "https://images.ctfassets.net/ywowj8d94i8y/5k4sWM6HaEIemQGUASaYS2/80a1408f1de035b04a37bfdc1e96c297/education-icon.svg",
                title: <>Cơ hội giáo dục & <br/> kinh tế</>,
            },
            {
                icon: "https://images.ctfassets.net/ywowj8d94i8y/1R1xb45fNuykuWYEooOiQw/9f362ba908877376526da40ea3c1c840/inclusive-icon.svg",
                title: <>Môi trường hòa<br/> nhập bên trong <br/>P&G</>,
            },
        ]

    }
    const contentSection2 = {
        title: "Quảng cáo và truyền thông",
        content: "Nghiên cứu #SeeHer của Hiệp hội Quốc gia dành cho Nhà quảng cáo (Association of National Advertisers) cho thấy 40% phụ nữ cảm thấy họ bị mô tả không chính xác qua các dạng định kiến, vật thể hóa hay đơn giản hóa tính cách. Là một trong những nhà quảng cáo lớn nhất trên thế giới, chúng tôi tận dụng tiếng nói mạnh mẽ của mình để góp phần phá vỡ định kiến và thúc đẩy thay đổi.\n" +
            "\n",
        items: [{
            subTitle: "Ariel #Chiasẻgánhnặng",
            img: "https://images.ctfassets.net/ywowj8d94i8y/6N7qmSgVEIYaCkKuaCyYyo/c309c59dd866c3c7df3eee649e1eaec9/share-the-load.jpg?fm=webp",
            content: "Ở Ấn Độ, 70 % trẻ em tin rằng một người phụ nữ có trách nhiệm về việc giặt giũ, một niềm tin bắt nguồn từ văn hóa của họ. Chất tẩy rửa hàng đầu của chúng tôi đã bắt đầu thay đổi xu hướng giới tính đó và khiến hơn 2 triệu người đàn ông ký đơn thỉnh nguyện để giúp đỡ việc nhà.",
            link: "https://www.youtube-nocookie.com/embed/wJukf4ifuKs"
        }, {
            subTitle: "Fairy #vìcôngbằng",
            img: "https://images.ctfassets.net/ywowj8d94i8y/71bKJgNJUAOs0WgcyeCcwg/eefee7268acfd3dcc7d03fcbf9d924f8/make-it-fair.jpg?fm=webp",
            content: "Ở Anh Quốc, 70 % phụ nữ vẫn làm tất cả việc nhà. Vì vậy, Fairy đã quyết định loại bỏ chữ \"y\" khỏi logo biểu tượng của họ, để nhắc nhở mọi thành viên trong gia đình thực hiện nghĩa vụ của mình và cam kết #vìcôngbằng..",
            link: "https://www.youtube-nocookie.com/embed/DQSqAjoZlVQ"

        },]

    }
    const contentSection3 = {
        title: "Cơ hội giáo dục & kinh tế",
        content: "Mọi cô gái đều xứng đáng được tiếp cận với giáo dục. Và là một người phụ nữ, cô ấy xứng đáng được sống với tiềm năng tối đa của mình. Bình đẳng kinh tế chỉ có thể làm cho thế giới của chúng ta mạnh mẽ hơn. Thông qua các chương trình tác động đến công ty và thương hiệu của chúng tôi, chúng tôi giúp thực hiện bình đẳng giới.\n" +
            "\n",
        items: [
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/4SAEn6XjQiTR4YjKpa4dPc/45850c2aba0eaae22581e5fb66751a26/Getting_More_Women___Girls_into_STEM.png?fm=webp",
                content: <>
                    P&G luôn dành sự quan tâm đặc biệt cho ngành STEM vì chúng tôi cần đến đội ngũ nhân lực STEM lành
                    nghề, như kỹ sư, nhà khoa học, chuyên gia công nghệ thông tin, nhà cải cách, để thúc đẩy quá trình
                    đổi mới nhờ vào công nghệ, từ đó tăng thêm sức mạnh cho các thương hiệu của mình và phát triển việc
                    kinh doanh.
                    <br/>
                    Chúng tôi đang nỗ lực để mọi bé gái, dù có xuất thân thế nào, đều được trải nghiệm STEM đúng nghĩa.
                    <br/>
                    <a className={"text-primary"} href={"https://us.pg.com/blogs/diversity-in-stem/"}><u>Đọc
                        Thêm</u></a>
                </>,
                title: "Giới thiệu thêm nhiều phụ nữ và bé gái đến với ngành STEM\n" +
                    "\n",
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/6dBQeeVoFaySCkWaSUaqsQ/e94bf81a3185aa82a3bbae4fbdbbaaec/pg-female-education.jpg?fm=webp",
                content: "Ở một số quốc gia, một kỳ kinh nguyệt có thể khiến các cô gái phải nghỉ học hoặc bỏ học hoàn toàn. Năm 2006, Always bắt đầu cung cấp cho các cô gái châu Phi sự giáo dục về tuổi dậy thì và băng vệ sinh. Kể từ đó, 78 % trường học cho thấy sự cải thiện trong tỷ lệ đi học.",
                title: "Always Cho các cô gái đến trường\n" +
                    "\n",
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/1yvkcCHrZOmy0QGMUaguys/2d5782a5040737f8ecd5b99f46737da9/photo-gender-equality-education-access.jpg?fm=webp",
                content: "P&G Ấn Độ đã cung cấp cho các cô gái quyền tiếp cận giáo dục thông qua chương trình Shiksha của mình, tăng khả năng đọc và viết từ 20 % lên 70 %.",
                title: "Cơ hội giáo dục cho trẻ em kém may mắn\n" +
                    "\n",
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/2Iis9wfnW8IWocwKgIqEC6/ec07b4be715b680cf6200c0a61a36fdf/pg-female-work-equality.jpg?fm=webp",
                content: "Hợp tác với WEConnect International, các nhà lãnh đạo của chúng tôi kết nối với các nữ doanh nhân địa phương trên toàn thế giới — chia sẻ chiến thuật của họ để phát triển các chiến lược và kỹ năng kinh doanh.",
                title: "Kết nối các nhà lãnh đạo nữ với các doanh nhân địa phương\n" +
                    "\n",
            },
        ]
    }

    const contentSection4 = {
        title: "Môi trường hòa nhập bên trong P&G",
        content: "Chúng tôi cam kết tạo ra một nền văn hóa nơi mọi người đều được đối xử bình đẳng và có thể đóng góp tối đa. Đó là lý do tại sao đạt được tỷ lệ cân bằng giới tính 50/50 trong tất cả các bộ phận của công ty chúng tôi là ưu tiên hàng đầu.\n" +
            "\n",
        items: [
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/6NipTkptWIt0lXuIfXJ4aw/0c20b75d03fa336a57b11d4b196ed2f5/Busting_Workplace_Myths.jpg?fm=webp",
                content: <>
                    Kể từ Diễn đàn kinh tế thế giới năm 2018, triển lãm
                    <a className={"text-primary"} href={"https://us.pg.com/blogs/diversity-in-stem/"}>
                        <u>“quan niệm sai lầm và thực tế”</u></a>
                    của P&G đã làm
                    sáng tỏ những quan niệm sai lầm ngăn cản phụ nữ được đại diện và thăng tiến công bằng ở nơi làm
                    việc.

                </>,
                title: "Phá bỏ những quan niệm sai lầm ở nơi làm việc",

            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/6tUFPZgUHSqiAieGumKSY/a1b177247cbbc0d04a502a2df8622a85/pg-mother-with-child.jpg?fm=webp",
                content: "Trong năm 2017, chúng tôi đã mở rộng các phúc lợi của mình tại 26 quốc gia để bao gồm cả chế độ thai sản, nhận con nuôi và nghỉ sinh con — trong năm đầu đời của em bé.",
                title: "Phúc lợi chăm con bình đẳng\n" +
                    "\n",
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/1NCL8BrJNS0usS0mgUY8Q4/e1768e8e2dfaa3f2f8512ac0855609be/pg-female-working.jpg?fm=webp",
                content: "Là một đối tác sáng lập của LeanIn.org, chúng tôi tổ chức Chương trình \"Nương tựa lẫn nhau\" trên toàn thế giới. Cho đến nay, hơn 4.000 phụ nữ đã tham gia hỗ trợ đồng cấp để giải quyết các thách thức kinh doanh và nghề nghiệp.",
                title: "Phụ nữ ở nơi làm việc\n" +
                    "\n",
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/4uVPOXjP0cuOOYgmkkAAKO/b36b5920be8248e9eb94c0b3286e8c83/pg-gender-equality.jpg?fm=webp",
                content: "Chúng tôi hợp tác với Catalyst để cung cấp chương trình MARC™ (Đàn ông ủng hộ sự thay đổi thực sự), giúp gắn kết trái tim và tâm trí của nam giới với tư cách là đối tác toàn diện trong việc đạt được bình đẳng giới.",
                title: "Những nam giới ủng hộ",
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/3YwVuNLZRYYWUQqwusq6sa/097217aeb14543714be65e0ffe747b0d/pg-female-bussiness.jpg?fm=webp",
                content: "Trong một khu vực có nền văn hóa truyền thống do nam giới thống trị, nhà máy ở Bangkok của chúng tôi tự hào đã đạt được tỷ lệ 70 % phụ nữ trong đội ngũ lãnh đạo, 50 % trong số đó là các bà mẹ đang làm việc. Thành công này phần lớn là do phúc lợi nuôi con và văn hóa hòa nhập của chúng tôi.",
                title: "Phụ nữ lãnh đạo trong sản xuất\n" +
                    "\n",
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/2z6B6juc9iwl144rp50zHG/0444d532010725d8c205ca2cc8c3b699/Future_Female_Leaders.jpg?fm=webp",
                content: "Là một Tổ chức đối tác của Mạng lưới Nhà điều hành cấp cao thúc đẩy sự đa dạng (LEAD), chúng tôi phối hợp cùng các tập đoàn khác để chủ động thu hút, giữ chân và thúc đẩy phụ nữ phát triển trong ngành bán lẻ và hàng tiêu dùng ở châu Á thông qua hoạt động giáo dục, quyền lãnh đạo và phát triển kinh doanh. Tại sự kiện hàng năm của mạng lưới LEAD vào năm 2017, chúng tôi đã được công nhận là nhà sản xuất hàng tiêu dùng đóng gói (CPG) châu Âu có tỷ lệ nữ giám đốc điều hành cao nhất.",
                title: "Các nữ lãnh đạo tương lai\n" +
                    "\n",
            },
        ],

    }
    const contentSection5 = {
        title: " Các đối tác của chúng tôi\n",
        content: "Mỗi ngày, chúng tôi nỗ lực hướng tới một thế giới bình đẳng, nhưng điều đó không thể được thực hiện một mình. Để củng cố và gia tăng tác động của chúng tôi, chúng tôi hợp tác với các tổ chức có chung cam kết về bình đẳng giới.\n",
        items: [
            {
                img: "https://images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
                link: "https://leanin.org/",
            },
            {
                img: "https://images.ctfassets.net/oggad6svuzkv/4tRpG9WXeUcmK8yq2o8q4Q/71dac0049a51c71323ca276ceb3a6dec/catalyst-ceo-logo.png",
                link: "https://images.ctfassets.net/oggad6svuzkv/4tRpG9WXeUcmK8yq2o8q4Q/71dac0049a51c71323ca276ceb3a6dec/catalyst-ceo-logo.png",
            },
            {
                img: "https://images.ctfassets.net/oggad6svuzkv/mAYJVJz1EOmcgqQOSAMuE/5f5480b3832ab38548b233c20cd8cd0b/un-women-logo.png",
                link: "https://www.unwomen.org/en",
            },
            {
                img: "https://images.ctfassets.net/oggad6svuzkv/5ccCMA8zQWU0ceCGGc8YAa/a2710c3bf31fba54790f54496169f76f/wash-united-logo.png",
                link: "https://wash-united.org/",
            },
            {
                img: "https://images.ctfassets.net/oggad6svuzkv/149ACnhps8US0eysaCOoiA/28c67cf58ec8cb0192934e3ce0e88dfd/save-the-childeren-logo.png",
                link: "https://www.savethechildren.org/",
            },
            {
                img: "https://images.ctfassets.net/oggad6svuzkv/1Mxz3lYJbCAmE6yyWAAISe/e0cfca03a47796cfa9ecf68ce36c9ed7/see-her-logo.png",
                link: "https://www.ana.net/content/show/id/45043",
            },
            {
                img: "https://images.ctfassets.net/oggad6svuzkv/4KNJoSzLLW6eAGi2Oc6woK/2b5e379e668bfabe20f408886179f99f/global-citizen-logo.png",
                link: "https://www.globalcitizen.org/en/",
            },
            {
                img: "https://images.ctfassets.net/oggad6svuzkv/2p2mkwIRZyQAuGe8wekU8U/2cbfaafe61e5149b0c3c0b497ed55cdf/seneca-women-logo.png",
                link: "https://www.senecawomen.com/",
            },
            {
                img: "https://images.ctfassets.net/oggad6svuzkv/3tR24XFDXGKA6GwCk8ueWG/2432d1c3ba3ed8ebf9884011f50f42b3/care-logo.png",
                link: "https://www.care.org/",
            },
            {
                img: "https://images.ctfassets.net/oggad6svuzkv/5A99KTOfHqUuema2qIqCUY/73fce0945f1ecf7a48c97cf2afcab96c/sesame-workshop-logo.png",
                link: "https://sesameworkshop.org/",
            },
            {
                img: "https://images.ctfassets.net/oggad6svuzkv/7PszE5WE1OA2CYym8kKY4/8e512c90500d6a2743b07eb6f123d70c/world-vision-logo.png",
                link: "https://www.worldvision.org/",
            },
            {
                img: "https://images.ctfassets.net/oggad6svuzkv/22nQXrqOdCEQaOWAcc0sSS/45c7218d24b1de64f6af42212351d4ee/new-logo.png",
                link: "https://www.nextupisnow.org/",
            },
            {
                img: "https://images.ctfassets.net/oggad6svuzkv/2NONO0gpC0MgG6iCUse2Gw/6b8c1cec9864c6d3cc36eae9e35c9ada/wbenc-logo.png",
                link: "https://www.wbenc.org/",
            },
        ],
        subTitle: "Nhưng xin chờ một chút, vẫn còn nữa\n",
        subContent:"Chúng tôi luôn có các chương trình song song. Để biết thông tin về các nỗ lực bình đẳng giới của chúng tôi, như khuyến khích sinh viên trên toàn thế giới theo đuổi STEM — hoặc để xem danh sách đầy đủ các đối tác của chúng tôi, hãy tải xuống BÁO CÁO CÔNG DÂN 2022 của chúng tôi.\n" +
            "\n"

    }
    return (
        <div>
            <div
                className="relative clipPath-Header  bg-center justify-center flex items-center  h-96 mb-56 w-full">
                <img className={"absolute -top-14 left-0 w-full"}
                     src={"https://images.ctfassets.net/ywowj8d94i8y/3jjOjlpwso8cukMO0OKUoG/5b999646745ff3618213ae99fe19773b/gender-equality-hero.jpg?fm=webp"}/>
            </div>
            <section id={"section1"} className={"flex p-32 pt-0 flex-col items-center justify-center"}>
                <h1 className={"font-bold text-6xl text-primary mb-10"}>Bình đẳng giới<span
                    className={"text-yellow-400"}>.</span></h1>
                <h3 className={"font-medium text-primary text-center  mb-5"}>#WeSeeEqual</h3>
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
            <section id={"section2"} className={" flex flex-col justify-center p-32 pt-16 items-center bg-[#F6F6F6]"}>
                <img className={"w-1/2 mb-5"}
                     src={"https://images.ctfassets.net/ywowj8d94i8y/14MHXnorc8mySQiSUeWIoq/18834b16cc9fba541b029541e69ed873/gender-equality-advertising-and-media.svg"}/>
                <h1 className={"text-primary text-lg font-medium mb-7"}>{contentSection2.title}</h1>
                <p className={"mb-20 w-8/12"}>{contentSection2.content}</p>
                <div className={"flex flex-row gap-10 "}>
                    {
                        contentSection2.items.map((item, index) => {
                            return (
                                <div onClick={() => {
                                    handleShowIframe(item.link)
                                }} key={index} className={"group w-1/2  relative "}>

                                    <div className={" overflow-hidden w-full h-80 rounded-2xl"}>
                                        <img
                                            className={"w-full h-auto h-72 rounded-2xl hover:scale-[1.2] transition duration-500"}
                                            src={item.img}/>
                                    </div>
                                    <h3 className={"text-primary font-medium text-lg mb-3"}>{item.subTitle}</h3>
                                    <p>{item.content}</p>
                                    <div className={" absolute top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2"}>
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
                            )
                        })
                    }
                </div>

            </section>
            <section id={"section3"} className={"flex flex-col items-center justify-center p-32"}>
                <img className={"w-1/2 mb-5"}
                     src={"https://images.ctfassets.net/ywowj8d94i8y/1I7Qo6oKw0Mgymi8MsYuI2/43dff6a9cb29b634465889f3446bdcca/gender-equality-education-and-economic-opportunities-illustration.svg"}/>
                <h1 className={"text-primary text-lg font-medium mb-7"}>{contentSection2.title}</h1>
                <p className={"mb-20 w-8/12"}>{contentSection2.content}</p>
                <div className={"flex flex-row justify-center gap-10 mb-20 text-center"}>
                    {
                        contentSection3.items.map((item, index) => {
                            return (
                                <div key={index} className={"flex flex-col w-1/4 "}>
                                    <img className={"rounded-full mb-5 "}
                                         src={item.img}/>
                                    <h1 className={"font-medium text-primary"}>{item.title}</h1>
                                    <p>{item.content}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
            <section id={"section4"} className={"flex flex-col items-center justify-center mb-32"}>
                <img className={"w-1/2 mb-5"}
                     src={"https://images.ctfassets.net/ywowj8d94i8y/1I7Qo6oKw0Mgymi8MsYuI2/43dff6a9cb29b634465889f3446bdcca/gender-equality-education-and-economic-opportunities-illustration.svg"}/>
                <h1 className={"text-primary text-lg font-medium mb-7"}>{contentSection4.title}</h1>
                <p className={"mb-20 w-8/12"}>{contentSection4.content}</p>
                <EqualitySwiper items={contentSection4.items}/>
            </section>

            <section id={"section5"} className={"flex flex-col items-center justify-center "}>
                <h1 className={"text-primary text-lg font-medium mb-7"}>{contentSection5.title}</h1>
                <p className={"mb-20 w-8/12"}>{contentSection5.content}</p>
                <div className={"grid grid-cols-6 grid-rows-4 justify-between w-8/12  gap-10 "}>
                    {
                        contentSection5.items.map((item, index) => {
                            return (
                                <a key={index} href={item.link}>
                                    <img className={"w-full rounded-full shadow-2xl hover:scale-[1.1] transition duration-500"}
                                         src={item.img}/>
                                </a>
                            )
                        })
                    }
                </div>
                <h1 className={"text-primary text-lg font-medium mb-7"}>{contentSection5.title}</h1>
                <p className={"mb-7 w-8/12"}>{contentSection5.content}</p>
                <div className={"flex flex-row gap-5"}>
                    <ButtonHover className={"h-12 px-5"}>Báo cáo trách nhiệm xã hội</ButtonHover>
                    <ButtonHover className={"h-12 px-5"}>Trách nhiệm xã hội của P&G</ButtonHover>
                    <ButtonHover className={"h-12 px-5"}>Các báo cáo công dân trước đó</ButtonHover>
                </div>
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
export default GenderEqualityPage;