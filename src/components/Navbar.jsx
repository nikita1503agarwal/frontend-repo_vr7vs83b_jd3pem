import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-cyan-400" />
          <span className="text-slate-900 font-semibold text-lg">BlueFin Market</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#products" className="hover:text-slate-900 transition">Products</a>
          <a href="#quality" className="hover:text-slate-900 transition">Quality</a>
          <a href="#about" className="hover:text-slate-900 transition">About</a>
          <a href="#contact" className="inline-flex items-center rounded-full bg-sky-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-sky-700 transition">Get Quote</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-600 hover:bg-slate-100">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
