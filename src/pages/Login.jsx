import React from 'react'
import { Link } from 'react-router-dom'
import { SignIn } from '@clerk/clerk-react'
import { clerkAppearance } from '../utils/clerkAppearance'

export default function Login() {
  return (
    <div className="min-h-screen bg-bg text-white relative overflow-hidden">
      <div className="orb w-[420px] h-[420px] bg-accent top-[-140px] left-[-120px]" />
      <div className="orb w-[360px] h-[360px] bg-blue-500 bottom-[-120px] right-[-100px]" />

      <div className="relative z-10 px-6 md:px-12 py-5 border-b border-border/50 flex items-center justify-between">
        <Link to="/" className="text-sm text-muted hover:text-white transition-colors">
          ← Back to Home
        </Link>
        <div className="flex items-center gap-2.5 absolute left-1/2 -translate-x-1/2">
          <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-black text-xs font-black">AI</span>
          </div>
          <span className="font-display font-semibold text-base tracking-tight">InterviewPrep</span>
        </div>
        <span className="w-20" />
      </div>

      <div className="relative z-10 min-h-[calc(100vh-73px)] flex items-center justify-center px-4">
        <SignIn appearance={clerkAppearance} />
      </div>
    </div>
  )
}
