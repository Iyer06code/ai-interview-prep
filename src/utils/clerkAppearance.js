import React from 'react'

export const clerkAppearance = {
  baseTheme: undefined,
  variables: {
    colorPrimary: '#22c55e',
    colorBackground: '#111118',
    colorInputBackground: '#16161f',
    colorInputText: '#f9fafb',
    colorText: '#f9fafb',
    colorTextSecondary: '#6b7280',
    colorNeutral: '#6b7280',
    borderRadius: '12px',
    fontFamily: 'DM Sans, sans-serif',
  },
  elements: {
    card: 'bg-card border border-border shadow-xl',
    headerTitle: 'font-display font-bold text-white',
    headerSubtitle: 'text-muted',
    formButtonPrimary: 'bg-accent hover:bg-accent-dim text-black font-semibold',
    footerActionLink: 'text-accent hover:text-accent-dim',
    formFieldInput: 'bg-surface border-border text-white',
    dividerLine: 'bg-border',
    socialButtonsBlockButton: 'border-border text-white hover:bg-surface',
  },
}
