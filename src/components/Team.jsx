import React from "react";
import Woman from "../assets/image/woman.jpg";
import Woman2 from "../assets/image/woman2.jpg";

const Team = () => {
  return (
    <section className="w-full mt-8 to-[#0c0c0c] text-white p-6 md:p-10 lg:p-14 overflow-hidden flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start justify-center max-w-7xl mx-auto">
        {/* Left column */}
        <div className="flex-1 min-w-0">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
            Turning Ideas Into <br /> Masterpieces
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <span className="inline-block w-10 h-10 bg-lime-300 rounded-full shadow-[0_0_30px_rgba(163,230,53,0.6)]" />
            <span className="text-sm text-white/60">Creative energy, always on.</span>
          </div>

          <div className="mt-8 relative max-w-[560px]">
            <div className="bg-[#171717] rounded-xl p-3 shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
              <div className="relative  rounded-xl overflow-hidden">
                <img
                  src={Woman2}
                  alt="Team working"
                  className="w-full h-[260px] md:h-[400px] object-cover " 
                />
                <div className="absolute bottom-4 left-4 bg-lime-300 text-black text-xs md:text-sm font-semibold px-4 py-2 rounded-md">
                  A CREATIVE DESIGN AGENCY
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-lime-300 rounded-md flex items-end justify-center gap-1 p-2">
                  <span className="w-1.5 h-4 bg-black/70 rounded-full" />
                  <span className="w-1.5 h-6 bg-black/70 rounded-full" />
                  <span className="w-1.5 h-3 bg-black/70 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex-1 min-w-0 lg:pt-8">
          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-[520px]">
            We may be a compact team, but our creativity knows no bounds. By
            staying agile and working hand-in-hand with our clients, we transform
            ideas into cutting-edge designs that make a lasting impression.
          </p>

          <div className="mt-8 relative max-w-[420px]">
            <div className="bg-[#171717] rounded-xl p-3 shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={Woman}
                  alt="Creative portrait"
                  className="w-full h-[300px] md:h-[450px] object-cover "
                />

                {/* Doodle bulb */}
                <div className="absolute top-4 left-4 text-pink-300">
                  <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M32 10c-9.4 0-17 7.2-17 16 0 6.2 3.6 11.6 8.8 14.3V48h16.4v-7.7C45.4 37.6 49 32.2 49 26c0-8.8-7.6-16-17-16Z"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26 54h12M24 58h16"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 22l-6-2M54 20l6-2M16 10l-4-6M48 10l4-6"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
