import { getDictionary } from '@/lib/dictionary'

export default async function Page({ params }) {
    const { lang } = await params

    return (
        <main style={{ padding: '6rem 0', minHeight: '80vh', background: '#f8f9fa' }}>
            <div className="container">
                <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem' }}>
                    {lang === 'en' ? 'Client Results' : 'Hasil Klien'}
                </h1>
                <div style={{ padding: '2rem', background: 'white', borderRadius: '8px', border: '1px solid #eee' }}>
                    <p>{lang === 'en' ? 'Detailed case studies coming soon.' : 'Studi kasus detail akan segera hadir.'}</p>
                </div>
            </div>
        </main>
    )
}
