'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi'
import styles from './Navbar.module.css'

export default function Navbar({ dictionary }) {
    const [isOpen, setIsOpen] = useState(false)
    const params = useParams()
    const pathname = usePathname()
    const lang = params.lang

    const toggleMenu = () => setIsOpen(!isOpen)

    const switchLang = (newLang) => {
        // Replace the language segment in the URL
        // pathname is like /en/about
        const segments = pathname.split('/')
        segments[1] = newLang
        return segments.join('/')
    }

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href={`/${lang}`} className={styles.logo}>
                    <span className={styles.logoText}>Sanggabiz</span>
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <Link href={`/${lang}`} className={styles.navLink}>{dictionary.navigation.home}</Link>
                    <Link href={`/${lang}/about`} className={styles.navLink}>{dictionary.navigation.about}</Link>
                    <Link href={`/${lang}/services`} className={styles.navLink}>{dictionary.navigation.services}</Link>
                    <Link href={`/${lang}/projects`} className={styles.navLink}>{dictionary.navigation.projects}</Link>
                    <Link href={`/${lang}/blog`} className={styles.navLink}>{dictionary.navigation.blog}</Link>

                    <Link href={`/${lang}/contact`} className={`btn btn-primary ${styles.contactBtn}`}>
                        {dictionary.navigation.contact}
                    </Link>

                    <div className={styles.langSwitcher}>
                        <FiGlobe size={20} />
                        <Link href={switchLang('en')} className={`${styles.langLink} ${lang === 'en' ? styles.activeLang : ''}`}>EN</Link>
                        <span className={styles.divider}>|</span>
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
                            <Link href={`/${lang}/about`} onClick={toggleMenu} className={styles.mobileNavLink}>{dictionary.navigation.about}</Link>
                            <Link href={`/${lang}/services`} onClick={toggleMenu} className={styles.mobileNavLink}>{dictionary.navigation.services}</Link>
                            <Link href={`/${lang}/projects`} onClick={toggleMenu} className={styles.mobileNavLink}>{dictionary.navigation.projects}</Link>
                            <Link href={`/${lang}/blog`} onClick={toggleMenu} className={styles.mobileNavLink}>{dictionary.navigation.blog}</Link>
                            <Link href={`/${lang}/contact`} onClick={toggleMenu} className={styles.mobileNavLink}>{dictionary.navigation.contact}</Link>

                            <div className={styles.mobileLang}>
                                <Link href={switchLang('en')} className={`${styles.langLink} ${lang === 'en' ? styles.activeLang : ''}`}>English</Link>
                                <Link href={switchLang('id')} className={`${styles.langLink} ${lang === 'id' ? styles.activeLang : ''}`}>Indonesia</Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
