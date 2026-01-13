'use client'

import React from 'react'
import Link from 'next/link'
import { FiInstagram, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import styles from './Footer.module.css'

export default function Footer({ dictionary }) {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logo}>Sanggabiz</Link>
                        <p className={styles.description}>
                            Partner Business Solutions providing Department-as-a-Service for operational excellence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linksCol}>
                        <h4>Menu</h4>
                        <ul>
                            <li><Link href="/">{dictionary.navigation.home}</Link></li>
                            <li><Link href="/about">{dictionary.navigation.about}</Link></li>
                            <li><Link href="/services">{dictionary.navigation.services}</Link></li>
                            <li><Link href="/blog">{dictionary.navigation.blog}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.contactCol}>
                        <h4>{dictionary.navigation.contact}</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <FiPhone /> <span>081578613875</span>
                            </li>
                            <li>
                                <FiMail /> <span>contact@sanggabiz.com</span>
                            </li>
                            <li>
                                <FiLinkedin /> <span>Sanggabiz Consulting</span>
                            </li>
                            <li>
                                <FiInstagram /> <span>@sanggabiz</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>{dictionary.footer.rights}</p>
                </div>
            </div>
        </footer>
    )
}
