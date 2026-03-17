'use client'

export default function ContactPage() {
  return (
    <main className="bg-primary min-h-screen px-6 py-12">

      <h1 className="font-display text-5xl text-accent text-center mb-10">
        CONTACT US
      </h1>

      <form className="max-w-xl mx-auto space-y-4">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-secondary text-white font-body"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-secondary text-white font-body"
        />

        <textarea
          placeholder="Your Message"
          className="w-full p-3 rounded bg-secondary text-white font-body h-32"
        />

        <button
          type="submit"
          className="w-full bg-accent text-black py-3 rounded font-body"
        >
          Send Message
        </button>

      </form>

    </main>
  )
}