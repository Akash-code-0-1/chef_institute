import { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const facultyMembers = [
    {
        name: "MURSHIDA KHANAM",
        role: "Head Chef",
        description:
            "Md. Ohlduzzaman, Trainer And Training Coordinator at ENTH Bangladesh. Specializes in F&B Production.lo lore Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolor explicabo temporibus alias sequi eum nulla   reprehenderit odio, ea fugit  adipisci totam dolorem maxime, cupiditate iure where is this resturt this is demo n F&B Production.lo lore Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolor explicabo temporibus alias sequi eum nulla   reprehenderit odio, ea fugit  adipisci totam dolorem maxime, cupiditate iure where is this resturt this is demo",
        image: "https://images.pexels.com/photos/27870589/pexels-photo-27870589/free-photo-of-a-woman-in-a-chef-s-hat-holding-a-plate-of-food.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        profession: "Principle"
    },
    {
        name: "MD. OHLDUZZAMAN",
        role: "Trainer And Training Coordinator",
        description:
            "Md. Ohlduzzaman, Trainer And Training Coordinator at ENTH Bangladesh. Specializes in F&B Production.lo lore Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolor explicabo temporibus alias sequi eum nulla   reprehenderit odio, ea fugit  adipisci totam dolorem maxime, cupiditate iure where is this resturt this is demo n F&B Production.lo lore Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolor explicabo temporibus alias sequi eum nulla   reprehenderit odio, ea fugit  adipisci totam dolorem maxime, cupiditate iure where is this resturt this is demo",
        image: "https://images.pexels.com/photos/24876025/pexels-photo-24876025/free-photo-of-man-posing-with-a-loaf-in-a-yellow-chef-outfit.jpeg?auto=compress&cs=tinysrgb&w=600",
        profession: "Trainer"
    },
    {
        name: "MD. RAFIUL HAQUE",
        role: "Pastry Chef",
        description:
            "Md. Ohlduzzaman, Trainer And Training Coordinator at ENTH Bangladesh. Specializes in F&B Production.lo lore Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolor explicabo temporibus alias sequi eum nulla   reprehenderit odio, ea fugit  adipisci totam dolorem maxime, cupiditate iure where is this resturt this is demo n F&B Production.lo lore Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolor explicabo temporibus alias sequi eum nulla   reprehenderit odio, ea fugit  adipisci totam dolorem maxime, cupiditate iure where is this resturt this is demo",
        image: "https://images.pexels.com/photos/8270011/pexels-photo-8270011.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        profession: "Trainer"

    },
    {
        name: "MD. HABIB ISLAM",
        role: "Instructor",
        description:
            "Md. Ohlduzzaman, Trainer And Training Coordinator at ENTH Bangladesh. Specializes in F&B Production.lo lore Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolor explicabo temporibus alias sequi eum nulla   reprehenderit odio, ea fugit  adipisci totam dolorem maxime, cupiditate iure where is this resturt this is demo n F&B Production.lo lore Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolor explicabo temporibus alias sequi eum nulla   reprehenderit odio, ea fugit  adipisci totam dolorem maxime, cupiditate iure where is this resturt this is demo",
        image: "https://images.pexels.com/photos/8629075/pexels-photo-8629075.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        profession: "Trainer"

    },
    {
        name: "WAHID ABDULLA ISLAM",
        role: "Master Chef",
        description:
            "WAHID ABDULLA ISLAM, Trainer And Training Coordinator at ENTH Bangladesh. Specializes in F&B Production.lo lore Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolor explicabo temporibus alias sequi eum nulla   reprehenderit odio, ea fugit  adipisci totam dolorem maxime, cupiditate iure where is this resturt this is demo n F&B Production.lo lore Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolor explicabo temporibus alias sequi eum nulla   reprehenderit odio, ea fugit  adipisci totam dolorem maxime, cupiditate iure where is this resturt this is demo",
        image: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=600",
        profession: "Trainer"

    },
];

export default function FacultySlider() {
    const [currentIndex, setCurrentIndex] = useState(1);

    // Auto-slide every 5 seconds
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextSlide();
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? facultyMembers.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === facultyMembers.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full bg-gradient-to-t from-white via-[#F2E39B] to-white  py-8">
            {/* Header */}
            <div className="flex justify-center flex-col items-center ">
                <div className="">
                    <h2 className="text-[#CD9B2F] text-[14px] ">TEACHES AND SCHOOL COUNSELORS</h2>
                </div>
                <div className="font-cinzel font-semibold mb-4">
                    <h1 className="text-[30px] md:text-[54px] font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]"><span
                        className="inline-block relative w-[30px] h-[30px] md:w-[54px] md:h-[54px] rounded-full bg-cover bg-center mx-1 align-middle bottom-1"
                        style={{
                            backgroundImage: "url('https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600')",
                            verticalAlign: "middle"
                        }}>
                    </span>UR EXPERT FACULTY</h1>
                </div>
                <div className="mb-10 text-center text-[15px] font-mulish">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolor explicabo temporibus alias sequi eum nulla   reprehenderit odio, ea fugit <br /> adipisci totam dolorem maxime, cupiditate iure where is this resturt this is demo
                </div>

            </div>

            {/* Slider Section */}
            <div className="relative w-full  sm:h-[800px] overflow-hidden mt-1 md:mt-6 pl-20 justify-center ">
                <div className="relative w-full flex justify-center h-full  bg-transparent flex-col md:flex-row xl:pl-36 xl:pr-24">
                    {/* Left Section - Content */}
                    <div className="w-2/3 lg:1/3 h-full flex flex-col mt-14 px-4  text-white bg-none">
                        <h3 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl  font-bold mb-2 font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">
                            {facultyMembers[currentIndex].name}
                        </h3>
                        <p className="text-xl  font-mulish text-black mb-8">{facultyMembers[currentIndex].role}</p>
                        <p className="text-sm mb-6 font-light text-black italic">{facultyMembers[currentIndex].description}</p>
                        <button className="mt-6 w-[200px] justify-center font-cinzel items-center  text-white size-11 bg-red-800 flex mb-7">
                            VIEW PORTFOLIO
                        </button>

                        <div className="mt-5 flex gap-4">
                            <FaFacebook className="text-red-800 h-6 w-6" />
                            <FaWhatsapp className="text-red-800 h-6 w-6" />
                            <FaInstagram className="text-red-800 h-6 w-6" />
                            <FaYoutube className="text-red-800 h-6 w-6" />
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div
                        className="w-1/2 h-[300px] ml-10 md:ml-0 md:h-full bg-center transition-all duration-500"
                        style={{
                            backgroundImage: `url(${facultyMembers[currentIndex].image})`,
                            backgroundSize: "contain", // Ensure the whole image is visible
                            backgroundRepeat: "no-repeat", // Prevent repeating
                            backgroundPosition: "center center", // Center the image
                        }}
                    />
                </div>



                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 -translate-y-1/2  text-black px-4 py-2 "
                >
                    <FaArrowLeftLong className="h-10 w-10 " />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-black px-4 py-2 "
                >
                    <FaArrowRightLong className="h-10 w-10 " />
                </button>

                {/* Thumbnail Navigation */}
                <div className="hidden absolute bottom-0 left-0 right-0  lg:flex justify-center gap-14 p-4 bg-white/30 backdrop-blur-md lg:h-[140px] xl:h-[180px] 2xl:h-[200px]">
                    {facultyMembers.map((member, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className="focus:outline-none text-center flex flex-col items-center"
                        >
                            <div
                                className={`lg:h-14 lg:w-14 xl:h-24 xl:w-24 2xl:w-28 2xl:h-28 rounded-full bg-cover bg-center border-2 transition-all duration-300 ${index === currentIndex
                                    ? "border-[#8B2323] -translate-y-3 scale-110"
                                    : "border-none"
                                    }`}
                                style={{
                                    backgroundImage: `url(${member.image})`,
                                    backgroundSize: "cover", // Ensure the whole image is visible
                                    backgroundRepeat: "no-repeat", // Prevent repeating
                                    backgroundPosition: "center center", // Center the image
                                }}
                            />
                            <p className="lg:text-[13px] xl:text-[20px]  font-cinzel font-semibold mt-2 text-center text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">
                                {member.name}
                            </p>
                            <p className="lg:text-[10px] xl:text-sm  font-mulish">{member.profession}</p>
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
}
