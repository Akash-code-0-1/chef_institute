import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { Link, useLocation } from "react-router";

const Navbar = () => {

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const slides = [
        { id: 1, src: "https://images.pexels.com/photos/6937472/pexels-photo-6937472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 2, src: "https://images.pexels.com/photos/27662741/pexels-photo-27662741/free-photo-of-a-plate-with-grilled-vegetables-and-meat-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 3, src: "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 4, src: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=600" },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const handleScroll = () => {
            const heroSectionHeight = document.querySelector(".nav_with_hero")?.clientHeight || 0;
            if (window.scrollY > heroSectionHeight) {
                setShowSecondaryNavbar(true);
            } else {
                setShowSecondaryNavbar(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Secondary Navbar */}
            {(showSecondaryNavbar || !isHomePage) && (
                <div className="flex justify-center items-center">
                    <div className="fixed top-0 w-5/6 h-[100px] bg-[#F2E39B] text-white flex items-center justify-between px-15 md:px-10  z-50 shadow-md">
                        {/* Left Section */}
                        <div className="left_section">
                            <img
                                src="https://img.freepik.com/premium-vector/detailed-chef-logo-template_23-2148985188.jpg?w=826"
                                alt=""
                                className="h-[50px] lg:h-[70px] xl:h-[80px]"
                            />
                        </div>

                        {/* Middle Section - Navigation */}
                        <div className="middle_section hidden lg:flex">
                            <ul className="flex flex-row lg:gap-3 lg:text-[12px] xl:text-[19px] xl:gap-7 text-black">
                                {[
                                    { name: "HOME", path: "/" },
                                    { name: "ABOUT", path: "/about" },
                                    { name: "PROGRAM", path: "/programs" },
                                    { name: "OUR FACULTY", path: "/faculty" },
                                    { name: "BLOGS", path: "/blogs" },
                                    { name: "CONTACT", path: "/contact" },
                                    { name: "VERIFY CERTIFICATE", path: "/verify-certificate" },
                                ].map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.path}
                                            className={({ isActive }) =>
                                                `hover:text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D] ${isActive ? "font-bold text-red-600" : ""
                                                }`
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <IoMenu
                                className="text-black text-4xl cursor-pointer"
                                onClick={() => setMenuOpen(!menuOpen)}
                            />
                        </div>

                        {/* Right Section */}
                        <div className="right_section hidden lg:flex justify-center bg-[#993128] p-1">
                            <IoCallSharp className="lg:h-[20px] lg:w-[20px] xl:h-[30px] xl:w-[30px] lg:p-1 xl:p-2 bg-yellow-600" />
                            <button className="ml-3 lg:text-[13px] xl:text-[16px] mr-1">
                                APPLY NOW
                            </button>
                        </div>

                        {/* Mobile Dropdown Menu */}
                        {menuOpen && (
                            <div className="absolute top-[90px] left-0 w-full bg-[#F2E39B] shadow-md flex flex-col lg:hidden">
                                {[
                                    { name: "HOME", path: "/" },
                                    { name: "ABOUT", path: "/about" },
                                    { name: "PROGRAM", path: "/programs" },
                                    { name: "OUR FACULTY", path: "/faculty" },
                                    { name: "BLOGS", path: "/blogs" },
                                    { name: "CONTACT", path: "/contact" },
                                    { name: "VERIFY CERTIFICATE", path: "/verify-certificate" },
                                ].map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className="py-3 pl-12 text-black hover:text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D] text-lg border-b border-yellow-700"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Main Hero Section with Navbar */}
            {isHomePage && (
                <div className="relative w-full h-[100vh] overflow-hidden nav_with_hero">
                    {/* Background Slider */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                                    }`}
                                style={{
                                    backgroundImage: `url(${slide.src})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />
                        ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-600 to-transparent opacity-50"></div>


                    {/* Main Section with Navbar and Hero */}
                    <div className="relative z-20 text-white">
                        {/* Navbar */}
                        <div className="flex justify-between items-center h-[80px] px-10 lg:px-40 border-b-[1px] border-gray-400">
                            <div className="flex items-center">
                                <IoMenu className="h-[40px] w-[40px] text-white" />
                            </div>
                            <div className="flex gap-4">
                                <FaFacebook className="h-[24px] w-[24px] text-white" />
                                <FaWhatsapp className="h-[24px] w-[24px] text-white" />
                                <FaInstagram className="h-[24px] w-[24px] text-white" />
                                <FaYoutube className="h-[24px] w-[24px] text-white" />
                                <IoIosSearch className="ml-12 h-[24px] w-[24px] text-white" />
                            </div>
                        </div>

                        {/* Hero Section */}
                        <div className="flex flex-col  items-center h-[calc(100vh-80px)] text-center px-8">
                            {/* Slider Controls */}
                            <div className="flex items-center relative top-[80%] lg:top-0 justify-between mt-8 px-10 lg:px-40 text-white text-sm md:text-lg">
                                <button
                                    onClick={prevSlide}
                                    className="flex items-center gap-2 text-white uppercase tracking-wider hover:opacity-80 transition"
                                >
                                    <span className="md:pr-10 font-cinzel">PREV</span>
                                </button>

                                <div className="h-[1px] w-[15px] md:w-[100px] bg-gray-400 m-5"></div>

                                <div className="flex items-center">
                                    {slides.map((_, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`cursor-pointer uppercase tracking-wide md:text-[25px] ${index === currentSlide
                                                ? "text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D] font-bold font-cinzel"
                                                : "text-white"
                                                } flex items-center`}
                                        >
                                            {`0${index + 1}`}
                                            {index !== slides.length - 1 && (
                                                <div className="h-5 md:h-[20px] w-[1px] bg-slate-400 rounded ml-5 mr-5 "></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="h-[1px] md:w-[100px] bg-gray-400 m-5 pl-4"></div>
                                <button
                                    onClick={nextSlide}
                                    className="flex items-center gap-2 text-white uppercase tracking-wider hover:opacity-80 transition"
                                >
                                    <span className="md:pl-10 font-cinzel">NEXT</span>
                                </button>
                            </div>


                            <div className="flex justify-center  lg:items-end w-full h-full">

                                <div className="content grid relative md:left-[] lg:left-20 xl:left-28 bottom-10  grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-28 w-3/4 place-items-center items-end ">

                                    <div className="left_section hidden lg:flex flex-col relative bg-[#F2E39B] p-4 rounded-md h-fit">

                                        <div className="text-left mb-5 lg:text-[18px] xl:text-[29px] text-black">
                                            <h1>Lets Create Your Dream Space</h1>
                                        </div>
                                        <div className="contents flex">
                                            <div className="item flex flex-row lg:gap-5 xl:gap-10">

                                                <div className="text flex items-center gap-1">
                                                    <h1 className="lg:text-[25px] xl:text-[34px] font-cinzel text-[#993128] font-semibold">2.5K</h1>
                                                    <div className="xl:w-16">
                                                        <p className="lg:text-[8px] xl:text-[10px] ">Customer <br /> Orders</p>
                                                    </div>
                                                </div>

                                                <div className="text flex items-center gap-1">
                                                    <h1 className="lg:text-[25px] xl:text-[34px]  font-cinzel text-[#993128] font-semibold">100+</h1>
                                                    <div className="lg:w-10 xl:w-20 ">
                                                        <p className="lg:text-[8px] xl:text-[10px]">Patters All <br /> Over the world</p>
                                                    </div>
                                                </div>

                                                <div className="text flex">
                                                    <input type="text" placeholder="Tell Us About Your Mind" className="lg:w-[120px] xl:w-[200px] xl:h-[50px] bg-transparent border-b-[1px] border-gray-400 text-black" />
                                                </div>

                                                <div className="text flex">
                                                    <button className="bg-[#993128] p-1 lg:w-[70px] xl:w-[130px] h-[40px] flex justify-center items-center text-[9px]"> Get Quote</button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="right_section hidden relative lg:flex flex-col gap-0 h-fit md:w-[250px] lg:w-[250px] xl:w-[350px]">
                                        <div className="text_container text-right ">
                                            <p className="mb-3 mt-10 text-[12px]">
                                                "Chief Institute transformed my career with expert faculty and hands-on learning. Grateful for the mentorship and support!"
                                            </p>
                                            <span className="pt-3">- David Jos</span>


                                        </div>
                                        <div className="explore w-full md:h-[100px] lg:h-[120px] xl:h-[150px] flex justify-start items-center bg-[#993128]  rounded-l-full rounded-r-md ml-4 p-3 text-left">
                                            <img src="https://img.freepik.com/premium-vector/culinary-elegance-crafting-memorable-restaurant-logos-distinctive-dining-experience_579306-22256.jpg" alt="" className="rounded-full md:h-[70px] lg:h-[90px] xl:h-[120px] " />
                                            <span className=" md:ml-10 lg:ml-5 xl:ml-20 lg:text-[20px] xl:text-[34px]">Explore <br /> Services</span>
                                        </div>

                                    </div>

                                </div>

                            </div>





                        </div>






                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
