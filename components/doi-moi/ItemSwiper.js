const ItemSwiper = ({items}) => {
    return (
        <div
            className={"shadow-lg bg-white flex flex-col overflow-hidden group hover:lg:rounded-2xl h-auto relative  rounded-t-full transition-all duration-300"}>
            <img src={items.img} className={"bg-white h-full lg:hover:translate-y-1/3 transition duration-1000"}/>
            <div className={"z-20 bg-white group-hover:-translate-y-[90%] text-wrap px-5 py-5 transition duration-1000 h-80"}>
                <div className={" bg-white max-h-[650px] w-full overflow-hidden group-hover:overflow-y-scroll bg-white "}>
                    <h1 className={"font-[600] text-[1.35rem] text-primary mt-3 mb-2 "}>{items.title}</h1>
                    <p className={"bg-white"}>{items.content}</p>
                </div>
            </div>
            <div className={"px-5 py-5 bg-white z-50"}>
                <a href={items.link}>Tìm hiểu thêm</a>
            </div>
        </div>
    )
}
export default ItemSwiper;