import type { Lead } from "@/lib/types"

interface LeadDetailsProps {
  lead: Lead
}

export function LeadDetails({ lead }: LeadDetailsProps) {
  const displayLead = {
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
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-medium">Lead details</h2>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="p-4 border-b border-border">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Name</span>
              <span className="font-medium">{displayLead.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Contact No</span>
              <span className="font-medium">{displayLead.phone}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">email</span>
              <span className="font-medium">{displayLead.email}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">LinkedIn</span>
              <span className="font-medium">{displayLead.linkedin}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Company name</span>
              <span className="font-medium">{displayLead.company}</span>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-medium mb-4 text-center">Activities</h3>

          <div className="mb-6">
            <h4 className="font-medium mb-2 text-center">Campaign name</h4>

            <div className="space-y-6">
              {Array.from({ length: displayLead.campaign.steps }).map((_, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
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
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    {index < displayLead.campaign.steps - 1 && <div className="w-0.5 h-12 bg-border mx-auto"></div>}
                  </div>
                  <div>
                    <div className="font-medium">
                      step {index + 1} : {index === 0 ? "email" : "opened email"}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
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
                        className="mr-1 text-muted-foreground"
                      >
                        <path d="m5 12 5 5 9-9" />
                      </svg>
                      <span>sent: 3rd feb</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
