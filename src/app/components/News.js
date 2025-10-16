import Image from "next/image";

import First from '../../../public/pic2.jpg'
import First2 from '../../../public/pic3.jpg'
import First3 from '../../../public/pic4.jpg'
export default function News () {
    return (
        <div>
            <div className="h-[950px] bg-[#222f36] pt-20">
                <div className="text-center flex flex-col justify-center items-center">
                    <h2 className="text-white text-[40px] font-bold">Latest News</h2>
                    <p className="text-[#8c9597] text-[17px]">If you are interested in the latest articles in the industry, take a sneak peek at our blog. You have nothing to loose!</p>
                    <button 
                    className="text-white h-[50px] w-[160px] bg-[#f1d204] hover:bg-[#6a4d8a] hover:duration-500 duration-500 mt-10 flex justify-center items-center gap-2 rounded font-semibold"><i className="fa-solid fa-circle-chevron-right right"></i> 
                    See Blog
                    </button>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-25 px-10 gap-8">
                    <div>
                        <div className="bg-white">
                
                        <Image src={First} alt="a" className="w-full"/>
                        <div className="px-4 py-3 space-y-2">
                        <h2 className="text-[25px] font-bold text-[#545454] px">We Have Made Illdy<br/> Theme SEO Friendly</h2>
                        <p className="card1-para">Illdy One Page WordPress theme is fully <br/>SEO friendly and is ready to help you to achieve the highest rankings…</p>
                        <p className="card1-para2"><i class="fa-solid fa-arrow-right"></i> Read more</p>
                        </div>
                    </div>
                    </div>
                     <div className="bg-white h-[500px]">
                
                        <Image src={First2} alt="a" className="w-full"/>
                        <div className="px-4 py-3 space-y-2">
                        <h2 className="text-[25px] font-bold text-[#545454] px">We Have Made Illdy<br/> Theme SEO Friendly</h2>
                        <p className="card1-para">Illdy One Page WordPress theme is fully <br/>SEO friendly and is ready to help you to achieve the highest rankings…</p>
                        <p className="card1-para2"><i class="fa-solid fa-arrow-right"></i> Read more</p>
                        </div>
                    </div>


                     <div>
                        <div className="bg-white">
                
                        <Image src={First3} alt="a" className="w-full"/>
                        <div className="px-4 py-3 space-y-2">
                        <h2 className="text-[25px] font-bold text-[#545454] px">We Have Made Illdy<br/> Theme SEO Friendly</h2>
                        <p className="card1-para">Illdy One Page WordPress theme is fully <br/>SEO friendly and is ready to help you to achieve the highest rankings…</p>
                        <p className="card1-para2"><i class="fa-solid fa-arrow-right"></i> Read more</p>
                        </div>
                    </div>
                     </div>

                </div>
            </div>
        </div>
    );
}