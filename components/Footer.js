import { assets } from "@/assets/assets";
import { Dumbbell, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const gymHours = [
  { id: 1, time: 'Mon–Fri: 6am–11pm' },
  { id: 2, time: 'Sat: 6am–10pm' },
  { id: 3, time: 'Sun: 7am–10pm' },
];

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/5">
      {/* Top band */}
      <div className="bg-accent py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-1">
            {gymHours.map((hour) => (
              <span key={hour.id} className="text-white text-sm font-semibold uppercase tracking-widest">
                {hour.time}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-9 h-9 flex items-center justify-center rounded-sm rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <Image src={assets.logo} alt="FTS Logo" />
              </div>
              <span
                className="text-2xl tracking-widest text-white"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                FITNESS
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Where champions are built. FITNESS Gym is your destination for elite fitness training, world-class equipment, and expert coaching.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 rounded-sm text-white/50   hover-accent transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm tracking-[0.2em] text-accent font-semibold uppercase mb-5"
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/contact', label: 'Contact Us' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/50 text-sm hover-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm tracking-[0.2em] text-accent font-semibold uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Weight Training',
                'Cardio Training',
                'Personal Training',
                'Yoga Classes',
                'CrossFit',
                'Group Classes',
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/50 text-sm hover-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-[0.2em] text-accent font-semibold uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  100 Fitness Ave, Galle, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+94912345678" className="text-white/50 text-sm hover-accent transition-colors">
                  +94 91 234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:info@ftsgym.lk" className="text-white/50 text-sm hover-accent transition-colors">
                  info@ftsgym.lk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()}  FTS Gym. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Forging Champions Since 2026
          </p>
        </div>
      </div>
    </footer>
  );
}