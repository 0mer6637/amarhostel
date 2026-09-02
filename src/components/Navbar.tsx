import { useState, useEffect } from 'react';
import { Menu, X, Home, Utensils, Phone, MapPin, MessageCircle } from 'lucide-react';
import { HOSTEL, NAV_LINKS, type PageId } from '@/data';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_2px_20px_rgba(42,36,31,0.08)]'
          : 'bg-cream-50/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 group flex-shrink-0"
          >
            <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-olive-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Home className="w-5 h-5 lg:w-6 lg:h-6 text-cream-50" strokeWidth={2.5} />
            </div>
            <div className="text-left leading-tight">
              <div className="font-extrabold text-charcoal-800 text-base lg:text-lg tracking-tight">
                Amar Boys Hostel
              </div>
              <div className="text-olive-600 font-semibold text-[10px] lg:text-xs tracking-wider uppercase">
                & PG
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  currentPage === link.id
                    ? 'text-olive-700 bg-olive-50'
                    : 'text-charcoal-700 hover:text-olive-600 hover:bg-cream-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop WhatsApp button */}
          <a
            href={HOSTEL.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-olive-600 hover:bg-olive-700 text-cream-50 font-bold text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
            WhatsApp
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl text-charcoal-800 hover:bg-cream-100 active:bg-cream-200 transition-colors touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 top-16 bg-cream-50 z-[99]"
          onClick={() => setOpen(false)}
        >
          <div
            className="flex flex-col px-5 py-6 gap-3 h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_LINKS.map((link) => {
              const icons: Record<PageId, typeof Home> = {
                home: Home,
                facilities: Utensils,
                contact: Phone,
                location: MapPin,
              };
              const Icon = icons[link.id];
              return (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`flex items-center gap-4 px-5 py-5 rounded-2xl font-bold text-lg transition-all duration-200 active:scale-95 ${
                    currentPage === link.id
                      ? 'bg-olive-600 text-cream-50 shadow-md'
                      : 'text-charcoal-700 bg-cream-100 hover:bg-cream-200'
                  }`}
                >
                  <Icon className="w-6 h-6" strokeWidth={2} />
                  {link.label}
                </button>
              );
            })}
            <a
              href={HOSTEL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 mt-4 bg-olive-600 text-cream-50 font-bold text-lg px-5 py-5 rounded-2xl shadow-lg active:scale-95 transition-transform"
            >
              <MessageCircle className="w-6 h-6" strokeWidth={2.5} />
              Chat on WhatsApp
            </a>
            <div className="mt-auto pt-6 text-center text-charcoal-700/50 text-sm font-medium">
              {HOSTEL.shortName}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
