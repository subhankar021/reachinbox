"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { getGoogleLoginUrl, setAuthToken, isAuthenticated } from "@/lib/api"

export function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/onebox/list")
    }

    const hash = window.location.hash
    if (hash && hash.includes("token=")) {
      const token = hash.split("token=")[1].split("&")[0]
      if (token) {
        setAuthToken(token)
        router.push("/onebox/list")
      }
    }
  }, [router])

  const handleGoogleLogin = () => {
    setIsLoading(true)
    const redirectUrl = `${window.location.origin}/google-login`
    window.location.href = getGoogleLoginUrl(redirectUrl)
  }

  const handleCreateAccount = () => {
    handleGoogleLogin()
  }

  return (
    <div className="w-full max-w-md p-8 space-y-8 bg-[#1a1a1a] rounded-lg">
      <div className="flex justify-center">
        <div className="flex items-center space-x-2">
          <div className="bg-white p-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">REACHINBOX</span>
        </div>
      </div>

      <div className="mt-16 space-y-6">
        <h2 className="text-xl font-semibold text-center">Create a new account</h2>

        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-sm text-gray-700 transition-colors bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span>Sign Up with Google</span>
        </button>

        <div className="flex items-center justify-center mt-6">
          <Button onClick={handleCreateAccount} className="w-full bg-blue-600 hover:bg-blue-700">
            Create an Account
          </Button>
        </div>

        <div className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 hover:underline">
            Sign In
          </Link>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">© 2023 Reachinbox. All rights reserved.</div>
    </div>
  )
}
