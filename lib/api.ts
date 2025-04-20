import type { Email } from "./types"

<<<<<<< HEAD
// API base URL
const API_BASE_URL = "https://hiring.reachinbox.xyz/api/v1"

// Get the auth token from localStorage
const getAuthToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("reachinbox_token") || "demo_token" // Use demo_token as fallback
=======

const API_BASE_URL = "https://hiring.reachinbox.xyz/api/v1"


const getAuthToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("reachinbox_token") || "demo_token" 
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
  }
  return "demo_token"
}

<<<<<<< HEAD
// Common headers for API requests
=======

>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getAuthToken()}`,
  }
}

<<<<<<< HEAD
// Fetch all emails from the onebox list endpoint
=======

>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
export const fetchEmails = async (): Promise<Email[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/onebox/list`, {
      method: "GET",
      headers: getHeaders(),
    })

    if (!response.ok) {
      throw new Error(`Error fetching emails: ${response.status}`)
    }

    const data = await response.json()
    return data.threads || []
  } catch (error) {
    console.error("API Error:", error)
<<<<<<< HEAD
    // Return mock data as fallback
=======
    
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
    return mockEmails
  }
}

<<<<<<< HEAD
// Fetch a single email thread
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
export const fetchEmailThread = async (threadId: string): Promise<Email | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/onebox/${threadId}`, {
      method: "GET",
      headers: getHeaders(),
    })

    if (!response.ok) {
      throw new Error(`Error fetching thread: ${response.status}`)
    }

    const data = await response.json()
    return data.thread || null
  } catch (error) {
    console.error("API Error:", error)
<<<<<<< HEAD
    // Return mock data as fallback
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
    const email = mockEmails.find((email) => email.id === threadId)
    return email || null
  }
}

<<<<<<< HEAD
// Delete an email thread
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
export const deleteEmail = async (threadId: string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/onebox/${threadId}`, {
      method: "DELETE",
      headers: getHeaders(),
    })

    if (!response.ok) {
      throw new Error(`Error deleting thread: ${response.status}`)
    }

    return true
  } catch (error) {
    console.error("API Error:", error)
<<<<<<< HEAD
    // For mock data, we'll simulate a successful delete
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
    return true
  }
}

<<<<<<< HEAD
// Send a reply to a thread
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
export const sendReply = async (
  threadId: string,
  replyData: {
    fromName: string
    from: string
    to: string
    subject: string
    body: string
    references?: Record<string, string>
  },
): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/onebox/reply/${threadId}`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(replyData),
    })

    if (!response.ok) {
      throw new Error(`Error sending reply: ${response.status}`)
    }

    return true
  } catch (error) {
    console.error("API Error:", error)
<<<<<<< HEAD
    // For mock data, we'll simulate a successful reply
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
    return true
  }
}

<<<<<<< HEAD
// Google login redirect URL
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
export const getGoogleLoginUrl = (redirectUrl: string): string => {
  return `${API_BASE_URL}/auth/google-login?redirect_to=${encodeURIComponent(redirectUrl)}`
}

<<<<<<< HEAD
// Set the auth token after successful login
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
export const setAuthToken = (token: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("reachinbox_token", token)
  }
}

<<<<<<< HEAD
// Check if user is authenticated
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
export const isAuthenticated = (): boolean => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("reachinbox_token")
    return !!token
  }
  return false
}

<<<<<<< HEAD
// Logout - clear the auth token
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
export const logout = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("reachinbox_token")
  }
}

<<<<<<< HEAD
// Mock data exactly matching the screenshots
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
const mockEmails: Email[] = [
  {
    id: "1",
    subject: "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
    from: {
      name: "Mitrajit Chandra",
      email: "mitrajit2022@gmail.com",
    },
    to: "shaw@getmemeetings.com",
    cc: "",
    body: `How are you Shaw?

Thanks for reaching out over our web chat.

How can I help you with your project?

Please let me know if you need anything else.

Regards,
Mitrajit Chandra

7ZG2ZTV 6KG634E`,
    date: "2022-02-01T11:24:34Z",
    status: "read",
    labels: ["Interested", "Campaign name"],
    messages: [
      {
        id: "1-1",
        from: {
          name: "Mitrajit Chandra",
          email: "mitrajit2022@gmail.com",
        },
        to: "shaw@getmemeetings.com",
        subject: "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
        body: `How are you Shaw?

Thanks for reaching out over our web chat.

How can I help you with your project?

Please let me know if you need anything else.

Regards,
Mitrajit Chandra

7ZG2ZTV 6KG634E`,
        date: "2022-02-01T11:24:34Z",
      },
      {
        id: "1-2",
        from: {
          name: "Shaw Adley",
          email: "shaw@getmemeetings.com",
        },
        to: "mitrajit2022@gmail.com",
        subject: "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
        body: `Hi Mitrajit,

Just wondering if you're still interested.

Regards,
Shaw Adley

6KG634E practicecowboy`,
        date: "2022-02-02T11:24:34Z",
      },
    ],
  },
  {
    id: "2",
    subject: "Test mail",
    from: {
      name: "Shaw Adley",
      email: "shaw@getmemeetings.com",
    },
    to: "mitrajit2022@gmail.com",
    cc: "",
    body: `Test mail`,
    date: "2022-02-03T11:24:34Z",
    status: "unread",
    labels: ["Interested", "Campaign name"],
    messages: [
      {
        id: "2-1",
        from: {
          name: "Shaw Adley",
          email: "shaw@getmemeetings.com",
        },
        to: "mitrajit2022@gmail.com",
        subject: "Test mail",
        body: `Test mail`,
        date: "2022-02-03T11:24:34Z",
      },
    ],
  },
]

<<<<<<< HEAD
// Store emails in localStorage for persistence
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
export const getStoredEmails = (): Email[] => {
  if (typeof window !== "undefined") {
    const storedEmails = localStorage.getItem("reachinbox_emails")
    if (storedEmails) {
      return JSON.parse(storedEmails)
    }
  }
  return mockEmails
}

export const storeEmails = (emails: Email[]): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("reachinbox_emails", JSON.stringify(emails))
  }
}

<<<<<<< HEAD
// Initialize stored emails if not already set
=======
>>>>>>> 6a3003a433f43b8f4a74971415a51d54521dbf60
export const initializeStoredEmails = (): void => {
  if (typeof window !== "undefined" && !localStorage.getItem("reachinbox_emails")) {
    storeEmails(mockEmails)
  }
}
