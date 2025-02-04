import React from 'react'
import { MdOutlinePerson } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Apply_section from '../components/Apply_section';


const Blogs = () => {
    return (
        <div className="mt-32">
            <div className="flex justify-center items-center mb-20">
                <div className="header text-center w-[500px] mt-10 uppercase">
                    <h2 className="text-[#CD9B2F] text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px]">culinary school blog</h2>
                    <h1 className="text-[34px] md:text-[40px] lg:text-[45px] xl:text-[55px] font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#993128] to-[#33100D]">
                        latest news & <br /> article
                    </h1>
                </div>
            </div>

            <div className="text-center mb-8">
                <h1 className="text-2xl placeholder md:text-4xl lg:text-5xl mb-4 font-cinzel">MASTER THE ART OF CULINARY EXCELLENCE</h1>
                <div className="flex items-center justify-center gap-4 text-sm text-[#C1994D]">

                    <span className="flex text-[10px] md:text-[15px] items-center gap-1">
                        <MdOutlinePerson />
                        Tim Cook Advanced
                    </span>

                    <div className="w-[2px] h-4 bg-[#C1994D]"></div>

                    <span className="flex  text-[10px] md:text-[15px] items-center gap-1">
                        <FaClock />
                        August 5, 2023
                    </span>

                    <div className="w-[2px] h-4 bg-[#C1994D]"></div>

                    <span className="flex  text-[10px] md:text-[15px] items-center gap-1">
                        <FaRegComment />
                        No Comments
                    </span>
                </div>
            </div>

            <div className="flex justify-center mb-10">
                <div className="w-3/4">

                    <img src="https://s3-alpha-sig.figma.com/img/b535/af6c/1b362a3bca07554928d933d831f01e53?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IwbC2XR~EusGUCannNlETz~ApZCsieYwf-l0iPZINj3QVDUHJrFDLxQ2PSIUCSVxd63wuAghgVtYcm4O7I9VZNFHx3sOfpHF4BiuP0Gk0g9Gj-L5D1~-g~errtgSUb0k5SyIZF2ldh8DLefLkXpEWe7c4YuNRu1c0vtZ2q9yyhCmKRmAuZZ0u23jP9pwTaXAMHSsoNej49Ww07BY22zVOO~HSxdLtmoGnMAO4bPczY4zNvSdmMgJEpNl2gmol2Fq5x~ZVKOpYf276VyzSeeUDhmTSjxoF18JDINi5qyJVgzxx84c80bfWg57QbhwpEeGTOZCeU18RZ6lwCC7AUE0IA__" alt="" className='md:h-[380px] lg:h-[450px] xl:h-[570px] 2xl:h-[700px] w-full object-cover' />

                </div>
            </div>


            <div className="flex justify-center mb-10">
                <div className="w-3/4">

                    {/* <!-- Main Content Layout --> */}
                    <div class="md:grid md:grid-cols-[3fr_1fr] gap-10">

                        {/* <!-- Left Content --> */}
                        <div>

                            <p class="text-lg text-gray-700 leading-relaxed font-mulish">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ex urna. Morbi vitae ex eget erat condimentum suscipit at nec libero. Nam suscipit finibus quam eu vehicula. Proin eget sodales lorem.
                            </p>

                            <h2 class="mt-6 text-2xl font-bold tracking-wide font-cinzel">UNLEASH YOUR INNER CHEF</h2>
                            <p class="text-gray-600 leading-relaxed mt-2 font-mulish">
                                Nunc dui libero, laoreet ut enim at, scelerisque placerat nunc. Nunc vel libero vehicula, commodo velit id, accumsan orci. Integer porta maximus mi eu dignissim. Ut bibendum mauris sit amet metus vestibulum faucibus. Nam commodo sit amet ligula mattis sollicitudin. Pellentesque molestie ultrices tortor.
                            </p>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <img src="https://s3-alpha-sig.figma.com/img/2ebd/a889/8e41213697f0a49bb058614cd8350935?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=scEOJS01D2NMjsF-5xfPwvI1eS0zdctPOFlNLjD2ByhBtmTqQtYTCDquO6rwInooB4lmzPVnXl~61Xo5l0X0oVvotl1SKoh5W9AxpPZIQpbNknwBNJrQMfVYL-ehwfJvp5MZ1Sisi9~F1W2~Cc6-cIzGyUzB8lCZlPu7Cnuc-TYs0Vp5Fkzx12b1N9v3pv~7huPB-Eqgq4NguBxwH3aVHaSDls7APK2xSljpCu5Az0pPxjIZsEgROEaRgtHHXQpm2m3yySOxIeJvRTJXl3~wirR7c1zhCKFIbKMd6Tx80FQMGdTlftc2UuF0i2GOGb3Q8RTYkXFqdsLc7z0LybAcBw__" alt="Cooking" class="" />
                                <img src="https://s3-alpha-sig.figma.com/img/2ebd/a889/8e41213697f0a49bb058614cd8350935?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=scEOJS01D2NMjsF-5xfPwvI1eS0zdctPOFlNLjD2ByhBtmTqQtYTCDquO6rwInooB4lmzPVnXl~61Xo5l0X0oVvotl1SKoh5W9AxpPZIQpbNknwBNJrQMfVYL-ehwfJvp5MZ1Sisi9~F1W2~Cc6-cIzGyUzB8lCZlPu7Cnuc-TYs0Vp5Fkzx12b1N9v3pv~7huPB-Eqgq4NguBxwH3aVHaSDls7APK2xSljpCu5Az0pPxjIZsEgROEaRgtHHXQpm2m3yySOxIeJvRTJXl3~wirR7c1zhCKFIbKMd6Tx80FQMGdTlftc2UuF0i2GOGb3Q8RTYkXFqdsLc7z0LybAcBw__" alt="Cooking" class="" />
                            </div>

                            <h2 class="mt-10 text-2xl font-bold tracking-wide font-cinzel">MASTER THE ART OF COOKING</h2>
                            <p class="text-gray-600 leading-relaxed mt-2 font-mulish">
                                Aliquam enim purus, ultrices sit amet lacinia ac, ullamcorper eget nunc. Sed mollis elit quis feugiat hendrerit. Quisque eleifend metus ac vehicula faucibus. Aliquam sollicitudin semper lacinia. Cras vestibulum posuere porttitor. Donec tincidunt erat non ante pellentesque hendrerit. Cras ultricies nisl in luctus pellentesque. Integer non eros sit amet eros varius pellentesque. Suspendisse lacinia odio vitae efficitur accumsan.
                            </p>

                            <h2 class="mt-10 text-2xl font-bold tracking-wide font-cinzel">MASTERING KNIFE SKILLS</h2>
                            <p class="text-gray-600 leading-relaxed mt-2 font-mulish">
                                Sed nec ipsum rhoncus, venenatis est a, venenatis libero. Suspendisse metus metus, pellentesque vitae accumsan nec, pharetra in magna. Nullam sed ullamcorper felis. Morbi non purus non purus pharetra ultrices. Pellentesque lacus lacus, egestas in sapien vel, eleifend tristique leo. Aenean a purus eu enim dignissim bibendum eu ac mi. Nulla tortor tortor, maximus sit amet auctor ut, lobortis ac diam.
                            </p>

                            {/* <!-- Author Card --> */}
                            <div class="mt-10 border-t border-[#C1994D] border-b pt-6 flex flex-col lg:flex-row items-center mb-10">
                                <div className="flex">
                                    <div class="md:w-1/4 flex-shrink-0 ">
                                        <img src="https://s3-alpha-sig.figma.com/img/5962/029f/e5cc5b0ad45b2c4b4a7698c633e1f68c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DZBQtoFGVR81yv-L4aYHdP1ZLZpGPyNX4gFTuVOmKRxbW1Y911xvSOr~fUAxpojK9LZNbxFmzOBKPh~TLA5raRXOjvGvjMekTHJRBfkNoRo9s1fAkFbvomTw4LTR5w8LY6-~x5YiyZQRLWYueYUR-lur1FM5jVbsh8U~iDoMdDN75QNDEYRFvLaDEhHLm9zZvXLnfwVpMUMet9ZCvPHf7QzufhYSTpIy2J-6nT-3ZHVJM4ZELWTeVQo8CxPqkcVkXVtYG8bA58EVSfzBH3BXNQnZ0dNa5hozHB2Yhdr2vKVvUPoUf~sLiF2ze9i2yx942wivjbv1rGcqKudteWQ-7g__" alt="Author" class="w-20 h-20 " />
                                    </div>
                                    <div className="ml-2">
                                        <h3 class="uppercase text-[#8B2323] font-bold tracking-wide text-lg">MD. TARIF AL-MOZAHED</h3>
                                        <p class="text-gray-600 text-sm mt-1">
                                            Suspendisse potenti. Nam sem tortor, dapibus et hendrerit eu, ornare vitae arcu. Nunc porta libero.
                                        </p>
                                    </div>

                                </div>

                                <div class="md:w-3/4 ml-10 md:ml-24 text-center md:text-left">

                                    <div class="flex justify-center md:justify-start gap-3 mt-3 mb-10">
                                        <div className=" h-10 w-10 bg-[#F0E19A] flex justify-center items-center">
                                            <FaFacebook className='text-white' />
                                        </div>


                                        <div className=" h-10 w-10 bg-[#F0E19A] flex justify-center items-center">
                                            <FaInstagram className='text-white' />
                                        </div>
                                        <div className=" h-10 w-10 bg-[#F0E19A] flex justify-center items-center">
                                            <FaWhatsapp className='text-white' />
                                        </div>
                                        <div className=" h-10 w-10 bg-[#F0E19A] flex justify-center items-center">
                                            <FaLinkedin className='text-white' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Right Sidebar --> */}
                        <div class=" p-6 border border-[#C1994D]">
                            <h3 class="text-3xl  text-black font-cinzel">LATEST POST</h3>
                            <div class="mt-4 space-y-4">
                                <div>
                                    <div className="flex justify-start items-center gap-2 text-[16px] mt-10">
                                        <FaClock className='text-[#C1994D]  ' />
                                        <span class=" text-[#C1994D]"> August 2, 2023</span>
                                    </div>

                                    <p class="text-xl text-gray-800 mt-2 font-cinzel">
                                        SUSTAINABLE DINING: THE FUTURE OF FOOD & BEVERAGE
                                    </p>
                                </div>
                                <div>
                                    <div className="flex justify-start items-center gap-2 text-[16px] mt-10">
                                        <FaClock className='text-[#C1994D]  ' />
                                        <span class=" text-[#C1994D]"> August 2, 2023</span>
                                    </div>

                                    <p class="text-xl text-gray-800 mt-2 font-cinzel">
                                        SUSTAINABLE DINING: THE FUTURE OF FOOD & BEVERAGE
                                    </p>
                                </div>
                                <div>
                                    <div className="flex justify-start items-center gap-2 text-[16px] mt-10">
                                        <FaClock className='text-[#C1994D]  ' />
                                        <span class=" text-[#C1994D]"> August 2, 2023</span>
                                    </div>

                                    <p class="text-xl text-gray-800 mt-2 font-cinzel">
                                        SUSTAINABLE DINING: THE FUTURE OF FOOD & BEVERAGE
                                    </p>
                                </div>
                                <div>
                                    <div className="flex justify-start items-center gap-2 text-[16px] mt-10">
                                        <FaClock className='text-[#C1994D]  ' />
                                        <span class=" text-[#C1994D]"> August 2, 2023</span>
                                    </div>

                                    <p class="text-xl text-gray-800 mt-2 font-cinzel">
                                        SUSTAINABLE DINING: THE FUTURE OF FOOD & BEVERAGE
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>



            </div>

            {/* news articales */}

            <div className="items-center flex justify-center mb-10 mt-20">
                <div className=" py-12 px-6 md:px-16 lg:px-24 w-2/3">

                    <div className="flex text-left items-start  flex-col mb-8">
                        <h2 className="text-[#CD9B2F] text-[14px] ">EXPLORE</h2>
                        <h2 className="text-[45px] font-semibold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#993128] to-[#33100D]">
                            Latest News & <br /> Article
                        </h2>
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

                    </div>


                </div>
            </div>



            <Apply_section />

        </div>


    )
}

export default Blogs;
