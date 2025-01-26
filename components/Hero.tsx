import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-red-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">Save Lives: Donate Blood Today</h1>
        <p className="text-xl mb-8 animate-fade-in-up">Your donation can make a difference in someone's life.</p>
        <div className="space-x-4 animate-fade-in">
          <Link
            href="/donate"
            className="bg-white text-red-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
          >
            Donate Now
          </Link>
          <Link
            href="/about"
            className="border-2 border-white text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-white hover:text-red-600 transition duration-300 inline-block"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

