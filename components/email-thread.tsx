"use client"

<<<<<<< HEAD
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import type { Thread } from "@/lib/types"
import { ChevronDown, MoreHorizontal, Edit, Trash2, Clock, UserMinus, Mail } from "lucide-react"
=======
import { Button } from "@/components/ui/button"
import type { Thread } from "@/lib/types"
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60

interface EmailThreadProps {
  thread: Thread
  onReply: () => void
  onDelete: () => void
}

export function EmailThread({ thread, onReply, onDelete }: EmailThreadProps) {
<<<<<<< HEAD
  const [showAllReplies, setShowAllReplies] = useState(false)
  const [showMoreOptions, setShowMoreOptions] = useState(false)
  const [showMoveOptions, setShowMoveOptions] = useState(false)
  const moreOptionsRef = useRef<HTMLDivElement>(null)
  const moveOptionsRef = useRef<HTMLDivElement>(null)

  // Check if thread has messages
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
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

<<<<<<< HEAD
  // Show only the first message if not showing all replies
  const displayMessages = showAllReplies ? messages : [messages[0]]

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreOptionsRef.current && !moreOptionsRef.current.contains(event.target as Node)) {
        setShowMoreOptions(false)
      }
      if (moveOptionsRef.current && !moveOptionsRef.current.contains(event.target as Node)) {
        setShowMoveOptions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleMarkAsUnread = () => {
    // Implement mark as unread functionality
    setShowMoreOptions(false)
    setShowMoveOptions(false)
  }

  const handleEditLead = () => {
    // Implement edit lead functionality
    setShowMoreOptions(false)
    setShowMoveOptions(false)
  }

  const handleRemoveLead = () => {
    // Implement remove lead functionality
    setShowMoveOptions(false)
  }

  const handleSetReminder = () => {
    // Implement set reminder functionality
    setShowMoveOptions(false)
  }

  return (
    <div className="h-full flex flex-col bg-[#f9f9f9] dark:bg-[#000000]">
      <div className="p-4 flex items-center justify-between border-b border-[#e0e0e0] dark:border-[#1f1f1f]">
        <div className="flex items-center">
          <div>
            <div className="font-medium">{thread.from.name}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{thread.from.email}</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="rounded-md border-[#e0e0e0] dark:border-[#1f1f1f] bg-white dark:bg-[#171819] text-black dark:text-white flex items-center space-x-1"
          >
            <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
              <span className="text-xs">●</span>
            </div>
            <span>Meeting Completed</span>
            <ChevronDown size={16} className="ml-2" />
          </Button>

          {/* Move dropdown button */}
          <div className="relative" ref={moveOptionsRef}>
            <Button
              variant="outline"
              size="sm"
              className="rounded-md border-[#e0e0e0] dark:border-[#1f1f1f] bg-white dark:bg-[#171819] text-black dark:text-white flex items-center space-x-1"
              onClick={() => setShowMoveOptions(!showMoveOptions)}
            >
              <span>Move</span>
              <ChevronDown size={16} className="ml-2" />
            </Button>

            {/* Move dropdown menu */}
            {showMoveOptions && (
              <div className="absolute right-0 mt-1 w-48 bg-white dark:bg-[#171819] rounded-md shadow-lg z-10 border border-[#e0e0e0] dark:border-[#1f1f1f] py-1">
                <button
                  className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#25262b]"
                  onClick={handleMarkAsUnread}
                >
                  <Mail size={16} className="mr-2" />
                  Mark as unread
                </button>
                <button
                  className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#25262b]"
                  onClick={handleEditLead}
                >
                  <Edit size={16} className="mr-2" />
                  Edit lead
                </button>
                <button
                  className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#25262b]"
                  onClick={handleRemoveLead}
                >
                  <UserMinus size={16} className="mr-2" />
                  Remove lead
                </button>
                <button
                  className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#25262b]"
                  onClick={handleSetReminder}
                >
                  <Clock size={16} className="mr-2" />
                  Set reminder
                </button>
                <button
                  className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#25262b]"
                  onClick={onDelete}
                >
                  <Trash2 size={16} className="mr-2" />
                  Delete
                </button>
              </div>
            )}
          </div>

          {/* More options (3-dot) menu */}
          <div className="relative" ref={moreOptionsRef}>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-md h-8 w-8"
              onClick={() => setShowMoreOptions(!showMoreOptions)}
            >
              <MoreHorizontal size={16} />
            </Button>

            {/* More options dropdown */}
            {showMoreOptions && (
              <div className="absolute right-0 mt-1 w-48 bg-white dark:bg-[#171819] rounded-md shadow-lg z-10 border border-[#e0e0e0] dark:border-[#1f1f1f] py-1">
                <button
                  className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#25262b]"
                  onClick={handleMarkAsUnread}
                >
                  <Mail size={16} className="mr-2" />
                  Mark as unread
                </button>
                <button
                  className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#25262b]"
                  onClick={handleEditLead}
                >
                  <Edit size={16} className="mr-2" />
                  Edit lead
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center py-1 dark:bg-[#000000]">
        <div className="absolute left-0 right-0 h-[0.5px] mx-5 bg-gray-300 dark:bg-gray-600"></div>
        <span className="text-center text-xs dark:text-white text-gray-500 font font-bold  bg-[#eef1f4] px-4 py-1 rounded-sm z-10 dark:bg-[#171819]">
          Today
        </span>
      </div>
      <div className="flex-1 overflow-auto">
        {displayMessages.map((message, index) => (
          <div
            key={message.id}
            className="p-4 border rounded-xl m-5 border-[#e0e0e0] dark:border-[#2c2f33] dark:bg-[#141517]"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{message.subject}</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(message.date).toLocaleString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </span>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              <div>
                from : {message.from.email}
                {message.cc && <span> cc : {message.cc}</span>}
              </div>
              <div>to : {message.to}</div>
            </div>
            <div className="prose prose-sm max-w-none whitespace-pre-line text-gray-800 dark:text-gray-200">
              {message.body}
            </div>
          </div>
        ))}

        {messages.length > 1 && !showAllReplies && (
          <div className="flex justify-center py-4 border-b border-[#e0e0e0] dark:border-[#1f1f1f]">
            <Button
              variant="outline"
              size="sm"
              className="rounded-md border-[#e0e0e0] dark:border-[#1f1f1f] bg-white dark:bg-[#171819] text-black dark:text-white flex items-center"
              onClick={() => setShowAllReplies(true)}
            >
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
                <path d="M17 18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9Z" />
                <path d="M20 6v11a2 2 0 0 1-2 2H5" />
                <path d="M16 4H7a2 2 0 0 0-2 2v11" />
              </svg>
              View all {messages.length} replies
            </Button>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-[#e0e0e0] dark:border-[#1f1f1f]">
        <Button
          onClick={onReply}
          className="bg-gradient-to-r from-[#4285f4] to-[#5c7cfa] hover:from-[#3b78e7] hover:to-[#4c6fe3] text-white rounded-md flex items-center"
        >
=======
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
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
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
<<<<<<< HEAD
          Reply
=======
          REPLY
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
        </Button>
      </div>
    </div>
  )
}
