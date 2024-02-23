
import Header from "../components/Header";


const Home =()=>{
    return(
       <>
       <Header/>
       <div className="bg-neutral-400 text-white h-screen w-screen flex justify-center items-center">
            <p>Testing the breakpoints with tailwindCSS</p>
        </div>
       </>
    )
}

export default Home