import React from "react";

const CrossLink = ({items}) => {
    return (
        <div className={"p-32"}>
            <h1 className={"font-bold text-xl lg:text-4xl text-primary"}>Tìm hiểu về các nỗ lực xã hội của chúng tôi</h1>
            <div className={"flex flex-col lg:flex-row mt-16 items-center justify-center gap-10"}>
                {
                    items.map((item, index) => {
                        return (
                            <div key={index}
                                 className={"group relative w-1/2 flex justify-center overflow-hidden rounded-full"}>
                                <a className={"flex justify-center"} href={item.link}>
                                    <div
                                        className={` relative w-10/12 rounded-full overflow-hidden after:absolute after:bg-[#003da5] after:opacity-30 after:hover:opacity-0 after:transition-opacity after:duration-500  after:top-0 after:left-0 after:w-full after:h-full`}>
                                        <img
                                            className={" w-full h-full group-hover:scale-[1.2] w-full rounded-full transition duration-300"}
                                            src={item.img}/>
                                    </div>
                                </a>
                                <div
                                    className={`text-white text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`}>
                                    <h1 className={"font-bold text-sm lg:text-xl"}>{item.title}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default CrossLink;