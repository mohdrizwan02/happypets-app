'use client'

import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

import NewsLetter from "@/components/NewsLetter";

export default function HomePage(){
    return (
        <>
        <Navbar/>
        <HeroSection/>
        <div className = 'mt-1'>

        </div>
        <FAQSection/>
        <NewsLetter/>
        <Footer/>
        </>
    );
}