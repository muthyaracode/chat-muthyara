'use client';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 border-b border-rose-200/80 dark:border-rose-300/10 bg-white/90 dark:bg-[#2b1d28]/90 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-2 rounded-lg text-white shadow-md shadow-pink-500/20">
            <i className="fas fa-sparkles text-xl"></i>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none text-gray-900 dark:text-white">
              Muthyara AI Asisten
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Teman ngobrol cerdas
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="px-3 py-1.5 rounded-md border border-rose-200 dark:border-rose-200/15 hover:bg-rose-50 dark:hover:bg-rose-100/10 transition-colors text-rose-800 dark:text-rose-100 flex items-center justify-center"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} sm:mr-1.5`} />
            <span className="hidden sm:inline text-xs font-medium">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <button
            className="px-3 py-1.5 rounded-md border border-rose-200 dark:border-rose-200/15 hover:bg-rose-50 dark:hover:bg-rose-100/10 transition-colors text-rose-800 dark:text-rose-100 flex items-center justify-center"
            title="API Status"
          >
            <i className="fas fa-circle text-green-500 sm:mr-1.5" style={{ fontSize: '0.65rem' }}></i>
            <span className="hidden sm:inline text-xs font-medium">Live</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
