import heroPhoto from '../assets/hero.jpg'

const Hero =()=>{
    return(
        <section className='w-full h full' >
            <div className=''>
                <img className='object-cover' src={heroPhoto}/>                
            </div>            
        </section>
    )
}

export default Hero