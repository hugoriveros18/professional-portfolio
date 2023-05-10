import React, { useState, useMemo, useEffect } from "react";



export default function useActiveProjectTab({
    allRef,
    reactRef,
    vtexRef,
    vueRef
}:UseActiveProjectTabProps) {
    //STATES
    const [activeTab, setActiveTab] = useState<string>('');

    //MEMO
    const borderPosition = useMemo(() => {
        if(allRef.current) {
            switch (activeTab) {
                case 'all':
                    return allRef.current.offsetLeft;
                case 'react':
                    return reactRef.current.offsetLeft;
                case 'vtex':
                    return vtexRef.current.offsetLeft;
                case 'vue':
                    return vueRef.current.offsetLeft;
                default:
                    return 0;
            }
        }
    }, [activeTab])

    //EFFECTS
    useEffect(() => {
        setActiveTab('all');
    },[])

    const borderwidth = useMemo(() => {
        if(allRef.current) {
            switch (activeTab) {
                case 'all':
                    return allRef.current.clientWidth;
                case 'react':
                    return reactRef.current.clientWidth;
                case 'vtex':
                    return vtexRef.current.clientWidth;
                case 'vue':
                    return vueRef.current.clientWidth;
                default:
                    return 0;
            }
        }
    }, [activeTab])

    //METHODS
    const handleTabChange = (refName:string) => {
        setActiveTab(refName);
    }

    return {
        activeTab,
        borderPosition,
        borderwidth,
        handleTabChange
    }
}
