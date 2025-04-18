"use client"

import { Button } from "@/components/ui/button"
import type { Thread } from "@/lib/types"

interface EmailThreadProps {
  thread: Thread
  onReply: () => void
  onDelete: () => void
}

export function EmailThread({ thread, onReply, onDelete }: EmailThreadProps) {
  const messages = thread.messages || [
    {
      id: thread.id,
      from: thread.from,
      to: thread.to,
      subject: thread.subject,
      body: thread.body,
      date: thread.date,
    },
  ]

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-2">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              {thread.from.name.charAt(0)}
            </div>
          </div>
          <div>
            <div className="font-medium">{thread.from.name}</div>
            <div className="text-xs text-muted-foreground">{thread.from.email}</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="destructive" size="sm" onClick={onDelete} className="uppercase">
            DELETE
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4">
        {messages.map((message, index) => (
          <div key={message.id} className="mb-6 pb-6 border-b border-border">
            {index === 0 && (
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{message.subject}</h2>
              </div>
            )}
            <div className="text-sm text-muted-foreground mb-4">
              <div>
                From: {message.from.name} ({message.from.email})
              </div>
              <div>To: {message.to}</div>
              {message.cc && <div>CC: {message.cc}</div>}
              {message.bcc && <div>BCC: {message.bcc}</div>}
              <div>
                Date:{" "}
                {new Date(message.date).toLocaleString("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  hour12: true,
                })}
              </div>
            </div>
            <div className="prose prose-invert dark:prose-invert max-w-none whitespace-pre-line">{message.body}</div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-border">
        <Button onClick={onReply} className="bg-blue-600 hover:bg-blue-700">
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
            className="mr-2"
          >
            <polyline points="9 17 4 12 9 7" />
            <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
          </svg>
          REPLY
        </Button>
      </div>
    </div>
  )
}
