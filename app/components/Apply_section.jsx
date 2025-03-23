import React from 'react'

const Apply_section = () => {
    return (

        <div className="flex items-center justify-center mb-20 mt-20">
            <section className="bg-[#F2E39B] py-16 border border-[#CD9B2F] w-2/3 text-left  pl-10">
                <div className="container mx-auto px-4">
                    <img
                        src="https://img.freepik.com/premium-vector/detailed-chef-logo-template_23-2148985188.jpg?w=826"
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
