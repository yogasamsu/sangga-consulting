import { getDictionary } from '@/lib/dictionary'
import OfferLadder from '@/components/OfferLadder'
import Link from 'next/link'
import styles from '../page.module.css'

export default async function Page({ params }) {
    const { lang } = await params
    const dictionary = await getDictionary(lang)
    const content = dictionary.landing.ngo

    return (
        <main>
            <section className={styles.hero} style={{ minHeight: '60vh', background: '#276749' }}>
                <div className="container">
                    <div className={styles.contentBox} style={{ paddingTop: '4rem' }}>
                        <h1 className={styles.title} style={{ color: 'white' }}>{content.title}</h1>
                        <p className={styles.subtitle} style={{ color: '#c6f6d5' }}>{content.subtitle}</p>
                        <div className={styles.actions}>
                            <Link href={`/${lang}/book`} className={styles.primaryBtn} style={{ background: 'white', color: '#276749', padding: '1rem 2rem', fontWeight: 'bold' }}>
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
