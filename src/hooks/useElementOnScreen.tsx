import React, { useState, useEffect } from "react";

const useElementOnScreen = (options:any, containerRef: React.MutableRefObject<any>) => {

    //STATES
    const [isVisible,setIsVisible] = useState<boolean>(false);

    //METHODS
    const setSectionVisibility = (entries:any) => {
        console.log(entries);
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    //EFFECTS
    useEffect(() => {
        const observer = new IntersectionObserver(setSectionVisibility,options);
        containerRef.current && observer.observe(containerRef.current);

        return () => {
            containerRef.current && observer.unobserve(containerRef.current);
        }
    }, [])

    return { isVisible };
}

export default useElementOnScreen;