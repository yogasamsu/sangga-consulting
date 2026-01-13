'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export default function Hero({ dictionary, lang }) {
    return (
        <section className={styles.hero}>
            {/* Background Overlay */}
            <div className={styles.overlay}></div>

            {/* Content Container */}
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.contentBox}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.headingWrapper}>
                        <h1 className={styles.title}>
                            {dictionary.hero.title}
                        </h1>
                    </div>

                    <p className={styles.subtitle}>
                        {dictionary.hero.subtitle}
                    </p>

                    <div className={styles.actions}>
                        <Link href={`/${lang}/contact`} className={styles.primaryBtn}>
                            {dictionary.hero.cta}
                        </Link>
                        <Link href={`/${lang}/projects`} className={styles.secondaryBtn}>
                            {dictionary.navigation.projects}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
