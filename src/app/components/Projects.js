import Image from "next/image";
import First from '../../../public/frontpageproject-4.jpg'
import Second from "../../../public/frontpageproject-3.jpg"

export default function Projects () {
    return(
        <div>
            <div className="text-center">
                <h2 className="text-[#545454] mt-20 text-[40px] font-bold">Projects</h2>
                <p className="text-[#8c9597] text-[17px]">You'll love our work. Check it out!</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                <div className="hover:opacity-50">
                    <Image
                    src={First}
                    alt="projects"
                    />              
                </div>

                <div className="hover:opacity-50">
                    <img
                    src= './frontpageproject-3.jpg'
                    alt="projects"
                    />                
                </div>

                <div className="hover:opacity-50">
                    <img
                    src='./frontpageproject-2.jpg'
                    alt="projects"
                    />               
                 </div>

                <div className="hover:opacity-50">
                    <img
                    src='./frontpageproject-1.jpg'
                    alt="projects"
                    />                
                </div>

            </div>
        </div>
    );
}