"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import type { Thread } from "@/lib/types"
import { sendReply } from "@/lib/api"
import { useToast } from "@/hooks/use-toast"

interface ReplyComposerProps {
  thread: Thread
  onSend: (replyData: {
    to: string
    from: string
    subject: string
    body: string
  }) => void
  onCancel: () => void
}

export function ReplyComposer({ thread, onSend, onCancel }: ReplyComposerProps) {
  const { toast } = useToast()
  const [to, setTo] = useState(thread.from.email)
  const [from, setFrom] = useState("shaw@getmemeetings.com")
  const [fromName, setFromName] = useState("Shaw Adley")
  const [subject, setSubject] = useState(`${thread.subject}`)
  const [body, setBody] = useState(`Hi ${thread.from.name.split(" ")[0]},

`)
  const [showVariables, setShowVariables] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [])

  const handleSend = async () => {
    setIsSending(true)
    try {
      const replyData = {
        fromName,
        from,
        to,
        subject,
        body,
        references: {},
      }

      const success = await sendReply(thread.id, replyData)

      if (success) {
        toast({
          title: "Success",
          description: "Reply sent successfully.",
        })
        onSend({
          to,
          from,
          subject,
          body,
        })
      } else {
        throw new Error("Failed to send reply")
      }
    } catch (error) {
      console.error("Error sending reply:", error)
      toast({
        title: "Error",
        description: "Failed to send reply. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSending(false)
    }
  }

  const insertVariable = (variable: string) => {
    setBody((prev) => prev + `{{${variable}}}`)
    setShowVariables(false)
  }

  return (
    <div className="h-full flex flex-col bg-background">
      <div className="p-4 border-b border-border flex justify-between items-center">
        <h2 className="text-lg font-medium">Reply</h2>
        <Button variant="ghost" size="icon" onClick={onCancel}>
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
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </Button>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="w-16 text-sm text-muted-foreground">From:</span>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="flex-1 bg-transparent border-none focus:outline-none"
            />
          </div>

          <div className="flex items-center">
            <span className="w-16 text-sm text-muted-foreground">To:</span>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="flex-1 bg-transparent border-none focus:outline-none"
            />
          </div>

          <div className="flex items-center">
            <span className="w-16 text-sm text-muted-foreground">Subject:</span>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="flex-1 bg-transparent border-none focus:outline-none"
            />
          </div>

          <div className="pt-4">
            <textarea
              ref={textareaRef}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full h-64 bg-transparent border-none focus:outline-none resize-none"
            />
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-border flex items-center">
        <div className="flex-1 flex space-x-2">
          <Button onClick={handleSend} disabled={isSending} className="bg-blue-600 hover:bg-blue-700 uppercase">
            {isSending ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                Sending...
              </>
            ) : (
              "SEND"
            )}
          </Button>

          <div className="relative">
            <Button
              variant="outline"
              onClick={() => setShowVariables(!showVariables)}
              className="flex items-center uppercase"
            >
              VARIABLES
            </Button>

            {showVariables && (
              <div className="absolute bottom-full left-0 mb-2 w-48 bg-muted rounded-md shadow-lg z-10">
                <div className="p-2">
                  <h3 className="text-sm font-medium mb-2">Insert Variable</h3>
                  <ul className="space-y-1">
                    <li>
                      <button
                        onClick={() => insertVariable("FIRST_NAME")}
                        className="w-full text-left px-2 py-1 text-sm rounded hover:bg-muted/70"
                      >
                        FIRST_NAME
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => insertVariable("LAST_NAME")}
                        className="w-full text-left px-2 py-1 text-sm rounded hover:bg-muted/70"
                      >
                        LAST_NAME
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => insertVariable("COMPANY")}
                        className="w-full text-left px-2 py-1 text-sm rounded hover:bg-muted/70"
                      >
                        COMPANY
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => insertVariable("EMAIL")}
                        className="w-full text-left px-2 py-1 text-sm rounded hover:bg-muted/70"
                      >
                        EMAIL
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <Button variant="outline" className="uppercase">
            SAVE
          </Button>
        </div>
      </div>
    </div>
  )
}
