

export default function Hero () {

    return(
        <div>
            <div className="navbar">
                <div className="flex justify-between px-10">
                <div className="mt-10">
                    <img
                    src="cropped-footer-logo-1.png"
                    className="cursor-pointer"
                    />
                </div>
                <div className="mt-15">
                    <ul className="flex text-white gap-10">
                        <li className="text-xl hover:text-[#ffde00] cursor-pointer">About</li>
                        <li className="text-xl hover:text-[#ffde00] cursor-pointer">Portfolio</li>
                        <li className="text-xl hover:text-[#ffde00] cursor-pointer">Testimonials</li>
                        <li className="text-xl hover:text-[#ffde00] cursor-pointer">Services</li>
                        <li className="text-xl hover:text-[#ffde00] cursor-pointer">Blog</li>
                        <li className="text-xl hover:text-[#ffde00] cursor-pointer">Our Team</li>
                        <li className="text-xl hover:text-[#ffde00] cursor-pointer">Contact Us</li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-center text-white items-center mt-70 flex-col">
                <h1 className="text-8xl font-bold mb-10">
                Clean<span className="text-[#ffde00]">.</span>Slick<span className="text-[#ffde00]">.</span>Pixel Perfect
            </h1>
            <p className="text-center text-base">lldy is a great one-page theme, perfect for developers and designers but also for someone who just wants a<br/> new website for his business. Try it now!</p>
            </div>
            
            <div className="w-full flex justify-center">
                <div className="w-140 flex justify-around items-center mt-20">
                <button className="h-[65px] cursor-pointer font-medium w-[245px] border border-white border-3 bg-black opacity-40 duration-300 hover:bg-transparent  text-white ">
                    <h2 className="">Learn more</h2>
                </button>
                <button className="h-[65px] cursor-pointer font-medium w-[245px]  text-[17px] text-white bg-[#ffde00] hover:bg-[#6a4d8a] duration-300 hover:duration-300">Download</button>
                </div>
            </div>

            </div>
        </div>
    );
}