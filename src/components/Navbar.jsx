import { Sun, Moon } from "lucide-react";

export default function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-500 border-b border-black/5 dark:border-white/5 bg-white/80 dark:bg-[#0A0A0B]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-serif italic font-bold tracking-tighter dark:text-white">
          Sammunat
        </h1>
        
        <div className="flex items-center gap-8">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" size={20} strokeWidth={1.5} />
            ) : (
              <Moon className="text-slate-700" size={20} strokeWidth={1.5} />
            )}
          </button>
          
          <a href="#contact" className="hidden md:block text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black dark:border-white dark:text-white pb-1 hover:opacity-50 transition-opacity">
            Inquire
          </a>
        </div>
      </div>
    </nav>
  );
}