"use client"
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
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
            className={`fade-in ${isVisible ? 'is-visible' : ''}`}
            style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease' }}
        >
            {children}
        </div>
    );
};

export default FadeInOnScroll;