import React from "react";
import boysImage from "../assets/image/boys.png";

const Services = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0b0b0b] via-[#111111] to-[#0b0b0b] text-white rounded-[36px] md:rounded-[48px] p-6 md:p-10 lg:p-14 overflow-hidden">
      <div className="relative">
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-lime-300/20 blur-3xl" />
        <div className="absolute -bottom-10 -right-6 w-36 h-36 bg-lime-300/15 blur-3xl" />

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start relative">
          {/* Left column */}
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-3">
              <span className="text-xl md:text-2xl font-semibold">Our</span>
              <span className="px-3 py-1 bg-lime-300 text-black rounded-md font-semibold text-lg md:text-2xl">
                Services
              </span>
            </div>

            <p className="mt-4 text-sm md:text-base text-white/70 max-w-[420px]">
              We offer a range of creative and digital services designed to
              help your brand stand out.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "UI/UX Design",
                "Web Development",
                "3D Designs",
                "Motion Graphics",
              ].map((label, idx) => (
                <button
                  key={label}
                  className="w-full max-w-[360px] flex items-center justify-between gap-4 bg-white/5 border border-white/15 rounded-full px-5 py-3 text-sm md:text-base hover:border-lime-300/60 transition"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lime-300 font-semibold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/90">{label}</span>
                  </span>
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70">
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col md:flex-row gap-6 items-stretch">
              <div className="relative bg-[#171717] rounded-3xl p-3 shadow-[0_25px_80px_rgba(0,0,0,0.6)] flex-1">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={boysImage}
                    alt="Creative team"
                    className="w-full h-[320px] md:h-[360px] object-cover grayscale contrast-125"
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-8 left-2 rotate-[-8deg] text-blue-400/80 text-xs tracking-widest">
                      DESIGN · DIGITAL · DESIGN · DIGITAL
                    </div>
                    <div className="absolute bottom-8 right-4 rotate-[12deg] text-blue-400/80 text-xs tracking-widest">
                      DESIGN · DIGITAL · DESIGN · DIGITAL
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full md:w-[220px]">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="text-xs text-white/60">
                    Ever wondered how design magic happens?
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-semibold">See how we work</span>
                    <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70">
                      →
                    </span>
                  </div>
                </div>

                <div className="bg-lime-300 text-black rounded-2xl p-4">
                  <p className="text-xs text-black/70">
                    Looking for design experts who can bring your vision to life?
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-semibold">Meet our expert</span>
                    <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-black/80">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
