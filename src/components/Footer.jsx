const Footer =()=>{
    return(
        <footer className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 bg-black text-white p-2 items-center">
            <p className="lg:row-start-1">Email</p>
            <p className="lg:justify-self-end lg:row-start-1 lg:col-start-3"><a href="/terminos-de-uso">Terms</a></p>
            <p className="text-xs lg:row-start-3 lg:col-start-2 lg:place-self-center">2024</p>
        </footer>
    )
}

export default Footer