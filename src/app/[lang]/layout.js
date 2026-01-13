import { Inter, Roboto } from 'next/font/google'
import '../globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getDictionary } from '@/lib/dictionary'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-heading'
})

export const metadata = {
  title: 'Sanggabiz Consulting',
  description: 'Department-as-a-Service for Business Operation Excellence',
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'id' }]
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <html lang={lang} className={`${inter.variable} ${roboto.variable}`}>
      <body>
        <Navbar dictionary={dictionary} />
        {children}
        <Footer dictionary={dictionary} />
      </body>
    </html>
  )
}
