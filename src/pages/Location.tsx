import { MapPin, Navigation, Phone, MessageCircle, Clock } from 'lucide-react';
import { HOSTEL } from '@/data';

export default function Location() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-sand-100 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-olive-600 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-olive-50 text-olive-700 rounded-full px-4 py-1.5 mb-5 animate-fade-up">
            <MapPin className="w-4 h-4" />
            <span className="font-semibold text-xs tracking-wide uppercase">
              Location
            </span>
          </div>
          <h1 className="font-extrabold text-charcoal-800 text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-5 leading-tight animate-fade-up animate-delay-100">
            Find Amar Boys Hostel & PG
          </h1>
          <p className="text-charcoal-700/65 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-up animate-delay-200">
            Visit us at our convenient location in Hyderabad.
          </p>
        </div>
      </section>

      {/* Address + Map */}
      <section className="py-20 lg:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Address card */}
          <div className="max-w-3xl mx-auto mb-10 animate-fade-up">
            <div className="bg-cream-50 rounded-3xl p-7 lg:p-8 shadow-sm border border-cream-200 flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-olive-600 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-cream-50" strokeWidth={2} />
              </div>
              <div>
                <h2 className="font-bold text-charcoal-800 text-lg mb-2 uppercase tracking-wide">
                  Address
                </h2>
                <p className="text-charcoal-700/75 text-base lg:text-lg leading-relaxed">
                  {HOSTEL.address}
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            style={{ animationDelay: '0.1s' }}
            className="rounded-3xl overflow-hidden shadow-xl border border-cream-200 animate-fade-up animate-delay-100"
          >
            <iframe
              src={HOSTEL.mapEmbed}
              width="600"
              height="450"
              style={{ border: 0, width: '100%', height: '450px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Amar Boys Hostel Location"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px]"
            />
          </div>

          {/* Get Directions */}
          <div className="mt-10 text-center">
            <a
              href={HOSTEL.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-olive-600 hover:bg-olive-700 text-cream-50 font-bold text-base lg:text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Navigation className="w-5 h-5" strokeWidth={2.5} />
              Get Directions
            </a>
          </div>

          {/* Quick contact info */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <a
              href={HOSTEL.phoneTeluguLink}
              className="group bg-cream-50 rounded-2xl p-5 shadow-sm hover:shadow-lg border border-cream-200 transition-all duration-200 hover:-translate-y-1 text-center"
            >
              <div className="w-11 h-11 rounded-xl bg-olive-100 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-olive-700" strokeWidth={2} />
              </div>
              <div className="font-bold text-charcoal-800 text-sm mb-1">Telugu</div>
              <div className="text-charcoal-700/65 text-sm font-medium">
                {HOSTEL.phoneTelugu}
              </div>
            </a>
            <a
              href={HOSTEL.phoneHindiLink}
              className="group bg-cream-50 rounded-2xl p-5 shadow-sm hover:shadow-lg border border-cream-200 transition-all duration-200 hover:-translate-y-1 text-center"
            >
              <div className="w-11 h-11 rounded-xl bg-terracotta-400/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-terracotta-600" strokeWidth={2} />
              </div>
              <div className="font-bold text-charcoal-800 text-sm mb-1">Hindi</div>
              <div className="text-charcoal-700/65 text-sm font-medium">
                {HOSTEL.phoneHindi}
              </div>
            </a>
            <a
              href={HOSTEL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream-50 rounded-2xl p-5 shadow-sm hover:shadow-lg border border-cream-200 transition-all duration-200 hover:-translate-y-1 text-center"
            >
              <div className="w-11 h-11 rounded-xl bg-olive-100 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-olive-700" strokeWidth={2} />
              </div>
              <div className="font-bold text-charcoal-800 text-sm mb-1">WhatsApp</div>
              <div className="text-charcoal-700/65 text-sm font-medium">Chat now</div>
            </a>
          </div>

          {/* Availability */}
          <div className="mt-10 flex items-center justify-center gap-2 text-charcoal-700/60 text-sm font-medium">
            <Clock className="w-4 h-4" />
            Available 24/7
          </div>
        </div>
      </section>
    </div>
  );
}
