import { getDictionary } from '@/lib/dictionary'
import { FiDownload } from 'react-icons/fi'

export default async function Page({ params }) {
    const { lang } = await params

    return (
        <main style={{ padding: '6rem 0', minHeight: '80vh', background: 'white' }}>
            <div className="container">
                <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                    {lang === 'en' ? 'Insights & Tools' : 'Wawasan & Alat'}
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>
                    {lang === 'en' ? 'Resources to help you build a better business.' : 'Sumber daya untuk membangun bisnis yang lebih baik.'}
                </p>

                <div id="leadmagnet" style={{ padding: '3rem', background: '#f0f4f8', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                    <div style={{ maxWidth: '600px' }}>
                        <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Free Download</span>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>RAPI™ Business Health Check</h2>
                        <p style={{ color: '#4a5568', marginBottom: '0' }}>
                            {lang === 'en'
                                ? 'A quick scorecard to evaluate your strategy, operations, people, and impact metrics.'
                                : 'Scorecard cepat untuk mengevaluasi strategi, operasional, tim, dan metrik dampak bisnis Anda.'}
                        </p>
                    </div>
                    <div>
                        <button style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'var(--color-primary)',
                            color: 'white',
                            padding: '1rem 2rem',
                            borderRadius: '8px',
                            border: 'none',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            cursor: 'pointer'
                        }}>
                            <FiDownload /> Download PDF
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
