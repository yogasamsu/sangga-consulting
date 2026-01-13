import { getDictionary } from '@/lib/dictionary'
import Hero from '@/components/Hero'
import styles from './page.module.css'
import { FiTrendingUp, FiSettings, FiUsers, FiMonitor, FiBriefcase, FiDollarSign } from 'react-icons/fi'

export default async function Page({ params }) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  const services = [
    { title: 'Operations', icon: <FiSettings size={40} />, desc: 'Operation Excellence, SOP, Admin' },
    { title: 'Finance', icon: <FiDollarSign size={40} />, desc: 'Billing, Tax Support, Accounting' },
    { title: 'Marketing', icon: <FiTrendingUp size={40} />, desc: 'Performance, SEO/SEM, Branding' },
    { title: 'Project Mgmt', icon: <FiBriefcase size={40} />, desc: 'Agile Management, Planning' },
    { title: 'HR', icon: <FiUsers size={40} />, desc: 'Payroll, Recruitment, Admin' },
    { title: 'Customer Service', icon: <FiMonitor size={40} />, desc: 'Knowledge Mgmt, Training' },
  ]

  return (
    <main>
      <Hero dictionary={dictionary} lang={lang} />

      {/* Services Section */}
      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>{lang === 'en' ? 'What We Do' : 'Layanan Kami'}</span>
            <h2 className={styles.sectionTitle}>
              {lang === 'en' ? 'Comprehensive Business Solutions' : 'Solusi Bisnis Komprehensif'}
            </h2>
          </div>

          <div className={styles.grid}>
            {services.map((service) => (
              <div key={service.title} className={styles.card}>
                <div className={styles.iconBox}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact / About Section */}
      <section className="section-padding" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div className={styles.splitLayout}>
            <div className={styles.textCol}>
              <span className={styles.sectionSubtitle}>Why Sanggabiz?</span>
              <h2 className={styles.sectionTitle}>Department-as-a-Service</h2>
              <p className={styles.text}>
                {dictionary.about.description}
              </p>
              <div className={styles.statGrid}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>80%</span>
                  <span className={styles.statLabel}>{lang === 'en' ? 'Cost Saving' : 'Hemat Biaya'}</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>10+</span>
                  <span className={styles.statLabel}>{lang === 'en' ? 'Industries' : 'Industri'}</span>
                </div>
              </div>
            </div>
            <div className={styles.imageCol}>
              {/* Placeholder for "Office" or "Meeting" image */}
              <div className={styles.imagePlaceholder}></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
