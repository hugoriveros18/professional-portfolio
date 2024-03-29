import React, { useState, useEffect } from "react";

export default function useElementOnScreen (options:any, containerRef: React.MutableRefObject<any>, intersectionOnce: boolean) {

    //STATES
    const [isVisible,setIsVisible] = useState<boolean>(false);
    const [freezeElement,setFreezeElement] = useState<boolean>(false);

    //METHODS
    const setSectionVisibility = (entries:any) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
        if(!freezeElement && entry.isIntersecting) {
            setFreezeElement(true);
        }
    }

    //EFFECTS
    useEffect(() => {
        const observer = new IntersectionObserver(setSectionVisibility,options);
        containerRef.current && observer.observe(containerRef.current);

        return () => {
            containerRef.current && observer.unobserve(containerRef.current);
        }
    }, [])

    return intersectionOnce ? { isVisible: freezeElement } : { isVisible: isVisible };
}