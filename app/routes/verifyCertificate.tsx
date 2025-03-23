"use client"

import type React from "react"
import { useState } from "react"
import { FaSearch, FaCheckCircle, FaTimesCircle } from "react-icons/fa"

export default function VerifyCertificatePage() {
    const [certificateId, setCertificateId] = useState("")
    const [verificationStatus, setVerificationStatus] = useState<"idle" | "success" | "error">("idle")
    const [certificateData, setCertificateData] = useState<{
        name: string
        course: string
        issueDate: string
        expiryDate: string
        certificateId: string
    } | null>(null)

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault()

        // Mock verification - in a real app, this would call an API
        if (certificateId === "AKSH2023001" || certificateId === "AKSH2023002") {
            setVerificationStatus("success")
            setCertificateData({
                name: "John Smith",
                course: "Professional Barista Training Program",
                issueDate: "15 June 2023",
                expiryDate: "15 June 2026",
                certificateId: certificateId,
            })
        } else {
            setVerificationStatus("error")
            setCertificateData(null)
        }
    }

    return (
        <div className="verify-certificate-page">
            {/* Header Section */}
            <div className="text-center mt-44 mb-10">
                <h2 className="text-[#CD9B2F] text-[14px]">AUTHENTICATION</h2>
                <h1 className="text-[25px] lg:text-[54px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">
                    VERIFY YOUR CERTIFICATE
                </h1>
                <p className="mb-10 text-center text-[12px] lg:text-[15px] max-w-3xl mx-auto">
                    Enter your certificate ID to verify its authenticity. All certificates issued by Akash Resturt can be verified
                    through our secure verification system.
                </p>
            </div>

            {/* Verification Form */}
            <div className="max-w-3xl mx-auto px-4 mb-10">
                <div className="border border-[#AA9452] p-8 bg-[#FAF5DC] shadow-md">
                    <form onSubmit={handleVerify} className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            value={certificateId}
                            onChange={(e) => setCertificateId(e.target.value)}
                            placeholder="Enter Certificate ID (e.g., AKSH2023001)"
                            className="flex-grow border border-[#CD9B2F] p-3 focus:outline-none focus:ring-1 focus:ring-[#993128]"
                            required
                        />
                        <button
                            type="submit"
                            className="md:w-[200px] justify-center font-bold items-center text-white py-3 px-6 bg-gradient-to-b from-[#993128] to-[#33100D] flex"
                        >
                            <FaSearch className="mr-2" size={16} />
                            VERIFY
                        </button>
                    </form>

                    <div className="mt-4 text-sm text-gray-600">
                        <p>* Certificate ID can be found at the bottom of your certificate</p>
                        <p>* For any issues with verification, please contact our support team</p>
                    </div>
                </div>
            </div>

            {/* Verification Result */}
            {verificationStatus !== "idle" && (
                <div className="max-w-3xl mx-auto px-4 mb-20">
                    {verificationStatus === "success" && certificateData && (
                        <div className="border border-[#AA9452] p-8 bg-white shadow-md">
                            <div className="flex items-center gap-3 mb-6">
                                <FaCheckCircle className="text-green-600" size={24} />
                                <h2 className="text-[20px] font-bold text-green-600">CERTIFICATE VERIFIED</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-sm text-gray-500">CERTIFICATE HOLDER</h3>
                                        <p className="text-lg font-bold text-[#993128]">{certificateData.name}</p>
                                    </div>

                                    <div>
                                        <h3 className="text-sm text-gray-500">COURSE COMPLETED</h3>
                                        <p className="text-lg font-bold text-[#993128]">{certificateData.course}</p>
                                    </div>

                                    <div>
                                        <h3 className="text-sm text-gray-500">CERTIFICATE ID</h3>
                                        <p className="text-lg font-bold text-[#993128]">{certificateData.certificateId}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-sm text-gray-500">ISSUE DATE</h3>
                                        <p className="text-lg font-bold text-[#993128]">{certificateData.issueDate}</p>
                                    </div>

                                    <div>
                                        <h3 className="text-sm text-gray-500">EXPIRY DATE</h3>
                                        <p className="text-lg font-bold text-[#993128]">{certificateData.expiryDate}</p>
                                    </div>

                                    <div className="pt-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-16 h-16 bg-[#F2E39B] flex items-center justify-center">
                                                <img src="/placeholder.svg?height=40&width=40" alt="Certificate Seal" className="w-10 h-10" />
                                            </div>
                                            <p className="text-sm">
                                                This certificate has been verified as authentic and issued by Akash Resturt Culinary Institute.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-4 bg-[#F2E39B] border border-[#CD9B2F]">
                                <p className="text-sm">
                                    To confirm the authenticity of this certificate, you can contact our certification department at
                                    certificates@akashresturt.com or call +8801552-478007.
                                </p>
                            </div>
                        </div>
                    )}

                    {verificationStatus === "error" && (
                        <div className="border border-[#AA9452] p-8 bg-white shadow-md">
                            <div className="flex items-center gap-3 mb-6">
                                <FaTimesCircle className="text-red-600" size={24} />
                                <h2 className="text-[20px] font-bold text-red-600">CERTIFICATE NOT FOUND</h2>
                            </div>

                            <p className="text-gray-700 mb-6">
                                We could not verify the certificate ID you provided. Please check the ID and try again.
                            </p>

                            <div className="p-4 bg-[#F2E39B] border border-[#CD9B2F]">
                                <p className="text-sm">
                                    If you believe this is an error, please contact our certification department at
                                    certificates@akashresturt.com or call +8801552-478007 for assistance.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Additional Information */}
            <div className="max-w-5xl mx-auto px-4 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-[#AA9452] p-6 bg-[#FAF5DC] shadow-md">
                        <h3 className="text-[18px] font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">
                            ABOUT OUR CERTIFICATES
                        </h3>
                        <p className="text-sm">
                            All certificates issued by Akash Resturt are digitally secured and can be verified online. Our
                            certificates include unique identifiers and security features to prevent forgery.
                        </p>
                    </div>

                    <div className="border border-[#AA9452] p-6 bg-[#FAF5DC] shadow-md">
                        <h3 className="text-[18px] font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">
                            LOST YOUR CERTIFICATE?
                        </h3>
                        <p className="text-sm">
                            If you've lost your physical certificate, you can request a replacement. Please contact our administration
                            office with your details and proof of identity.
                        </p>
                    </div>

                    <div className="border border-[#AA9452] p-6 bg-[#FAF5DC] shadow-md">
                        <h3 className="text-[18px] font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#993128] to-[#33100D]">
                            FOR EMPLOYERS
                        </h3>
                        <p className="text-sm">
                            Employers can verify the authenticity of certificates presented by job applicants using our online
                            verification system or by contacting our certification department directly.
                        </p>
                    </div>
                </div>
            </div>

            {/* Partner Logos */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-10 mb-20">
                <img src="https://static.vecteezy.com/system/resources/previews/011/874/816/non_2x/chef-logo-design-illustration-restaurant-logo-vector.jpg" alt="Partner Logo" className="h-[97px]" />
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-restaurant-logo%2C-restaurant-logo-design-template-33255790cb8e1186b28609dd9afd4ee6_screen.jpg?ts=1668794604" alt="Partner Logo" className="h-[97px]" />
                <img src="https://marketplace.canva.com/EAGKDhXEhoY/1/0/1600w/canva-brown-and-white-simple-modern-professional-catering-logo-Dvz9NG3gqk0.jpg" alt="Partner Logo" className="h-[97px]" />
                <img src="https://img.freepik.com/free-vector/gradient-restaurant-logo-design_23-2151257068.jpg" alt="Partner Logo" className="h-[97px]" />
            </div>
        </div>
    )
}

