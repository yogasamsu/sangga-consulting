'use client'

import styles from './OfferLadder.module.css'
import { FiCheck } from 'react-icons/fi'

export default function OfferLadder({ dictionary }) {
    if (!dictionary?.services) return null

    const offers = [
        { id: 'sprint', ...dictionary.services.ladder.sprint, featured: false },
        { id: 'retainer', ...dictionary.services.ladder.retainer, featured: true },
        { id: 'transform', ...dictionary.services.ladder.transform, featured: false },
    ]

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>{dictionary.services.title}</h2>
                    <p className={styles.subtitle}>{dictionary.services.subtitle}</p>
                </div>

                <div className={styles.grid}>
                    {offers.map((offer) => (
                        <div key={offer.id} className={`${styles.card} ${offer.featured ? styles.featured : ''}`}>
                            {offer.featured && <div className={styles.badge}>Most Popular</div>}
                            <h3 className={styles.cardTitle}>{offer.title}</h3>
                            <div className={styles.timeline}>{offer.timeline}</div>
                            <p className={styles.desc}>{offer.desc}</p>

                            <div className={styles.divider}></div>

                            <div className={styles.outcomeBox}>
                                <span className={styles.outcomeLabel}>Outcome:</span>
                                <span className={styles.outcomeValue}>{offer.outcome}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
