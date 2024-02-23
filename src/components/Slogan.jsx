import { useRef } from "react";
import { useIsVisible } from '../functions/useIsVisible';

const Slogan = () => {
    
    const sloganRef = useRef(null)
    const isVisible = useIsVisible(sloganRef)  
       
    return (
        <section className="text-7xl" >
            <div className="py-9 px-2" >
                <p ref={sloganRef}>
                    <span className={'opacity-0 '+(isVisible? 'animate-slidein300' :'')}>Some </span>
                </p>
            </div>
            <div className="py-9 px-2  bg-black text-white">
                <p className="text-right">
                    <span className={'opacity-0 '+(isVisible? 'animate-slidein900' :'')}>animation</span>
                </p>
            </div>
        </section>
    )
}
export default Slogan