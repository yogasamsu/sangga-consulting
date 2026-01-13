'use client'

import { useState } from 'react'
import styles from './LeadGenForm.module.css'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

export default function LeadGenForm({ dictionary }) {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        revenue: '',
        problem: '',
        budget: '',
        urgency: '',
        email: ''
    })

    if (!dictionary?.leadGen) return null

    const handleSubmit = (e) => {
        e.preventDefault()
        // Validation or API call here
        console.log(formData)
        // For demo, just show success or redirect (mock)
        alert('Thank you! We will be in touch shortly.')
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.title}>{dictionary.leadGen.title}</h3>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>{dictionary.leadGen.revenue}</label>
                    <select name="revenue" className={styles.select} onChange={handleChange} required>
                        <option value="">Select Range</option>
                        <option value="<1M">Less than $1M / IDR 15M</option>
                        <option value="1M-10M">$1M - $10M / IDR 15M - 150M</option>
                        <option value="10M+">$10M+ / IDR 150M+</option>
                    </select>
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>{dictionary.leadGen.problem}</label>
                    <select name="problem" className={styles.select} onChange={handleChange} required>
                        <option value="">Select Problem</option>
                        <option value="Growth">Growth Stagnation</option>
                        <option value="Profit">Profitability / Cost</option>
                        <option value="Org">Organization / People</option>
                        <option value="Entry">Market Entry (PMA)</option>
                        <option value="Governance">Governance / System</option>
                    </select>
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Email</label>
                    <input type="email" name="email" className={styles.input} placeholder="name@company.com" onChange={handleChange} required />
                </div>

                <button type="submit" className={styles.submitBtn}>
                    {dictionary.leadGen.submit} <FiArrowRight />
                </button>
            </form>
        </div>
    )
}
