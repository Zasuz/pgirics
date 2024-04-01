"use client"
import React from "react";
import Search from "antd/es/input/Search";
import {Button, Checkbox} from 'antd';
import "../../css/brand-page.css"

import SliderBrand from "@/components/home-page/SliderBrand";
import {AiFillFilter} from "react-icons/ai";

const BrandPage = () => {
    const plainOptions = [
        'Chăm sóc trẻ em',
        'Chăm sóc vải  ',
        'Chăm sóc phụ nữ',
        "Grooming",
        "Chăm sóc tóc",
        "Chăm sóc nhà cửa",
        "Chăm sóc răng miệng",
        "Chăm sóc da và cá nhân"]
    const items = [
        {
            title: "Chăm sóc trẻ em",
            product: [
                {
                    title: 'Pampers',
                    img: "https://images.ctfassets.net/ywowj8d94i8y/2TtBscOnMAos8gmggiw0sU/e2411e52279e96270fa74ceaffefdcc6/Pampers.jpg?fm=webp"
                }
            ]
        },
        {
            title: "Chăm sóc vải",
            product: [
                {
                    title: "Ariel",
                    img: "https://images.ctfassets.net/ywowj8d94i8y/1MILu4apX228SuCIYWKISW/6bf849faaff0d048d5f097ee84ab1992/Ariel.jpg?fm=webp"
                },
                {
                    title: 'Downy',
                    img: "https://images.ctfassets.net/ywowj8d94i8y/5dd7VDpfVYsGsQO6uIkUqS/f80eb024225079ad0779955cb33df880/DownyBlue.jpg?fm=webp"
                },
                {
                    title : "Tide",
                    img: "https://images.ctfassets.net/ywowj8d94i8y/sR0yOc87zEkW2QUCQQKaa/65704a673dab58fd74c386787f2ddb63/Tide200x200.jpg?fm=webp"
                },
            ]
        },
        {
            title: "Grooming",
            product: [
                {
                    title: 'Gillettee',
                    img: "https://images.ctfassets.net/ywowj8d94i8y/1Q3SLzSuNSq8kcw8uUy02A/5f8112d0deeb9df1295da3c6462923e7/Gillette.jpg?fm=webp"
                },
            ]
        },
        {
            title: "Chăm sóc tóc ",
            product: [
                {
                    title: 'Head & Shoulders',
                    img: "https://images.ctfassets.net/ywowj8d94i8y/2A0hPQZH6wKQqGccYMk4G6/355a8073712b9517ebc2b90e63a9fd78/headandshoulders-logo200x200.png?fm=webp"
                },
            ]
        },
        {
            title: "Chăm sóc nhà cửa",
            product: [
                {
                    title: 'Ambi Pur',
                    img: "https://images.ctfassets.net/ywowj8d94i8y/1VhfEzmYzctL9r7dUVH4wp/2da9ecefd43474a32db2792171028016/ambipur.jpg?fm=webp"
                },
            ]
        },
        {
            title: "Chăm sóc răng miệng",
            product: [
                {
                    title: 'Oral-B',
                    img: "https://images.ctfassets.net/ywowj8d94i8y/16nBuk19Misk4kku0aks2m/adcdfe00877ef36505bff72a475975ed/ORAL_B__RGB.png?fm=webp"
                },
            ]
        },
        {
            title: "Chăm sóc da và cá nhân",
            product: [
                {
                    title: 'Gillettee',
                    img: "https://images.ctfassets.net/ywowj8d94i8y/1Q3SLzSuNSq8kcw8uUy02A/5f8112d0deeb9df1295da3c6462923e7/Gillette.jpg?fm=webp"
                },
                {
                    title: 'Olay',
                    img: "https://images.ctfassets.net/ywowj8d94i8y/3PNis6ONrOsoaCYuQ2WC2Y/232b5e35667f5c7941e10ae10578052e/Olay.jpg?fm=webp"
                },
            ]
        },


    ]
    const content = "P&G mang đến những thương hiệu uy tín, chất lượng hàng đầu, với hiệu quả và giá trị vượt trội để đáp ứng nhu cầu làm sạch, giữ gìn sức khỏe và đảm bảo vệ sinh của người tiêu dùng trên toàn thế giới."
    return (<section>
            <div
                className="bg-brand-page bg-bottom  lg:bg-center justify-center flex items-center h-screen w-screen overflow-hidden relative before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-gradient-opacity lg:before:bg-gradient-opacity-lg">
                <div className={"clipPath-Carousel absolute w-full h-full bg-white"}>
                </div>
                <div className={"items-center lg:items-start flex flex-col w-full ml-0 lg:ml-32 z-50 gap-6 mt-52 lg:mt-0 "}>
                    <img
                        className={"w-16 h-auto"}
                        src={"https://images.ctfassets.net/ywowj8d94i8y/4eHoXxrU39FWks26lO6sHx/ccd353935282c7202713443a3ab6559b/Brands_Light_Blue_-_64x64.svg"}/>
                    <h1 className={"text-xl lg:text-8xl text-white font-[700]"}>Các nhãn hiệu</h1>
                    <p className={" w-8/12 lg:w-4/12 text-white text-wrap"}>{content}</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row flex-col px-20 py-10">
                <div className={"lg:block hidden relative "}>
                    <div className="sticky flex flex-col top-10 mt-20 ">
                        <h3 className={"text-primary font-bold mb-5"}> Bộ lọc </h3>
                        <div>
                            <Search
                                placeholder="input search text"
                                style={{
                                    borderRadius:"50%",
                                    width: 200,
                                    borderColor:"blue"
                                }}
                                rootClassName={"rounded-full"}
                            />
                        </div>

                        <Checkbox.Group className={"custom-checkbox gap-2  my-5 flex flex-col text-[16px] text-primary"}
                                        options={plainOptions}/>
                        <Button className={"w-4/12 rounded-2xl border-primary text-primary bg-white"}>Xóa</Button>
                    </div>
                </div>
               <div className={"flex flex-col justify-center items-center w-full"}>
                   <h3 className={"text-primary font-bold mb-5"}> Bộ lọc </h3>
                   <Search
                       placeholder="input search text"
                       style={{
                           width: 200,
                       }}
                       rootClassName={"rounded-2xl"}
                   />
                   <Checkbox.Group className={"self-center custom-checkbox bg-[#f2f7ff] gap-2 p-10  my-5 w-1/2 flex rounded-2xl flex-col text-[16px] text-primary"}
                                   options={plainOptions}/>
               </div>





                <div className={"flex flex-col w-full"}>
                    {
                        items.map((item, index) => {
                            return (
                                <div className={"w-full ml-0 lg:ml-28 mt-20"}>
                                    <h1 className={"font-bold text-4xl text-primary"}>{item.title}</h1>
                                    <div
                                        className={"w-full h-auto bg-white text-primary flex flex-col justify-center items-center"}>
                                        <SliderBrand items={item.product}/>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>


            </div>
        </section>
    )

}
export default BrandPage;