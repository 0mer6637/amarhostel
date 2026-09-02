import {
  Phone,
  Utensils,
  Star,
  Egg,
  Home as HomeIcon,
  MessageCircle,
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
} from 'lucide-react';
import { HOSTEL, IMAGES, type PageId } from '@/data';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

const highlights = [
  {
    icon: Utensils,
    title: 'Quality Food',
    desc: 'Regular meals with special meal options.',
    color: 'olive',
  },
  {
    icon: Star,
    title: 'Sunday Special Meals',
    desc: 'Special meals available on Sundays.',
    color: 'terracotta',
  },
  {
    icon: Egg,
    title: 'Friday Egg Meals',
    desc: 'Egg meals available on Fridays.',
    color: 'sand',
  },
  {
    icon: HomeIcon,
    title: 'Hostel & PG Accommodation',
    desc: 'Suitable accommodation for comfortable everyday living.',
    color: 'navy',
  },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroBuilding}
            alt="Amar Boys Hostel building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/70 via-charcoal-900/50 to-charcoal-900/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center pt-20 pb-12">
          <div className="inline-flex items-center gap-2 bg-cream-50/15 backdrop-blur-md border border-cream-50/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <HomeIcon className="w-4 h-4 text-cream-50" />
            <span className="text-cream-50 font-semibold text-xs sm:text-sm tracking-wide">
              Comfortable Boys Hostel & PG
            </span>
          </div>

          <h1 className="font-extrabold text-cream-50 text-4xl sm:text-5xl lg:text-7xl leading-[1.1] tracking-tight mb-6 animate-fade-up animate-delay-100">
            Your Comfortable{' '}
            <span className="text-blue-400">Home</span>
            <br className="hidden sm:block" /> Away From Home.
          </h1>

          <p className="text-cream-100/85 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up animate-delay-200">
            Comfortable accommodation, convenient living, quality food, and a
            welcoming environment for students and working professionals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up animate-delay-300">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-olive-600 hover:bg-olive-700 text-cream-50 font-bold text-base px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              Contact Us
            </button>
            <button
              onClick={() => onNavigate('facilities')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cream-50/15 backdrop-blur-md border border-cream-50/25 hover:bg-cream-50/25 text-cream-50 font-bold text-base px-7 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              View Facilities
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
            <button
              onClick={() => onNavigate('location')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cream-50/15 backdrop-blur-md border border-cream-50/25 hover:bg-cream-50/25 text-cream-50 font-bold text-base px-7 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <MapPin className="w-5 h-5" strokeWidth={2.5} />
              Find Us
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
          <div className="w-6 h-10 rounded-full border-2 border-cream-50/40 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-cream-50/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 lg:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-olive-50 text-olive-700 rounded-full px-4 py-1.5 mb-5">
                <HomeIcon className="w-4 h-4" />
                <span className="font-semibold text-xs tracking-wide uppercase">
                  About Us
                </span>
              </div>
              <h2 className="font-extrabold text-charcoal-800 text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6 leading-tight">
                Comfortable Living Starts Here
              </h2>
              <p className="text-charcoal-700/75 text-base lg:text-lg leading-relaxed mb-8">
                Amar Boys Hostel & PG offers a comfortable and convenient place to
                stay for students and working professionals. Designed to provide a
                welcoming living environment, we focus on making everyday
                accommodation simple and comfortable.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 bg-charcoal-800 hover:bg-charcoal-900 text-cream-50 font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  Contact Us
                </button>
                <a
                  href={HOSTEL.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-olive-100 hover:bg-olive-200 text-olive-700 font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-olive-100 -z-10" />
                <img
                  src={IMAGES.aboutRoom}
                  alt="Comfortable hostel room interior"
                  className="rounded-3xl shadow-xl w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover"
                />
                <div className="absolute -bottom-5 -left-5 bg-cream-50 rounded-2xl shadow-lg px-5 py-4 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-olive-600 flex items-center justify-center">
                      <HomeIcon className="w-5 h-5 text-cream-50" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="font-extrabold text-charcoal-800 text-lg">
                        Boys Hostel & PG
                      </div>
                      <div className="text-charcoal-700/60 text-xs font-medium">
                        Hyderabad
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-20 lg:py-28 bg-sand-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-olive-50 text-olive-700 rounded-full px-4 py-1.5 mb-5">
              <Star className="w-4 h-4" />
              <span className="font-semibold text-xs tracking-wide uppercase">
                Highlights
              </span>
            </div>
            <h2 className="font-extrabold text-charcoal-800 text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              const bgMap: Record<string, string> = {
                olive: 'bg-olive-600',
                terracotta: 'bg-terracotta-500',
                sand: 'bg-sand-400',
                navy: 'bg-navy-700',
              };
              return (
                <div
                  key={h.title}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  className="group bg-cream-50 rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-xl border border-cream-200 transition-all duration-300 hover:-translate-y-1.5 animate-fade-up"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${bgMap[h.color]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-cream-50" strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-charcoal-800 text-lg mb-2 leading-tight">
                    {h.title}
                  </h3>
                  <p className="text-charcoal-700/65 text-sm leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Food Highlight */}
      <section className="py-20 lg:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-olive-50 text-olive-700 rounded-full px-4 py-1.5 mb-5">
              <Utensils className="w-4 h-4" />
              <span className="font-semibold text-xs tracking-wide uppercase">
                Food
              </span>
            </div>
            <h2 className="font-extrabold text-charcoal-800 text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 leading-tight">
              Good Food for Comfortable Living
            </h2>
            <p className="text-charcoal-700/65 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Enjoy regular meals along with special food options throughout the
              week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Sunday Special */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg">
              <img
                src={IMAGES.foodThali}
                alt="Sunday special meals"
                className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="inline-flex items-center gap-2 bg-terracotta-500 text-cream-50 rounded-full px-3 py-1 mb-3">
                  <CalendarDays className="w-3.5 h-3.5" />
                  <span className="font-bold text-xs tracking-wide">SUNDAY</span>
                </div>
                <h3 className="font-extrabold text-cream-50 text-2xl lg:text-3xl mb-2">
                  Sunday Special Meals
                </h3>
                <p className="text-cream-100/80 text-sm lg:text-base">
                  Enjoy special meals every Sunday.
                </p>
              </div>
            </div>

            {/* Friday Egg */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg">
              <img
                src={IMAGES.eggs}
                alt="Friday egg meals"
                className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="inline-flex items-center gap-2 bg-olive-600 text-cream-50 rounded-full px-3 py-1 mb-3">
                  <Egg className="w-3.5 h-3.5" />
                  <span className="font-bold text-xs tracking-wide">FRIDAY</span>
                </div>
                <h3 className="font-extrabold text-cream-50 text-2xl lg:text-3xl mb-2">
                  Friday Egg Meals
                </h3>
                <p className="text-cream-100/80 text-sm lg:text-base">
                  Egg meals specially available on Fridays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-olive-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="font-extrabold text-cream-50 text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-5 leading-tight">
            Looking for a Comfortable Place to Stay?
          </h2>
          <p className="text-cream-100/75 text-base lg:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact Amar Boys Hostel & PG anytime. We are available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-olive-600 hover:bg-olive-500 text-cream-50 font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              Contact Now
            </button>
            <a
              href={HOSTEL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cream-50/10 backdrop-blur-md border border-cream-50/20 hover:bg-cream-50/20 text-cream-50 font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
              WhatsApp Us
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8 text-cream-100/50 text-sm font-medium">
            <Clock className="w-4 h-4" />
            Available 24/7
          </div>
        </div>
      </section>
    </div>
  );
}
