import { getDictionary } from '@/lib/dictionary'
import Hero from '@/components/Hero'
import ProofBar from '@/components/ProofBar'
import RapiPlaybook from '@/components/RapiPlaybook'
import OfferLadder from '@/components/OfferLadder'
import LeadGenForm from '@/components/LeadGenForm'
import styles from './page.module.css'
import { FiTrendingUp, FiActivity, FiGlobe, FiPieChart } from 'react-icons/fi'

export default async function Page({ params }) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  // What We Do Outcomes (Bilingual)
  const outcomes = [
    {
      title: lang === 'en' ? 'Growth & Market Strategy' : 'Strategi Pertumbuhan & Pasar',
      desc: lang === 'en' ? 'Segmentation, GTM, Pricing, Channel Strategy' : 'Segmentasi, GTM, Pricing, Strategi Kanal',
      icon: <FiTrendingUp size={32} />
    },
    {
      title: lang === 'en' ? 'Organization & Productivity' : 'Organisasi & Produktivitas',
      desc: lang === 'en' ? 'Org Design, WLA, KPI, Change Management' : 'Desain Org, WLA, KPI, Manajemen Perubahan',
      icon: <FiActivity size={32} />
    },
    {
      title: lang === 'en' ? 'Market Entry & Feasibility' : 'Market Entry & Studi Kelayakan',
      desc: lang === 'en' ? 'APAC Entry, Compliance, Investment Modeling' : 'Masuk Pasar APAC, Kepatuhan, Model Investasi',
      icon: <FiGlobe size={32} />
    },
    {
      title: lang === 'en' ? 'Finance & Restructuring' : 'Keuangan & Restrukturisasi',
      desc: lang === 'en' ? 'Pro Forma, Scenarios, Spin-offs, Governance' : 'Pro Forma, Skenario, Spin-off, Tata Kelola',
      icon: <FiPieChart size={32} />
    },
  ]

  return (
    <main>
      <Hero dictionary={dictionary} lang={lang} />

      <ProofBar dictionary={dictionary} />

      {/* RAPI Methodology */}
      <RapiPlaybook dictionary={dictionary} />

      {/* What We Do (Outcomes) */}
      <section className="section-padding" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>{lang === 'en' ? 'Focus Areas' : 'Area Fokus'}</span>
            <h2 className={styles.sectionTitle}>
              {lang === 'en' ? 'Solving Critical Challenges' : 'Menjawab Tantangan Krusial'}
            </h2>
          </div>
          <div className={styles.grid}>
            {outcomes.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.iconBox}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Offer Ladder */}
      <OfferLadder dictionary={dictionary} />

      {/* Why Sanggabiz */}
      <section className="section-padding" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className={styles.splitLayout}>
            <div className={styles.textCol}>
              <span className={styles.sectionSubtitle}>Why Sanggabiz?</span>
              <h2 className={styles.sectionTitle}>Operator-Led Advisory</h2>
              <div className={styles.text} style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>{lang === 'en' ? 'Not just slides.' : 'Bukan sekadar slide.'}</strong> {lang === 'en'
                    ? 'We design for execution because we also run operations. We know what breaks in the real world.'
                    : 'Kami mendesain untuk eksekusi karena kami juga menjalankan operasional. Kami tahu apa yang sering gagal di lapangan.'
                  }
                </p>
                <p>
                  <strong>{lang === 'en' ? 'Multidisciplinary.' : 'Multidisiplin.'}</strong> {lang === 'en'
                    ? 'Finance, Tax, Growth, Org, and Public Sector expertise in one bench.'
                    : 'Keahlian Keuangan, Pajak, Pertumbuhan, Org, dan Sektor Publik dalam satu tim.'
                  }
                </p>
              </div>
            </div>
            <div className={styles.imageCol}>
              <div className={styles.imagePlaceholder} style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop)'
              }}></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
