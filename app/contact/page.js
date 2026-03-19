"use client";

import { assets, contactInfo } from "@/assets/assets";
import { AlertCircle, CheckCircle2, MapPin, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const inquiryTypes = [
  "General Inquiry",
  "Membership Information",
  "Personal Training",
  "Group Classes",
  "Corporate Package",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      e.name = "Please enter your full name (at least 2 characters).";
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRe.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (form.phone && !/^[+\d\s\-()]{7,15}$/.test(form.phone)) {
      e.phone = "Please enter a valid phone number.";
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      e.message = "Message must be at least 10 characters long.";
    }
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-primary overflow-hidden">
        <div className="absolute inset-0 ">
          <Image
            src={assets.image_three}
            alt="Services"
            fill
            className="object-cover object-center opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">
            ✦ Let's Talk ✦
          </p>
          <h1 className="text-6xl sm:text-8xl lg:text-9xl text-white leading-none tracking-wider font-display">
            GET IN <span className="text-accent">TOUCH</span>
          </h1>
          <p className="text-white/50 mt-5 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Have a question or want to book a free tour? We'd love to hear from
            you. Our team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map(({ Icon, label, lines }) => (
                <div
                  key={label}
                  className="flex gap-4 p-5 bg-primary  border border-white/20 rounded-sm  transition-colors"
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center  border border-white/20 rounded-sm ">
                    <Icon className="w-5 h-5 text-white/20 " />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">
                      {label}
                    </p>
                    {lines.map((line) => (
                      <p
                        key={line}
                        className="text-white/60 text-sm leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="relative h-52 border border-white/20 rounded-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=142+Steel+Avenue+Colombo+03&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-20 px-8 bg-primary border border-green-100 rounded-sm h-full min-h-[400px]">
                  <div className="w-16 h-16 bg-primary border border-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-300" />
                  </div>
                  <h3 className="text-4xl text-white tracking-wider mb-3 font-display">
                    MESSAGE SENT!
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
                    Thanks for reaching out,{" "}
                    <strong className="text-white">{form.name}</strong>. We'll
                    be in touch within 24 hours. We look forward to meeting you
                    at FITNESS SPORTS CENTER!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        inquiryType: "",
                        message: "",
                      });
                    }}
                    className="text-green-300 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-primary border border-white/20 rounded-sm p-8 space-y-6"
                >
                  <div>
                    <h2 className="text-3xl text-white tracking-wider font-display">
                      SEND A MESSAGE
                    </h2>
                    <p className="text-white/40 text-sm mt-1">
                      Fill in the form below and our team will get back to you
                      promptly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">
                        Full Name <span className="text-white/50">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Silva"
                        className={`w-full bg-primary border rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:ring-1 transition-colors ${
                          errors.name
                            ? "border-red-500 focus:ring-red-500"
                            : "border-white/20 focus:border-white/20 focus:ring-white/50"
                        }`}
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">
                        Email Address <span className="text-white/50">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@email.com"
                        className={`w-full bg-primary border rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:ring-1 transition-colors ${
                          errors.email
                            ? "border-red-500 focus:ring-red-500"
                            : "border-white/20 focus:border-white/20 focus:ring-white/50"
                        }`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+94 77 123 4567"
                        className={`w-full bg-primary border rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:ring-1 transition-colors ${
                          errors.phone
                            ? "border-red-500 focus:ring-red-500"
                            : "border-white/20 focus:border-white/20 focus:ring-white/50"
                        }`}
                      />
                      {errors.phone && (
                        <p className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">
                        Inquiry Type
                      </label>
                      <select
                        name="inquiryType"
                        value={form.inquiryType}
                        onChange={handleChange}
                        className="w-full bg-primary border border-white/20 rounded-sm px-4 py-3 text-white/50 text-sm focus:outline-none focus:border-white/20 focus:ring-1  transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-primary ">
                          Select a type...
                        </option>
                        {inquiryTypes.map((t) => (
                          <option
                            key={t}
                            value={t}
                            className="bg-primary text-white"
                          >
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">
                      Your Message <span className="text-white/50">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your fitness goals or what you'd like to know about FITNESS Sport Center..."
                      className={`w-full bg-primary border rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:ring-1 transition-colors resize-none ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : "border-white/20 focus:border-white/20 focus:ring-white/50"
                      }`}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                      </p>
                    )}
                    <p className="text-white/20 text-xs mt-1.5 text-right">
                      {form.message.length} / 500
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-accent text-white font-bold uppercase tracking-widest text-sm rounded-sm  transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed "
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
