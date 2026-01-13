'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export default function Hero({ dictionary, lang }) {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className={styles.badge}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        #TerimaBeres
                    </motion.span>
                    <h1 className={styles.title}>
                        {dictionary.hero.title}
                    </h1>
                    <p className={styles.subtitle}>
                        {dictionary.hero.subtitle}
                    </p>
                    <div className={styles.actions}>
                        <Link href={`/${lang}/contact`} className="btn btn-primary">
                            {dictionary.hero.cta}
                        </Link>
                        <Link href={`/${lang}/services`} className="btn btn-secondary">
                            {dictionary.navigation.services}
                        </Link>
                    </div>
                </motion.div>

                {/* Abstract Visual / Illustration */}
                <motion.div
                    className={styles.visual}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <div className={styles.circle1}></div>
                    <div className={styles.circle2}></div>
                    <div className={styles.glassCard}>
                        <h3>Growth</h3>
                        <div className={styles.chart}>
                            <div className={styles.bar1}></div>
                            <div className={styles.bar2}></div>
                            <div className={styles.bar3}></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
