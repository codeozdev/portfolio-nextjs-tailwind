import Image from "next/image";
import React from "react";
import propertyImg from "@/public/projects/property.jpg";
import cryptoImg from "@/public/projects/crypto.jpg";
import twitchImg from "@/public/projects/twitch.jpg";
import netflixImg from "@/public/projects/netflix.jpg";


export default function page() {
    return (
        <div className="w-full py-40 px-10">
            <div className="max-w-[1240px] mx-auto">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Projects
                </p>
                <h2 className="py-4">What I{"'"}ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                        <Image src={propertyImg} className="rounded-xl" alt="/" />
                    </div>
                    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                        <Image src={cryptoImg} className="rounded-xl" alt="/" />
                    </div>
                    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                        <Image src={twitchImg} className="rounded-xl" alt="/" />
                    </div>
                    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                        <Image src={netflixImg} className="rounded-xl" alt="/" />
                    </div>
                </div>
            </div>
        </div>
    );
}
