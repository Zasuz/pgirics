import React from "react";

const HeaderImageClipPath = ({item,classNameBg}) => {
    return(
        <section id={"section1"}
                 className={`${classNameBg} bg-center justify-center flex items-center h-screen w-screen overflow-hidden relative before:w-full before:z-10 before:h-full before:absolute before:top-0 before:left-0 before:bg-gradient-opacity lg:before:bg-gradient-opacity-lg`} >
            <div className={"clipPath-Carousel absolute w-full h-full bg-white z-40"}>
            </div>
            <div
                className={"items-center lg:items-start flex text-center lg:text-start flex-col w-full ml-0 lg:ml-32 z-40 gap-6 mt-44 lg:mt-0 "}>
                <img
                    className={"w-16 h-auto"}
                    src={"https://images.ctfassets.net/ywowj8d94i8y/1SI038m6YWUZEWTWfQE8ok/5b214d2a62ff727b717c7cbafb8e67d7/Brands_Purple.svg"}/>
                <h1 className={"text-xl lg:text-8xl  lg:w-5/12 text-white font-[700]"}>{item.title}</h1>
                <p className={"w-1/2 lg:w-4/12 text-white font-[600]"}>{item.subTitle}</p>
                <p className={"w-1/2 text-white text-wrap"}>{item.content}</p>
            </div>
        </section>
    )
}
export default HeaderImageClipPath;