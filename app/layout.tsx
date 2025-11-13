import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LiveChat Pro - Feature-Rich Live Chat Application',
  description: 'Advanced live chat system with support for agents, chatbots, and comprehensive customer support features',
  keywords: ['live chat', 'customer support', 'chatbot', 'agent panel'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
