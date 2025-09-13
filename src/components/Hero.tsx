const Hero = () => {
    return (
        <div className="h-[100vh] w-full flex flex-col justify-center items-center gap-6 relative">
        {/* Título principal */}
        <h1 className="font-title text-center bg-[#8B6F47] w-full py-8 text-3xl md:text-5xl xl:text-7xl">
          Ambar Gorgon
        </h1>
      
        {/* Subtítulo */}
        <h6 className="font-bold lowercase text-2xl md:text-4xl xl:text-5xl -tracking-widest text-center md:text-right md:self-end md:mr-12 xl:mr-24">
          Diseño y programación
        </h6>
        {/* Scroll indicator */}
      {/* Versión "mouse" → solo visible en pantallas medianas y grandes */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#2D4A2B] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#2D4A2B] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Versión "mano" → solo visible en pantallas pequeñas */}
      <div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#2D4A2B]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      </div>
      
    )
}

export default Hero