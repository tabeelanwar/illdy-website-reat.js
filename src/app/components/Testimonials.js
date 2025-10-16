

export default function Testimonials () {
    return (
        <div className="mt-20">
            <div className="bgimg text-white text-center p-20">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[40px] font-bold">Testimonials</h1>
                    <img
                    src="./front-page-team-3.jpg"
                    className="h-[140px] w-[140px] rounded-full mt-10"
                    />
                    <p className="text-[17px] pt-12 mt-6 w-[1050px] h-[160px] bg-[#6a4d8a]">"Awesome theme with great design and awesome support. If you don't know how to code your own WordPress theme, but you still want a <br/> good-looking website for your business, Illdy might be exactly what you need. It is a slick theme with a lot of of features to choose from."</p>
                    <h2 className="text-[22px] font-bold mt-10">Mike Muller</h2>
                    <div className="mt-10 h-[12px] w-[120px] flex gap-4 items-center justify-center rounded-full">
                        <div className="h-[14px] w-[14px] border  rounded-[16px]">
                        </div>
                        <div className="h-[14px] w-[14px] bg-white hover:bg-transparent hover:border  rounded-[16px]">
                        </div>
                        <div className="h-[14px] w-[14px] bg-white hover:bg-transparent hover:border  rounded-[16px]">
                        </div>
                        <div className="h-[14px] w-[14px] bg-white hover:bg-transparent hover:border  rounded-[16px]">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}