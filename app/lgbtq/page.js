"use client"
import React, {useState} from "react";
import LayoutComponent from "@/components/nguoi-khuyet-tat/LayoutComponent";

const LGBTPage = () => {
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
        title: "ĐƯỢC NHÌN THẤY. ĐƯỢC LẮNG NGHE. ĐƯỢC TỰ HÀO",
        img: "https://images.ctfassets.net/ywowj8d94i8y/1KFKJ8d2b0ClGpduGZmEZA/55a20010720016ec32e15b66e409c5a5/P_G_Pride_Sponsorship_Logo_RGB__2_.png?fm=webp",
        content: <>Nền tảng của P&G trong việc đảm bảo hòa nhập và ủng hộ cho cộng đồng LGBTQ+ được hình thành từ những
            ví dụ của chính nhân sự trong công ty. Những cá nhân này đã dùng tiếng nói của mình để đấu tranh với sự bài
            xích, giải quyết vấn đề thiên kiến và mạo hiểm bản thân để được đối xử và bảo vệ bình đẳng.
            <br/>
            Hành trình ấy không hề dễ dàng. Và không phải là chúng tôi luôn đúng.
            <br/>
            Tiến bộ thường do những nhân viên dũng cảm khởi xướng khi phải đối mặt với cản trở mạnh mẽ và đã giúp chúng
            tôi thay đổi nền văn hóa của mình, định hình thái độ của công ty và củng cố cam kết của P&G với cộng đồng
            LGBTQ+. Chúng tôi đang dùng tiếng nói của mình để thúc đẩy sự chấp nhận, hòa nhập và tình yêu cho nhân loại.
        </>

    }
    const contentSection2 = {
        title: "",
        content: "",
        items: [
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/2tEpkRQwhyNPWVwwBId4Ho/6759c73c45c71a8830233f4218cbf05f/06-20_FINAL_Only_Approved_Image_for_The_Pause_.png?fm=webp",
                title: "Được nhìn thấy.\n",
                content: <>
                    Là một nhà quảng cáo hàng đầu, chúng tôi đang sử dụng tiếng nói của mình để tuyên truyền về bình
                    đẳng và hòa nhập. Những hình ảnh và thông điệp chúng tôi giới thiệu với thế giới tác động lên nhận
                    thức và văn hóa. Chúng tôi cam kết thể hiện chính xác hình ảnh của cộng đồng LGBTQ+ trong hoạt động
                    quảng cáo cũng như tuyên truyền <a className={"text-primary"}
                                                       href={"https://us.pg.com/blogs/accelerating-lgbtq-leadership-during-pandemic/"}><u>hiểu
                    biết sâu sắc hơn về tác động của việc nhìn nhận cộng đồng LGBTQ+</u></a> đối với thái độ và việc
                    nuôi dưỡng văn hóa.
                </>,
                link: "",
                youtubeEmbed: "",
            },
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/56j5o6DTCS8c2oX6voxUUc/42e5d142806a47926f8df5546b8172a0/2_Be_Seen_-_Shelly_McNamara.jpg.png?fm=webp",
                title: "Được lắng nghe.",
                content: <>
                    Chúng tôi có thể giúp tìm hiểu thiên kiến, tạo ra kết nối con người cũng như thay đổi trái tim và
                    suy nghĩ thông qua các câu chuyện, đối thoại và mối quan hệ cá nhân. Chung tay hành động, chúng ta
                    có thể tạo nên cộng đồng tốt đẹp hơn và hình thành chính sách có tính hòa nhập hơn. Những câu chuyện
                    này có thể tạo ảnh hưởng to lớn đến người nghe. Như ai đó từng viết:
                    <br/>
                    <i>“Cảm ơn bạn đã là nguồn cảm hứng cho tôi và thắp lên trong tôi ngọn lửa mà tôi từng nghĩ không
                        bao giờ rực cháy. Tôi đang sống một cuộc đời hạnh phúc hơn, cuộc đời mà tôi chưa từng tin rằng
                        mình sẽ có được. Cảm ơn bạn đã cứu rỗi một tâm hồn nữa.”</i>
                    <br/>
                    <br/>
                    <strong>Quan điểm về Đạo luật bình đẳng </strong>
                    <br/>
                    <br/>
                    P&G đã công khai ủng hộ Đạo luật bình đẳng từ năm 2016, sau khi Công ty tham gia Liên minh Doanh
                    nghiệp vì Bình đẳng trong Chiến dịch Nhân quyền; gần đây, chúng tôi cũng tham gia Liên minh Nước Mỹ
                    đấu tranh để ủng hộ các biện pháp bảo vệ không phân biệt đối xử toàn diện cho cộng đồng LGBTQ+ tại
                    Mỹ. Chúng tôi tin rằng việc tăng cường bảo vệ cho những người trước đây có nguy cơ bị phân biệt đối
                    xử chính là một bước quan trọng để gây dựng được nền văn hóa thực sự hòa nhập. Điều này cũng sẽ tiếp
                    nối khát vọng tạo ra một công ty và một thế giới nơi mọi người đều được bình đẳng và hòa nhập.
                    <br/>
                    <br/>
                    Đọc tuyên bố đầy đủ của chúng tôi tại <a className={"text-primary"}
                                                             href={"https://us.pg.com/blogs/pg-supports-equality-act/"}><u>đây</u></a>.
                </>,

                link: "",
                youtubeEmbed: "",
            },
        ]
    }
    const contentSection4 = {
        title: "",
        content: "",
        items: [
            {
                img: "https://images.ctfassets.net/ywowj8d94i8y/7k9vqH2Uguz6dkVRcjhJeU/5811aad2f9a5614a7a5176ec3416e32e/4_Be_Proud.jpeg.png?fm=webp",
                title: "Được tự hào.",
                content: <>

                    P&G hiểu rằng Pride không chỉ là một sự kiện hay thời khắc đơn lẻ. Pride đại diện cho một phong
                    trào giúp thúc đẩy quyền bình đẳng cho cộng đồng LGBTQ+ cũng như là chất xúc tác để chiến đấu
                    với thiên kiến, hình thành cuộc đối thoại và tăng sự hiện diện cho cộng đồng này.
                    <br/>
                    Trong đại dịch COVID-19, cộng đồng LGBTQ+ phải đối mặt với việc mất đi sinh kế, khó tiếp cận
                    dịch vụ chăm sóc sức khỏe quan trọng, gia tăng bạo lực gia đình và cách biệt xã hội vì những tổ
                    chức cung cấp dịch vụ này cho họ cũng khó lòng tồn tại. Điều này khiến phong trào thụt lùi hàng
                    thập kỷ.

                </>,
                link: "",
                youtubeEmbed: "https://www.youtube-nocookie.com/embed/sW_UEoulCg8",
            }]
    }
    const contentSection3 = {
        content: "",
        items: [
            {
                title: "Sức mạnh của ngôn từ",
                content: "Tại thời kỳ đỉnh điểm của bệnh dịch AIDS, ở một trong những thành phố bảo thủ nhất nước Mỹ, Michael Chanak đã lên tiếng để đảm bảo cộng đồng LGBTQ+ cũng được quan tâm. Michael đã đấu tranh để đưa xu hướng tính dục vào tuyên bố về sự đa dạng của Procter & Gamble, từ đó giúp P&G trở thành một trong những công ty Fortune 500 đầu tiên bảo vệ xu hướng tính dục như một trạng thái và để lại một di sản tồn tại đến 25 năm sau đó.",
                img: "https://images.ctfassets.net/oggad6svuzkv/7slm9jYmM9WTXA7vM7y3G8/c61fd538cfa5174abbd5745bb953e28d/the-words-matter.png",
                link: "https://www.youtube.com/watch?v=xG7qPd27-ws",
            },
            {
                title: "Họ sẽ thấy bạn",
                content: "Trong phim ngắn “Họ sẽ thấy bạn” (They Will See You), P&G khám phá lịch sử hiện diện của cộng đồng LGBTQ+ và lịch sử quảng cáo của chính công ty. Chúng tôi cũng gặp gỡ những người truyền cảm hứng đã thay đổi cuộc đời khi thấy câu chuyện của mình được thể hiện trên màn hình.",
                img: "https://images.ctfassets.net/oggad6svuzkv/1xyzBmF7y0jXGDl6rkEy2G/29f9941cbf5d14b9a35efe24bac729dc/they-will-see-you.png",
                link: "https://www.youtube.com/watch?v=Zs1kRgr44RY",
            },
            {
                title: "Bước ra khỏi bóng tối",
                content: "“Bước ra khỏi bóng tối” (Out of the Shadows) kể lại câu chuyện của một nhóm nhân viên đồng tính nam và đồng tính nữ tại trụ sở P&G ở Cincinnati. Họ đã dũng cảm cùng nhau đấu tranh vì quyền bình đẳng ở nơi làm việc trong những năm đầu thập niên 1990. Đó là một cuộc chiến khó khăn khi họ vấp phải văn hóa bảo thủ trong công ty nói riêng và trong cả Cincinnati nói chung. Nhưng những người tiên phong mở đường này không từ bỏ và họ đã giành chiến thắng.",
                img: "https://images.ctfassets.net/oggad6svuzkv/UwP8ik3Q02Hn6roIswUQ2/35f0c3fc767a5677136a5235275fb6e7/out-of-the-shadow.png",
                link: "https://www.youtube.com/watch?v=2iDCO_47350",
            },
        ]
    }
    const contentSection5 = {
        link: "https://www.youtube.com/watch?v=sW_UEoulCg8",
        img: "https://images.ctfassets.net/oggad6svuzkv/5fW58NFvX889yErZQQvCRO/6f41e07e32f16b8d9c02b8f1389b670f/LGBTQ__1_.jpg",
        content: <>
            P&G cùng các thương hiệu của mình đứng lên để tăng sự hiện diện cũng như kết nối những đơn vị và cá nhân
            khác để gây quỹ được 5 triệu đô la cho các cộng đồng LGBTQ+ chịu ảnh hưởng nặng nề nhất của dịch COVID-19
            qua chương trình <a className={"font-bold text-primary"} href={"https://www.cantcancelpride.com/"}><u>Can’t
            Cancel Pride</u></a> do iHeartRadio đồng tổ chức. Số tiền gây quỹ được dùng để hỗ trợ các tổ chức cũng như
            tạo ra tác động tích cực cho cộng đồng LGBTQ+.
            <br/>
            Nhấp vào <a className={"text-primary"}
                        href={"https://assets.ctfassets.net/oggad6svuzkv/4l88updFBLAEaXPohzMmla/07f4f6158f3cfaac7fc26a94ea102b49/PG_CantCancelPride_Report_FINAL.pdf"}><u>đây</u></a>để
            tìm hiểu thêm về nguồn cảm hứng làm nên chương trình Can’t Cancel Pride cũng như tác động của chương trình
            đối với cộng đồng LGBTQ+ trong Báo cáo tác động năm 2021 của chúng tôi.</>
    }
    const contentSection6 = {
        title: "",
        items: [
            {
                item: [
                    {
                        link: "https://www.global-lgbti.org/steering-committee",
                        img: "https://images.ctfassets.net/oggad6svuzkv/10ms2SO8Dz4yu7Hrx65K4s/f095c164d85912af662c4b9ca570418a/pgle-logo.png",
                    },
                    {
                        link: "https://www.stonewall.org.uk/",
                        img: "https://images.ctfassets.net/oggad6svuzkv/30263EsFno3HDLwUkfGeOB/a765057d89ed240964fdee27ab88e449/stonewall-logo.png"
                    }]
            },
            {
                item: [
                    {
                        link: "https://outleadership.com/",
                        img: "https://images.ctfassets.net/oggad6svuzkv/44XWgbNNoAdopllIu7NB0C/3c5eb82fafb0bb2f87ec20e5bebff63c/outleadership-logo.png"
                    },
                    {
                        link: "https://itgetsbetter.org/",
                        img: "https://images.ctfassets.net/oggad6svuzkv/1RpVUH1h9iue2ocNK3XZyh/80cd1b5e7d7e30ab4daac0a6c80a2c36/it-gets-better-logo.png"
                    },
                    {
                        link: "https://www.cantcancelpride.com/",
                        img: "https://images.ctfassets.net/oggad6svuzkv/7Gau0rBFG2Y7rxlA4SL2X8/569aa80fe5806d7b6bde827783a9033d/Cant_Cancel_Pride_Logo_still.png"
                    },
                    {
                        link: "https://www.glaad.org/",
                        img: "https://images.ctfassets.net/oggad6svuzkv/5R2t5FhC5Ef5pUhMzpCfLo/6ca2c9929b464db44e87df8297e0e093/glaad-cyan-logo.png"
                    },]
            },
            {
                item: [{
                    link: "https://www.sage.com/en-gb/",
                    img: "https://images.ctfassets.net/oggad6svuzkv/3He49c1nu2UpFOizebxavt/da0a1301ea38090ae00092962b26b95c/SAGE_Logo_Lock-UpFINAL.png"
                }]
            },
            {
                item: [
                    {
                        img: "https://images.ctfassets.net/oggad6svuzkv/Qt850cQPsONKSt6WQwIbd/ed6c73e3a392f4e6319b3218935e04ce/logo-250-150_1_.jpg.png",
                        link: "https://www.servicesaustralia.gov.au/centrelink?context=1"
                    },
                    {
                        link: "https://www.thetrevorproject.org/",
                        img: "https://images.ctfassets.net/oggad6svuzkv/2vzNt8HMi2nFNa9q1WaRe2/ce9268b8cde9211583a8b3f6ec0a25bc/the-trevor-project-logo.png"
                    },
                    {
                        link: "https://outrightinternational.org/",
                        img: "https://images.ctfassets.net/oggad6svuzkv/I6nVUbbtZGvCYbhXIpWPN/00d28b95e87f6901c4b40d9102c2cc13/outright-action-international-logo.png"
                    },
                    {
                        link: "https://nbjc.org/",
                        img: "https://images.ctfassets.net/oggad6svuzkv/417Myoq20PiC1tbD4hFKhq/ee50f608c832cbc52e875c1ea0ce003c/national-black-justice-coalition-logo.png"
                    },
                ]
            },
        ]
    }

    return (
        <div>
            <div
                className="relative clipPath-Header  bg-center justify-center flex items-center  h-96 mb-56 w-full">
                <img className={"absolute -top-14 left-0 w-full"}
                     src={"https://images.ctfassets.net/ywowj8d94i8y/6dUgM2SFOX1y7fAg5VgKXZ/0c57f77cce6db756dff71d65c0e1fba5/LGBTQ__-_Hero_Banner_crop.jpg?fm=webp"}/>
            </div>
            <section id={"section1"} className={"flex px-32 flex-col items-center justify-center text-center"}>
                <h1 className={"font-bold text-4xl text-primary mb-10"}>{contentSection1.title}<span
                    className={"text-yellow-400"}>.</span></h1>
                <img src={contentSection1.img}/>
                <p className={"mb-20 w-8/12 text-center"}>{contentSection1.content}</p>
            </section>
            <LayoutComponent id={"section2"} className={"pb-0"} items={contentSection2}/>
            <section id={"section3"} className={"flex flex-col p-32 pb-0 pt-16 items-center"}>
                <p className={"text-center w-1/2 mb-10"}>P&G đã làm ra ba bộ phim đạt giải thưởng về sự hiện diện của
                    cộng đồng LGBTQ+ cả trong và ngoài Công
                    ty. Tìm hiểu thêm ở đây.</p>
                <div className={"flex flex-row gap-10 w-8/12"}>
                    {
                        contentSection3.items.map((item, index) => {
                            return (
                                <div key={index} className={"w-1/3 text-center"}>
                                    <h1 className={"font-bold mb-3"}>{item.title}</h1>
                                    <a href={item.link}><img src={item.img}/></a>
                                    <p className={"mt-3"}>{item.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <LayoutComponent id={"section4"} className={"pt-0"} items={contentSection4}/>
            <section id={"section5"} className={"flex flex-col px-32 items-center"}>
                <a href={contentSection5.link}><img
                    src={contentSection5.img}/></a>
                <p className={"w-8/12 mt-5"}>{contentSection5.content}</p>
            </section>
            <section id={"section6"} className={"flex flex-col p-32 items-center"}>
                <h1 className={"text-primary font-medium text-xl"}>Tổ chức đối tác</h1>
                {

                }

                {
                    contentSection6.items.map((item, index) => {

                        return (
                            <ul className={"text-center flex justify-center item-center"}>
                                {
                                    item.item.map((item, index) => {
                                        return (
                                            <li key={index} className={"flex flex-row gap-10"}>

                                                <a key={index} href={item.link}><img src={item.img}/>
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    })
                }
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
export default LGBTPage;