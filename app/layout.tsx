import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from "./components/layout/Header";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Pizzaria Online',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className='max-w-4xl mx-auto px-4'>
        <Header /> 
        {children}
        <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; Systan-Sistema Tecnológico 2023 Todos direitos reservados. 
      </footer>
        </main>

       
        </body>
    </html>
  )
}
