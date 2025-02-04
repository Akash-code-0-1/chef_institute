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
                                src="https://s3-alpha-sig.figma.com/img/6e3e/5fd2/ed12cddb49495ad63261575550fe8fd0?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOcKmjrEFhJ3aeD62gsG~JUHWEOzrw21e9kK6hNyKDX6-Lpjbiu3KYvJHtEFcQKlxubNjg2dg-QW3OXBpU4n1PYYY3P~KnJ4CRay1lHN2etenhwwGAX02yHjjyFitF12VBxO1pF0U9oovWPNK9CQLqZknPAVAZVbAAvBXHBiNcD12~MtxLWlIshBcjSk7woOzO-mm7OQoSbzB1-19zrQfddghCrV6ZTdJ5MKMxv2otV9rb87MHGJnjXbqAJtAqH5jq06-LRqKNShPSASEQOFZmXWeCqh3XVwD7xCXiJlFqoliy0S3M50Lf6q7YvAySxvFrPfkQm3I52Fph252W-7qw__"
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
                                            backgroundImage: "url('https://s3-alpha-sig.figma.com/img/75c3/507d/591f46389cd49f338e4ac7b451c3def2?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sQgbdJ-vb~8Odbp8HFYbBOdKzz1MXk2~lcKQyU3UeWASSvE3W0z9X95fnjuP4MFpMS2QJwz~LtAHJ7pD686QGqR1XpSVn7dnf7KPoTElQ8siVAaaqORKFm4cb51WOmxojOZajv2Q3rzVWYbSIN8MYQ08Td2vyZryQmLbzKjdwYJsbGiSFOIhjX3OSqwHy6uGo66z1qm5il7fgLtWPRtjUT0tHqUtJ4j4O3oE-SWrKis9lOk5w1dm26QPYErPFnyPp5CxOm2v8dzGxNWWEXAvDjboPLs92LMe1gQZWgybL7qsYRFrl87W2YB~k8tHCGaMeZvyAfezQCTU-zZfSXuy5w__')",
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
                                        src="https://s3-alpha-sig.figma.com/img/5afb/2d1b/0a8425a3d393208e6d3db5cef591c5dc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qXVUHGvsmQXiQyJo6sqndCe0jcu1uPpkK0KJXTsVxZdbvVGSgjlMT7vhJokA~uDmNv-YDhJUyU9LjIIZNL-s1kvs30uInJ6kFxsM1kFcDNk5zdeagVW06s37iHu4-8yqsPhZ7dxlzmFR6Uu7miFwJmXxUag9XMLbDzMwpDqM7VLM9A30fgr1xjYWgCcTO9VpAdpKfUPfaAG3e~9HASXJ0FmY32FrtYY0O8rPBUUiaaozQJVEPUsV7s6r3rYLBAtC~ivtPAjFSjun1UrX2i6qEPUgW-TRenCshnpXOScSrdpLqkmhkpJxv-JZ72O8wuXQvFrGdqXNurHHMUH8Su08Mw__"
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
                                        src="https://s3-alpha-sig.figma.com/img/e678/cb5c/6dcf1de1b1f88f55396bd9cdf895cae9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bn100aKLCJ8Lh97mJsBV7bxhtp1yLYm8M47ZX8SecZc2BjerDqXNmpgcmi7CGkqP1SwqVuzFfnJ59doRac~C8-fkW3iEUFp6sWtO1PQERrEio7wLRQ6Uaz1Hz1iMiH0EodT7bgQhP6-swPLCeGKLwwDuHmFavRtnAWk-PQaIoTeURw~dA0cwK7-XuIVzlb~h1QEtzFtLR44EJINEdKFLSV4E0BeIsAwFkByheFH0FnM8gW0HHg49080bynrNltUs6cJv6B7a0wh-AY65ip2O34ZLSt4LfkA1-Ogr0Qb5Rdqhoq3-7TY8pwrgyQl17jgOieCDsbt5XghKFI8uXv6E5g__"
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
                                src="https://s3-alpha-sig.figma.com/img/da3a/8482/740fc9987feab032df5f69f1d5285dec?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RDRSh2Z8N93pn8aAcQhanOQ5XNlrGgcl1Ratx31WllC7lpBwF1Ewn3owRk8sQnKA8r44V18J6ELdMM7y85divcO9AtHd-YUpBekvlZa2p3oAFvjfRmDGlCRq8qup-ulU0LXj~3iU36dSeNjV70y-D1uMd70A0SW3Cn8hZX~MUc129AL69bzvHHG8QQnyjXrY4oVBwbQntJzXtCTlgoIDatcZ~PrJ47jEDmvUhhvIRLiw6lRzh3XtWn74od8vnN1FLKcsOCyF6fLNskmmzOa~u41uFszsAD74sPZyzq-fC-BvvBnJfmMm3LK8o959p--kyuPGx7r4JvsRA~lGLE1HvQ__"
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
