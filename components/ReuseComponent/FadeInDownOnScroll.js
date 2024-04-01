"use client"
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInDownOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5 // Thay đổi ngưỡng theo ý muốn
    });
    const elementRef = useRef();

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <div
            ref={ref}
            className={`fade-in-down ${isVisible ? 'is-visible' : ''}`}
        >
            {children}
        </div>
    );
};

export default FadeInDownOnScroll;