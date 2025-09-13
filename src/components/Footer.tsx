

const Footer = () => {
  return (
    <footer className="bg-[#b27256] text-white py-10 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/40 pt-6">
        
        {/* Izquierda */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">Contáctame</h3>
          <p className="text-sm opacity-80">
            Portfolio Ambar Gorgon © {new Date().getFullYear()} <br />
            Desarrollado en <span className="font-semibold">React</span>
          </p>
        </div>

        {/* Iconos sociales */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/ambar-gorgon-6a8442212/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#0A66C2] transition group"
          >
            <img
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="invert group-hover:invert-0"
            />
          </a>
          <a
            href="https://github.com/ambargorgon"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2  rounded-full hover:bg-black transition group"
          >
            <img
              src="/icons/github.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="invert group-hover:invert-0"
            />
          </a>
          <a
            href="mailto:ambar.gorgon@example.com"
            className="p-2 mt-1 rounded-full hover:bg-[#D44638] transition group"
          >
            <img
              src="/icons/mail.svg"
              alt="Email"
              width={24}
              height={24}
              className="invert group-hover:invert-0"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
