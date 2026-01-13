import { getDictionary } from '@/lib/dictionary'
import { FiPhone, FiMail } from 'react-icons/fi'

export default async function Page({ params }) {
    const { lang } = await params
    const dictionary = await getDictionary(lang || 'en')
    return (
        <div className="container section-padding" style={{ maxWidth: '600px' }}>
            <h1>{dictionary.navigation.contact}</h1>
            <div style={{ marginTop: '2rem', padding: '2rem', background: 'var(--color-gray-100)', borderRadius: '12px' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '1.2rem' }}>
                    <FiPhone /> <strong>081578613875</strong>
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem' }}>
                    <FiMail /> <strong>contact@sanggabiz.com</strong>
                </p>
            </div>
        </div>
    )
}
