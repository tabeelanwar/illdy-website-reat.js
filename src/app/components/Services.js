


export default function Services () {
    return (
        <div className="mt-20">
            <div className="text-center">
                <h2 className="text-[#545454] font-bold text-[40px]">Services</h2>
                <p className="text-[#8c9597] text-[17px]">In order to help you grow your business, our carefully selected experts can advise you in in the following areas:</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mt-10 px-6 text-center">
                <div className="mb-10 flex justify-center flex-col
                 items-center">
                    <i className="text-[32px] text-[#f18b6d] fa-solid fa-pencil pen"></i>
                    <h2 className="text-[#f18b6d] text-[25px] font-bold">Web Design</h2>
                    <p className="mt-5 text-[17px] text-[#8c9597]">Consectetur adipiscing elit. Praesent molestie urna <br/> hendrerit erat tincidunt tempus. Aliquam a leo risus. <br/> Fusce a metus non augue dapibus porttitor at in <br/> mauris. Pellentesque commodo...</p>
                </div>
                <div className="mb-10 flex justify-center flex-col
                 items-center">
                    <i className="text-[32px] text-[#f1d208] fa-solid fa-code code"></i>
                    <h2 className="text-[#f1d208] text-[25px] font-bold">Web Development</h2>
                    <p className="mt-5 text-[17px] text-[#8c9597]">Consectetur adipiscing elit. Praesent molestie urna <br/> hendrerit erat tincidunt tempus. Aliquam a leo risus. <br/> Fusce a metus non augue dapibus porttitor at in <br/> mauris. Pellentesque commodo...</p>
                </div>
                <div className="mb-10 flex justify-center flex-col
                 items-center">
                    <i className="text-[32px] text-[#6a4d8a] fa-solid fa-magnifying-glass search"></i>
                    <h2 className="text-[#6a4d8a] text-[25px] font-bold">SEO Analisys</h2>
                    <p className="mt-5 text-[17px] text-[#8c9597]">Consectetur adipiscing elit. Praesent molestie urna <br/> hendrerit erat tincidunt tempus. Aliquam a leo risus. <br/> Fusce a metus non augue dapibus porttitor at in <br/> mauris. Pellentesque commodo...</p>
                </div>
            </div>
        </div>
    );
}