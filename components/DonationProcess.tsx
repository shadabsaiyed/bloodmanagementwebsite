export default function DonationProcess() {
  const steps = [
    { title: "Registration", description: "Fill out a confidential medical history form" },
    { title: "Screening", description: "Quick physical examination to check your eligibility" },
    { title: "Donation", description: "The actual blood donation process takes about 10 minutes" },
    { title: "Refreshments", description: "Enjoy some snacks and drinks to replenish your body" },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Donation Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-600 font-bold text-xl mb-2">
                {index + 1}. {step.title}
              </div>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

