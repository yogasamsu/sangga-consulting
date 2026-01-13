'use client'

import { useState } from 'react'
import styles from './RapiPlaybook.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { FiTarget, FiCpu, FiUsers, FiBarChart2 } from 'react-icons/fi'

export default function RapiPlaybook({ dictionary }) {
    const [activeTab, setActiveTab] = useState('r')

    if (!dictionary?.rapi) return null

    const items = [
        { id: 'r', icon: <FiTarget />, ...dictionary.rapi.sections.r },
        { id: 'a', icon: <FiCpu />, ...dictionary.rapi.sections.a },
        { id: 'p', icon: <FiUsers />, ...dictionary.rapi.sections.p },
        { id: 'i', icon: <FiBarChart2 />, ...dictionary.rapi.sections.i },
    ]

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>{dictionary.rapi.title}</h2>
                    <p className={styles.subtitle}>{dictionary.rapi.subtitle}</p>
                    <p className={styles.description}>{dictionary.rapi.description}</p>
                </div>

                <div className={styles.playbook}>
                    <div className={styles.tabs}>
                        {items.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`${styles.tab} ${activeTab === item.id ? styles.activeTab : ''}`}
                            >
                                <span className={styles.icon}>{item.icon}</span>
                                <span className={styles.tabTitle}>{item.title}</span>
                            </button>
                        ))}
                    </div>

                    <div className={styles.contentDisplay}>
                        <AnimatePresence mode='wait'>
                            {items.map((item) => (
                                activeTab === item.id && (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className={styles.card}
                                    >
                                        <div className={styles.cardIcon}>{item.icon}</div>
                                        <h3 className={styles.cardTitle}>{item.title}</h3>
                                        <p className={styles.cardDesc}>{item.desc}</p>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
