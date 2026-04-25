import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserButton, useAuth } from '@clerk/clerk-react'
import { clerkAppearance } from '../utils/clerkAppearance'

export default function Navbar() {
  const navigate = useNavigate()
  const { isLoaded, isSignedIn } = useAuth()

  return (
    <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-5 border-b border-border/50">
      <Link to="/" className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
          <span className="text-black text-xs font-black">AI</span>
        </div>
        <span className="font-display font-semibold text-base tracking-tight">InterviewPrep</span>
      </Link>

      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/progress')} className="text-sm text-muted hover:text-white transition-colors hidden md:block">
          My Progress
        </button>

        {isLoaded && isSignedIn ? (
          <UserButton appearance={clerkAppearance} afterSignOutUrl="/" />
        ) : (
          <>
            <button onClick={() => navigate('/login')} className="btn-secondary text-xs py-2.5 px-4">
              Login
            </button>
            <button onClick={() => navigate('/signup')} className="btn-primary text-xs py-2.5 px-4">
              Get Started
            </button>
          </>
        )}
      </div>
    </nav>
  )
}
