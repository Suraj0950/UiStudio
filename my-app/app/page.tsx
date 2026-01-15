import Image from "next/image";
import { Button } from "@/components/ui/button"; 
import { UserButton } from "@clerk/nextjs";
import Header  from "./_shared/Header";
import Hero from "./_shared/Hero";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      {/* GRADIENT BACKGROUND */}
      <div className="absolute pointer-events-none inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-40 h-128 w-lg rounded-full bg-[#FF6695] blur-[300px]" />
        <div className="absolute -top-20 -right-40 h-128 w-lg rounded-full bg-[#FFE4B2] blur-[120px]" />
        <div className="absolute -bottom-100 left-1/3 h-200 w-lg rounded-full bg-[#ffff33] blur-[200px]" />
      </div>

    </div>
  );
}
