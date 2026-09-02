import { Utensils, Star, Egg, Home as HomeIcon, Phone, MessageCircle } from 'lucide-react';
import { HOSTEL, IMAGES, type PageId } from '@/data';

interface FacilitiesProps {
  onNavigate: (page: PageId) => void;
}

const facilities = [
  {
    icon: Utensils,
    title: 'Food',
    desc: 'Regular meal service.',
    image: IMAGES.foodThali2,
    badge: 'Daily',
  },
  {
    icon: Star,
    title: 'Sunday Special Meals',
    desc: 'Special meals available on Sunday.',
    image: IMAGES.foodThali,
    badge: 'Sunday',
  },
  {
    icon: Egg,
    title: 'Friday Egg Meals',
    desc: 'Egg meals available on Fridays.',
    image: IMAGES.eggs,
    badge: 'Friday',
  },
  {
    icon: HomeIcon,
    title: 'Boys Hostel & PG Accommodation',
    desc: 'Comfortable accommodation suitable for residents.',
    image: IMAGES.bedroom,
    badge: 'Stay',
  },
];

export default function Facilities({ onNavigate }: FacilitiesProps) {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-sand-100 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-olive-600 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-terracotta-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-olive-50 text-olive-700 rounded-full px-4 py-1.5 mb-5 animate-fade-up">
            <Utensils className="w-4 h-4" />
            <span className="font-semibold text-xs tracking-wide uppercase">
              Facilities
            </span>
          </div>
          <h1 className="font-extrabold text-charcoal-800 text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-5 leading-tight animate-fade-up animate-delay-100">
            Facilities & Food
          </h1>
          <p className="text-charcoal-700/65 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-up animate-delay-200">
            Everything you need for comfortable everyday living.
          </p>
        </div>
      </section>

      {/* Facility Cards */}
      <section className="py-20 lg:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {facilities.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  className="group bg-cream-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-cream-200 transition-all duration-300 hover:-translate-y-1.5 animate-fade-up"
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={f.image}
                      alt={f.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent" />
                    <div className="absolute top-4 right-4 bg-cream-50/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="font-bold text-charcoal-800 text-xs tracking-wide">
                        {f.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-olive-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-cream-50" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal-800 text-xl mb-2 leading-tight">
                          {f.title}
                        </h3>
                        <p className="text-charcoal-700/65 text-sm lg:text-base leading-relaxed">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-charcoal-700/70 text-lg font-medium mb-6">
              Want to know more? Get in touch with us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-olive-600 hover:bg-olive-700 text-cream-50 font-bold text-base px-7 py-4 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                Contact Us
              </button>
              <a
                href={HOSTEL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cream-100 hover:bg-cream-200 text-charcoal-800 font-bold text-base px-7 py-4 rounded-xl border border-cream-200 transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 text-olive-600" strokeWidth={2.5} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
