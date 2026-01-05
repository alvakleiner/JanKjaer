import React from "react"

type BookLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export default function BookLink({
  href,
  children,
  className = "",
}: BookLinkProps) {
  return (
    <a
      href={href}
      className={`underline underline-offset-4 ${className}`}
    >
      {children}
    </a>
  )
}