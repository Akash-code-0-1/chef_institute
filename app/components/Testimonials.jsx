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
                                        backgroundImage: "url('https://s3-alpha-sig.figma.com/img/75c3/507d/591f46389cd49f338e4ac7b451c3def2?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sQgbdJ-vb~8Odbp8HFYbBOdKzz1MXk2~lcKQyU3UeWASSvE3W0z9X95fnjuP4MFpMS2QJwz~LtAHJ7pD686QGqR1XpSVn7dnf7KPoTElQ8siVAaaqORKFm4cb51WOmxojOZajv2Q3rzVWYbSIN8MYQ08Td2vyZryQmLbzKjdwYJsbGiSFOIhjX3OSqwHy6uGo66z1qm5il7fgLtWPRtjUT0tHqUtJ4j4O3oE-SWrKis9lOk5w1dm26QPYErPFnyPp5CxOm2v8dzGxNWWEXAvDjboPLs92LMe1gQZWgybL7qsYRFrl87W2YB~k8tHCGaMeZvyAfezQCTU-zZfSXuy5w__')",
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
                                <img src="https://s3-alpha-sig.figma.com/img/5176/16f6/1d6ef571b8cccb5ecd3191f46f1b1eb9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c~KzEkpEHlt3j27rImesBmWtUS7hmIMFiZedkGNiwbBXj2~xSGXluHLYn6pkPVP8zyszAl78z6QFv2sPgWL-xz5RRy2O2c~lohc~eqkwqk2zVm4OJpBdOB4nEPZuJHGV0~64CDXUx4vaiRTQp9-0DDsRF2cQUP0Eh3E24vxovdVaG6tvOkyuzfXNoqEcPuXUie86Apt~Gz61r54eVDx6tfNfnJsfiKH8R9~QOY3qs7JkqH3OptNQ1k-C48tnBz-w8dmg3FKUkz2jsSX2j00U-4Yyow~c3QqaKHu0sVbmO6Qvz4LaYM5KQ6ZcgtAsKHclS-8ELcq8iOyLGX-29P5bbA__" alt="" className='h-[50px]' />
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
                                <img src="https://s3-alpha-sig.figma.com/img/5176/16f6/1d6ef571b8cccb5ecd3191f46f1b1eb9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c~KzEkpEHlt3j27rImesBmWtUS7hmIMFiZedkGNiwbBXj2~xSGXluHLYn6pkPVP8zyszAl78z6QFv2sPgWL-xz5RRy2O2c~lohc~eqkwqk2zVm4OJpBdOB4nEPZuJHGV0~64CDXUx4vaiRTQp9-0DDsRF2cQUP0Eh3E24vxovdVaG6tvOkyuzfXNoqEcPuXUie86Apt~Gz61r54eVDx6tfNfnJsfiKH8R9~QOY3qs7JkqH3OptNQ1k-C48tnBz-w8dmg3FKUkz2jsSX2j00U-4Yyow~c3QqaKHu0sVbmO6Qvz4LaYM5KQ6ZcgtAsKHclS-8ELcq8iOyLGX-29P5bbA__" alt="" className='h-[50px]' />
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
                                <img src="https://s3-alpha-sig.figma.com/img/5176/16f6/1d6ef571b8cccb5ecd3191f46f1b1eb9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c~KzEkpEHlt3j27rImesBmWtUS7hmIMFiZedkGNiwbBXj2~xSGXluHLYn6pkPVP8zyszAl78z6QFv2sPgWL-xz5RRy2O2c~lohc~eqkwqk2zVm4OJpBdOB4nEPZuJHGV0~64CDXUx4vaiRTQp9-0DDsRF2cQUP0Eh3E24vxovdVaG6tvOkyuzfXNoqEcPuXUie86Apt~Gz61r54eVDx6tfNfnJsfiKH8R9~QOY3qs7JkqH3OptNQ1k-C48tnBz-w8dmg3FKUkz2jsSX2j00U-4Yyow~c3QqaKHu0sVbmO6Qvz4LaYM5KQ6ZcgtAsKHclS-8ELcq8iOyLGX-29P5bbA__" alt="" className='h-[50px]' />
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
