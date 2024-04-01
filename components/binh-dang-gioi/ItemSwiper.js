import React from "react";

const ItemSwiper = ({item}) => {


    return (
        <div className={"flex flex-col text-center px-10 mb-10"}>
            <img className={"rounded-full mb-5  "}
                 src={item.img}/>
            <h1 className={"font-medium text-primary"}>{item.title}</h1>
            <p className={"text-[14px]"}>{item.content}</p>
        </div>
    )
}
export default ItemSwiper;