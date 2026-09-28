import React, { useEffect, useState } from 'react';
import { images } from '../assets/images.js'
import axios from 'axios';

export default function Home() {
  const [totalVisits, setTotalVisits] = useState(0)

  const fetchVists = async () => {
    try {
      // const response = await axios.get('http://localhost:5000/visits');
      const response = await axios.get('https://dropship-backend-3tta.onrender.com/visits');
      if (response.data.success) {
        setTotalVisits(response.data?.getVisits?.visits);
      }
    } catch (error) {
      console.log("error is:", error)
    }
  }
  const postVisits = async () => {
    try {
      // const res = await axios.post('http://localhost:5000/');
      const res = await axios.post('https://dropship-backend-3tta.onrender.com/');
      if (res.data.success) {
        console.log(res.data?.message, ": We will be fix it soon");
      }
    } catch (error) {
      console.log("error is:", error)
    }
  }

  useEffect(() => {
    postVisits();
    fetchVists();
  }, [])


  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 md:p-8 font-sans">
      {/* Main Card Container */}
      <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] w-full max-w-6xl p-8 md:p-12 relative overflow-hidden">

        {/* Header Section */}
        <header className="flex justify-between items-center mb-16 md:mb-24">

          {/* DigiKhoka Logo Replacement */}
          <div className="flex items-center gap-2 cursor-pointer ">
            <div className="w-8 h-8 p-5 rounded-full bg-black flex items-center justify-center text-white font-bold text-xl">
              DG
            </div>
            <span className="text-3xl font-extrabold text-black tracking-tight">
              Digi<span className="font-light">Khoka</span>
            </span>
            {/* <img src={images.logo} alt="digiKhoka_logo" className='w-[200px]'/> */}
          </div>

          {/* Right Header Links */}
          <div className="flex items-center sm:gap-8">
            <a href="#" className="text-gray-500 hover:text-gray-800 text-xs sm:text-sm pl-3 sm:pl-0 font-medium transition-colors">
              Servers Status 503
            </a>
            <button className="text-gray-700 hover:text-black transition-colors" aria-label="Menu">
              {/* Hamburger Menu Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content Column */}
          <div className="flex-1 w-full space-y-8 z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1E3A5F] leading-[1.1] tracking-tight">
              Website Is Under<br />Maintenance
            </h1>

            <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
              We have detected an issue and our technical team is doing its best to solve the problem. Please be patient :)
            </p>

            <div className="flex justify-between">
              <button className="bg-[#FBBF24] hover:bg-[#F59E0B] text-gray-900 font-semibold text-lg py-3.5 px-10 rounded-lg shadow-sm transition-all duration-200 transform hover:scale-105 active:scale-95">
                Reload
              </button>
              <div className="mr-5 text-gray-100 flex items-center text-xs font-bold">
                {totalVisits}
              </div>
            </div>

            {/* Social Icons Footer */}
            <div className="flex gap-6 pt-12 md:pt-20 text-gray-400">
              {/* Facebook */}
              <a href="https://www.facebook.com/DigiKhoka" className="hover:text-[#1E3A5F] text-yellow-600 transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="https://www.instagram.com/digikhoka?stkn=MWpqNXV5bnA0dGwweA==" className="hover:text-[#1E3A5F] text-yellow-600 transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Illustration Column */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md">
              <img
                src={images.img1}
                alt="Website Maintenance Illustration"
                className="w-full h-auto object-contain drop-shadow-xl z-10 relative"
              />
              {/* Decorative wavy lines (simulating the background doodles) */}
              <div className="absolute -bottom-10 -left-10 w-64 h-64 border-2 border-dashed border-gray-200 rounded-full opacity-50 pointer-events-none"></div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}