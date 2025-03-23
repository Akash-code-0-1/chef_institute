import type { Route } from "./+types/home";
import HomePage_ProfileSlider from '../components/HomePage_ProfileSlider';
import Apply_section from '../components/Apply_section';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import News from '../components/News';






export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Akash_Resturt" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="homePage">

      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-20 mb-10">
        <img src="https://s3-alpha-sig.figma.com/img/ef46/e58c/8ed4ef0eba46b18edb9b9d230e3f0c19?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WPKlfm74GhJERNCmr8vIBwMq5cDOlmk8xy~FEPgIldG-k5EhjZKCkQeXS3uDbRmqfn3JaJA6XQpud5180y2cZjGfbQHC4x5cspvDWic36pJm-PaVpUbV7fOqmdMp3yy4S3JjyGJZIGWeyTimHYV~nFioZnLwwlGhxfQWn6JwQ9I8uiyusfyUalMYtTCV0sKJ1h~oXg-nbDKQuSvIz9ewK0f~Gs2RA5blb5rAt0W0zfMEicSnohP8BEbwu5aaXkWZt0babAEeKPdC8AdcPCTrvCAo-eS~m~VCidEPm4qS4g5cR0eJWHsHRbS4ifpPqpNN1NJIxwYvU3xeamTh6fjoHw__"
          alt="" className="h-[97px]" />
        <img src="https://s3-alpha-sig.figma.com/img/ea62/e10f/a305d64bf164a94091330d239c19c795?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HbOJQ9MlNeFjDhmLXZIulR-haZ4z1Rahj10mlAej1nLZ3LLKdNOUqw9ZH93MsSxdvTLtGXOfVr6LbNg3Kw5eG3BZrHWWDFeZ2oKhyr8RVH~ChIFmvq5PWKE6OMgYtGP0wgMXQtxhfeE0yCowaT6W2wxi-KAlsIkQgVlDJBTN2Jli6NKT~w4YYpxdWfs0KA4Szzohcf-a~cdLCYbqnouJv~o22F4-vzezLdtDqmD9JFjjVScbwgBcyCMGXBwbBOfn8877uXJR~pACfD8UFIamlxUUNVcPCNk8j5GpUIF0xhqnBsfFNlYA7vxnWVoAR3AjWp5ViaV2HlrwTJ41bfCWLw__"
          alt="" className="h-[97px]" />
        <img src="https://s3-alpha-sig.figma.com/img/7872/664f/49641d9bd0029c2a716dd000d86d578f?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UZJgANBFm9y2ps~~ldY-U0dxEAgfR00cV7Sy6kJ~dwanZQKWyPwuvDbU3zuASGMTqUVTh~tfGMwMBXh4dTttQVq2U0llNL4LKpPRJy3~VO4Q9iACyDxa3iomJqi5HoJC9P6YKDxCN2zbcir0TnlhgA3ojyx4MF7wOcaPz721hLATdnd6oy6lyQhz6EQttJAAR2CO08dAexJdp8l93GKzre1klj9S9JwJhHj8MYBRoJgT4S-iP3bGph6tSXcN-Mt0HGiXzGNioJ-LlrhEO~VHqHy75azZahE6MgKCX~0wIS2t90UK2LLeZGalpy1RGFsn4EGzVuUOJfIyfN7igVaHxQ__"
          alt="" className="h-[97px]" />
        <img src="https://s3-alpha-sig.figma.com/img/55eb/215d/9fc88d5411713ebd80c4407bdf8c9b84?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C9jN2TMCuE7RWafMFfONOkPyQnubhgVUA~7Cj6JuzunlwvZ92lLPs~Es~qxnkO6ej3BrIkEyYWb70s75h8JLsgLwKXD-FxA0XxJ42sV9lg9jgG~aqVI~qvnjSHujCuzP83z64HO4Xc5uDoSYIc-6BKYhx~ao6dm4MMDn94IvzzqqKv8hXJwBTFx-1oWpLwdc9WbXt6w~3FyA~QmkYL~XZ4yFWUb1C1aer2JgThupIkLVfFBTsygGgN3w6SUApymRfE7Jy2hVnYOK-VHAZQdy43dGL~lSVfcH-eqLXj~EU5ZsajNeks-RjzASx0MNLto-2axT127VsXZB9oeCbqyVCg__"
          alt="" className="h-[97px]" />
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">

        <div className="left_section order-2 lg:order-1 flex flex-col justify-center items-center">
          <img src="https://images.pexels.com/photos/19501326/pexels-photo-19501326/free-photo-of-woman-hands-cutting-simit-for-breakfast.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="h-[445px] w-[450px] object-cover shadow-custom" />

          <div className="w-[450px] p-6 bg-[#F2E39B] mt-5">
            <h1 className="mb-2 text-[20px] font-cinzel font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">OUR CONTACT</h1>
            <hr className="bg-black" />
            <p className="text-[14px] mt-2">
              21/A, Road - 2, Block A, Aftab Nagar (Beside East West University), Merul Badda, Dhaka, Bangladesh, 1212
            </p>
            <p className="text-[14px] mt-2">+8801552-478007</p>
            <p className="text-[14px]">rnth.bd@gmail.com</p>
          </div>
        </div>


        <div className="right_section xl:w-[600px] order-1 lg:order-2">

          <div className="">
            <h1 className="text-[43px] text-center lg:text-left font-cinzel font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">
              A LITTLE STORY AB
              <span
                className="inline-block relative w-[43px] h-[43px] rounded-full bg-cover bg-center mx-1 align-middle bottom-1"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600')",
                  verticalAlign: "middle"
                }}>
              </span>
              UT YOUR JOURNEY
            </h1>
          </div>



          <div className="">
            <p className="mb-3 font-mulish ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora quas itaque impedit fuga delectus laboriosam dolores explicabo nostrum. Odio, consequuntur. Voluptatum, deserunt quo? Sed eius architecto magnam iste delectus!lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut cupiditate tenetur iure magni vero itaque esse id dolores recusandae voluptatem obcaecati dicta accusantium voluptatum, porro ipsam. Sunt qui enim repellat.</p>
          </div>

          <div className="">
            <img src="https://s3-alpha-sig.figma.com/img/2aa8/b988/be630ed1a4b426a8f905edddfc23ae10?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cEpSXKiatZrO2IDiJNctgJbyTVa9aDNJTXfOxdkfhg7tb7uY~2A0sg~w75oZSJVt6NSeKLfElaztaTlXLREKXdKIC5avfYHe2dRFQZ8Qf49M58en4rR5mQLVvApYeWPM7gDrFN20F6WF5lxGmiV3G1sNSgMl1wRKqtgRJaMegh2LWw5Nadm38-J~Syy1o6uISUsrAYxrQ1an1NnJzrFa-5YNScF3Q9Jybg7U30xJ6-ikmiYVDJzf3hUoKiiuMmI44PYTLoQX-DS5-8W~YFOyvx2u6HUo3MNPVQTzC759h~x~pX~2v3jNT7CnIs1f22UGbYb8SfdmGuXma35ivv833Q__" alt="" className="shadow-custom" />
          </div>


        </div>

      </div>

      {/* PROGRAMS */}
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

        <div className="lg:w-1/2 lg:h-[60px] text-[12px] bg-yellow-50 flex justify-around items-center shadow-custom bg-transparent">
          <span className="p-1">Diploma Course</span>
          <span className="pl-7 pr-7 pt-2 pb-2 font-cinzel text-white bg-gradient-to-b from-[#993128] to-[#33100D]">SHORT TERM COURSE</span>
          <span>Other Related Course</span>
        </div>
      </div>

      <div className="flex justify-center items-center mt-16">
        <div className="flex justify-between items-center flex-col lg:flex-row w-2/3 border border-[#AA9452]">
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
              src="https://media.istockphoto.com/id/1166057393/photo/pot-with-fire-chief-cooking.jpg?s=612x612&w=0&k=20&c=InqccvYAnQi6njUvWSj23EyumUTzaTuycEU8VPsxGqw="
              alt="Barista Program"
              className="w-[600px] h-[465px] object-cover"
            />
          </div>
        </div>
      </div>








      <div className="flex flex-col items-center justify-center">

        <div className="cards flex flex-col xl:flex-row justify-center items-center gap-8 mt-16 ">

          <div className="card w-full md:w-1/2 xl:w-1/3 flex flex-col items-center border border-[#AA9452] p-4 bg-[#FAF5DC] shadow-custom">
            <div className="text-left ">
              <img
                src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=600" // Uploaded image
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
                  src="https://images.pexels.com/photos/3338672/pexels-photo-3338672.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                src="https://images.pexels.com/photos/1397514/pexels-photo-1397514.jpeg?auto=compress&cs=tinysrgb&w=600" // Uploaded image
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
                  src="https://images.pexels.com/photos/3351927/pexels-photo-3351927.jpeg?auto=compress&cs=tinysrgb&w=600"
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

        <div className="mr-40">
          <button className="mt-14  w-[200px] justify-center font-cinzel items-center  text-white size-10 bg-red-800 flex mb-7 relative left-[44%]">
            VIEW PROGRAM
          </button>
        </div>


      </div>



      <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-32 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  rounded-lg">
          <div className="flex flex-col justify-center items-center text-center border border-[#CD9B2F] h-[150px]">
            <span className="text-3xl sm:text-4xl font-cinzel font-bold text-[#CD9B2F]">10K+</span>
            <span className=" text-sm sm:text-base font-mulish text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">Students Trained</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center border border-[#CD9B2F] h-[150px]">
            <span className="text-3xl sm:text-4xl font-bold font-cinzel text-[#CD9B2F]">08+</span>
            <span className=" font-mulish text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">Courses Offered</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center border border-[#CD9B2F] h-[150px]">
            <span className="text-3xl sm:text-4xl font-bold font-cinzel  text-[#CD9B2F]">04</span>
            <span className=" font-mulish text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">Award-Winning</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center border border-[#CD9B2F] h-[150px]">
            <span className="text-3xl sm:text-4xl font-bold font-cinzel text-[#CD9B2F]">5K+</span>
            <span className="font-mulish text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">Alumni Success</span>
          </div>
        </div>


        <div className="text-center mt-20">
          <h3 className="text-[#CD9B2F] text-[14px]">RESOURCEFUL INFORMATION</h3>
          <h2 className="text-[54px] font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">
            YOUR FO<span
              className="inline-block relative w-[54px] h-[54px] rounded-full bg-cover bg-center mx-1 align-middle bottom-1"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600')",
                verticalAlign: "middle"
              }}>
            </span>D FUTURE STARTS HERE
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">

          <div className="relative group overflow-hidden  shadow-lg">
            <img
              src="https://images.pexels.com/photos/3217146/pexels-photo-3217146.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Admissions"
              className="w-full h-[510px] object-cover object-top transition-transform transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 p-4 flex flex-col items-start">
              <div className="absolute flex justify-start items-baseline flex-col bottom-5">
                <span className="text-white text-[50px] font-bold font-cinzel border border-white pl-3 pr-3">01</span>
                <span className="text-white text-[25px] font-cinzel font-semibold mt-2">ADMISSIONS</span>
              </div>

            </div>
          </div>



          <div className="relative group overflow-hidden  shadow-lg">
            <img
              src="https://images.pexels.com/photos/3771106/pexels-photo-3771106.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Admissions"
              className="w-full h-[510px] object-cover object-top transition-transform transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 p-4 flex flex-col items-start">
              <div className="absolute flex justify-start items-baseline flex-col bottom-5">
                <span className="text-white text-[50px] font-bold font-cinzel border border-white pl-3 pr-3">02</span>
                <span className="text-white text-[25px] font-cinzel font-semibold mt-2">HOW TO APPLY</span>
              </div>

            </div>
          </div>

          <div className="relative group overflow-hidden  shadow-lg">
            <img
              src="https://images.pexels.com/photos/2537606/pexels-photo-2537606.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Admissions"
              className="w-full h-[510px] object-cover object-top transition-transform transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 p-4 flex flex-col items-start">
              <div className="absolute flex justify-start items-baseline flex-col bottom-5">
                <span className="text-white text-[50px] font-bold font-cinzel border border-white pl-3 pr-3">03</span>
                <span className="text-white text-[25px] font-cinzel font-semibold mt-2">REQUEST INFO</span>
              </div>

            </div>
          </div>

        </div>


      </div>



      <HomePage_ProfileSlider />
      <Gallery />
      <Location />
      <Testimonials />
      <FAQSection />
      <News />









      <Apply_section />
    </div>
  )
}
