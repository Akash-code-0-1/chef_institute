import { FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import Apply_section from '../components/Apply_section';


const facultyData = [
    {
        name: "MD. OHLDUZZAMAN",
        title: "Trainer and Training Coordinator",
        image: "https://s3-alpha-sig.figma.com/img/9f13/1306/ca97f9d4113523e2d8af081d361bf883?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PM5UwT6spBAA-zoBOJ-swle9hWLkf317AXcZJXsug75sfPPi6~lb4WwLcEktBWwbFeScRo~oAwGs4Yw74qXczPgcrHnNJT6EtnEfiON7kzCegZuTuVUDahHmQgmVqGM9QTeJurO4rP2D7fLv-6jxxINKYk0KvlXvZxkKL05HsW9VSOlEWiljZUWjTfUmE3TtP~3krAXD6g8flrqQfuMgXofav2-uIRzV-yanZrR-erZziupnp7DGcC~Tu0cpaTYy7~Y0hPHYrSyRQx9vNSYelyTnc6xeN7fWplqduvbI36rp8fXsaPaVDSnR6LOoROyNbAG6tPT6oPFBcU2tB61TSw__",
        description: "   Md. Ohlduzzaman, Trainer and Training Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore raining Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore raining Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore raining Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore move it",
    },
    {
        name: "John Smith",
        title: "Pastry Chef & Trainer",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        description: "Trainer and Training Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore raining Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore raining Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore raining Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore move it",
    },
    {
        name: "Emily Davis",
        title: "Nutrition & Dietetics Specialist",
        image: "https://randomuser.me/api/portraits/women/60.jpg",
        description: "Trainer and Training Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore raining Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore raining Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore raining Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore move it",
    },
    {
        name: "Michael Brown",
        title: "Executive Chef & Mentor",
        image: "https://randomuser.me/api/portraits/men/55.jpg",
        description: "Michael Brown Trainer and Training Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore raining Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore raining Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore raining Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore move it",
    },
    {
        name: "Sophia Lee",
        title: "Food Science & Innovation Expert",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        description: "Sophia Lee Trainer and Training Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore raining Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore raining Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore raining Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified lore move it",
    },
];

const ProfileCard = ({ faculty, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`max-w-lg mx-auto p-6 border border-[#AA9452] shadow-custom 
                ${isEven ? "bg-[#FDF8F3] text-black" : "bg-black text-white"}`}>

            {/* Profile Image */}
            <div className="w-full flex justify-center items-start mb-8 bg-white">
                <img src={faculty.image} alt={faculty.name} className="w-[450px] h-[450px] object-cover object-top" />
            </div>

            {/* Name and Title */}
            <div className="text-center mb-6 mt-4 flex flex-col justify-center items-center">
                <h2 className={`text-2xl font-serif mb-4 ${isEven ? "text-[#8B2323]" : "text-white"}`}>
                    {faculty.name}
                </h2>
                <hr className="w-2/3 mb-5" />
                <h3 className="font-medium text-[#C1994D]">{faculty.title}</h3>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-8">{faculty.description}</p>

            <hr className="w-full mb-5" />

            {/* Social Icons and Button */}
            <div className="flex items-center justify-between">
                <div className="flex gap-4">
                    <button className={`w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#8B2323] hover:text-white transition-colors 
                            ${isEven ? "text-[#8B2323]" : "text-white "}`}>
                        <FaFacebookF size={16} />
                    </button>
                    <button className={`w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#8B2323] hover:text-white transition-colors 
                            ${isEven ? "text-[#8B2323]" : "text-white "}`}>
                        <FaWhatsapp size={16} />
                    </button>
                    <button className={`w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#8B2323] hover:text-white transition-colors 
                            ${isEven ? "text-[#8B2323]" : "text-white "}`}>
                        <FaInstagram size={16} />
                    </button>
                    <button className={`w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#8B2323] hover:text-white transition-colors 
                            ${isEven ? "text-[#8B2323]" : "text-white "}`}>
                        <FaYoutube size={16} />
                    </button>
                </div>

                <button className="px-6 py-2 text-sm font-medium transition-colors
                        bg-[#8B2323] text-white hover:bg-[#8B2323]/90 ">
                    VIEW PORTFOLIO
                </button>
            </div>
        </div>
    );
};



const Faculty = () => {
    return (
        <div className="mt-32 ">
            <div className="flex justify-center items-center mb-20">
                <div className="header text-center w-[500px] mt-10 uppercase">
                    <h2 className="text-[#CD9B2F] text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px]">teachers and school counselors</h2>
                    <h1 className="text-[34px] md:text-[40px] lg:text-[45px] xl:text-[55px] font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#993128] to-[#33100D]">
                        Our faculty
                    </h1>
                </div>
            </div>

            {/* Faculty Members Grid */}
            <div className="flex justify-center mb-20 pr-56 md:pr-0">
                <div className=" w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-10 px-6">
                        {facultyData.map((faculty, index) => (
                            <ProfileCard key={index} faculty={faculty} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            <Apply_section />

        </div>
    );
};

export default Faculty;
