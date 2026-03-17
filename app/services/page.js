export default function ServicesPage() {
  return (
    <main className="bg-primary min-h-screen px-6 py-12">
      
      <h1 className="font-display text-5xl text-accent text-center mb-10">
        OUR SERVICES
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        
        <div className="bg-secondary p-6 rounded-xl">
          <h2 className="font-display text-2xl text-accent mb-2">
            Personal Training
          </h2>
          <p className="font-body text-secondary">
            One-on-one coaching to reach your fitness goals faster.
          </p>
        </div>

        <div className="bg-secondary p-6 rounded-xl">
          <h2 className="font-display text-2xl text-accent mb-2">
            Group Classes
          </h2>
          <p className="font-body text-secondary">
            High-energy workouts with a motivating group.
          </p>
        </div>

        <div className="bg-secondary p-6 rounded-xl">
          <h2 className="font-display text-2xl text-accent mb-2">
            Nutrition Plan
          </h2>
          <p className="font-body text-secondary">
            Custom meal plans designed for your body.
          </p>
        </div>

      </div>

    </main>
  )
}