// "use client"

// import { useState } from "react"
// import Header from "../../components/Header"
// import Footer from "../../components/Footer"
// import Link from "next/link"
// import { signInWithEmailAndPassword } from "firebase/auth"
// import { auth } from "../../lib/firebase" // Ensure this import is correct

// export default function Login() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState<string | null>(null)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     try {
//       await signInWithEmailAndPassword(auth, email, password)
//       console.log("Login successful")
//       // Redirect to another page (like home or dashboard)
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         setError(error.message)
//       } else {
//         setError("An unknown error occurred")
//       }
//     }
//   }

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-grow flex items-center justify-center bg-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//           <h1 className="text-2xl font-bold text-center mb-6">Login to Your Account</h1>
//           {error && <div className="text-red-500 text-center mb-4">{error}</div>}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
//                 required
//               />
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300"
//               >
//                 Log In
//               </button>
//             </div>
//           </form>
//           <div className="mt-4 text-center">
//             <Link href="/signup" className="text-sm text-red-600 hover:underline">
//               Don't have an account? Sign up
//             </Link>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   )
// }



"use client" // Add this line at the top to mark the file as a client component

import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../lib/firebase" // import auth from firebase.js
import { useRouter } from 'next/navigation' // Use next/navigation for client-side routing

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter() // Initialize the router

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Sign in with email and password
      await signInWithEmailAndPassword(auth, email, password)
      console.log("Login successful")

      // Redirect to dashboard or home page after successful login
      router.push('/') // Replace '/dashboard' with your desired route
    } catch (error: unknown) {
      setLoading(false)
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError("An unknown error occurred")
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}
