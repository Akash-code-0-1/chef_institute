import { FaPlay } from "react-icons/fa";

export default function FAQSection() {

    return (
        <div className="items-center flex justify-center bg-[#F1F6F9]">
            <div className=" py-12 px-6 md:px-16 lg:px-24 w-2/3">
                {/* FAQ Heading and Button */}
                <div className="flex justify-between items-start flex-col md:items-center md:flex-row mb-8">
                    <h2 className="text-[30px] font-semibold font-cinzel tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#993128] to-[#33100D]">
                        <span className="text-[#CD9B2F] font-cinzel text-[10px]">HAVE QUESTIONS?</span> <br />
                        FREQUENTLY ASKED QUESTI<span
                            className="inline-block relative w-[30px] h-[30px] rounded-full bg-cover bg-center mx-1 align-middle bottom-1"
                            style={{
                                backgroundImage: "url('https://s3-alpha-sig.figma.com/img/75c3/507d/591f46389cd49f338e4ac7b451c3def2?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sQgbdJ-vb~8Odbp8HFYbBOdKzz1MXk2~lcKQyU3UeWASSvE3W0z9X95fnjuP4MFpMS2QJwz~LtAHJ7pD686QGqR1XpSVn7dnf7KPoTElQ8siVAaaqORKFm4cb51WOmxojOZajv2Q3rzVWYbSIN8MYQ08Td2vyZryQmLbzKjdwYJsbGiSFOIhjX3OSqwHy6uGo66z1qm5il7fgLtWPRtjUT0tHqUtJ4j4O3oE-SWrKis9lOk5w1dm26QPYErPFnyPp5CxOm2v8dzGxNWWEXAvDjboPLs92LMe1gQZWgybL7qsYRFrl87W2YB~k8tHCGaMeZvyAfezQCTU-zZfSXuy5w__')",
                                verticalAlign: "middle"
                            }}>
                        </span>NS
                    </h2>
                    <button className="bg-gradient-to-r mt-9 flex from-[#993128] to-[#33100D] text-white px-8 py-2 uppercase text-sm font-medium hover:bg-[#8B2323]/90 transition-colors">
                        View All Questions
                    </button>
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        "What programs and courses do you offer?",
                        "How do I apply to the chef academy?",
                        "Do you offer financial aid or scholarships?",
                        "What is the class size for your courses?",
                        "Do you offer online cooking courses?",
                        "How long do the programs take to complete?",
                        "What facilities are available at the academy?",
                        "Can I visit the academy before applying?",
                    ].map((question, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center border border-[#CD9B2F] bg-white py-3 px-5 shadow-sm cursor-pointer hover:shadow-md transition-all"
                        >
                            <span className="text-gray-800 text-sm md:text-base font-medium">{question}</span>
                            <span className="text-gradient-to-r flex from-[#993128] to-[#33100D]">&#x25BE;</span>
                        </div>
                    ))}
                </div>

                {/* Video Section */}
                <div className="relative mt-10">
                    <video src="https://videos.pexels.com/video-files/2795172/2795172-sd_640_360_25fps.mp4" className="w-full h-[200px] md:h-auto object-cover " />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-md">
                        <button className="bg-transparent p-2 w-20 h-20 md:w-36 md:h-36 rounded-full shadow-lg hover:scale-110 transition-transform border-4 border-white">
                            <h1 className="text-white text-[12px]">PLAY VIDEO</h1>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}
