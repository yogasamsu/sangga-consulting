import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'

export default async function Page({ params }) {
    const { lang } = await params
    const dictionary = await getDictionary(lang || 'en')

    const projects = [
        { id: 1, title: 'Growth Acceleration Strategy', img: '/images/portfolio-1.png' },
        { id: 2, title: 'Business Strategy Reinvention', img: '/images/portfolio-2.png' },
        { id: 3, title: 'Organizational Restructuring', img: '/images/portfolio-3.png' },
        { id: 4, title: 'Business Growth Strategy', img: '/images/portfolio-4.png' },
    ]

    return (
        <div className="container section-padding">
            <h1 style={{ marginBottom: '3rem', textAlign: 'center' }}>{dictionary.navigation.projects}</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', maxWidth: '800px', margin: '0 auto' }}>
                {projects.map((project) => (
                    <div key={project.id} style={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-lg)',
                        border: '1px solid var(--color-gray-100)',
                        background: 'white'
                    }}>
                        <Image
                            src={project.img}
                            alt={project.title}
                            width={1200}
                            height={675}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                        <div style={{ padding: '2rem' }}>
                            <h3 style={{ color: 'var(--color-primary)' }}>{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
