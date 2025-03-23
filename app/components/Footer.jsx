import { Link } from "react-router"
import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md"
import { FaBuilding } from "react-icons/fa";
import { RiFindReplaceLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Section */}
          <div className="space-y-4">
            <img
              src="https://img.freepik.com/premium-vector/detailed-chef-logo-template_23-2148985188.jpg?w=826"
              alt="Logo"
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="text-sm leading-relaxed max-w-[250px] font-mulish text-gray-300">
              Your Gateway to a World-Class Culinary and Hospitality Education
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                to="#"
                className="hover:text-[#8B2323] transition-colors w-8 h-8 border border-gray-600  flex items-center justify-center"
              >
                <FaFacebook size={16} />
              </Link>
              <Link
                to="#"
                className="hover:text-[#8B2323] transition-colors w-8 h-8 border border-gray-600 flex items-center justify-center"
              >
                <FaWhatsapp size={16} />
              </Link>
              <Link
                to="#"
                className="hover:text-[#8B2323] transition-colors w-8 h-8 border border-gray-600 flex items-center justify-center"
              >
                <FaYoutube size={16} />
              </Link>
              <Link
                to="#"
                className="hover:text-[#8B2323] transition-colors w-8 h-8 border border-gray-600 flex items-center justify-center"
              >
                <FaInstagram size={16} />
              </Link>
            </div>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font font-cinzel mb-6 text-white">CONTACT INFO</h3>
            <div className="space-y-4">
              <hr className="w-2/3 mb-9 border-gray-500" />
              <div className="flex items-start gap-3 font-mulish mt-5">
                <FaBuilding size={20} className="flex-shrink-0 mt-1 text-yellow-400" />
                <div className="text-gray-300">
                  <p>21/A, Road- 2, Block- A,</p>
                  
                </div>
              </div>

              <div className="flex items-center gap-3 font-mulish text-gray-300">
                <RiFindReplaceLine size={20} className="text-yellow-400"/>
                <p>Johurul islam City, Rampura <br /> Bridge, Dhaka 1212</p>
              </div>

              <div className="flex items-center gap-3 font-mulish text-gray-300">
                <MdPhone size={20} className="text-yellow-400"/>
                <p>+88 - 015-52478007</p>
              </div>
              <div className="flex items-center gap-3 font-mulish text-gray-300">
                <MdEmail size={20} className="text-yellow-400"/>
                <p>mhi.bd@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Help Center Section */}
          <div>
            <h3 className="text-xl font font-cinzel mb-6 text-white">HELP CENTER</h3>
            <hr className="w-2/3 mb-9 border-gray-500 " />

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="#" className="hover:text-[#8B2323] transition-colors">
                  Admission
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#8B2323] transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#8B2323] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#8B2323] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font font-cinzel mb-6 text-white">QUICK LINKS</h3>
            <hr className="w-2/3 mb-9 border-gray-500" />

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="#" className="hover:text-[#8B2323] transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#8B2323] transition-colors">
                  Teachers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#8B2323] transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-500 text-sm text-gray-300 text-center">
          <p>
            Design by Goinnovior Limited. All rights reserved.{" "}
            <Link to="#" className="text-[#4169E1] hover:underline">
              360D Soul Limited
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}


