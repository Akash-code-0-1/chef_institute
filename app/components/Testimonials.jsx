import React from 'react'

const Testimonials = () => {
    return (
        <div className="flex w-full justify-center itmes-center mb-20 mt-10">
            <div className="bg-white w-3/4 py-12 px-6 md:px-16">
                {/* Title */}
                <div className="text-left mb-6 w-4/5">
                    <div className="">
                        <h2 className="text-[#CD9B2F] font-cinzel text-[10px] text-left mb-3">VISIT US</h2>
                    </div>

                    <div className="flex  md:justify-between md:items-center md:flex-row flex-col mb-10">
                        <div className="">
                            <h2 className="text-[35px] font-semibold font-cinzel tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#993128] to-[#33100D]">
                                CHEFACA ALUMNI TESTIM<span
                                    className="inline-block relative w-[35px] h-[35px] rounded-full bg-cover bg-center mx-1 align-middle bottom-1"
                                    style={{
                                        backgroundImage: "url('https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600')",
                                        verticalAlign: "middle"
                                    }}>
                                </span>NIALS
                            </h2>
                        </div>

                        <div className="">
                            <button className="bg-gradient-to-r absolute  flex from-[#993128] to-[#33100D] text-white px-2 py-2 uppercase text-sm font-medium hover:bg-[#8B2323]/90 transition-colors">
                                VIEW ALL TESTIMONIALS
                            </button>
                        </div>

                    </div>

                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
                    {/* Left Side: Video and Name */}
                    <div className="relative">
                        <video
                            src="https://videos.pexels.com/video-files/3249935/3249935-sd_640_360_25fps.mp4" // Update with the correct video path
                            controls
                            className="w-full xl:h-[500px] h-[250px] lg:h-[588px] md:[300px] object-cover "
                        ></video>

                        {/* Name Tag Overlay */}
                        <div className="absolute bottom-4 left-4 bg-[#6E1D1B] text-white px-4 py-2 ">
                            <p className="text-sm font-semibold ">TARIQ AL-MOHAMMED</p>
                            <p className="text-xs opacity-80">Aspiring Chef</p>
                        </div>
                    </div>


                    {/* Right Side: Testimonials */}
                    <div className="bg-[#F2E39B] p-6 md:p-8 border border-[#CD9B2F] xl:h-[500px]">
                        {/* Testimonial 1 */}
                        <div className="mb-6">
                            <p className="text-sm text-[#747678] font-mulish text-[17px]">
                                Thanks to Chefaca, I've transformed my love for cooking into a career. The experience was both challenging and rewarding.
                            </p>
                            <div className=" flex mt-5">
                                <img src="https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-[50px]' />
                                <div className=" ml-2">
                                    <h2 className='text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D] font-cinzel font-semibold'>TARIQ AL-MOHAMMED</h2>
                                    <p className='text-[#747678]'>Aspiring Chef</p>

                                </div>


                            </div>

                        </div>

                        {/* Testimonial 2 */}
                        <div className="mb-6">
                            <p className="text-sm text-[#747678] font-mulish text-[17px]">
                                Thanks to Chefaca, I've transformed my love for cooking into a career. The experience was both challenging and rewarding.
                            </p>
                            <div className=" flex mt-5">
                                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-[50px]' />
                                <div className=" ml-2">
                                    <h2 className='text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D] font-cinzel font-semibold'>TARIQ AL-MOHAMMED</h2>
                                    <p className='text-[#747678]'>Aspiring Chef</p>

                                </div>


                            </div>

                        </div>

                        {/* Testimonial 3 */}
                        <div className="mb-6">
                            <p className="text-sm text-[#747678] font-mulish text-[17px]">
                                Thanks to Chefaca, I've transformed my love for cooking into a career. The experience was both challenging and rewarding.
                            </p>
                            <div className=" flex mt-5">
                                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-[50px]' />
                                <div className=" ml-2">
                                    <h2 className='text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D] font-cinzel font-semibold'>TARIQ AL-MOHAMMED</h2>
                                    <p className='text-[#747678]'>Aspiring Chef</p>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Testimonials;
