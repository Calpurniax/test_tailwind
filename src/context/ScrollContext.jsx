import { createContext, useContext } from 'react';
import useDetectScroll from '@smakss/react-scroll-direction';

export const ScrollContext = createContext();
export const useScrollContext = () => {

    const context = useContext(ScrollContext);
    if (!context) throw new Error("No scroll detected")
    return context;
}

export const ScrollProvider = ({ children }) => {

    const { scrollDir, scrollPosition } = useDetectScroll({thr:50}); 
                                                                                                                                                  
    return (
        <ScrollContext.Provider value={{ scrollDir, scrollPosition}}>
            {children}
        </ScrollContext.Provider>
    )
}