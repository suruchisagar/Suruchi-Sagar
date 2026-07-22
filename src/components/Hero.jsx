export default function Hero() {
  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />

      {/* Right Side Image */}
      <img
        src="/portfolio-bg.png"
        alt="Suruchi"
        className="
          absolute
          right-0
          bottom-0
          h-[85%]
          object-contain
          z-0
        "
      />

      {/* Content */}
      <div className="relative z-20 flex items-center h-full px-8 md:px-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-amber-300 font-medium font-mono text-sm">
              open to opportunities
            </span>
          </div>

          {/* Intro */}
          <p className="text-gray-400 text-lg mb-2">
            Hi there, I&apos;m
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-white">
              Suruchi{" "}
            </span>

            <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              Sagar
            </span>

            <span className="animate-pulse text-amber-400">|</span>
          </h1>

          {/* Role line — terminal style */}
          <h2 className="font-mono text-xl md:text-2xl text-amber-400 mt-5">
            <span className="text-amber-700">{">"} </span>
            full stack developer
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-lg mt-8 max-w-2xl">
            Building scalable web applications with modern technologies and
            creating seamless digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="px-8 py-4 rounded-sm bg-amber-500 text-black font-mono font-medium hover:bg-amber-400 transition">
              contact me →
            </button>

            <button className="px-8 py-4 rounded-sm border border-white/15 text-white font-mono hover:bg-white/5 transition">
              view projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}