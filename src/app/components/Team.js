


export default function Team () {
    return (
        <div className="mt-20">
            <div className="text-center">
                <h2 className="text-[#545454] font-bold text-[40px]">Team</h2>
                <p className="text-[#8c9597] text-[17px]">Meet the people that are going to take your business to the next level.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mt-20 text-center">
                <div className="mb-10  flex justify-center flex-col
                 items-center">
                    <div className="flex gap-6">
                <div>
                    <img 
                    src="./front-page-team-1.jpg" 
                    className="rounded-full w-30"/>
                </div>
                <div className="text-left">
                    <h2 className="text-[23px] font-bold text-[#545454]">Mark Lawrance</h2>
                    <p className="text-[15p7] text-[#f18b6d]">Web Designer</p>
                    <p className="text-[#8c9597] text-[17px] mt-5">Creative, detail-oriented,<br/> always focused.</p>
                    <div className="text-[#f18b6d] text-[17px]">
                    <i class="fa-brands fa-facebook-f facebook"></i>                    
                    <i class="fa-brands fa-twitter twitter"></i>
                    <i class="fa-brands fa-linkedin-in linkd-in"></i>
                </div>
                </div>
                </div>
                </div>
                <div className="mb-10  flex justify-center flex-col
                 items-center">
                    <div className="flex gap-6">
                <div>
                    <img 
                    src="./front-page-team-2.jpg" 
                    className="rounded-full w-30"/>
                </div>
                <div className="text-left">
                    <h2 className="text-[23px] font-bold text-[#545454]">Jane Stenton</h2>
                    <p className="text-[15p7] text-[#f1d204]">SEO Specialist</p>
                    <p className="text-[#8c9597] text-[17px] mt-5">Curious, tech-geeck and gets <br/> serious when it comes to <br/> work.</p>
                    <div className="text-[#f1d204] text-[17px]">
                    <i class="fa-brands fa-facebook-f facebook"></i>                    
                    <i class="fa-brands fa-twitter twitter"></i>
                    <i class="fa-brands fa-linkedin-in linkd-in"></i>
                </div>
                </div>
            </div>
                </div>
                <div className="mb-10  flex justify-center flex-col
                 items-center">
                    <div className="flex gap-6">
                <div>
                    <img 
                    src="./front-page-team-3.jpg" 
                    className="rounded-full w-30"/>
                </div>
                <div className="text-left">
                    <h2 className="text-[23px] font-bold text-[#545454]">John Smith</h2>
                    <p className="text-[15p7] text-[#6a4d8a]">Developer</p>
                    <p className="text-[#8c9597] text-[17px] mt-5">Enthusiastic, passionate with <br/> great sense of humor.</p>
                    <div className="text-[#6a4d8a] text-[17px]">
                    <i class="fa-brands fa-facebook-f facebook"></i>                    
                    <i class="fa-brands fa-twitter twitter"></i>
                    <i class="fa-brands fa-linkedin-in linkd-in"></i>
                </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
}