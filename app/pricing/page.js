export default function PricingPage() {
  return (
    <main className="bg-primary min-h-screen px-6 py-12">

      <h1 className="font-display text-5xl text-accent text-center mb-10">
        PRICING PLANS
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-secondary p-6 rounded-xl text-center">
          <h2 className="font-display text-2xl text-white">Basic</h2>
          <p className="text-accent text-3xl my-4">$20</p>
          <p className="font-body text-secondary mb-4">
            Access to gym equipment
          </p>
          <button className="bg-accent text-black px-4 py-2 rounded">
            Choose Plan
          </button>
        </div>

        <div className="bg-secondary p-6 rounded-xl text-center border-2 border-accent">
          <h2 className="font-display text-2xl text-white">Pro</h2>
          <p className="text-accent text-3xl my-4">$50</p>
          <p className="font-body text-secondary mb-4">
            Personal training included
          </p>
          <button className="bg-accent text-black px-4 py-2 rounded">
            Choose Plan
          </button>
        </div>

        <div className="bg-secondary p-6 rounded-xl text-center">
          <h2 className="font-display text-2xl text-white">Elite</h2>
          <p className="text-accent text-3xl my-4">$90</p>
          <p className="font-body text-secondary mb-4">
            Full access + nutrition plan
          </p>
          <button className="bg-accent text-black px-4 py-2 rounded">
            Choose Plan
          </button>
        </div>

      </div>

    </main>
  )
}