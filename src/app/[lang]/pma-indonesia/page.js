import { getDictionary } from '@/lib/dictionary'
import OfferLadder from '@/components/OfferLadder'
import Link from 'next/link'
import styles from '../page.module.css' // Reusing main styles for consistency

export default async function Page({ params }) {
    const { lang } = await params
    const dictionary = await getDictionary(lang)
    const content = dictionary.landing.pma

    return (
        <main>
            <section className={styles.hero} style={{ minHeight: '60vh', background: '#1a202c' }}>
                <div className="container">
                    <div className={styles.contentBox} style={{ paddingTop: '4rem' }}>
                        <h1 className={styles.title} style={{ color: 'white' }}>{content.title}</h1>
                        <p className={styles.subtitle} style={{ color: '#cbd5e0' }}>{content.subtitle}</p>
                        <div className={styles.actions}>
                            <Link href={`/${lang}/book`} className={styles.primaryBtn} style={{ background: 'var(--color-primary)', color: 'white', padding: '1rem 2rem', fontWeight: 'bold' }}>
                                {dictionary.hero.ctaPrimary}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <OfferLadder dictionary={dictionary} />
        </main>
    )
}
