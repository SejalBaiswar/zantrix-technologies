import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo + Company Name */}
        <div className="flex items-center gap-3">
         <div className="h-12 w-12 overflow-hidden rounded-full border-2  shadow-lg shadow-cyan-500/20">
  <Image
    src="/logo.png"
    alt="Zantrix Logo"
    width={48}
    height={48}
    className="h-full w-full object-cover"
    priority
  />
</div>

          <h2 className="text-2xl font-bold text-cyan-400">
            Zantrix Technologies
          </h2>
        </div>

        <nav className="hidden gap-8 md:flex">
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>

          <a href="#services" className="hover:text-cyan-400">
            Services
          </a>

          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}