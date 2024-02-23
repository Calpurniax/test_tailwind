import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useScrollContext } from '../context/ScrollContext';

const Header =()=>{

    const { scrollDir } = useScrollContext();
    const location= useLocation();

    const [isOpen, setIsOpen] = useState(false);  
    const handleOpen =()=>{
        setIsOpen(!isOpen)
    }     

    return(
        <header className={ 'bg-transparent z-10 fixed w-screen ' + (location.pathname!=='/contacto' || isOpen ? 'text-white ' : 'text-black ') }>
            <div className={'h-10 w-full grid grid-rows-1 grid-cols-3 items-center text-center '+ (scrollDir==='up' && location.pathname !=='/contacto'  ? `bg-black/50 py-10`:``)}>
                <button className= "w-10 relative focus:outline-none p-3" onClick={handleOpen}>                
                    <div className="block w-5 absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2 z-10 hover:opacity-90" >
                        <span aria-hidden="true" className={"block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out " + (isOpen ? 'rotate-45':'-translate-y-1.5')}>                                        
                        </span>
                        <span aria-hidden="true" className={"block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out " + (isOpen ? 'opacity-0':'')}> 
                        </span>
                        <span aria-hidden="true" className={"block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out " + (isOpen ? '-rotate-45':'translate-y-1.5')}> 
                        </span>
                    </div>
                </button>             
                <h1 className={'hover:opacity-90 uppercase text-3xl col-start-2 place-self-center p-3 ' +(scrollDir==='down' || location.pathname==='/contacto' ? 'hidden':'')}><a href="/">Title</a></h1> 
            </div>
            <nav className={ (isOpen? '-translate-x-0' : '-translate-x-full h-auto bg-white') +' text-white bg-black h-screen absolute top-0 ease-in-out duration-300 w-full lg:w-60' }>  
                <ul className='flex flex-col justify-around uppercase w-full h-full items-center text-3xl relative top-0'>
                    <li className="hover:opacity-90"><Link to="/">Home</Link></li>
                    <li className="hover:opacity-90"><Link to="/">Home</Link></li>
                    <li className="hover:opacity-90"><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </header>
    )   
}
export default Header