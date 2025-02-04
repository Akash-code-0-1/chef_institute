import React from 'react'

const Apply_section = () => {
    return (

        <div className="flex items-center justify-center mb-20 mt-20">
            <section className="bg-[#F2E39B] py-16 border border-[#CD9B2F] w-2/3 text-left  pl-10">
                <div className="container mx-auto px-4">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/fef2/96f4/1467690ac8530147e74d63db4315415a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aeWYkhJM50x7iC4FpWpCiS6zGEDCmJUV3eVFA55sBgG-f0qg9b7jW8ObiukZ6N8LTyc1xZDvcOEjLX56c6WPEhr2wDE8YGvHsaHI38VBYtM-Soarjuz4PvmgtPq1PkjHv3k~Mmws-8LB94OXjq1qg86B6yQ00VVE3XGk4W40yQ4atqdyohDQFm7E2AaG6JUKf8aSXVJpvLq5vlzS-IlGcmVBIrJs1GBtYlrjSU69THAOu~FRRmIOij7mHIOERwNGPb5y08~nO~rqPrLBgLj45~pif0G7lpv79XAbhFzIa~kCsw7amnL4n0~0OTgQ0qj~rY77P6s80LOmcLd6rSqe0A__"
                        alt="Culinary Institute Logo"
                        className="w-24 h-auto mb-8"
                    />

                    <div className="space-y-6 max-w-3xl">
                        <p className="text-[#CD9B2F] uppercase tracking-wide text-[12px] font-mulish">GET STARTED</p>

                        <h2 className="text-[#8B2323] text-4xl md:text-5xl font-cinzel">
                            READY TO SHARPEN YOUR CULINARY SKILLS?
                        </h2>

                        <div>
                            <button className="bg-gradient-to-b from-[#993128] to-[#33100D] text-white px-8 py-3 uppercase text-sm font-medium hover:bg-[#8B2323]/90 transition-colors">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Apply_section;
