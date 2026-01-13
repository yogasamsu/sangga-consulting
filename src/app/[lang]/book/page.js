import { getDictionary } from '@/lib/dictionary'
import LeadGenForm from '@/components/LeadGenForm'

export default async function Page({ params }) {
    const { lang } = await params
    const dictionary = await getDictionary(lang)

    return (
        <main style={{ background: '#f8f9fa', minHeight: '90vh', padding: '4rem 0' }}>
            <div className="container" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#1a202c' }}>
                    {lang === 'en' ? 'Let\'s Solve It.' : 'Mari Selesaikan.'}
                </h1>
                <p style={{ marginBottom: '3rem', color: '#718096' }}>
                    {lang === 'en'
                        ? 'Fill out the form below to help us prepare for your diagnostic call.'
                        : 'Isi formulir di bawah ini agar kami dapat mempersiapkan sesi diagnostik Anda.'}
                </p>

                <div style={{ textAlign: 'left' }}>
                    <LeadGenForm dictionary={dictionary} />
                </div>
            </div>
        </main>
    )
}
