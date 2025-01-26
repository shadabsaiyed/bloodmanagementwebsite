import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-700 mb-6">
                BloodDonate is a non-profit organization dedicated to saving lives through blood donation. Our mission
                is to ensure that everyone who needs blood can receive it, regardless of their location or
                circumstances.
              </p>
              <p className="text-gray-700 mb-6">
                Founded in 2010, we have facilitated over 1 million blood donations, helping countless individuals in
                need. Our network of donors, volunteers, and healthcare partners work tirelessly to make blood donation
                accessible and efficient.
              </p>
              <p className="text-gray-700">
                Join us in our mission to make a difference. Every drop counts, and your donation can save up to three
                lives!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

