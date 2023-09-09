import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import '../globals.css'

export const metadata = {
    title: 'Threads',
    description: 'A Next.js 13 Meta Threads Application'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children
}:{
    children: React.ReactNode 
}) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <Head>
                <meta name="robots" content="noindex,nofollow" />

                </Head>
                <body className={`${inter.className} bg-dark-1`}>
                    <div className='w-full flex justify-center items-center min-h-screen'>
                        {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    )
}