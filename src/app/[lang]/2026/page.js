
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChartLine, FaHandshake, FaBullhorn, FaCheckCircle, FaUsers, FaLightbulb, FaRocket, FaYoutube, FaSearch, FaEnvelope } from 'react-icons/fa';

// --- Data & Content ---

const slides = [
    {
        id: 'intro',
        layout: 'hero',
        title: 'Path to 1.2 Billion IDR',
        subtitle: 'Sangga Consulting Strategy 2026',
        content: 'From Random Referrals to a Predictable Revenue Engine.',
        icon: <FaRocket />,
        bg: 'linear-gradient(135deg, #38B2AC 0%, #319795 100%)',
        color: '#fff'
    },
    {
        id: 'track-record',
        layout: 'list-split',
        title: 'Proven Track Record',
        subtitle: 'Our Foundation of Trust',
        content: [
            { highlight: 'Evaluasi Kerjasama', detail: 'Bagian Perekonomian -> Ref: Putut', icon: <FaCheckCircle /> },
            { highlight: 'SOTK Reform', detail: 'PDAM -> Ref: Putut', icon: <FaCheckCircle /> },
            { highlight: 'Market Enhancement', detail: 'KSO SCISI -> Ref: Levner', icon: <FaCheckCircle /> },
            { highlight: 'Research Report', detail: 'Pusat Studi -> Ref: Pugo', icon: <FaCheckCircle /> },
            { highlight: 'Pemetaan Pajak', detail: 'BPKAD -> Ref: Putut', icon: <FaCheckCircle /> },
        ],
        note: "Key Insight: All deals came from 'Kenal' & 'Trust'.",
        bg: 'linear-gradient(135deg, #38B2AC 0%, #2C7A7B 100%)',
        color: '#fff'
    },
    {
        id: 'problem',
        layout: 'center',
        title: 'The Challenge',
        subtitle: "We can't rely on 'Waiting for Putut' forever.",
        content: 'Current State: Passive Reliance on Referrals.\nFuture State: Active, Systematic Trust Building.',
        icon: <FaLightbulb />,
        bg: 'linear-gradient(135deg, #319795 0%, #285E61 100%)',
        color: '#fff'
    },
    {
        id: 'market',
        layout: 'chart',
        title: 'Market Opportunity',
        subtitle: 'Consulting is a Multi-Billion Dollar Industry',
        content: {
            tam: '2.81 Billion USD',
            tamDesc: 'Indonesia Consulting Market (2026 Est.)',
            sam: '300 M USD',
            samDesc: 'SME & Gov Consulting (DIY/Jateng)',
            som: '1.2 Billion IDR',
            somDesc: 'Sangga Consulting Target (0.02% of SAM)',
            source: 'Sources: Mordor Intelligence (Indonesia Consulting Market Outlook), BPS DIY (Regional GDP Data), Internal Capacity Analysis.'
        },
        bg: 'linear-gradient(135deg, #4FD1C5 0%, #38B2AC 100%)',
        color: '#fff'
    },
    {
        id: 'strategy-overview',
        layout: 'three-pillars',
        title: 'The 3P Strategy Engine',
        subtitle: "Building 'Kenal' & 'Trust' at Scale",
        pillars: [
            { name: 'Pull', icon: <FaYoutube />, desc: 'Content Marketing (Youtube, SEO, Email)', target: 'Rp 50M' },
            { name: 'Push', icon: <FaBullhorn />, desc: 'Sniper Approach (Ads, CRM, SOTK)', target: 'Rp 640M' },
            { name: 'Partnership', icon: <FaHandshake />, desc: 'Ecosystem (Levner, Yukbisnis)', target: 'Rp 575M' },
        ],
        bg: 'linear-gradient(135deg, #319795 0%, #2C7A7B 100%)',
        color: '#fff'
    },
    {
        id: 'deep-dive-pull',
        layout: 'user-journey',
        title: 'Pull Strategy: Content Machine',
        subtitle: 'Attract -> Educate -> Convert',
        steps: [
            'User has a problem',
            'Search Google / Youtube',
            'Discover Sanggabiz Content',
            'Fill Form / Subscribe',
            'Sales Follow-up'
        ],
        details: 'Youtube: "How to make impactful reports"\nSEO: "Jasa Konsultan Jogja"',
        bg: 'linear-gradient(135deg, #81E6D9 0%, #4FD1C5 100%)',
        color: '#fff'
    },
    {
        id: 'deep-dive-push',
        layout: 'user-journey',
        title: 'Push Strategy: Sniper Precision',
        subtitle: 'Identify -> Engage -> Close',
        steps: [
            'Define Use Case (e.g. Annual Report)',
            'Collect Prospect Data (100 Leads)',
            'Engage (Teaser/Landing Page/Ads)',
            'Hot Lead Generation',
            'Sales Closing'
        ],
        details: 'Tactics: Search Ads, CRM Blast, Personal Sales Visits',
        bg: 'linear-gradient(135deg, #4FD1C5 0%, #38B2AC 100%)',
        color: '#fff'
    },
    {
        id: 'deep-dive-partners',
        layout: 'user-journey',
        title: 'Partnership Strategy',
        subtitle: 'Leverage Other Platforms',
        steps: [
            'Identify Partners (Levner, GrowWin)',
            'Offer FREE Value / Service',
            'Problem ID Meeting',
            'Co-Creation Product',
            'Maintain & Scale'
        ],
        details: 'Target: 10 Strategic Partners',
        bg: 'linear-gradient(135deg, #38B2AC 0%, #319795 100%)',
        color: '#fff'
    },
    {
        id: 'timeline',
        layout: 'timeline',
        title: '2026 Execution Roadmap',
        subtitle: 'Quarterly Milestones',
        quarters: [
            { q: 'Q1', focus: 'Foundation', activ: ['Launch Youtube Studio', 'Setup CRM & Lead DB', 'Sign 2 Key Partners', 'SEO Audit'] },
            { q: 'Q2', focus: 'Activation', activ: ['First Webinar Event', 'Run "Annual Report" Ads', 'Partner Cross-Selling', '10 Sales Visits'] },
            { q: 'Q3', focus: 'Scale', activ: ['Viral Content Series', 'Expand Ads (FB/LinkedIn)', 'Govt Budget Pitching', 'New Product Launch'] },
            { q: 'Q4', focus: 'Harvest', activ: ['Year-End Renewals', '2027 Planning', 'Client Appreciation Event', 'Upselling Existing Bases'] },
        ],
        bg: 'linear-gradient(135deg, #38B2AC 0%, #285E61 100%)',
        color: '#fff'
    },
    {
        id: 'revenue-table',
        layout: 'table',
        title: 'Estimated Revenue Model',
        subtitle: 'Detailed Activity & Conversion Projection',
        rows: [
            { pillar: 'Pull', activity: 'Youtube Video', reach: '10,000', conv: '0.01%', deals: '1', value: 'Rp 25,000,000', sales: 'Rp 25,000,000' },
            { pillar: 'Pull', activity: 'SEO Keywords', reach: '10,000', conv: '0.01%', deals: '1', value: 'Rp 25,000,000', sales: 'Rp 25,000,000' },
            { pillar: 'Push', activity: 'Ads Push', reach: '100,000', conv: '0.01%', deals: '10', value: 'Rp 25,000,000', sales: 'Rp 250,000,000' },
            { pillar: 'Push', activity: 'Join Pitching', reach: '200', conv: '1%', deals: '2', value: 'Rp 50,000,000', sales: 'Rp 100,000,000' },
            { pillar: 'Push', activity: 'Referral (Existing Clients)', reach: '50', conv: '5%', deals: '3', value: 'Rp 50,000,000', sales: 'Rp 125,000,000' },
            { pillar: 'Push', activity: 'CRM (Email & WA)', reach: '10,000', conv: '0.05%', deals: '5', value: 'Rp 25,000,000', sales: 'Rp 125,000,000' },
            { pillar: 'Push', activity: 'Sales Visit', reach: '150', conv: '1%', deals: '2', value: 'Rp 25,000,000', sales: 'Rp 37,500,000' },
            { pillar: 'Push', activity: 'Business Forum', reach: '10', conv: '1%', deals: '0', value: 'Rp 25,000,000', sales: 'Rp 2,500,000' },
            { pillar: 'Partnership', activity: 'Maintain Relationship', reach: '2', conv: '100%', deals: '2', value: 'Rp 100,000,000', sales: 'Rp 200,000,000' },
            { pillar: 'Partnership', activity: 'Business Platform', reach: '50', conv: '10%', deals: '5', value: 'Rp 75,000,000', sales: 'Rp 375,000,000' },
        ],
        total: 'Rp 1,265,000,000',
        bg: 'linear-gradient(135deg, #F0F4F8 0%, #E2E8F0 100%)',
        color: '#333'
    },
    {
        id: 'final-goal',
        layout: 'big-number',
        title: 'The Target',
        number: 'Rp 1.265.000.000',
        subtitle: '2026 Revenue Goal',
        breakdown: 'A Data-Driven Path to Success',
        bg: 'linear-gradient(135deg, #319795 0%, #234E52 100%)',
        color: '#fff'
    }
];

// --- Components ---

const Slide = ({ slide }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: slide.bg,
                color: slide.color,
                padding: '2rem',
                boxSizing: 'border-box',
                position: 'absolute',
                top: 0,
                left: 0,
                overflow: 'hidden'
            }}
        >
            {/* Background Decor */}
            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '30vw', height: '30vw', borderRadius: '50%', background: 'rgba(0,0,0,0.05)', zIndex: 0 }} />

            <div style={{ zIndex: 1, maxWidth: '1200px', width: '100%', textAlign: 'center' }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {slide.icon && <div style={{ fontSize: '4rem', marginBottom: '1rem', color: slide.color === '#fff' ? '#4FD1C5' : '#36A691' }}>{slide.icon}</div>}
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', color: 'inherit' }}>{slide.title}</h1>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 400, opacity: 0.9, marginBottom: '3rem', fontFamily: 'var(--font-body)', color: 'inherit' }}>{slide.subtitle}</h2>
                </motion.div>

                {/* Layouts */}
                {slide.layout === 'hero' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ fontSize: '1.8rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                        {slide.content}
                    </motion.p>
                )}

                {slide.layout === 'list-split' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'left' }}>
                        {slide.content.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + idx * 0.1 }}
                                style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '1.5rem', borderRadius: '12px', color: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                            >
                                <div style={{ color: '#E6FFFA', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'inherit' }}>{item.highlight}</h3>
                                <p style={{ opacity: 0.9 }}>{item.detail}</p>
                            </motion.div>
                        ))}
                        <div style={{ gridColumn: '1/-1', marginTop: '2rem', textAlign: 'center', fontStyle: 'italic', fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>
                            {slide.note}
                        </div>
                    </div>
                )}

                {slide.layout === 'center' && (
                    <div style={{ fontSize: '2rem', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                        {slide.content}
                    </div>
                )}

                {slide.layout === 'chart' && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', alignItems: 'flex-end', height: '400px', marginBottom: '2rem' }}>
                            <motion.div initial={{ height: 0 }} animate={{ height: '100%' }} transition={{ delay: 0.4, duration: 1 }} style={{ width: '200px', background: '#E2E8F0', borderRadius: '8px 8px 0 0', position: 'relative', display: 'flex', flexDirection: 'column', padding: '1rem', justifyContent: 'flex-start' }}>
                                <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}>TAM</span>
                                <span style={{ color: '#333' }}>{slide.content.tam}</span>
                                <span style={{ fontSize: '0.8rem', marginTop: 'auto', color: '#555' }}>Top-down: Global/National Market<br />(Mordor Intelligence)</span>
                            </motion.div>
                            <motion.div initial={{ height: 0 }} animate={{ height: '50%' }} transition={{ delay: 0.6, duration: 1 }} style={{ width: '200px', background: '#90CDF4', borderRadius: '8px 8px 0 0', position: 'relative', display: 'flex', flexDirection: 'column', padding: '1rem', justifyContent: 'flex-start' }}>
                                <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}>SAM</span>
                                <span style={{ color: '#333' }}>{slide.content.sam}</span>
                                <span style={{ fontSize: '0.8rem', marginTop: 'auto', color: '#555' }}>Serviceable: SME & Gov in DIY/Jateng<br />(Est. 10% of Regional GDP)</span>
                            </motion.div>
                            <motion.div initial={{ height: 0 }} animate={{ height: '25%' }} transition={{ delay: 0.8, duration: 1 }} style={{ width: '200px', background: '#36A691', color: 'white', borderRadius: '8px 8px 0 0', position: 'relative', display: 'flex', flexDirection: 'column', padding: '1rem', justifyContent: 'flex-start' }}>
                                <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>SOM</span>
                                <span>{slide.content.som}</span>
                                <span style={{ fontSize: '0.8rem', marginTop: 'auto' }}>Target: 0.02% of SAM<br />(Realistic Capacity)</span>
                            </motion.div>
                        </div>
                        <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', maxWidth: '800px' }}>
                            {slide.content.source}
                        </div>
                    </div>
                )}

                {slide.layout === 'three-pillars' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        {slide.pillars.map((p, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + idx * 0.2 }}
                                style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '16px', backdropFilter: 'blur(10px)' }}
                            >
                                <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#4FD1C5' }}>{p.icon}</div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'inherit' }}>{p.name}</h3>
                                <p style={{ fontSize: '1rem', marginBottom: '1rem', opacity: 0.8 }}>{p.desc}</p>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FBD38D' }}>{p.target}</div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {slide.layout === 'user-journey' && (
                    <div style={{ position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                            {slide.steps.map((step, idx) => (
                                <div key={idx} style={{ position: 'relative', width: '18%', textAlign: 'center' }}>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.4 + idx * 0.1 }}
                                        style={{ width: '40px', height: '40px', background: '#36A691', borderRadius: '50%', margin: '0 auto 1rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}
                                    >
                                        {idx + 1}
                                    </motion.div>
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + idx * 0.1 }} style={{ fontSize: '0.9rem', fontWeight: 600 }}>{step}</motion.p>
                                </div>
                            ))}
                            {/* Connecting Line */}
                            <div style={{ position: 'absolute', top: '20px', left: '10%', right: '10%', height: '2px', background: '#E2E8F0', zIndex: -1 }} />
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #36A691', backdropFilter: 'blur(10px)' }}>
                            <strong>Strategy Details:</strong> <br />
                            {slide.details}
                        </div>
                    </div>
                )}

                {slide.layout === 'timeline' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', textAlign: 'left' }}>
                        {slide.quarters.map((q, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + idx * 0.1 }}
                                style={{ background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.5rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'inherit' }}>{q.q}</h3>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 400, color: '#FBD38D' }}>{q.focus}</span>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {q.activ.map((act, i) => (
                                        <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <div style={{ width: '6px', height: '6px', background: 'white', borderRadius: '50%' }} /> {act}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                )}

                {slide.layout === 'big-number' && (
                    <div>
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, type: 'spring' }}
                            style={{ fontSize: '6rem', fontWeight: 900, color: '#4FD1C5', textShadow: '0 4px 20px rgba(0,0,0,0.3)', marginBottom: '1rem' }}
                        >
                            {slide.number}
                        </motion.div>
                        <p style={{ fontSize: '1.5rem', opacity: 0.8 }}>{slide.breakdown}</p>
                    </div>
                )}

                {slide.layout === 'table' && (
                    <div style={{ overflowX: 'auto', width: '100%', maxWidth: '1400px' }}>
                        <motion.table
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            style={{ width: '100%', borderCollapse: 'collapse', color: '#333', background: 'white', borderRadius: '8px', overflow: 'hidden', fontSize: '0.9rem' }}
                        >
                            <thead style={{ background: '#36A691', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Pillar</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Activities</th>
                                    <th style={{ padding: '12px', textAlign: 'right' }}>Potential Reach</th>
                                    <th style={{ padding: '12px', textAlign: 'right' }}>Conv. Rate</th>
                                    <th style={{ padding: '12px', textAlign: 'right' }}>Deals</th>
                                    <th style={{ padding: '12px', textAlign: 'right' }}>Project Value</th>
                                    <th style={{ padding: '12px', textAlign: 'right' }}>Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {slide.rows.map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #eee', background: idx % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                                        <td style={{ padding: '10px', fontWeight: 'bold' }}>{row.pillar}</td>
                                        <td style={{ padding: '10px' }}>{row.activity}</td>
                                        <td style={{ padding: '10px', textAlign: 'right' }}>{row.reach}</td>
                                        <td style={{ padding: '10px', textAlign: 'right' }}>{row.conv}</td>
                                        <td style={{ padding: '10px', textAlign: 'right' }}>{row.deals}</td>
                                        <td style={{ padding: '10px', textAlign: 'right' }}>{row.value}</td>
                                        <td style={{ padding: '10px', textAlign: 'right', fontWeight: 'bold' }}>{row.sales}</td>
                                    </tr>
                                ))}
                                <tr style={{ background: '#2B3E4A', color: 'white', fontWeight: 'bold' }}>
                                    <td colSpan={6} style={{ padding: '15px', textAlign: 'right' }}>Grand Total</td>
                                    <td style={{ padding: '15px', textAlign: 'right', fontSize: '1.2rem', color: '#4FD1C5' }}>{slide.total}</td>
                                </tr>
                            </tbody>
                        </motion.table>
                    </div>
                )}

            </div>

            {/* Navigation Hint */}
            <div style={{ position: 'absolute', bottom: '2rem', left: '0', right: '0', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
                Press Arrow Keys or Swipe to Navigate | {slide.id}
            </div>
        </motion.div>
    );
};

export default function PresentationPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') nextSlide();
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div
            style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', background: '#000' }}
            onClick={(e) => {
                // Simple click right side next, left side prev logic
                if (e.clientX > window.innerWidth / 2) nextSlide();
                else prevSlide();
            }}
        >
            <AnimatePresence mode="wait">
                <Slide key={currentSlide} slide={slides[currentSlide]} />
            </AnimatePresence>

            {/* Progress Bar */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, height: '4px', background: 'rgba(255,255,255,0.3)', width: '100%', zIndex: 10 }}>
                <div style={{ height: '100%', background: '#36A691', width: `${((currentSlide + 1) / slides.length) * 100}%`, transition: 'width 0.3s' }} />
            </div>
        </div>
    );
}
