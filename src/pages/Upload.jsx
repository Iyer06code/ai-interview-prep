import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { session as sessionStorage } from '../utils/storage'

const SAMPLE_ROLES = [
  'Software Engineer', 'Product Manager', 'Business Analyst',
  'Data Analyst', 'Marketing Specialist', 'UX Designer',
  'Customer Success', 'Sales',
]

export default function Upload() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [jobTitle, setJobTitle] = useState(params.get('role') || '')
  const [jobDescription, setJobDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const canProceed = jobTitle.trim() || jobDescription.trim()

  const handleStart = async () => {
    if (!canProceed) return
    setLoading(true)

    // Persist to storage
    sessionStorage.set({ jobTitle, jobDescription, resumeId: null, questions: [], currentIndex: 0, answers: [], status: 'loading' })

    // Small delay for perceived loading
    await new Promise((r) => setTimeout(r, 800))
    navigate(`/resume?role=${encodeURIComponent(jobTitle || params.get('role') || '')}`)
  }

  return (
    <div className="min-h-screen bg-bg text-white">
      {/* Progress bar */}
      <StepBar current={1} />

      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Back */}
        <button onClick={() => navigate('/')} className="flex items-center gap-1.5 text-muted text-sm hover:text-white mb-8 transition-colors">
          ← Back
        </button>

        <p className="section-label mb-2">Step 1 of 4</p>
        <h1 className="font-display text-3xl font-bold mb-2">Set up your interview</h1>
        <p className="text-muted text-sm mb-8">
          Provide a job title or description. The more detail you give, the better your questions will be.
        </p>

        {/* Job title */}
        <div className="mb-5">
          <label className="block text-xs font-medium text-muted mb-2">Job Title</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="e.g. Senior Product Manager"
            className="input"
          />
          {/* Quick picks */}
          <div className="flex flex-wrap gap-2 mt-2.5">
            {SAMPLE_ROLES.map((r) => (
              <button
                key={r}
                onClick={() => setJobTitle(r)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors
                  ${jobTitle === r ? 'border-accent text-accent bg-accent/5' : 'border-border text-muted hover:text-white hover:border-border'}`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <textarea
          rows={7}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste the full job description here for more accurate questions…"
          className="input resize-none leading-relaxed"
        />

        {/* CTA */}
        <button
          onClick={handleStart}
          disabled={!canProceed || loading}
          className={`btn-primary w-full mt-8 justify-center py-4 text-sm
            ${!canProceed ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Spinner /> Generating questions…
            </span>
          ) : (
            'Continue to Resume →'
          )}
        </button>

        <p className="text-center text-xs text-muted mt-3">
          Next step: upload your resume for a roadmap before interview.
        </p>
      </div>
    </div>
  )
}

function Spinner() {
  return (
    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="60" strokeDashoffset="20" />
    </svg>
  )
}

function StepBar({ current }) {
  const steps = ['Setup', 'Resume', 'Interview', 'Report']
  return (
    <div className="border-b border-border px-6 py-3 flex items-center gap-2">
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <div className={`flex items-center gap-1.5 text-xs font-medium
            ${i + 1 === current ? 'text-accent' : i + 1 < current ? 'text-muted' : 'text-subtle'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold
              ${i + 1 === current ? 'bg-accent text-black' : i + 1 < current ? 'bg-subtle text-white' : 'bg-surface border border-border text-muted'}`}>
              {i + 1 < current ? '✓' : i + 1}
            </span>
            {s}
          </div>
          {i < steps.length - 1 && <div className="flex-1 h-px bg-border max-w-8" />}
        </React.Fragment>
      ))}
    </div>
  )
}
