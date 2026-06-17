import './globals.css'

export const metadata = {
  title: 'Tolulope Ajidahun, MD | Clinical AI Validator',
  description: 'Clinical judgment for AI systems that matter.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0f0f0f]">
        {children}
      </body>
    </html>
  )
}
