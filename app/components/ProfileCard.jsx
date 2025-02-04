import { FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa"

export default function ProfileCard() {
    return (
        <div className="max-w-lg mx-auto bg-[#FDF8F3] p-6 border border-[#AA9452]  bg-black shadow-custom">
            {/* Profile Image */}
            <div className="w-full flex justify-center items-start mb-8 bg-white">
                <img
                    src="https://s3-alpha-sig.figma.com/img/9f13/1306/ca97f9d4113523e2d8af081d361bf883?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PM5UwT6spBAA-zoBOJ-swle9hWLkf317AXcZJXsug75sfPPi6~lb4WwLcEktBWwbFeScRo~oAwGs4Yw74qXczPgcrHnNJT6EtnEfiON7kzCegZuTuVUDahHmQgmVqGM9QTeJurO4rP2D7fLv-6jxxINKYk0KvlXvZxkKL05HsW9VSOlEWiljZUWjTfUmE3TtP~3krAXD6g8flrqQfuMgXofav2-uIRzV-yanZrR-erZziupnp7DGcC~Tu0cpaTYy7~Y0hPHYrSyRQx9vNSYelyTnc6xeN7fWplqduvbI36rp8fXsaPaVDSnR6LOoROyNbAG6tPT6oPFBcU2tB61TSw__"
                    alt="MD. OHLDUZZAMAN"
                    className="w-[450px] h-[450px] object-cover object-top "
                />
            </div>

            {/* Name and Title */}
            <div className="text-center mb-6 mt-4 flex flex-col justify-center items-center">
                <h2 className="text-[#8B2323] text-2xl font-serif mb-4">MD. OHLDUZZAMAN</h2>
                <hr className="w-2/3 mb-5" />
                <h3 className="text-[#C1994D] font-medium">Trainer and Training Coordinator</h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Md. Ohlduzzaman, Trainer and Training Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified
                by City & Guilds (UK) and NSDA, he has extensive experience as a trainer, assessor, and internal verifier. With
                a professional background at SHERA Resorts (Singapore), Six Seasons Hotel (Dhaka), and Bangladesh Biman Flight
                Catering (BFCC), he also participated in the Training of Trainers (COF) Program under the Skills For Employment
                Program (SEIP) by the Bangladesh Government.
            </p>

            <hr className="w-full mb-5" />

            {/* Social Icons and Button */}
            <div className="flex items-center justify-between">
                <div className="flex gap-4">
                    <button
                        className="w-8 h-8 rounded-full  flex items-center justify-center text-[#8B2323] hover:bg-[#8B2323] hover:text-white transition-colors"
                        aria-label="Facebook"
                    >
                        <FaFacebookF size={16} />
                    </button>
                    <button
                        className="w-8 h-8 rounded-full  flex items-center justify-center text-[#8B2323] hover:bg-[#8B2323] hover:text-white transition-colors"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp size={16} />
                    </button>
                    <button
                        className="w-8 h-8 rounded-full  flex items-center justify-center text-[#8B2323] hover:bg-[#8B2323] hover:text-white transition-colors"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={16} />
                    </button>
                    <button
                        className="w-8 h-8 rounded-full  flex items-center justify-center text-[#8B2323] hover:bg-[#8B2323] hover:text-white transition-colors"
                        aria-label="YouTube"
                    >
                        <FaYoutube size={16} />
                    </button>
                </div>

                <button className="bg-[#8B2323] text-white px-6 py-2 text-sm font-medium hover:bg-[#8B2323]/90 transition-colors">
                    VIEW PORTFOLIO
                </button>
            </div>
        </div>
    )
}

