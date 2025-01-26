import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import DonationProcess from "../components/DonationProcess"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <DonationProcess />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

