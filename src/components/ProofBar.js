'use client'

import styles from './ProofBar.module.css'
import { motion } from 'framer-motion'

export default function ProofBar({ dictionary }) {
  if (!dictionary?.proofBar) return null

  return (
    <div className={styles.bar}>
      <div className="container">
        <div className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.item}
          >
            <span className={styles.number}>100++</span>
            <span className={styles.label}>{dictionary.proofBar.companiesServed.replace('100++', '')}</span>
          </motion.div>
          <div className={styles.divider}></div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={styles.item}
          >
            <span className={styles.text}>{dictionary.proofBar.industries}</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
