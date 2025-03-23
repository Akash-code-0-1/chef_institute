import React from 'react'

const Gallery = () => {
    return (
        <div className="flex w-full justify-center itmes-center mb-20 mt-10">
            <div className="w-3/4 block justify-center items-center">
                <div className='flex flex-col gap-2'>
                    {/* fisrt section */}
                    <div className="first_section grid grid-cols-3 md:grid-cols-12 gap-2">

                        <div className="left_image order-2 md:order-1 md:h-[600px] col-span-2 md:col-span-3 relative group">
                            <img
                                src="https://images.pexels.com/photos/28575312/pexels-photo-28575312/free-photo-of-traditional-spaghetti-bolognese-with-fresh-ingredients.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                                className='h-full w-full object-cover transition-transform duration-500 '
                            />
                            {/* Hover Overlay and Button */}
                            <div className="absolute inset-0 bg-[#CD9B2F8F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                                <button className="bg-gradient-to-r from-[#993128] to-[#33100D] text-white px-16 py-2 uppercase text-sm font-medium hover:bg-[#8B2323]/90 transition-colors">
                                    VIEW MORE
                                </button>
                            </div>

                        </div>


                        <div className="middle_section order-1 md:h-[600px] col-span-4 md:col-span-6 flex flex-col">

                            <div className="top_section w-full h-1/2  flex justify-center flex-col items-center mb-12 md:mb-3">

                                <div className="">
                                    <h2 className="text-[#CD9B2F] text-[10px] ">GALLERY</h2>
                                </div>
                                <div className="font-cinzel font-semibold mb-4">
                                    <h1 className="md:text-[18px] lg:text-[23px] xl:text-[35px] font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">a GLIMPSE <span
                                        className="inline-block relative md:w-[18px] md:h-[18px] lg:w-[23px] lg:h-[23px] xl:w-[35px] xl:h-[35px] rounded-full bg-cover bg-center mx-1 align-middle bottom-1"
                                        style={{
                                            backgroundImage: "url('https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600')",
                                            verticalAlign: "middle"
                                        }}>
                                    </span>F EXCELLENCE</h1>
                                </div>
                                <div className="mb-5 text-center text-[12px] xl:text-[15px] font-mulish">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolor explicabo<br /> temporibus    alias sequi eum nulla   reprehenderit odio, ea fugit adipisci totam move
                                </div>

                                <button className="bg-gradient-to-r from-[#993128] to-[#33100D] text-white px-16 py-2 uppercase text-sm font-medium hover:bg-[#8B2323]/90 transition-colors">
                                    VIEW MORE
                                </button>


                            </div>

                            <div className="bottom_section flex flex-row gap-2 w-full h-1/2">

                                <div className="first_section w-1/2 h-full relative group">
                                    <img
                                        src="https://images.pexels.com/photos/7363730/pexels-photo-7363730.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-[#CD9B2F8F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                                        <button className="bg-gradient-to-r from-[#993128] to-[#33100D] text-white px-16 py-2 uppercase text-sm font-medium hover:bg-[#8B2323]/90 transition-colors">
                                            VIEW MORE
                                        </button>
                                    </div>
                                </div>

                                <div className="second_section w-1/2 h-full relative group">
                                    <img
                                        src="https://images.pexels.com/photos/28647087/pexels-photo-28647087/free-photo-of-delicious-italian-pasta-dish-with-cherry-tomatoes.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-[#CD9B2F8F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                                        <button className="bg-gradient-to-r from-[#993128] to-[#33100D] text-white px-16 py-2 uppercase text-sm font-medium hover:bg-[#8B2323]/90 transition-colors">
                                            VIEW MORE
                                        </button>
                                    </div>
                                </div>

                            </div>



                        </div>

                        <div className="right_image order-3 md:h-[600px] col-span-2 md:col-span-3 relative group">
                            <img
                                src="https://images.pexels.com/photos/3171128/pexels-photo-3171128.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#CD9B2F8F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                                <button className="bg-gradient-to-r from-[#993128] to-[#33100D] text-white px-16 py-2 uppercase text-sm font-medium hover:bg-[#8B2323]/90 transition-colors">
                                    VIEW MORE
                                </button>
                            </div>
                        </div>


                    </div>


                    {/* second section */}
                    <div className="second_section relative grid grid-cols-2 gap-2">
                        {/* Images */}
                        <div className="first_img h-[250px] relative group">
                            <img
                                src="https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#CD9B2F8F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                                <button className="bg-gradient-to-r from-[#993128] to-[#33100D] text-white px-16 py-2 uppercase text-sm font-medium hover:bg-[#8B2323]/90 transition-colors">
                                    VIEW MORE
                                </button>
                            </div>
                        </div>

                        <div className="second_img h-[250px] relative group">
                            <img
                                src="https://images.pexels.com/photos/227432/pexels-photo-227432.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#CD9B2F8F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                                <button className="bg-gradient-to-r from-[#993128] to-[#33100D] text-white px-16 py-2 uppercase text-sm font-medium hover:bg-[#8B2323]/90 transition-colors">
                                    VIEW MORE
                                </button>
                            </div>
                        </div>

                        <div className="third_img h-[250px] relative group">
                            <img
                                src="https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#CD9B2F8F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                                <button className="bg-gradient-to-r from-[#993128] to-[#33100D] text-white px-16 py-2 uppercase text-sm font-medium hover:bg-[#8B2323]/90 transition-colors">
                                    VIEW MORE
                                </button>
                            </div>
                        </div>

                        <div className="fourth_img h-[250px] relative group">
                            <img
                                src="https://images.pexels.com/photos/827516/pexels-photo-827516.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#CD9B2F8F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                                <button className="bg-gradient-to-r from-[#993128] to-[#33100D] text-white px-16 py-2 uppercase text-sm font-medium hover:bg-[#8B2323]/90 transition-colors">
                                    VIEW MORE
                                </button>
                            </div>
                        </div>


                        {/* Fog Effect */}
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/100 to-transparent pointer-events-none"></div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Gallery;
