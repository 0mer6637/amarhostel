import { Phone, MessageCircle, Clock, Globe } from 'lucide-react';
import { HOSTEL } from '@/data';

export default function Contact() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-sand-100 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-olive-600 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-terracotta-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-olive-50 text-olive-700 rounded-full px-4 py-1.5 mb-5 animate-fade-up">
            <Phone className="w-4 h-4" />
            <span className="font-semibold text-xs tracking-wide uppercase">
              Contact
            </span>
          </div>
          <h1 className="font-extrabold text-charcoal-800 text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-5 leading-tight animate-fade-up animate-delay-100">
            Get in Touch
          </h1>
          <p className="text-charcoal-700/65 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-up animate-delay-200">
            Contact Amar Boys Hostel & PG anytime. We are available 24/7.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 lg:py-28 bg-cream-50">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Phone cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
            <a
              href={HOSTEL.phoneTeluguLink}
              className="group bg-cream-50 rounded-3xl p-7 lg:p-8 shadow-sm hover:shadow-xl border border-cream-200 transition-all duration-300 hover:-translate-y-1.5 animate-fade-up"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-olive-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-cream-50" strokeWidth={2} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-charcoal-700/50 text-xs font-bold uppercase tracking-wider mb-0.5">
                    <Globe className="w-3.5 h-3.5" />
                    Telugu
                  </div>
                  <div className="font-extrabold text-charcoal-800 text-2xl lg:text-3xl tracking-tight">
                    {HOSTEL.phoneTelugu}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-olive-600 font-semibold text-sm">
                Tap to call
                <Phone className="w-4 h-4" />
              </div>
            </a>

            <a
              href={HOSTEL.phoneHindiLink}
              className="group bg-cream-50 rounded-3xl p-7 lg:p-8 shadow-sm hover:shadow-xl border border-cream-200 transition-all duration-300 hover:-translate-y-1.5 animate-fade-up animate-delay-100"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-terracotta-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-cream-50" strokeWidth={2} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-charcoal-700/50 text-xs font-bold uppercase tracking-wider mb-0.5">
                    <Globe className="w-3.5 h-3.5" />
                    Hindi
                  </div>
                  <div className="font-extrabold text-charcoal-800 text-2xl lg:text-3xl tracking-tight">
                    {HOSTEL.phoneHindi}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-terracotta-600 font-semibold text-sm">
                Tap to call
                <Phone className="w-4 h-4" />
              </div>
            </a>
          </div>

          {/* WhatsApp button */}
          <a
            href={HOSTEL.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: '0.2s' }}
            className="block w-full bg-olive-600 hover:bg-olive-700 text-cream-50 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-up animate-delay-200"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-cream-50/15 backdrop-blur-md flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-cream-50" strokeWidth={2} />
              </div>
              <div className="text-center sm:text-left">
                <div className="font-extrabold text-xl lg:text-2xl mb-1">
                  Chat With Us on WhatsApp
                </div>
                <div className="text-cream-100/75 text-sm font-medium">
                  Quick responses for all your enquiries
                </div>
              </div>
            </div>
          </a>

          {/* Availability */}
          <div
            style={{ animationDelay: '0.3s' }}
            className="mt-10 bg-navy-900 rounded-3xl p-8 lg:p-10 text-center animate-fade-up animate-delay-300"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-olive-500 mb-5">
              <Clock className="w-8 h-8 text-cream-50" strokeWidth={2} />
            </div>
            <h2 className="font-extrabold text-cream-50 text-2xl lg:text-3xl mb-3">
              Available 24/7
            </h2>
            <p className="text-cream-100/70 text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
              You can contact Amar Boys Hostel & PG anytime for information and
              enquiries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
