"use client"

import { useEffect } from "react"

type KeyboardShortcuts = {
  [key: string]: () => void
}

export function useKeyboardShortcuts(shortcuts: KeyboardShortcuts) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()

<<<<<<< HEAD
      // Skip if user is typing in an input, textarea, or contentEditable element
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        (event.target instanceof HTMLElement && event.target.isContentEditable)
      ) {
        return
      }

      if (shortcuts[key]) {
        event.preventDefault()
        shortcuts[key]()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [shortcuts])
}
