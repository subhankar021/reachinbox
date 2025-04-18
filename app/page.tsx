import { LoginForm } from "@/components/login-form"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="absolute top-4 left-4 text-gray-400">Login</div>
      <LoginForm />
    </main>
  )
}
