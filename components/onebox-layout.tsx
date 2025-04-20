"use client"

import type { ReactNode } from "react"
import Link from "next/link"
<<<<<<< HEAD
import Image from "next/image"
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import { logout } from "@/lib/api"
import { useTheme } from "@/components/theme-provider"
<<<<<<< HEAD
import { ChevronDown, Sun, Moon, Menu, X, Home, Users, Mail, Send, BarChart2, List, Bell } from "lucide-react"
import { useState } from "react"
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60

interface OneboxLayoutProps {
  children: ReactNode
}

export function OneboxLayout({ children }: OneboxLayoutProps) {
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()
<<<<<<< HEAD
  const [showMobileMenu, setShowMobileMenu] = useState(false)
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
<<<<<<< HEAD
    <div className="flex h-screen bg-black text-black dark:text-white overflow-hidden">
      {/* Mobile menu overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-black/80 z-50 md:hidden" onClick={() => setShowMobileMenu(false)}>
          <div className="w-64 h-full bg-white dark:bg-[#101113] p-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <Image src="/images/m-logo.png" alt="M Logo" width={24} height={24} />
                <span className="ml-2 font-bold">REACHINBOX</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowMobileMenu(false)}>
                <X size={20} />
              </Button>
            </div>

            <nav className="space-y-4">
              <Link
                href="/onebox/list"
                className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                <Home size={20} className="mr-3 text-gray-400" />
                Home
              </Link>

              <Link
                href="/onebox/mail"
                className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                <Mail size={20} className="mr-3 text-gray-400" />
                Mail
              </Link>

              <Link
                href="/onebox/contacts"
                className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                <Users size={20} className="mr-3 text-gray-400" />
                Contacts
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Left Sidebar */}
      <div className="w-16 bg-black dark:bg-black flex-shrink-0 flex flex-col items-center py-4 border-r border-[#1f1f1f] hidden md:flex">
        <div className="mb-8">
          <div className="w-8 h-8">
            <Image src="/images/m-logo.png" alt="M Logo" width={32} height={32} />
=======
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <div className="w-16 bg-muted flex flex-col items-center py-4">
        <div className="mb-8">
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
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
          </div>
        </div>

        <nav className="flex flex-col items-center space-y-6 flex-1">
          <Link href="/onebox/list">
            <Button variant="ghost" size="icon" className="rounded-full">
<<<<<<< HEAD
              <Home size={20} className="text-gray-400" />
=======
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
            </Button>
          </Link>

          <Link href="/onebox/contacts">
            <Button variant="ghost" size="icon" className="rounded-full">
<<<<<<< HEAD
              <Users size={20} className="text-gray-400" />
=======
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
            </Button>
          </Link>

          <Link href="/onebox/mail">
            <Button variant="ghost" size="icon" className="rounded-full">
<<<<<<< HEAD
              <Mail size={20} className="text-gray-400" />
=======
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
            </Button>
          </Link>

          <Link href="/onebox/send">
            <Button variant="ghost" size="icon" className="rounded-full">
<<<<<<< HEAD
              <Send size={20} className="text-gray-400" />
=======
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
            </Button>
          </Link>

          <Link href="/onebox/kanban">
            <Button variant="ghost" size="icon" className="rounded-full">
<<<<<<< HEAD
              <List size={20} className="text-gray-400" />
=======
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground"
              >
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
              </svg>
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
            </Button>
          </Link>

          <div className="relative mt-auto">
            <Link href="/onebox/notifications">
              <Button variant="ghost" size="icon" className="rounded-full">
<<<<<<< HEAD
                <Bell size={20} className="text-gray-400" />
=======
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
              </Button>
            </Link>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </div>

          <Link href="/onebox/analytics">
            <Button variant="ghost" size="icon" className="rounded-full">
<<<<<<< HEAD
              <BarChart2 size={20} className="text-gray-400" />
=======
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground"
              >
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
            </Button>
          </Link>
        </nav>

        <div className="mt-auto mb-4">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={handleLogout}>
            <Avatar className="h-8 w-8 bg-green-700">
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>

      {/* Main Content */}
<<<<<<< HEAD
      <div className="flex-1 flex flex-col bg-black">
        {/* Header */}
        <header className="h-16 border-b border-[#1f1f1f] flex items-center justify-between px-4 bg-black">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={() => setShowMobileMenu(true)}>
              <Menu size={20} className="text-gray-400" />
            </Button>
            <h1 className="text-lg font-semibold text-white">Onebox</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleTheme}>
                {theme === "dark" ? (
                  <Moon size={20} className="text-gray-400" />
                ) : (
                  <Sun size={20} className="text-gray-400" />
                )}
              </Button>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium text-white">Tim's Workspace</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto bg-black">{children}</main>
=======
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-border flex items-center justify-between px-4">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold">OneBox</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleTheme}>
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </Button>
          </div>
        </header>

        {}
        <main className="flex-1 overflow-auto">{children}</main>
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
      </div>
    </div>
  )
}
