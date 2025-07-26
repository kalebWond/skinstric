'use client'

import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
  children: React.ReactNode
}

export default function Modal({ children }: ModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {children}
    </div>,
    document.getElementById('modal-root')!
  )
}
