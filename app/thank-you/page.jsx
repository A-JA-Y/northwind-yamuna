"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { theme } from "@/utils/theme";
import logo from "@/assets/northwind-logo-dark.svg";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    // Record that a form was submitted
    if (typeof window !== "undefined") {
      localStorage.setItem("formSubmitted", "true");
    }

    // 2. Redirect back to home page after 3 seconds
    const timeout = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${theme.bg} px-4`}>
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-lg w-full text-center flex flex-col items-center">
        {/* Brand Logo */}
        <Image
          src={logo}
          alt="Northwind Estates Sector 22D"
          width={180}
          height={40}
          className="w-auto object-contain mb-6"
          priority
        />

        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Messaging */}
        <h1 className={`${theme.fontHeading} text-2xl md:text-3xl font-bold ${theme.textPrimary} mb-3`}>
          Thank you — we&apos;ve got your request
        </h1>
        <p className={`${theme.fontBody} text-gray-600 mb-8`}>
          Our project advisor will call you within 15 minutes during working hours (10 am – 7 pm,
          all days) from +91 97177 00596 — please save the number so you don&apos;t miss the call.
          Your e-brochure download has started. Redirecting you to the home page...
        </p>

        {/* Loading Spinner */}
        <div className="w-6 h-6 border-2 border-[#c8952a] border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
