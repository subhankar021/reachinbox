"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import type { Email } from "@/lib/types"
import { cn } from "@/lib/utils"

interface EmailListProps {
  emails: Email[]
  isLoading: boolean
  onSelectThread: (threadId: string) => void
  selectedThreadId?: string
}

export function EmailList({ emails, isLoading, onSelectThread, selectedThreadId }: EmailListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState("New Replies")
  const [sortOrder, setSortOrder] = useState("Newest")

  
  const filteredEmails = emails.filter((email) => {
    const matchesSearch =
      email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.from.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.from.name.toLowerCase().includes(searchQuery.toLowerCase())

    if (filter === "New Replies") {
      return matchesSearch
    }

    return matchesSearch
  })

  const sortedEmails = [...filteredEmails].sort((a, b) => {
    if (sortOrder === "Newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    }
  })

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <h2 className="text-blue-400 font-semibold">All Inbox(s)</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 text-blue-400"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-foreground"
            >
              <path d="M20 20v-5h-5" />
              <path d="M14 15.5 20 9" />
              <path d="M4 4v5h5" />
              <path d="M10 8.5 4 15" />
            </svg>
          </Button>
        </div>
        <div className="text-sm text-muted-foreground mb-4">25/25 Inboxes selected</div>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10 bg-muted border-border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center">
          <Badge className="bg-blue-600 text-white rounded-full mr-2">{emails.length}</Badge>
          <span className="text-sm font-medium">{filter}</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-muted-foreground mr-2">{sortOrder}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <svg
              className="animate-spin h-6 w-6 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        ) : sortedEmails.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <p className="text-muted-foreground">No emails found</p>
          </div>
        ) : (
          <ul>
            {sortedEmails.map((email) => (
              <li
                key={email.id}
                className={cn(
                  "border-b border-border hover:bg-muted/50 cursor-pointer",
                  selectedThreadId === email.id && "bg-muted",
                )}
                onClick={() => onSelectThread(email.id)}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span className="font-medium">{email.from.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(email.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <p className="text-sm mb-1">
                    {email.subject}
                    {email.subject.includes("7ZG2ZTV 6KG634E") ? "" : ""}
                  </p>
                  <div className="flex items-center">
                    <Badge className="bg-green-900 text-green-400 text-xs rounded-full mr-2">Interested</Badge>
                    <Badge className="bg-muted text-muted-foreground text-xs rounded-full flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                      </svg>
                      Campaign name
                    </Badge>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
