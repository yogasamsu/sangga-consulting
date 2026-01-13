import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'

export default async function Page({ params }) {
    const { lang } = await params
    const dictionary = await getDictionary(lang || 'en')
    return (
        <div className="container section-padding">
            <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>{dictionary.navigation.services}</h1>

            <div style={{
                maxWidth: '1000px',
                margin: '0 auto',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)'
            }}>
                <Image
                    src="/images/services-overview.png"
                    alt="Services Overview"
                    width={1200}
                    height={675}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </div>

            <div style={{ marginTop: '3rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
                <p>{dictionary.about.description}</p>
            </div>
        </div>
    )
}
