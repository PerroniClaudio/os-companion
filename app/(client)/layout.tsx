import SidenavLeft from '@/components/SidenavLeft'
import '../globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import SidenavRight from '@/components/SidenavRight'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
           
            <div className="grid grid-cols-12">
                <aside className="self-start sticky top-0 col-span-2">
                    <SidenavLeft />
                </aside>
                
                <main className="col-span-7">
                    <Navbar />
                    {children}
                </main>

                <aside className="self-start sticky top-0 col-span-3">
                    <SidenavRight />
                </aside>
            </div>
        </body>
    </html>
  )
}
