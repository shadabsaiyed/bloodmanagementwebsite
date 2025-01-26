import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Link from "next/link"

export default function Donate() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-red-50">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-center mb-8">Donate Blood</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 mb-6 text-center">
                Your decision to donate blood can save up to three lives. It's a simple process that takes only about an
                hour of your time.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Be at least 17 years old</li>
                  <li>Weigh at least 110 pounds</li>
                  <li>Be in good general health</li>
                  <li>Have not donated blood in the last 56 days</li>
                </ul>
              </div>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
                >
                  Schedule a Donation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

