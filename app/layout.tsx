import './globals.css'
import { Inter, Roboto_Mono, Poppins } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-pops'
})

export const metadata = {
  title: 'Chat GPT 3.0',
  description: 'AI in your hands',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`} style={inter.style} >
        {children}
      </body>
    </html>
  )
}
