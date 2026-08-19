'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

export function Modal({
  open,
  onClose,
  title,
  icon,
  children,
}: {
  open: boolean
  onClose: () => void
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
}) {
  useEffect(() => {
    if (!open) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-codelabz-dark/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200">
        <div className="flex items-center justify-between px-6 pt-6 pb-4 sticky top-0 bg-white rounded-t-2xl">
          <h2 className="flex items-center gap-2 text-sm font-bold text-codelabz-dark uppercase tracking-wide">
            {icon && (
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-codelabz-accent/10 text-codelabz-accent">
                {icon}
              </span>
            )}
            {title}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-codelabz-dark transition-colors" aria-label="Fechar">
            <X size={18} />
          </button>
        </div>
        <div className="px-6 pb-6">{children}</div>
      </div>
    </div>
  )
}
