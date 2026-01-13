import { getDictionary } from '@/lib/dictionary'
import Hero from '@/components/Hero'

export default async function Page({ params }) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <main>
      <Hero dictionary={dictionary} lang={lang} />

      {/* Placeholder for other sections */}
      <section className="section-padding container">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {params.lang === 'en' ? 'Our Services' : 'Layanan Kami'}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {['Finance', 'Marketing', 'HR', 'Operations', 'Project Management'].map((service) => (
            <div key={service} style={{
              padding: '2rem',
              borderRadius: '12px',
              background: 'white',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-gray-100)'
            }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{service}</h3>
              <p style={{ color: 'var(--color-gray-500)' }}>
                {params.lang === 'en'
                  ? 'Comprehensive solutions for your business needs.'
                  : 'Solusi komprehensif untuk kebutuhan bisnis Anda.'}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
