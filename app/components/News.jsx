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
                                src="https://s3-alpha-sig.figma.com/img/b535/af6c/1b362a3bca07554928d933d831f01e53?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KyibBZdQj2Icvcc2tf~FPxQoRRsmziAIK5BRFAPHh1Sny94mVTDd3cj9X9dtZHPtQGAdEdkQ70TDf2byMt3Y-V-e~Le6~Z9jWfnArlFpPjGGS~o2Fc5hkJM5GpGqO14X-ES2GUDmRyB~HDrthxQJeRTDnyxnlby4rrin9S5Qt7ZLFgJ9-~YKN~XPPKNYWCZPM9Vl-FdwjimNAXzHPPSSkxrLxnO5syP5h4bx4AjvWmG6n292BkL-frYav~-w9v-MjK3cjb5cBBkaTseb3BukSXgGuxfQn6J6aa2m71xv-xzePZPv1u7k3NhG9ennmivEv6Lmf9IWjDbh8FMfeSAFUw__"
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
                                src="https://s3-alpha-sig.figma.com/img/f138/2203/feac38bae0deba4138f08a1e4d1db645?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hJBXUT0NJ9x-3-fJCw166JXsJ61-CJOgN0F0b9QveANw6XUIAEm2WaYU~sCdrSJ~9-DTtQUwQhW-WKuSeK94eFcVh-o8qIU0kGohJW2M8RKyJYYIv74jLDMvC-BKeyrt8n7-eIF0r2tAde6sKNMc46QG-LFULc1JMa1Ps5DTjGO4aQkOCb7sU2XsqYJS7ndhqJ60-CdZ-5FmSilSx~sBRGwZoeOHPOvnOeUSVh6Gs9QxwfwK8LkdNPuIeP-zOFxtMGdALLtBHXtltPHKyLicNmwpKsjBWPuN5ZSJH3VCRxr9nqWLkZlhK~pHQ-PGz0c22T3B8~FRdQUxqSm1Rv9acA__"
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
