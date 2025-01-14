import React from "react";
import Image from "next/image";
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className="ml-24 pt-6 flex flex-col md:flex-row items-center bg-white md:space-x-0">
      {/* Text Box */}
      <div className="bg-violet-950 h-[500px] w-[650px] text-white md:h-[500px] md:w-[650px] md:ml-0">
        <div className="max-w-lg">
          <h1 className="text-3xl font-medium ml-16 pt-8 md:text-3xl md:ml-16 md:pt-8">
            The furniture brand for the future, with timeless designs
          </h1>
          <div className="ml-16 pt-12 md:ml-16 md:pt-12">
            <Link href="./allprod">
              <button className="bg-violet-400 text-white py-3 px-6">
                View Collection
              </button>
            </Link>
          </div>
          <p className="ml-16 pt-56 mb-1 font-normal text-sm md:ml-16 md:pt-56">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="mt-6 md:mt-0 md:ml-0">
        <Image
          src="/img/chair.jpg"
          alt="chair"
          width={450}  // Image width set to match box width
          height={350} // Image height set to match box height
          className=" max-w-xs md:max-w-none"
        />
      </div>
    </div>
  );
};

export default HeroSection;