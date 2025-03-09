import { SipCalculator } from "@/components/sip-calculator"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold tracking-tight">SIP Calculator</h1>
      <div className="mx-auto max-w-3xl">
        <SipCalculator />
      </div>
    </main>
  )
}

