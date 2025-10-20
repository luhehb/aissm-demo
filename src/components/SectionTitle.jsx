import React from 'react'

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <span className="h-5 w-1.5 bg-brand-accent rounded" aria-hidden />
        <h2 className="text-xl font-medium">{title}</h2>
      </div>
      {subtitle && <p className="text-sm text-ink-muted mt-1">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
