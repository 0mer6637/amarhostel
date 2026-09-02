import { Home, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import { HOSTEL, NAV_LINKS, type PageId } from '@/data';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-navy-900 text-cream-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-olive-500 flex items-center justify-center">
                <Home className="w-5 h-5 text-cream-50" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <div className="font-extrabold text-cream-50 text-base">
                  Amar Boys Hostel
                </div>
                <div className="text-olive-300 font-semibold text-[10px] tracking-wider uppercase">
                  & PG
                </div>
              </div>
            </div>
            <p className="text-cream-200/70 text-sm leading-relaxed max-w-xs">
              Comfortable accommodation and quality food for students and working
              professionals in Hyderabad.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-cream-50 text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-cream-200/70 hover:text-olive-300 text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-cream-50 text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={HOSTEL.phoneTeluguLink}
                  className="flex items-center gap-2.5 text-cream-200/70 hover:text-olive-300 transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  Telugu: {HOSTEL.phoneTelugu}
                </a>
              </li>
              <li>
                <a
                  href={HOSTEL.phoneHindiLink}
                  className="flex items-center gap-2.5 text-cream-200/70 hover:text-olive-300 transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  Hindi: {HOSTEL.phoneHindi}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-cream-200/70">
                <Clock className="w-4 h-4 flex-shrink-0" />
                Available: 24/7
              </li>
            </ul>
            <a
              href={HOSTEL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-olive-600 hover:bg-olive-500 text-cream-50 font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
              WhatsApp
            </a>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-bold text-cream-50 text-sm uppercase tracking-wider mb-4">
              Address
            </h3>
            <div className="flex items-start gap-2.5 text-cream-200/70 text-sm leading-relaxed">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{HOSTEL.addressShort}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-200/10 text-center">
          <p className="text-cream-200/50 text-sm font-medium">
            © 2026 Amar Boys Hostel & PG. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
