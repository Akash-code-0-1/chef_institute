import React from 'react'
import Apply_section from '../components/Apply_section';
import Location from '../components/Location';
import { FaPlayCircle } from "react-icons/fa";

const about = () => {
  return (
    <div className='about_page mt-32 items-center '>

      <div className="flex justify-center items-center mb-10 ">
        <div className="header text-center w-[500px] mt-10">
          <h2 className="text-[#CD9B2F] text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] ">A LEGACY OF CULINARY EXCELLENCE</h2>

          <h1 className="text-[34px] md:text-[40px] lg:text-[45px] xl:text-[55px] font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#993128] to-[#33100D]">ABOUT US</h1>
        </div>
      </div>

      <div className="main_greeting_container flex justify-center mb-10">

        <div className="greatings_section w-3/4 ">

          <div className="video_section relative mt-10">
            <video src="/video.mp4" className="w-full h-[200px] md:h-auto object-cover " />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 ">
              <button className="h-16 bg-[#CD9B2FB2] w-16 flex justify-center items-center">
                <FaPlayCircle className='text-[#993128] h-10 w-10' />
              </button>

            </div>
          </div>

          <div className="text_content text left mt-10">

            <h2 className="text-[12px] lg:text-[15px] font-cinzel text-[#CF9B2B]">Chef Academy & Cooking School</h2>
            <h1 className="text-[25px] lg:text-[35px] xl:text-[48px] font-cinzel font-semibold mt-2 text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">
              Greetings from the Institute of <br /> Culinary Education
            </h1>

            <hr className='w-[90%] mt-5 mb-5' />

            <p className='text-[12px] font-mulish'>RN Tourism and Hospitality Management Institute (RNTHMI) is an approved center from the City and Guilds of London Institute, UK, and nationally affiliated with BTEB and NSDA of Bangladesh. Located in Aftab Nagar, Dhaka, and South Khulshi, Chittagong, we offer comprehensive courses in tourism and hospitality management, including food preparation and culinary arts. Join us to embark on a journey of excellence and innovation in the hospitality industry.</p>

          </div>



          <div className="card_section mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white  overflow-hidden border border-[2px] border-[#F2E39B]">
              {/* Image Section */}
              <div className="relative h-[300px] lg:h-full min-h-[300px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/324b/5585/3b503157087155b5437c9e0d3850e793?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NtNliyXhqRc07fQPM2iOV32ywa7BX3nJ~omSAsNzLZBtMoFgzNcNBNSrQ7SwZBF7OSEwHjCrvS1rSNjYuy7z5UARCk~26jiVCcJkv7l5ioqURq-gARJGIWy-xH80ggisOaIFPJQQ0oY2SlNiTmvsQjyzv4pfHUahDzJJ2IN0ULoph22NvlAzZmrlqF3O8kKE9co6DedJ5J4tVBAcpMI0DIyB~YGvsXWrm~KKd0Dl6WBxr~yLqq96F~-viLmsV4ZvBoVzjpR4K6dA10pOcv1N1PkK7RgcLxlbq2N~Y0yfmhwkdnhFQgJwBAVYE07oPnaeiFjVyjjB2qc6PVDhGw~TAA__"
                  alt="Chef preparing food"
                  className="w-full h-full xl:h-[600px] object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-3 lg:p-5 space-y-6">
                <div className="space-y-2">
                  <p className="text-[#CD9B2F] uppercase tracking-wide text-[11px] lg:text-[13px] ">About RNTHI</p>
                  <h1 className="text-[#8B2323] text-[24px] lg:text-[30px] font-cinzel font-semibold">MASTER AT CULINARY ARTS</h1>
                  <p className="text-[#525252] leading-relaxed font-mulish text-[15px]">
                    RN Tourism and Hospitality Management Institute (RNTHMI), approved by City and Guilds, UK, and affiliated
                    with BTEB and NSDA, offers premier tourism, hospitality, and culinary courses in Dhaka and Chittagong.
                  </p>
                </div>

                <hr className='w-full bg-[#F2E39B] h-[2px]' />

                {/* Mission Section */}
                <div className="space-y-2">
                  <h2 className="text-[#8B2323] text-xl font-cinzel">Our Mission</h2>
                  <p className="text-[#525252] text-[14px] leading-relaxed font-mulish">
                    To inspire and equip individuals with the culinary skills and knowledge to pursue successful careers in
                    the food industry.
                  </p>
                </div>

                {/* Vision Section */}
                <div className="space-y-2">
                  <h2 className="text-[#8B2323] text-xl font-cinzel">Our Vision</h2>
                  <p className="text-[#525252] text-[14px] leading-relaxed font-mulish">
                    To be the leading culinary academy, recognized for excellence in education, innovation, and producing
                    world-class chefs.
                  </p>
                </div>

                {/* Values Section */}
                <div className="space-y-2">
                  <h2 className="text-[#8B2323] text-xl font-cinzel">Our Values</h2>
                  <p className="text-gray-600 leading-relaxed font-mulish">
                    We strive for the highest standards of education and training, providing a rigorous and enriching learning
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <Location />

      <div className="flex justify-center mb-10">
        <div className=" bg-white w-3/4 border-[2px] border-[#F2E39B]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="space-y-6 pl-5 order-2 lg:order-1">
              <h1 className="text-[20px] font-semibold text-[#1f1e1e] font-mulish">
                Be part of a close-knit community, where everyone
                <br /> speaks your language—food.
              </h1>
              <p className="text-[#525252] font-mulish text-[14px]">
                At <span className="font-semibold">RNTHI</span>, you'll find all the ingredients you need
                to create a college experience that's uniquely yours—guided by your passions,
                your interests, and your imagination. Each of our campuses offers a
                distinct flavor, a unique feel; yet at everyone, you'll be part of a
                tight-knit, diverse community of students and instructors from all
                over the world, united in your shared passion for food.
              </p>


              <hr className='w-full bg-[#F2E39B] h-[2px]' />

              {/* Accreditation & Recognition */}
              <div>
                <h2 className="text-[15px] font-semibold text-[#1f1e1e]  uppercase tracking-wide">
                  Accreditation and Recognition
                </h2>
                <div className="flex space-x-4 mt-4">
                  {/* Placeholder for Accreditation Logos */}
                  <div className="w-24 h-24 flex justify-center items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/ef46/e58c/8ed4ef0eba46b18edb9b9d230e3f0c19?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IKgxn7zWk~1UHfe7eZqG8~QI1ABy8IJXd9go9016PP7CBg22typpBuMc1RkBSiPbpF-ebBYhClJm~U9p9HFLxYUb7Pkpgs3QkICtBEZCyPJ1CV~l5A3JnMalYngBF13IQXsCk4Sju-oMopdtNUyhigCYmXyDxKK~g4pn0VQcwvCw0LE0gXS3GX3j32HdF3bMk~3b2~9RfqAa0ENmz-qxWK6MaW59dvZwx1ieb6jYu0pePuaVh88T5cWGDC4AuORIofhCPxkU1BdHqcxp6rAb6UB3dwGWpTZXhcBHdl8aCqMZsqk0Ed9iXDiXfKsjSmYh9xoHVsS3WF-~~g19CRqvrA__" alt="" className="w-20 h-20  object-cover"/>

                  </div>

                  <div className="w-24 h-24 flex justify-center items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/ea62/e10f/a305d64bf164a94091330d239c19c795?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b6MCoM6vPIKrln6OvOYZSaTce07Adgo8J2eloz8aa9whx3xe0oi7ICV6QuQ9~NE4i2JjnOC3brZToGKWC8CJLr-E7SSgaC6X~dzZcFSBC-WdSe1Z5a997OoANlI2Xdc3D1lMuCVxBoxJk5VBpf7njBe-6ecffd-Y~MKervIkczFUA4kFbijZ48dL78r38uGW2j4E6whMjxyET--zAzE0rwgF3CciUKkn-sNURFZX3gK2YPx8rFLhSj~skKnKShfhEeEsKh5QGxBsbsZ0OxocT7xhbv3M3gO1jTUwiAh42xwE54OBeEVSUBUIqGsxQjP1TjSS65hDzmPLz8TT-L7ntw__" alt="" className="w-20 h-20  object-cover"/>

                  </div>

                  <div className="w-24 h-24 flex justify-center items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/7872/664f/49641d9bd0029c2a716dd000d86d578f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PsvvxD8yMv19be98XOFz18r93SHL~yo4Nf987iFDLiQ3LxPmVnXaUDhW9hl4DztFvRelmUQHmkFDfxzH62P5ErxSjK5QIeWPn5TdpF~ayveybW6wTveg-3iSHLgE~9DjD3TE8QJWJDavMUHrei7Ew2c7vbJLvaqiGMxZIfRqWhe~yLZ2uzcGKDj6oZVfQcIM3Ko3-ycqIqWwndvOGGB6~ce5U0inwAZsE9lsbjNV229QeZTkrDpkhq0Cn3p4MixmiiKVhOp9X2Hps8b3gv~xLXsGp0sKJFNsKzNlm5pW1-gW7~vO5ALi0ZHxwegHvYUaV3VPTDc99vFS3J-ivcxxHg__" alt="" className="w-20 h-20  object-cover"/>

                  </div>
                  
                  <div className="w-24 h-24 flex justify-center items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/55eb/215d/9fc88d5411713ebd80c4407bdf8c9b84?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dSuXfMTW-W~8-15DWCJf1LzEkVlryo~p1hBQslosLP1HC3q--PafHuKH1TTSkS3IIr-E23y8gJnMwWgtpOzHH318Gp-XBrH89BcIbXoMAV4XueqXaQS0coOd8n4ELU-R5GRnkbMGScfZ~TRTks~JyJd~z50H4OXg-SaApfNA31ypC7BPpffkYahzYn2Lgrd6Wl2wYc-GI1bgWnM0kZmYW8yJ~yWC0KZu65~c-ZGTXm013rHmy1EQWNd68t8jLDPVIsBax1jl5bn7DvsCHAVhxarpxt1JJEkbOFTQz0Q66vzYZiBozgvKUNWpwXRGzV0XpT8JpPNIuGn~UjJSXtqOtg__" alt="" className="w-20 h-20  object-cover"/>

                  </div>

                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className='order-1 lg:order-2'>
              <img
                src="https://s3-alpha-sig.figma.com/img/9cb1/ec20/463841beff1ee02e193c4cb506fb0ef4?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lB5rb8pSxx1ML~1DtHDoz9TOkuSi-UzNfTQZIBz7LDt3VjmuKLi1KGNVz2~-rTYVuIeequJw0lDzwQuCe35dbwz74fK8ornFJym4~N4YQEL97h0NGVObXvB2rGzIBJWWIh3qvh8yqOgvxh-tPQjjT8IGN~st76HnLRwVnFBOkYmW45mdbZ7LpXCA7OBpMLXV6AyMONiOOoAspPo6WARnIUTWeXaEgrU4zgTUUtnmJvUTyMTT9aoOcMqIP-5luYAFdmiA39Xr8CPwydG6uj~LvCaKFV4n~FfKIvk0NDvu1XL5zyvBDCWhbHGUJh-7svYOdToqDnKQYxyyKP1pRx2GRA__"
                alt="Culinary Community"
                className="h-[500px]  w-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>



      <Apply_section />
    </div>
  )
}

export default about;
