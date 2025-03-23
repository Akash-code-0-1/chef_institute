import React from 'react'
import { FaClock } from "react-icons/fa";

const News = () => {
    return (
        <div className="items-center flex justify-center mb-10">
            <div className=" py-12 px-6 md:px-16 lg:px-24 w-2/3">

                <div className="flex justify-between lg:items-center  flex-col lg:flex-row mb-8">
                    <h2 className="text-[38px] font-semibold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#993128] to-[#33100D]">
                        Latest News & Article
                    </h2>
                    <div className="w-full font-mulish text-[#525252]">
                        <p>In today's fast-paced world, staying informed is key to staying competitive. Whether you're in technology, education, or the culinary arts, keeping up with the latest news and articles in your field ensures you stay ahead.</p>
                    </div>
                </div>


                <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">

                    <div className="max-w-sm">
                        <div className="relative shadow-custom ">
                            <img
                                src="https://images.pexels.com/photos/7505570/pexels-photo-7505570.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Culinary Excellence"
                                className="w-full h-[350px] object-cover"
                            />
                        </div>
                        <div className="mt-4">

                            <h2 className="text-lg font-semibold text-red-800 font-cinzel">
                                MASTER THE ART OF CULINARY EXCELLENCE
                            </h2>
                            <div className="flex items-center text-gray-600 text-sm my-2 mt-5">
                                <span className="text-[#CD9B2F]"><FaClock /></span>
                                <span className="ml-2 text-[#CD9B2F]">August 2, 2023</span>
                            </div>

                            <p className="text-sm text-[#525252] mt-4">
                                Elevate your cooking skills with our Professional Food & Beverage Chef Course....
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#993128] to-[#33100D] font-medium cursor-pointer text-[16px] ">See More</span>
                            </p>
                        </div>
                    </div>

                    <div className="max-w-sm ">
                        <div className="relative">
                            <img
                                src="https://images.pexels.com/photos/27677944/pexels-photo-27677944/free-photo-of-woman-in-dress-sitting-and-reading-magazine.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Culinary Excellence"
                                className="w-full h-[350px] object-cover shadow-custom"
                            />
                        </div>
                        <div className="mt-4">

                            <h2 className="text-lg font-semibold text-red-800 font-cinzel">
                                MASTER THE ART OF CULINARY EXCELLENCE
                            </h2>
                            <div className="flex items-center text-gray-600 text-sm my-2 mt-5">
                                <span className="text-[#CD9B2F]"><FaClock /></span>
                                <span className="ml-2 text-[#CD9B2F]">August 2, 2023</span>
                            </div>

                            <p className="text-sm text-[#525252] mt-4">
                                Elevate your cooking skills with our Professional Food & Beverage Chef Course....
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#993128] to-[#33100D] font-medium cursor-pointer text-[16px] ">See More</span>
                            </p>
                        </div>
                    </div>

                    <div className="">

                        <div className=" mb-6">
                            <div className="flex items-center text-gray-600 text-sm my-2 ">
                                <span className="text-[#CD9B2F]"><FaClock /></span>
                                <span className="ml-2 text-[#CD9B2F] text-[17px]">August 2, 2023</span>
                            </div>

                            <div className="">
                                <h1 className='text-[25px] font-cinzel'>Sustainable Dining: The Future of Food & Beverage</h1>
                            </div>
                        </div>

                        <div className=" mb-6">
                            <div className="flex items-center text-gray-600 text-sm my-2 mt-5">
                                <span className="text-[#CD9B2F]"><FaClock /></span>
                                <span className="ml-2 text-[#CD9B2F] text-[17px]">August 2, 2023</span>
                            </div>

                            <div className="">
                                <h1 className='text-[25px] font-cinzel'>Sustainable Dining: The Future of Food & Beverage</h1>
                            </div>
                        </div>
                        <div className=" mb-6">
                            <div className="flex items-center text-gray-600 text-sm my-2 mt-5">
                                <span className="text-[#CD9B2F]"><FaClock /></span>
                                <span className="ml-2 text-[#CD9B2F] text-[17px]">August 2, 2023</span>
                            </div>

                            <div className="">
                                <h1 className='text-[25px] font-cinzel'>Sustainable Dining: The Future of Food & Beverage</h1>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center text-gray-600 text-sm my-2 mt-5">
                                <span className="text-[#CD9B2F]"><FaClock /></span>
                                <span className="ml-2 text-[#CD9B2F] text-[17px]">August 2, 2023</span>
                            </div>

                            <div className="">
                                <h1 className='text-[25px] font-cinzel'>Sustainable Dining: The Future of Food & Beverage</h1>
                            </div>
                        </div>

                    </div>


                </div>


            </div>
        </div>
    )
}

export default News;
