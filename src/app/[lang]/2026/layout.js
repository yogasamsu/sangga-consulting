
import '../../globals.css';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-heading',
    weight: ['400', '500', '600', '700', '800']
});

export const metadata = {
    title: 'Sangga Consulting - Roadmap 2026',
    description: 'How to get 1.2 Billion IDR for consulting.',
}

export default function Layout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
            <body style={{ margin: 0, padding: 0, overflow: 'hidden', height: '100vh', width: '100vw' }}>
                {children}
            </body>
        </html>
    )
}
