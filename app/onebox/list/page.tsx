"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { OneboxLayout } from "@/components/onebox-layout"
import { EmailList } from "@/components/email-list"
import { EmailThread } from "@/components/email-thread"
import { LeadDetails } from "@/components/lead-details"
import { ReplyComposer } from "@/components/reply-composer"
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts"
import { useToast } from "@/hooks/use-toast"
import { fetchEmails, deleteEmail, getStoredEmails, storeEmails, initializeStoredEmails } from "@/lib/api"
import type { Email, Thread, Lead, EmailMessage } from "@/lib/types"
import { useRouter } from "next/navigation"

export default function OneboxListPage() {
  const router = useRouter()
  const [emails, setEmails] = useState<Email[]>([])
  const [selectedThread, setSelectedThread] = useState<Thread | null>(null)
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showReplyComposer, setShowReplyComposer] = useState(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    initializeStoredEmails()
    loadEmails()
  }, [])

  const loadEmails = async () => {
    setIsLoading(true)
    try {
      const apiEmails = await fetchEmails()
      if (apiEmails && apiEmails.length > 0) {
        setEmails(apiEmails)
      } else {
        const storedEmails = getStoredEmails()
        setEmails(storedEmails)
      }
    } catch (error) {
      console.error("Failed to load emails:", error)
      const storedEmails = getStoredEmails()
      setEmails(storedEmails)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSelectThread = async (threadId: string) => {
    const thread = emails.find((email) => email.id === threadId)
    if (thread) {
      setSelectedThread(thread)

      setSelectedLead({
        name: "Orlando",
        email: "johndoe@gmail.com",
        phone: "9999999999",
        linkedin: "www.linkedin.com/johndoe",
        company: "ReachInbox",
        campaign: {
          name: "Campaign name",
          steps: 3,
          daysInSequence: 5,
          currentStep: 3,
        },
      })
    }
  }

  const handleDeleteThread = async () => {
    if (!selectedThread) return

    try {
      const success = await deleteEmail(selectedThread.id)

      if (success) {
        const updatedEmails = emails.filter((email) => email.id !== selectedThread.id)
        setEmails(updatedEmails)
        storeEmails(updatedEmails) 

        setSelectedThread(null)
        setShowDeleteConfirmation(false)

        toast({
          title: "Success",
          description: "Email deleted successfully.",
        })
      } else {
        throw new Error("Failed to delete email")
      }
    } catch (error) {
      console.error("Failed to delete email:", error)
      toast({
        title: "Error",
        description: "Failed to delete email. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleReply = () => {
    setShowReplyComposer(true)
  }

  const handleSendReply = async (replyData: {
    to: string
    from: string
    subject: string
    body: string
  }) => {
    try {
      if (!selectedThread) return

      const newMessage: EmailMessage = {
        id: `${selectedThread.id}-${(selectedThread.messages?.length || 0) + 1}`,
        from: {
          name: "You",
          email: replyData.from,
        },
        to: replyData.to,
        subject: replyData.subject,
        body: replyData.body,
        date: new Date().toISOString(),
      }

      const updatedThread = {
        ...selectedThread,
        messages: [...(selectedThread.messages || []), newMessage],
      }

      const updatedEmails = emails.map((email) => (email.id === selectedThread.id ? updatedThread : email))

      setEmails(updatedEmails)
      storeEmails(updatedEmails) 
      setSelectedThread(updatedThread)

      toast({
        title: "Success",
        description: "Reply sent successfully.",
      })

      setShowReplyComposer(false)
    } catch (error) {
      console.error("Failed to send reply:", error)
      toast({
        title: "Error",
        description: "Failed to send reply. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleCancelReply = () => {
    setShowReplyComposer(false)
  }

  // Set up keyboard shortcuts
  useKeyboardShortcuts({
    d: () => {
      if (selectedThread) {
        setShowDeleteConfirmation(true)
      }
    },
    r: () => {
      if (selectedThread) {
        handleReply()
      }
    },
  })

  return (
    <OneboxLayout>
      <div className="flex h-full">
        <div className="w-1/4 border-r border-gray-800">
          <EmailList
            emails={emails}
            isLoading={isLoading}
            onSelectThread={handleSelectThread}
            selectedThreadId={selectedThread?.id}
          />
        </div>

        <div className="w-1/2 border-r border-gray-800">
          {selectedThread ? (
            <>
              {showReplyComposer ? (
                <ReplyComposer thread={selectedThread} onSend={handleSendReply} onCancel={handleCancelReply} />
              ) : (
                <EmailThread
                  thread={selectedThread}
                  onReply={handleReply}
                  onDelete={() => setShowDeleteConfirmation(true)}
                />
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <div className="w-32 h-32 mb-6 bg-blue-900/30 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">It&apos;s the beginning of a legendary sales pipeline</h2>
              <p className="text-gray-400">
                When you have inbound E-mails
                <br />
                you&apos;ll see them here
              </p>
            </div>
          )}
        </div>

        <div className="w-1/4">{selectedLead && <LeadDetails lead={selectedLead} />}</div>
      </div>

      {}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#1a1a1a] rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4 text-center">Are you sure?</h3>
            <p className="text-gray-400 text-center mb-6">Your selected email will be deleted.</p>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setShowDeleteConfirmation(false)} className="w-1/2 mr-2">
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDeleteThread} className="w-1/2 ml-2">
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </OneboxLayout>
  )
}
