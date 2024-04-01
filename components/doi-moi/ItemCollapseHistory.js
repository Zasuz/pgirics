import {useEffect, useState} from "react";
import {useAnimation} from "framer-motion";
import {motion} from 'framer-motion';

const ItemCollapseHistory = ({items}) => {
    const [hoveredImage, setHoveredImage] = useState("");
    const [activeItem, setActiveItem] = useState("");

    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: [0,1],
            transition: {
                duration: 1,
            },
        });
    }, [hoveredImage]);

    const handleCollapse1 = (index) => {
        setActiveItem(index);
    }
    return (
        <div className={"flex flex-row"}>
            <div className={"flex flex-col w-full lg:w-1/2"}>
                {
                    items.map((item, index) => {
                        const active = activeItem === index ? "active text-[1.4rem] font-bold" : "group-hover:text-black text-[#838383] text-[1.4rem]";
                        return (

                            <div key={index} className={"my-5 group"} onMouseEnter={()=>{handleCollapse1(index);setHoveredImage(item.img)}}>
                                <h3 className={"text-primary font-[500] "}>{item.timeLine}</h3>
                                <h1 className={active} >{item.title}</h1>
                                <img className={"block lg:hidden rounded-full"} src={item.img}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className={"hidden lg:flex justify-center items-center w-1/2 rounded-full"}>
                    <motion.img animate={controls}  src={hoveredImage}/>
            </div>
        </div>
    )
}
export default ItemCollapseHistory;