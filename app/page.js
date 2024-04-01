'use client';
import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from 'framer-motion';
import InfiniteSequentialAnimation from "@/components/home-page/InfiniteSequentialAnimation";
import {Button} from "antd";
import {ArrowUpOutlined} from "@ant-design/icons";
import SliderBrand from "@/components/home-page/SliderBrand";
import "../css/home-page.css"
import FadeInDownOnScroll from "@/components/ReuseComponent/FadeInDownOnScroll";

function App() {
    const [activeItem, setActiveItem] = useState(0);
    const controls = useAnimation();
    const [isLg, setIsLg] = useState(window.innerWidth >= 1024);

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsLg(window.innerWidth >= 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const items = [{
        title: "Tide",
        img: "https://images.ctfassets.net/ywowj8d94i8y/sR0yOc87zEkW2QUCQQKaa/65704a673dab58fd74c386787f2ddb63/Tide200x200.jpg?fm=webp"
    }, {
        title: 'Ambi Pur',
        img: "https://images.ctfassets.net/ywowj8d94i8y/1VhfEzmYzctL9r7dUVH4wp/2da9ecefd43474a32db2792171028016/ambipur.jpg?fm=webp"
    }, {
        title: "Ariel",
        img: "https://images.ctfassets.net/ywowj8d94i8y/1MILu4apX228SuCIYWKISW/6bf849faaff0d048d5f097ee84ab1992/Ariel.jpg?fm=webp"
    }, {
        title: 'Downy',
        img: "https://images.ctfassets.net/ywowj8d94i8y/5dd7VDpfVYsGsQO6uIkUqS/f80eb024225079ad0779955cb33df880/DownyBlue.jpg?fm=webp"
    }, {
        title: 'Gillettee',
        img: "https://images.ctfassets.net/ywowj8d94i8y/1Q3SLzSuNSq8kcw8uUy02A/5f8112d0deeb9df1295da3c6462923e7/Gillette.jpg?fm=webp"
    }, {
        title: 'Head & Shoulders',
        img: "https://images.ctfassets.net/ywowj8d94i8y/2A0hPQZH6wKQqGccYMk4G6/355a8073712b9517ebc2b90e63a9fd78/headandshoulders-logo200x200.png?fm=webp"
    }, {
        title: 'Olay',
        img: "https://images.ctfassets.net/ywowj8d94i8y/3PNis6ONrOsoaCYuQ2WC2Y/232b5e35667f5c7941e10ae10578052e/Olay.jpg?fm=webp"
    }, {
        title: 'Oral-B',
        img: "https://images.ctfassets.net/ywowj8d94i8y/16nBuk19Misk4kku0aks2m/adcdfe00877ef36505bff72a475975ed/ORAL_B__RGB.png?fm=webp"
    }, {
        title: 'Pampers',
        img: "https://images.ctfassets.net/ywowj8d94i8y/2TtBscOnMAos8gmggiw0sU/e2411e52279e96270fa74ceaffefdcc6/Pampers.jpg?fm=webp"
    },]
    const itemSection3 = [{
        img: "https://images.ctfassets.net/ywowj8d94i8y/2MSjm1DCPqleAOETyBI7b4/2feecd7a4400c0476b1dc5bcf76f7de9/HP-Investor_Relations.jpg?fm=webp",
        title: "Quan hệ với nhà đầu tư",
        content: "Nhận thông tin nhà đầu tư",
        imgIcon: "https://images.ctfassets.net/ywowj8d94i8y/4TDKXUQCFKvF6knfeA9hHP/eeae9ac44abb1f413de4be66cd04d5cf/advocates-icon_1.png?fm=webp"
    }, {
        img: "https://images.ctfassets.net/ywowj8d94i8y/6CBoInLDjlFl47X9qfq0jR/11f43eabd41bcb10c04af753de534c55/HP-Careers.jpg?fm=webp",
        title: "Việc làm tại P&G",
        content: "Tìm cơ hội việc làm",
        imgIcon: "https://images.ctfassets.net/ywowj8d94i8y/1QUwv3HwywVJeBDpM2Gk58/3ff77570d9c7312b77c83af6ed164053/employees-icon_1.png?fm=webp"

    },]

    const titleNavScroll = [{
        title: "Giới thiệu"
    }, {
        title: "Cam kết & nổ lực"
    }, {
        title: "Nổ lực phát triển bền vững"
    }, {
        title: "Các trang web của P&G"
    },

    ]
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section"); // Thay "section" bằng phần tử mà bạn muốn kích hoạt
            console.log(sections)
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
                if (isInViewport) {
                    const sectionId = parseInt(section.getAttribute("id"));
                    setActiveItem(index);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        try {
            const element = document.getElementById('myElement');
            const rect = element.getBoundingClientRect();
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if (isInViewport) {
                controls.start({
                    x: "-30%", // translate x position
                    transition: {
                        duration: 1,
                    },
                });
            } else {
                controls.start({
                    x: "0%", // revert to original position
                    transition: {
                        duration: 1, // animation duration in seconds
                    },
                });
            }
        } catch (Exception) {
        }

    };
    return (<div>
        <section id={"1"}
            className="nav bg-blue-600 justify-center flex items-center h-screen w-screen overflow-hidden relative before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-gradient-opacity -z-[99999]
               after:bottom-0 after:-translate-x-1/2 after:left-1/2 after:w-32 after:h-32 after:rounded-full after:bg-yellow-400 after:absolute lg:after:content-[none]">
            <InfiniteSequentialAnimation/>
            <div className={"clipPath-Carousel absolute w-full h-full bg-white z-40"}>
            </div>
            <div className={"absolute text-center"}>
                <FadeInDownOnScroll>
                    <h1 className=" text-white text-3xl lg:text-7xl font-bold after:w-[1rem] after:h-[1rem] after:bg-[#fedb00] after:rounded-full after:inline-block ">Chiến
                        Lược Tăng Trưởng
                        <br className={"hidden lg:block"}/>
                        Toàn Diện</h1>
                    <Button size="large"
                            className={"inline-flex justify-center items-center bg-primary text-white border-0 rounded-full px-5 py-7 mt-20  "}>
                        <h6 className={"font-[600]"}>Báo Cáo Thường Niên Năm 2023</h6><ArrowUpOutlined rotate={45}/>
                    </Button>
                </FadeInDownOnScroll>
            </div>
        </section>
        <motion.div
            animate={{
                opacity: 1,
            }}
            transition={{duration: 2}}
            initial={{opacity: 0}}>
            <ul id={"navScroll"}
                className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-end font-bold text-primary z-40">
                {titleNavScroll.map((item, index) => {
                    const itemClass = index === activeItem ? 'group active nav-scrollActive' : 'group nav-scroll';
                    const isActiveClass = index === activeItem ? 'inline mr-6' : 'group-hover:inline hidden mr-6';

                    return (<li key={index} className={itemClass} onClick={() => setActiveItem(index)}>
                        <a className={isActiveClass}>{item.title}</a>
                    </li>)
                })}
            </ul>
        </motion.div>
        <FadeInDownOnScroll>
            <section id={"2"}
                className={"nav w-full h-auto bg-white text-primary pt-40 flex flex-col justify-center items-center "}>
                <h3 className={"text-center text-[1rem] font-[800] "}>CÁC NHÃN HÀNG CỦA CHÚNG TÔI</h3>
                <h1 className={"hidden lg:block pt-3 text-center text-[2.5rem] font-[700] after:w-[0.6rem] after:h-[0.6rem] after:bg-[#fedb00] after:rounded-full after:inline-block "}>Các
                    sản phẩm của chúng tôi giúp cuộc sống dễ hơn</h1>
                <SliderBrand items={items}/>
                <Button
                    className={"min-w-[450px] border-primary text-[16px] text-primary font-[600] w-1/3 h-10 mt-20 rounded-full"}> Xem
                    các biểu tượng mang tính thương hiệu của chúng tôi</Button>
            </section>
        </FadeInDownOnScroll>
        {isLg ? <motion.section id={"3"}
            className="nav mt-32 transition duration-[3000ms] ease-in-out grid grid-cols-2 gap-4 px-10 overflow-hidden  min-w-[120vw] "
            animate={controls}
           >
            <img
                src={"https://images.ctfassets.net/ywowj8d94i8y/5XvB2uo4vZKRNevfn0nReB/fdf6d88fabc8d94d04bdbd11fcb47921/1.10.23_Sustainability_Page_Key_Image_-_Mom_and_baby__2HP.jpg?fm=webp"}
                className="bg-blue-500 w-full h-full rounded-full"/>
            <div className="bg-primary  w-full  h-[30vw] rounded-full relative ">
                <div className={"text-center flex flex-col justify-center items-center h-full pr-[25%]"}>
                    <h1 className={"font-[700] text-[3rem] text-white "}>Từng bước giảm <br/> tác động tới đến
                        môi <br/> trường</h1>
                    <Button ghost
                            className={"text-[16px] font-[600] border-white text-white w-4/12 h-14 rounded-full mt-3"}>Nỗ
                        lực của chúng tôi</Button>
                </div>

                <img
                    src={"https://images.ctfassets.net/ywowj8d94i8y/46PTOQKbqYBYRXfTZeH1bW/615ed963e5d1daaed2edc0402e6b921c/HP-Sustainability_Section_2.png?fm=webp"}
                    className={"h-[30vw] right-0 absolute top-0"}/>
            </div>
        </motion.section> : <section id={"3"} className={"nav relative mt-10"}>
            <img
                src={"https://images.ctfassets.net/ywowj8d94i8y/5XvB2uo4vZKRNevfn0nReB/fdf6d88fabc8d94d04bdbd11fcb47921/1.10.23_Sustainability_Page_Key_Image_-_Mom_and_baby__2HP.jpg?fm=webp"}/>
            <div
                className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-[rgba(0,61,165,.8)] p-10 flex items-center justify-center flex-col"}>
                <h1 className={"text-center text-white text-[1.4rem] font-[700] mb-5"}>Từng bước giảm tác
                    động đến môi trường<span className={"text-yellow-400 text-md"}>.</span></h1>
                <Button ghost
                        className={"hover:bg-white hover:text-primary border-white text-white rounded-full h-10"}>Nỗ
                    lực của chúng tôi
                </Button>
            </div>
        </section>
        }
        <FadeInDownOnScroll>
            <section id={"4"} className={"nav flex lg:flex-row flex-col overflow-hidden mb-10 mt-32"}>
                {itemSection3.map((item, index) => {
                    return (<div key={index} className={"w-full flex  items-center justify-center mb-10 "}>
                        <div className={"w-8/12 group overflow-hidden rounded-3xl relative "}>
                            <img
                                src={item.img}
                                className={"group-hover:scale-[1.2] transition duration-1000 h-full w-full object-cover rounded-3xl "}/>
                            <div className={"absolute w-full h-full  top-0 right-0 bg-gradient-section3 "}>

                            </div>
                            <h1 className={"absolute font-[700] text-[2.5rem] text-white bottom-5 ml-4 "}>
                                {item.title}
                            </h1>
                            <div
                                className={" p-5 flex flex-col group-hover:-translate-y-[99%] transition duration-1000 absolute -bottom-30 w-9/12 h-1/3 bg-white rounded-tr-2xl"}>
                                <img
                                    src={item.imgIcon}
                                    className={"mb-2 w-2/12 h-auto"}/>
                                <h3 className={"mb-3 text-[1.4rem] font-[600] text-primary"}>{item.title}</h3>
                                <Button
                                    className={"min-w-[220px] hover:bg-primary hover:text-white mb-3 text-[16px] font-[600] mb-3 w-2/3 text-primary border-primary rounded-full"}>
                                    {item.content}
                                </Button>
                            </div>
                        </div>
                    </div>)
                })}
            </section>
        </FadeInDownOnScroll>

    </div>);
}

export default App;