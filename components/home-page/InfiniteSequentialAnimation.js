import {motion} from 'framer-motion';
import {useEffect, useState} from "react";

const InfiniteSequentialAnimation = () => {

    const srcImageCarousel = [
        "https://images.ctfassets.net/ywowj8d94i8y/3WC8n0bihJWAjsbw0SAYKm/c3cf3b56c9faf4306d57e1edf8cff408/HP_1.jpg?fm=webp",
        "https://images.ctfassets.net/ywowj8d94i8y/58uzd3lx5yUNV61l3zssLs/427a3168a33243cbb7221fe29d9d3f2c/HP_2.jpg?fm=webp",
        "https://images.ctfassets.net/ywowj8d94i8y/6Mej8o2oc2xRqHpGBRkF5t/a656a40af66193e8bd08b4aadf87e980/HP_3.jpg?fm=webp",
        "https://images.ctfassets.net/ywowj8d94i8y/3uX2kOpzwUbB2ZLmY1wx7P/9b95fa29f4894af39b25fe9bd3d0cafc/HP_4.jpg?fm=webp"
    ];

    const [activeIndex, setActiveIndex] = useState(3);
    const [zIndex, setZIndex] = useState(-9999);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % srcImageCarousel.length);
            setZIndex((prevIndex) => (prevIndex + 1));
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setZIndex( -9999);
        }, 30000);
        return () => clearInterval(timer);
    }, []);

    return srcImageCarousel.map((src, index) => (
        <motion.img
            className={"w-56  h-56 rounded-full top-0  lg:translate-x-0  lg:rounded-none  lg:w-full lg:h-full lg:top-0 lg:left-0 absolute -z-[99999]"}
            animate={index === activeIndex ? {
                clipPath: ["circle(0%)", "circle(100%)"],
                scaleX: [1, 1.4],
                scaleY: [1, 1.4],
                zIndex: [zIndex],
            } : {}}
            transition={{
                duration: 3,
            }}
            style={{
                backgroundColor: 'white',
                transformOrigin: 'center'
            }}
            src={src}>
        </motion.img>
    ));
};
export default InfiniteSequentialAnimation;