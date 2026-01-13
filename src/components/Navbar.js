'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import Sticky from 'react-stickynode'
import styles from './Navbar.module.css'

export default function Navbar({ dictionary }) {
    const [isOpen, setIsOpen] = useState(false)
    const params = useParams()
    const pathname = usePathname()
    const lang = params.lang || 'id'

    const toggleMenu = () => setIsOpen(!isOpen)

    const switchLang = (newLang) => {
        const segments = pathname.split('/')
        if (segments[1] === 'en' || segments[1] === 'id') {
            segments[1] = newLang
        } else {
            segments.splice(1, 0, newLang)
        }
        return segments.join('/') || '/'
    }

    return (
        <Sticky enabled={true} top={0} innerZ={1000} activeClass={styles.stickyActive}>
            <nav className={styles.navbar}>
                <div className={`container ${styles.navContainer}`}>
                    {/* Logo - Left Aligned */}
                    <Link href={`/${lang}`} className={styles.logo}>
                        Sanggabiz<span style={{ color: 'var(--color-primary)' }}>.</span>
                    </Link>

                    {/* Desktop Menu - Right Aligned */}
                    <div className={styles.desktopMenu}>
                        <Link href={`/${lang}/services`} className={styles.navLink}>{dictionary.navigation.services}</Link>
                        <Link href={`/${lang}/case-studies`} className={styles.navLink}>{dictionary.navigation.caseStudies}</Link>
                        <Link href={`/${lang}/insights`} className={styles.navLink}>{dictionary.navigation.insights}</Link>
                        <Link href={`/${lang}/about`} className={styles.navLink}>{dictionary.navigation.about}</Link>
                        <Link href={`/${lang}/book`} className={styles.ctaBtn}
                            style={{
                                background: 'var(--color-primary)',
                                color: 'white',
                                padding: '0.5rem 1.25rem',
                                borderRadius: '4px',
                                fontWeight: '600',
                                marginLeft: '1rem'
                            }}>
                            {dictionary.navigation.book}
                        </Link>

                        <div className={styles.langSwitcher}>
                            <Link href={switchLang('en')} className={`${styles.langLink} ${lang === 'en' ? styles.activeLang : ''}`}>EN</Link>
                            <span className={styles.divider}>/</span>
                            <Link href={switchLang('id')} className={`${styles.langLink} ${lang === 'id' ? styles.activeLang : ''}`}>ID</Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className={styles.menuBtn} onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className={styles.mobileMenu}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                        >
                            <div className={styles.mobileLinks}>
                                <Link href={`/${lang}`} onClick={toggleMenu} className={styles.mobileNavLink}>{dictionary.navigation.home}</Link>
                                <Link href={`/${lang}/services`} onClick={toggleMenu} className={styles.mobileNavLink}>{dictionary.navigation.services}</Link>
                                <Link href={`/${lang}/case-studies`} onClick={toggleMenu} className={styles.mobileNavLink}>{dictionary.navigation.caseStudies}</Link>
                                <Link href={`/${lang}/insights`} onClick={toggleMenu} className={styles.mobileNavLink}>{dictionary.navigation.insights}</Link>
                                <Link href={`/${lang}/about`} onClick={toggleMenu} className={styles.mobileNavLink}>{dictionary.navigation.about}</Link>
                                <Link href={`/${lang}/book`} onClick={toggleMenu} className={styles.mobileNavLink}>{dictionary.navigation.book}</Link>

                                <div className={styles.mobileLang}>
                                    <Link href={switchLang('en')} className={`${styles.langLink} ${lang === 'en' ? styles.activeLang : ''}`}>English</Link>
                                    <Link href={switchLang('id')} className={`${styles.langLink} ${lang === 'id' ? styles.activeLang : ''}`}>Indonesia</Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </Sticky>
    )
}
