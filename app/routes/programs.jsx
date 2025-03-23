import React from 'react';
import Apply_section from '../components/Apply_section';


const Programs = () => {
    return (
        <div className='programs_page mt-32'>

            <div className="flex justify-center items-center mb-10">
                <div className="header text-center w-[500px] mt-10">
                    <h2 className="text-[#CD9B2F] text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] ">FIND THE RIGHT PATH</h2>

                    <h1 className="text-[34px] md:text-[40px] lg:text-[45px] xl:text-[55px] font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#993128] to-[#33100D]">PROGRAMS</h1>
                </div>
            </div>


            <div className="flex justify-center flex-col items-center mt-14">
                <div className="">
                    <h2 className="text-[#CD9B2F] text-[14px] ">EXPLORE</h2>
                </div>
                <div className="font-cinzel font-semibold mb-4">
                    <h1 className="text-[25px] lg:text-[54px] font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">PROFESSIONAL PROGRAMS</h1>
                </div>
                <div className="mb-10 text-center text-[12px] lg:text-[15px] font-mulish">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolor explicabo temporibus alias sequi eum nulla <br />  reprehenderit odio, ea fugit adipisci totam dolorem maxime, cupiditate iure where is this resturt this is demo
                </div>

                <div className="lg:w-1/2 lg:h-[60px] text-[14px] bg-yellow-50 flex justify-around items-center shadow-custom bg-transparent">
                    <span className="p-1">Diploma Course</span>
                    <span className="pl-7 pr-7 pt-2 pb-2 font-cinzel text-white bg-gradient-to-b from-[#993128] to-[#33100D]">SHORT TERM COURSE</span>
                    <span>Other Related Course</span>
                </div>
            </div>

            <div className="flex justify-center items-center mt-16 mb-10">
                <div className="flex justify-center items-center flex-col lg:flex-row w-2/3 border border-[#AA9452]">
                    <div className="text_contents pl-10 pt-4">
                        <h2 className="text-[12px] font-cinzel text-[#CF9B2B] ">SPECIAL CATEGORIES</h2>
                        <h1 className="text-[20px] xl:text-[40px] font-cinzel font-semibold mt-2 text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">
                            PROFESSIONAL <br /> BARISTA TRAINING <br /> PROGRAM
                        </h1>
                        <p className="text-gray-700 mt-4 font-cinzel font-mulish">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias <br /> dolorem
                            maxime, numquam aliquid nisi, tenetur adipisci
                        </p>

                        <ul className="list-disc list-inside mt-4 space-y-1 flex flex-wrap gap-4 items-center">
                            <li>Comprehensive Curriculum</li>
                            <li>Hands-On Training</li>
                            <li>Professional Equipment</li>
                            <li>Experienced Instructors</li>
                        </ul>

                        <button className="mt-6 w-[200px] justify-center font-cinzel items-center  text-white size-10 bg-red-800 flex mb-7">
                            VIEW PROGRAM
                        </button>
                    </div>

                    <div className="image w-2/2">
                        <img
                            src="https://images.pexels.com/photos/31228830/pexels-photo-31228830/free-photo-of-coffee-shop-barista-preparing-espresso-drink.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Barista Program"
                            className="w-[600px] h-[465px] object-cover"
                        />
                    </div>
                </div>
            </div>


            {/* courses */}

            <div className="flex flex-col items-center justify-center">

                <div className="lg:pl-10 lg:pr-10 cards flex flex-col lg:flex-row justify-center items-center gap-8 mt-16 ">

                    <div className="card w-full md:w-1/2 xl:w-1/3 flex flex-col items-center border border-[#AA9452] p-4 bg-[#FAF5DC] shadow-custom">
                        <div className="text-left ">
                            <img
                                src="https://images.pexels.com/photos/31261499/pexels-photo-31261499/free-photo-of-delicious-rigatoni-pasta-with-spinach-pesto.jpeg?auto=compress&cs=tinysrgb&w=600" // Uploaded image
                                alt="Chef Course"
                                className="w-full h-[300px] object-cover"
                            />
                            <h1 className="text-3xl font-bold mt-4 font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">SHORT TERM CHEF COURSE</h1>
                            <p className="mt-2 text-gray-600 font-mulish">
                                For those who have completed their tourist visa or other visas or are
                                in the process of visa processing and want to...<b className="text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">See More</b>
                            </p>
                        </div>
                        <hr className="my-4 w-full border-0 h-[1px] bg-[#CD9B2F]" />


                        <ul className="list-disc list-inside space-y-1 text-center flex flex-row flex-wrap items-center gap-2 text-[13px] pl-5 font-mulish">
                            <li>Comprehensive Curriculum</li>
                            <li>Hands-On Training</li>
                            <li>Professional Equipment</li>
                            <li>Experienced Instructors</li>
                        </ul>




                        <hr className="my-4 w-full border-0 h-[1px] bg-[#CD9B2F]" />
                        <div className="flex items-center justify-between w-full pl-5 pr-5">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://images.pexels.com/photos/3298687/pexels-photo-3298687.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Steven Harris"
                                    className="h-[50px]"
                                />
                                <div>
                                    <h2 className="font-semibold font-cinzel text-red-700">STEVEN HARRIS</h2>
                                    <p className="text-sm text-gray-500 font-mulish">Chef Mentor</p>
                                </div>
                            </div>

                            <button className="mt-6 w-[190px] justify-center font-cinzel items-center  text-white size-14 bg-red-800 flex mb-7">
                                VIEW PROGRAM
                            </button>
                        </div>
                    </div>


                    <div className="card w-full md:w-1/2 xl:w-1/3 flex flex-col items-center border border-[#AA9452] p-4 bg-black shadow-second_custom">
                        <div className="text-left ">
                            <img
                                src="https://images.pexels.com/photos/28647087/pexels-photo-28647087/free-photo-of-delicious-italian-pasta-dish-with-cherry-tomatoes.jpeg?auto=compress&cs=tinysrgb&w=600" // Uploaded image
                                alt="Chef Course"
                                className=" w-full h-[300px] object-cover"
                            />
                            <h1 className="text-3xl font-bold mt-4 font-cinzel text-white">SHORT TERM CHEF COURSE</h1>
                            <p className="mt-2 text-gray-50 font-mulish">
                                For those who have completed their tourist visa or other visas or are
                                in the process of visa processing and want to...<b className="text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">See More</b>
                            </p>
                        </div>
                        <hr className="my-4 w-full border-0 h-[1px] bg-[#CD9B2F]" />


                        <ul className="list-disc list-inside space-y-1 text-center flex flex-row flex-wrap items-center gap-2 text-[13px] pl-5 font-mulish text-gray-50">
                            <li>Comprehensive Curriculum</li>
                            <li>Hands-On Training</li>
                            <li>Professional Equipment</li>
                            <li>Experienced Instructors</li>
                        </ul>




                        <hr className="my-4 w-full border-0 h-[1px] bg-[#CD9B2F]" />
                        <div className="flex items-center justify-between w-full pl-5 pr-5">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://images.pexels.com/photos/3298687/pexels-photo-3298687.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    className="h-[50px]"
                                />
                                <div>
                                    <h2 className="font-semibold font-cinzel text-white">STEVEN HARRIS</h2>
                                    <p className="text-sm text-gray-50 font-mulish">Chef Mentor</p>
                                </div>
                            </div>

                            <button className="mt-6 w-[190px] justify-center font-cinzel items-center  text-white size-14 bg-red-800 flex mb-7">
                                VIEW PROGRAM
                            </button>

                        </div>
                    </div>


                </div>

            </div>

            <div className="flex flex-col items-center justify-center">

                <div className="lg:pl-10 lg:pr-10cards flex flex-col lg:flex-row justify-center items-center gap-8 mt-16 ">

                    <div className="card w-full md:w-1/2 xl:w-1/3 flex flex-col items-center border border-[#AA9452] p-4 bg-[#FAF5DC] shadow-custom">
                        <div className="text-left ">
                            <img
                                src="https://images.pexels.com/photos/28575312/pexels-photo-28575312/free-photo-of-traditional-spaghetti-bolognese-with-fresh-ingredients.jpeg?auto=compress&cs=tinysrgb&w=600" // Uploaded image
                                alt="Chef Course"
                                className="w-full h-[300px] object-cover"
                            />
                            <h1 className="text-3xl font-bold mt-4 font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">SHORT TERM CHEF COURSE</h1>
                            <p className="mt-2 text-gray-600 font-mulish">
                                For those who have completed their tourist visa or other visas or are
                                in the process of visa processing and want to...<b className="text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">See More</b>
                            </p>
                        </div>
                        <hr className="my-4 w-full border-0 h-[1px] bg-[#CD9B2F]" />


                        <ul className="list-disc list-inside space-y-1 text-center flex flex-row flex-wrap items-center gap-2 text-[13px] pl-5 font-mulish">
                            <li>Comprehensive Curriculum</li>
                            <li>Hands-On Training</li>
                            <li>Professional Equipment</li>
                            <li>Experienced Instructors</li>
                        </ul>




                        <hr className="my-4 w-full border-0 h-[1px] bg-[#CD9B2F]" />
                        <div className="flex items-center justify-between w-full pl-5 pr-5">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://images.pexels.com/photos/31228830/pexels-photo-31228830/free-photo-of-coffee-shop-barista-preparing-espresso-drink.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Steven Harris"
                                    className="h-[50px]"
                                />
                                <div>
                                    <h2 className="font-semibold font-cinzel text-red-700">STEVEN HARRIS</h2>
                                    <p className="text-sm text-gray-500 font-mulish">Chef Mentor</p>
                                </div>
                            </div>

                            <button className="mt-6 w-[190px] justify-center font-cinzel items-center  text-white size-14 bg-red-800 flex mb-7">
                                VIEW PROGRAM
                            </button>
                        </div>
                    </div>


                    <div className="card w-full md:w-1/2 xl:w-1/3 flex flex-col items-center border border-[#AA9452] p-4 bg-black shadow-second_custom">
                        <div className="text-left ">
                            <img
                                src="https://images.pexels.com/photos/31261499/pexels-photo-31261499/free-photo-of-delicious-rigatoni-pasta-with-spinach-pesto.jpeg?auto=compress&cs=tinysrgb&w=600" // Uploaded image
                                alt="Chef Course"
                                className=" w-full h-[300px] object-cover"
                            />
                            <h1 className="text-3xl font-bold mt-4 font-cinzel text-white">SHORT TERM CHEF COURSE</h1>
                            <p className="mt-2 text-gray-50 font-mulish">
                                For those who have completed their tourist visa or other visas or are
                                in the process of visa processing and want to...<b className="text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">See More</b>
                            </p>
                        </div>
                        <hr className="my-4 w-full border-0 h-[1px] bg-[#CD9B2F]" />


                        <ul className="list-disc list-inside space-y-1 text-center flex flex-row flex-wrap items-center gap-2 text-[13px] pl-5 font-mulish text-gray-50">
                            <li>Comprehensive Curriculum</li>
                            <li>Hands-On Training</li>
                            <li>Professional Equipment</li>
                            <li>Experienced Instructors</li>
                        </ul>




                        <hr className="my-4 w-full border-0 h-[1px] bg-[#CD9B2F]" />
                        <div className="flex items-center justify-between w-full pl-5 pr-5">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Steven Harris"
                                    className="h-[50px]"
                                />
                                <div>
                                    <h2 className="font-semibold font-cinzel text-white">STEVEN HARRIS</h2>
                                    <p className="text-sm text-gray-50 font-mulish">Chef Mentor</p>
                                </div>
                            </div>

                            <button className="mt-6 w-[190px] justify-center font-cinzel items-center  text-white size-14 bg-red-800 flex mb-7">
                                VIEW PROGRAM
                            </button>

                        </div>
                    </div>


                </div>

            </div>

            <div className="flex flex-col items-center justify-center">

                <div className="lg:pl-10 lg:pr-10 cards flex flex-col lg:flex-row justify-center items-center gap-8 mt-16 ">

                    <div className="card w-full md:w-1/2 xl:w-1/3 flex flex-col items-center border border-[#AA9452] p-4 bg-[#FAF5DC] shadow-custom">
                        <div className="text-left ">
                            <img
                                src="https://images.pexels.com/photos/31282323/pexels-photo-31282323/free-photo-of-delicious-beef-bowl-with-soft-boiled-eggs.jpeg?auto=compress&cs=tinysrgb&w=600" // Uploaded image
                                alt="Chef Course"
                                className="w-full h-[300px] object-cover"
                            />
                            <h1 className="text-3xl font-bold mt-4 font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">SHORT TERM CHEF COURSE</h1>
                            <p className="mt-2 text-gray-600 font-mulish">
                                For those who have completed their tourist visa or other visas or are
                                in the process of visa processing and want to...<b className="text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">See More</b>
                            </p>
                        </div>
                        <hr className="my-4 w-full border-0 h-[1px] bg-[#CD9B2F]" />


                        <ul className="list-disc list-inside space-y-1 text-center flex flex-row flex-wrap items-center gap-2 text-[13px] pl-5 font-mulish">
                            <li>Comprehensive Curriculum</li>
                            <li>Hands-On Training</li>
                            <li>Professional Equipment</li>
                            <li>Experienced Instructors</li>
                        </ul>




                        <hr className="my-4 w-full border-0 h-[1px] bg-[#CD9B2F]" />
                        <div className="flex items-center justify-between w-full pl-5 pr-5">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Steven Harris"
                                    className="h-[50px]"
                                />
                                <div>
                                    <h2 className="font-semibold font-cinzel text-red-700">STEVEN HARRIS</h2>
                                    <p className="text-sm text-gray-500 font-mulish">Chef Mentor</p>
                                </div>
                            </div>

                            <button className="mt-6 w-[190px] justify-center font-cinzel items-center  text-white size-14 bg-red-800 flex mb-7">
                                VIEW PROGRAM
                            </button>
                        </div>
                    </div>


                    <div className="card w-full md:w-1/2 xl:w-1/3 flex flex-col items-center border border-[#AA9452] p-4 bg-black shadow-second_custom">
                        <div className="text-left ">
                            <img
                                src="https://images.pexels.com/photos/11596067/pexels-photo-11596067.jpeg?auto=compress&cs=tinysrgb&w=600" // Uploaded image
                                alt="Chef Course"
                                className=" w-full h-[300px] object-cover"
                            />
                            <h1 className="text-3xl font-bold mt-4 font-cinzel text-white">SHORT TERM CHEF COURSE</h1>
                            <p className="mt-2 text-gray-50 font-mulish">
                                For those who have completed their tourist visa or other visas or are
                                in the process of visa processing and want to...<b className="text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">See More</b>
                            </p>
                        </div>
                        <hr className="my-4 w-full border-0 h-[1px] bg-[#CD9B2F]" />


                        <ul className="list-disc list-inside space-y-1 text-center flex flex-row flex-wrap items-center gap-2 text-[13px] pl-5 font-mulish text-gray-50">
                            <li>Comprehensive Curriculum</li>
                            <li>Hands-On Training</li>
                            <li>Professional Equipment</li>
                            <li>Experienced Instructors</li>
                        </ul>




                        <hr className="my-4 w-full border-0 h-[1px] bg-[#CD9B2F]" />
                        <div className="flex items-center justify-between w-full pl-5 pr-5">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Harris"
                                    className="h-[50px]"
                                />
                                <div>
                                    <h2 className="font-semibold font-cinzel text-white">STEVEN HARRIS</h2>
                                    <p className="text-sm text-gray-50 font-mulish">Chef Mentor</p>
                                </div>
                            </div>

                            <button className="mt-6 w-[190px] justify-center font-cinzel items-center  text-white size-14 bg-red-800 flex mb-7">
                                VIEW PROGRAM
                            </button>

                        </div>
                    </div>


                </div>

            </div>







            <Apply_section />
        </div>
    )
}

export default Programs;
