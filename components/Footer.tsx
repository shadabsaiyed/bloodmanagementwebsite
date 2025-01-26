export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">BloodDonate</h3>
            <p className="text-sm">Saving lives through blood donation</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-red-400">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">© {new Date().getFullYear()} BloodDonate. All rights reserved.</div>
      </div>
    </footer>
  )
}

