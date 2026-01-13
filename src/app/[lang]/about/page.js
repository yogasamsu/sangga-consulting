import { getDictionary } from '@/lib/dictionary'

export default async function Page({ params }) {
    const { lang } = await params
    const dictionary = await getDictionary(lang || 'en')
    return (
        <div className="container section-padding">
            <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem' }}>{dictionary.navigation.about}</h1>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#4a5568' }}>
                {lang === 'en'
                    ? 'Sanggabiz is an operator-led advisory firm. We combine strategic thinking with execution muscle.'
                    : 'Sanggabiz adalah firma penasihat yang dipimpin oleh praktisi operasional. Kami menggabungkan pemikiran strategis dengan kekuatan eksekusi.'}
            </p>
        </div>
    )
}
