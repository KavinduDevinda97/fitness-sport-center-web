import { assets, faqs, plans } from "@/assets/assets";
import { Check, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Membership Plans — FITNESS SPORTS CENTER Gym",
  description:
    "Choose the perfect FITNESS SPORTS CENTER membership: Basic, Standard, or Premium. Flexible plans with no joining fee for founding members.",
};
export default function PricingPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={assets.image_two}
            alt="pricing"
            fill
            className="object-cover object-center opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">
            ✦ Founding Member Pricing — Limited Time ✦
          </p>
          <h1 className="text-6xl sm:text-8xl lg:text-9xl text-white leading-none tracking-wider font-display">
            MEMBERSHIP <span className="text-accent">PLANS</span>
          </h1>
          <p className="text-white/50 mt-5 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            No joining fee. No hidden costs. Cancel anytime. Just results.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative flex flex-col border rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    plan.popular
                      ? "border border-accent  bg-brown"
                      : `${plan.color} bg-secondary`
                  }`}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-accent text-white text-xs font-bold uppercase tracking-widest text-center py-2">
                      ✦ Most Popular ✦
                    </div>
                  )}

                  <div className={`p-8 ${plan.popular ? "pt-12" : ""}`}>
                    {/* Header */}
                    <div
                      className={`w-12 h-12 ${plan.bgAccent} rounded-sm flex items-center justify-center mb-5`}
                    >
                      <Icon className={`w-6 h-6 ${plan.accentColor}`} />
                    </div>
                    <p
                      className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.accentColor}`}
                    >
                      {plan.tagline}
                    </p>
                    <h3 className="text-4xl text-white tracking-wider mb-5 font-display">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-end gap-1 mb-1">
                      <span className="text-white/40 text-base font-semibold">
                        Rs.
                      </span>
                      <span className="text-5xl sm:text-6xl text-white leading-none tracking-tight font-display">
                        {plan.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-white/30 text-xs uppercase tracking-widest mb-7">
                      Per {plan.period}
                    </p>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className={`block w-full text-center py-3.5 rounded-sm font-bold uppercase tracking-widest text-sm transition-all duration-300 ${
                        plan.popular
                          ? "bg-accent text-white"
                          : "border border-white/20 text-white hover:border-white/50 hover:bg-white/5"
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>

                  {/* Features */}
                  <div className="px-8 pb-8 border-t border-white/5 pt-6 flex-1">
                    <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
                      What's included
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f.text} className="flex items-start gap-3">
                          {f.included ? (
                            <Check
                              className={`w-4 h-4 ${plan.accentColor} flex-shrink-0 mt-0.5`}
                            />
                          ) : (
                            <X className="w-4 h-4 text-white/15 flex-shrink-0 mt-0.5" />
                          )}
                          <span
                            className={`text-sm ${f.included ? "text-white/70" : "text-white/25 line-through"}`}
                          >
                            {f.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Annual savings */}
          <div className="mt-8 p-6 bg-secondary border border-accent rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-sm">
                💡 Save with Annual Membership
              </p>
              <p className="text-white/50 text-sm mt-1">
                Pay annually and save up to 20%. Family bundles available — ask
                at the front desk.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-bold uppercase tracking-widest rounded-sm "
            >
              Enquire Now <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ  */}

      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">
              Membership FAQ
            </p>
            <h2 className="text-5xl sm:text-6xl text-white leading-none tracking-wider font-display">
              COMMON <span className="text-accent">QUESTIONS</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 bg-secondary border border-white/5 rounded-sm hover-border-accent transition-colors"
              >
                <h4 className="text-white font-semibold mb-2 flex items-center gap-3">
                  <span className="text-accent font-mono text-xs">
                    0{i + 1}
                  </span>
                  {faq.q}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
