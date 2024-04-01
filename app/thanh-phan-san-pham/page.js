"use client"
import ButtonAnimation from "@/components/ReuseComponent/ButtonAnimation";
import {AiFillFilePdf} from "react-icons/ai";
import "../config.js";
import HeaderImageClipPath from "@/components/ReuseComponent/HeaderImageClipPath";
import {Collapse} from "antd";
import React from "react";

const IngredientProductionPage = () => {
    const {Panel} = Collapse;

    const contentSection1 = {
        title: "Thành phần",
        content: "Mục tiêu của chúng tôi là trả lời các câu hỏi của bạn về những gì nằm bên trong sản phẩm bằng cách cung cấp thông tin thành phần rõ ràng, đáng tin cậy và có thể truy cập được. Nói cách khác, nếu bạn không tìm được những gì bạn muốn tìm ở đây hoặc trên các trang web thương hiệu của chúng tôi, xin vui lòng nêu rõ để chúng tôi có thể làm theo lời hứa của mình.\n",

    }
    const contentSection2 = {
        title: "Lựa chọn thành phần sản phẩm và cách thực hiện",
        content: "Một số người cho rằng thành phần sản phẩm tự nhiên sẽ an toàn hơn thành phần nhân tạo tổng hợp. Thực tế thì việc này không đơn giản như vậy; cả thành phần tự nhiên và tổng hợp đều có phạm vi an toàn và phạm vi không an toàn. Ngay cả những yếu tố cơ bản như ánh nắng, oxy và nước cũng có giới hạn an toàn. Vậy chúng tôi cân nhắc những điểm nào khi chọn thành phần sản phẩm?\n",
        items: [
            {
                title: "An toàn",
                content: <>Trước hết, chúng tôi xác định <a className={"text-primary"}
                                                            href={BASE_URL + "/an-toan-san-pham/"}><u>phạm vi an toàn
                    của
                    từng thành phần</u> </a>, dù là thành phần tự nhiên hay tổng hợp. Sau đó, chúng tôi áp dụng phương
                    pháp
                    khoa học tương tự như các cơ quan quản lý trên thế giới.</>,
            },
            {
                title: "Hiệu quả",
                content: " Mỗi thành phần đều góp phần đem lại hiểu quả mà bạn mong đợi từ sản phẩm của chúng tôi. Chúng tôi cố gắng dùng những thành phần tốt nhất cho sản phẩm để bạn có thể yên tâm sử dụng."
            },
            {
                title: "Nguồn nguyên liệu thân thiện với môi trường",
                content: <>Thành phần tổng hợp thường thân thiện hơn với môi trường so với thành phần tự nhiên vì cần ít
                    nguồn tài nguyên hơn. Đặc tính bền vững và thân thiện với môi trường của một thành phần sản phẩm phụ
                    thuộc vào nguồn tài nguyên được dùng để tạo nên thành phần đó, cũng như quá trình thu hoạch, sản
                    xuất sản phẩm và cuối cùng là quá trình sử dụng sản phẩm. Chúng tôi cũng tiến hành công tác thực địa
                    để đảm bảo sử dụng <a className={"text-primary"} href={BASE_URL + "/phat-trien-ben-vung"}><u>những
                        giải pháp bền vững và thân thiện với Trái Đất nhất.</u></a></>
            }
        ]

    }
    const contentSection3 = {
        title: "Thành phần chúng tôi không sử dụng",
        items: [
            "Các ethoxylates và alkylphenol ethoxylates",
            "Benzene",
            "Bisphenol A (không có trong công thức*)",
            "Kim loại nặng: Asen, Chì, Crom VI, Thủy ngân, Cadmium, Niken," +
            "Microbead",
            "Các chất hữu cơ (TBT, DBT, MBT, DOT)",
            "PVC (không có trong công thức*)",
            "PAH (hydrocarbon thơm đa vòng)",
            "PCB (Polychlorination biphenyls)",
            "Phthalates**",
            "Triclosan",
            "Triclocarban**"
        ],
        content: <>Chúng tôi có các giới hạn an toàn sản phẩm nghiêm ngặt khi bất kỳ chất nào trên đây cũng có thể được
            tìm thấy ở lượng rất nhỏ do hiện diện trong tự nhiên (hoặc nền tảng) của chúng trong nước, môi trường hoặc
            là một phần của quá trình sản xuất <br/>
            "* Chúng tôi không sử dụng BPA hoặc PVC trong bất kỳ công thức sản phẩm nào. Việc sử dụng PVC và BPA bị hạn
            chế ở một lượng rất nhỏ trong một số bao bì sản phẩm như bình xịt có áp suất hoặc các thiết bị điện trong đó
            chức năng độc nhất của chúng là cần thiết cho an toàn sản phẩm. Chúng tôi sẽ xem xét các lựa chọn vật liệu
            mới ngay khi chúng xuất hiện.<br/>
            "** Chúng tôi không sử dụng các thành phần này trong các sản phẩm mới và đang dần loại bỏ chúng. Thông tin
            chi tiết về thời gian loại bỏ các chất này có thể được tìm thấy trong phần Câu hỏi nguyên liệu chung ở
            trên."</>
    }
    const contentSection4 = [{
        title: "1,4-Dioxane",
        content: <>1,4-dioxane không phải thành phần mà là sản phẩm phụ, hình thành ở lượng cực kỳ nhỏ trong quá trình
            tạo ra các thành phần trong một số sản phẩm tẩy rửa.
            <br/>
            "Điểm quan trọng là lượng 1,4-dioxane trong các sản phẩm của chúng tôi thấp hơn rất nhiều so với giới hạn an
            toàn theo quy định, đồng thời tuân thủ mọi yêu cầu của chính phủ. Chẳng hạn, nếu bạn giặt và mặc hơn 1.000
            lô
            quần áo mỗi ngày thì lượng 1,4-dioxane mà bạn tiếp xúc vẫn dưới giới hạn an toàn.
            <br/>
            "Chúng tôi đang không ngừng nỗ lực giảm và/hoặc loại bỏ chất này mà vẫn đảm bảo hiệu quả mà tất cả chúng ta
            đều
            mong đợi."</>,

    }, {
        title: "Phthalates",
        content: "Bạn có thể đã nghe câu hỏi về an toàn chung của phthalates. Có nhiều loại phthalates và mỗi loại là khác nhau (giống như có các loại nấm an toàn và không an toàn). Chúng tôi tuân thủ tất cả các lệnh cấm phthalate trên toàn cầu. Trên thực tế, chúng tôi đã loại bỏ loại phthalate duy nhất được sử dụng trong các hương liệu sản phẩm của chúng tôi mặc dù các cơ quan tổ chức liên quan nhận thấy nó an toàn",
    },
        {
            title: "Microbead",
            content: <>
                Microbead là các hạt nhựa rắn từ 5 mm trở xuống và được sử dụng để tẩy tế bào chết hoặc làm sạch
                trong các sản phẩm chăm sóc cá nhân."
                <br/>
                "Trước đây chúng tôi đã sử dụng microbead trong một số sản phẩm tẩy tế bào chết và kem đánh răng dựa
                trên phản hồi tích cực từ những người sử dụng. Bởi microbead được làm từ nhựa, một số nhóm người đã đặt
                câu hỏi liệu nhựa tìm thấy trong đại dương và đường thủy của chúng ta có phải là từ microbead hay không.
                Cho đến nay khoa học đã chứng tỏ sự phân hủy của các loại nhựa lớn là nguồn nhựa chính trong đại dương,
                chứ không phải microbead.\n" +
                <br/>
                "Giờ đây chúng tôi đã loại bỏ microbead khỏi tất cả các công thức làm sạch da mặt và kem đánh răng của P
                & G, vì vậy hiện nay các sản phẩm chúng tôi đang sản xuất không có microbead."</>
        }, {
            title: "Phốt phát",
            content: "Phốt phát là chất dinh dưỡng cần thiết cho sự phát triển của thực vật và một hệ sinh thái khỏe mạnh, thường được tìm thấy trong phân bón. Mặc dù phốt phát có mặt tự nhiên trong môi trường, nó cũng có thể được giải phóng với số lượng nhỏ hơn nhiều từ một số sản phẩm làm sạch sau khi sử dụng. Một loạt các cải tiến hiện nay cho phép chúng tôi sản xuất nhiều sản phẩm làm sạch hiệu quả, không có phốt phát mà không ảnh hưởng đến hiệu suất làm sạch. Do đó, chúng tôi đã loại bỏ phốt phát ra khỏi hơn 95% các sản phẩm tẩy rửa và đang tiến hành để loại bỏ ra khỏi 5% còn lại trong vài năm tới. Trong một số ít trường hợp tiếp tục sử dụng phốt phát, chúng tôi luôn tuân thủ tất cả các giới hạn quy định hiện hành.\n",

        },
        {
            title: "Triclosan và Triclorcarban",
            content: "Triclosan và triclocarban là các thành phần kháng khuẩn làm chậm hoặc ngăn chặn sự phát triển của vi trùng như vi khuẩn và nấm mốc. Chúng tôi đã loại bỏ triclosan khỏi các sản phẩm của mình trên toàn cầu và có kế hoạch từ bỏ việc sử dụng triclocarban trong một số ít sản phẩm còn lại.\n",
        }, {
            title: "Thành phần hương liệu",
            content: <>Mùi hương tồn tại tự nhiên trong môi trường xung quanh chúng ta và kích thích giác quan để hoạt
                động thường ngày của chúng ta trở nên thú vị. Khi điều chế hương liệu sản phẩm, chúng tôi luôn cẩn thận
                và chú ý tối đa đến vấn đề an toàn.\n" +
                <br/>
                "Trong thành phần hương liệu, chúng tôi không sử dụng nhiều chất gây dị ứng thực phẩm thường gặp, bao
                gồm sản phẩm từ trứng, sản phẩm từ sữa, gluten, lúa mạch, lúa mạch đen, sản phẩm từ đậu nành, cá hay
                động vật có vỏ. Tổng cộng, chúng tôi loại hơn 170 thành phần khỏi hương liệu của mình – con số này còn
                lớn hơn danh sách thành phần bị cấm của Hiệp hội Hương liệu Quốc tế (International Fragrance
                Association). Vui lòng truy cập trang web của thương hiệu và xem <a className={"text-primary"}
                                                                                    href={"https://smartlabel.org/"}><u></u>SmartLabel®</a> để
                tìm hiểu thêm thông tin về hương liệu mà chúng tôi sử dụng trong sản phẩm cho hầu hết các mặt hàng tại
                Hoa Kỳ và Canada.\n" +
            </>
        }]
    const contentTable = {
        title: "Chất bảo quản (bao gồm paraben và những chất khác)",
        header: ["Tã cho bé & vệ sinh phụ nữ", "Khăn lau trẻ em", "Bộ Làm mát không khí", "Chăm sóc sức khỏe & răng miệng", "Giặt ủi & vệ sinh gia đình", "Chăm sóc tóc & vệ sinh cá nhân", "Sản phẩm Chăm sóc da", "Tìm hiểu thêm"],
        item: [
            {
                title: "Axit Bezoic",
                isHaveIn: [false, true, false, true, true, true, true],
                link: ""
            },
            {
                title: "Benzyl alcohol",
                isHaveIn: [false, false, false, true, false, true, true],
                link: ""
            },
            {
                title: "DMDM Hydantoin",
                isHaveIn: [false, false, false, false, false, true, true],
                link: ""
            },
            {
                title: "Khu vực Diazolidinyl (số ít sản phẩm)",
                isHaveIn: [false, false, false, false, false, false, true],
                link: ""
            },
            {
                title: "Khu vực Imidazolidinyl (số ít sản phẩm)",
                isHaveIn: [false, false, false, false, false, false, true],
                link: ""
            },
            {
                title: "Quaternium-15 (số ít sản phẩm)",
                isHaveIn: [false, false, false, false, false, false, true],
                link: ""
            },
            {
                title: "Axit formic",
                isHaveIn: [false, false, false, false, true, false, true],
                link: ""
            },
            {
                title: "Glutaraldehyde",
                isHaveIn: [false, false, false, false, true, false, true],
                link: ""
            },
            {
                title: "Iodopropynyl Butylcarbarnate",
                isHaveIn: [false, false, false, false, false, true, true],
                link: ""
            },
            {
                title: "Methylisothiazolinone",
                isHaveIn: [false, false, true, false, true, false, false],
                link: ""
            },
            {
                title: "Isothiazolinones: Benzoisothiazolinone",
                isHaveIn: [false, false, false, false, true, true, false],
                link: ""
            },
            {
                title: "Methylchloroisothiazolinone",
                isHaveIn: [false, false, false, false, true, true, false],
                link: ""
            },
            {
                title: "Parabens Methyl-, Ethyl-, Propyl- & Butylparaben",
                isHaveIn: [false, false, true, false, false, true, true],
                link: ""
            },
            {
                title: "Phenoxyethanol",
                isHaveIn: [false, false, true, false, false, true, true],
                link: ""
            },
            {
                title: "Axit Salicylic",
                isHaveIn: [false, false, false, false, true, true, false],
                link: ""
            },
            {
                title: "Axit Sorbic",
                isHaveIn: [false, false, false, false, false, false, true],
                link: ""
            },
        ],
        subTitle: " Một số lượng nhỏ các sản phẩm yêu cầu sử dụng chất bảo quản khác không được liệt kê ở trên, bao gồm kali sorbate, benzalkonium clorua, dehydroaceticacid và chlorhexidine digluconate. Chúng được chỉ ra trong danh sách thành phần trong sản phẩm được sử dụng.\n",
        footer: <>Để biết thêm thông tin về dữ liệu, chứng nhận và chiến lược an toàn sản phẩm của chúng tôi, hãy truy
            cập Trang web <a className={"text-primary"} href={BASE_URL + "/an-toan-san-pham"}><u> an toàn sản phẩm.</u></a>"</>
    }

    return (
        <div>

            <HeaderImageClipPath classNameBg={"bg-ingredient-production-page"} item={contentSection1}/>
            <section id={"section2"} className={"p-32 flex flex-col lg:flex-row"}>
                <div className={"w-full lg:w-1/2"}>
                    <h1 className={"text-5xl font-bold text-primary mb-3"}>{contentSection2.title}</h1>
                    <p className={"mb-3"}>{contentSection2.content}</p>
                    <img className={"lg:hidden block w-1/2 h-1/2"}
                         src={"https://images.ctfassets.net/ywowj8d94i8y/1fXll8r9hXHfBIJsIT1GsP/520e28b328ad390cc4ae9eaee5f29c7d/PG_05_Choosing_Product_Ingredients.png?fm=webp"}/>
                    {
                        contentSection2.items.map((item, index) => {
                            return (
                                <>
                                    <h3 className={"text-primary text-lg font-bold mb-3"}>{index + 1}<span
                                        className={"text-yellow-400"}>.</span> {item.title}</h3>
                                    <p className={"text-wrap"}>{item.content}</p>
                                </>)
                        })
                    }
                    <ButtonAnimation className={"w-7/12 py-3 "}><AiFillFilePdf className={"mr-3"} size={20}/>Nguyên liệu
                        vì ngày mai</ButtonAnimation>
                </div>
                <img className={"lg:block hidden w-1/2 h-1/2"}
                     src={"https://images.ctfassets.net/ywowj8d94i8y/1fXll8r9hXHfBIJsIT1GsP/520e28b328ad390cc4ae9eaee5f29c7d/PG_05_Choosing_Product_Ingredients.png?fm=webp"}/>

            </section>
            <section id={"section3"} className={"flex p-32 pr-0 gap-10"}>
                <div>
                    <h1 className={"text-xl lg:text-5xl font-bold text-primary mb-3"}>{contentSection3.title}</h1>
                    {
                        contentSection3.items.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                    <p>{contentSection3.content}</p>
                </div>
                <img className={"lg:block hidden"}
                     src={"https://images.ctfassets.net/ywowj8d94i8y/2n8uR5WETYwhAuWf7rjSQl/941420132bfb85a0a4cbe4bea1116dcc/Group.svg"}/>
            </section>
            <section id={"section4"} className={"p-8 lg:p-32 bg-[#f2f7ff]"}>
                <h1 className={"lg:text-5xl text-xl font-bold text-primary mb-3"}>Hiểu các thành phần phổ biến</h1>
                <p className={"mb-3"}>Mặc dù luôn đảm bảo tính an toàn của sản phẩm trước khi được bày bán, nhưng chúng
                    tôi biết có rất nhiều trao đổi xung quanh các nguyên liệu sản phẩm nhất định. Đây là quan điểm của
                    chúng tôi về chúng:
                </p>
                <div className={"lg:grid hidden gap-4 grid-cols-2"}>
                    {
                        contentSection4.map((item, index) => {
                            return (
                                <div className={"h-80"}>
                                    <h3 className={"text-primary text-lg font-bold mb-3"}>{index + 1}<span
                                        className={"text-yellow-400"}>.</span> {item.title}</h3>
                                    <p className={"text-wrap"}>{item.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <Collapse className={"lg:hidden block"} defaultActiveKey={['1']}>
                    {
                        contentSection4.map((item, index) => {
                            return (
                                <Panel className={"panel-custom"} header={item.title} key={index}>
                                    <p>{item.content}</p>
                                </Panel>
                            )
                        })
                    }
                </Collapse>
            </section>
            <section id={"section5"} className={"flex p-16 lg:p-32 gap-16 lg:flex-row flex-col"}>
                <img className={"w-full lg:w-1/2"}
                     src={"https://images.ctfassets.net/ywowj8d94i8y/1YgltF49fvVGsM5nas4rlk/6efeb51cb6f557b2669720b0f006c8f3/1.11.23_Fragrance_Ingredients_Page_Key_Image_-_Woman_Laundry__2___1_.jpg.png?fm=webp"}/>
                <div className={"w-full lg:w-1/2 flex flex-col justify-center "}>
                    <h1 className={"text-xl lg:text-5xl font-bold text-primary mb-3"}>Thành phần hương liệu
                    </h1>
                    <p className={"mb-5"}>Từ năm 2020, chúng tôi đã công bố tỷ lệ hương liệu xuống còn 0,01% đối với tất
                        cả sản phẩm có hương liệu tại Hoa Kỳ và Canada.
                    </p>
                    <button
                        className={"px-3 border-2 hover:text-white hover:bg-primary w-4/12 h-12 font-[600] text-lg rounded-full border-primary text-primary"}>Tìm
                        hiểu thêm
                    </button>
                </div>
            </section>
            <section id={"section6"} className={"p-16 lg:p-32  bg-[#f2f7ff]"}>
                <h1 className={"text-start w-full lg:w-1/2 text-xl lg:text-5xl font-bold text-primary mb-10"}>
                    {contentTable.title}
                </h1>
                <div className={"flex items-center flex-col"}>
                    <div className={"flex flex-col lg:flex-row gap-10 mb-7 "}>
                        <p className={" w-full lg:w-1/2"}>
                            Chất bảo quản giữ cho tất cả chúng ta an toàn bằng cách ngăn chặn sự phát triển của vi khuẩn
                            và
                            nấm mốc trong quá trình sử dụng các sản phẩm tiêu dùng. Mỗi sản phẩm khác nhau cần loại chất
                            bảo
                            quản hoạt động tốt nhất cho công thức cụ thể đó.
                        </p>
                        <div className={"w-full lg:w-1/2"}>
                            <p className={"mb-3"}>
                                Bạn có thể yên tâm rằng tất cả các chất bảo quản của chúng tôi đều tuân thủ theo các quy
                                định hiện hành và giới hạn an toàn ở bất cứ nơi nào chúng được bán.
                            </p>
                            <p>
                                Để tìm hiểu về chất bảo quản trong sản phẩm của bạn, bạn sẽ tìm thấy thêm thông tin
                                qua <a
                                className={"text-primary"}
                                href={"https://smartlabel.org/"}><u></u>SmartLabel®</a> cho Hoa Kỳ và Canada.
                            </p>
                        </div>
                    </div>
                    <table className={" w-full text-left border-collapse text-[10px] mb-5 lg:block hidden"}>
                        <thead>
                        <tr className={"bg-white  flex table-row flex-row flex-no-wrap mb-0"}>
                            <th className={"bg-[#f2f7ff]"}></th>
                            {
                                contentTable.header.map((item, index) => {
                                    return (
                                        <th className={"border-black p-3 font-bold uppercase bg-[#c9d1dd] text-black border border-gray-300 table-cell"}
                                            scope="col">{item}</th>
                                    )
                                })
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            contentTable.item.map((item, index) => {
                                const bg = index % 2 == 0 ? "bg-white" : "bg-[#e2e7ef]";
                                return (
                                    <tr className={` ${bg} flex table-row flex-row flex-row flex-wrap flex-no-wrap mb-0`}>
                                        <th className="bg-[#c9d1dd] w-auto p-3 text-gray-600 text-center border border-b border-black block table-cell relative static"
                                            scope="row">{item.title}</th>
                                        {
                                            item.isHaveIn.map((isHave) => {
                                                return (
                                                    <td className="w-auto p-3 text-gray-600 text-center border border-b border-black block table-cell relative static">{isHave ?
                                                        <span
                                                            className={"after:absolute after:top-1/2 after:left-1/2  after:-translate-y-1/2 after:-translate-x-1/2 after:w-3 after:h-3 after:rounded-full after:bg-primary"}>.</span> : ""}</td>
                                                )
                                            })
                                        }
                                        <td className={"border-black border-b border text-center p-3 text-primary"}><a
                                            data-action-detail="https://www.cosmeticsinfo.org/ingredients/benzoic-acid/"
                                            className="event_outbound_link" target="_blank"
                                            title="www.cosmeticsinfo.org/ingredients/benzoic-acid/"
                                            href="https://www.cosmeticsinfo.org/ingredients/benzoic-acid/"><u>Đến
                                            trang</u></a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    <p className={"text-primary text-[10px] w-full lg:w-1/2 text-center mb-5"}>{contentTable.subTitle}</p>
                    <ButtonAnimation className={"w-8/12 lg:w-4/12 py-3 mb-5 "}><AiFillFilePdf className={"mr-3"} size={20}/>Chất
                        bảo quản được sử dụng</ButtonAnimation>
                    <p className={"text-center"}>{contentTable.footer}</p>
                </div>

            </section>


        </div>
    )
}
export default IngredientProductionPage;