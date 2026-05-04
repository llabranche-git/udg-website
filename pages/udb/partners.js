import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'
import Link from 'next/link'

const categories = [
  { label: 'Cloud & Infrastructure', partners: ['Amazon Web Services (AWS)', 'Multi-cloud redundancy architecture'] },
  { label: 'AI & Intelligence', partners: ['Anthropic', 'AI-powered banking operations, decisioning, and compliance'] },
  { label: 'Delivery Partners', partners: ['Global System Integrators (GSI)', 'Local implementation partners per market', 'Regional PMO specialists'] },
  { label: 'Regulatory Advisory', partners: ['In-country regulatory counsel', 'Central bank relationship advisors', 'Financial licensing specialists'] },
  { label: 'Academic & Policy', partners: ['GWU Institute for African Studies', 'Fulbright Program', 'Global Strategy Institute (GSI)'] },
  { label: 'Financial Infrastructure', partners: ['SWIFT global connectivity', 'Local payment rail integrations', 'Cross-border settlement networks'] },
]

export default function Partners() {
  return (
    <UDBLayout title="UDB Partners & Ecosystem | Unified Digital Banking" description="A global network of delivery partners, technology providers, and strategic alliances.">
      <div className={styles.innerBanner}>
        <div className={styles.udbContainer} style={{width:'100%'}}>
          <p className={styles.bannerLabel}>Our Ecosystem</p>
          <h1 className={styles.bannerHeading}>A Global Network Built for Deployment.</h1>
          <p className={styles.bannerSub}>UDB operates as the general contractor. Our ecosystem of partners delivers every component of the deployment — with UDB accountable for the whole.</p>
        </div>
      </div>

      <section className={`${styles.udbSection} ${styles.gridBg}`}>
        <div className={styles.udbContainer}>
          <p className={styles.sectionLabel}>Partner Ecosystem</p>
          <h2 className={styles.sectionHeading}>Best-in-Class. Every Layer.</h2>
          <p className={styles.sectionSubtext}>From cloud infrastructure to regulatory advisory, every component of the UDB deployment stack is backed by a trusted partner network. The family has one counterparty — UDB.</p>
          {categories.map(({ label, partners }) => (
            <div key={label} className={styles.partnerCategory}>
              <div className={styles.partnerCategoryLabel}>{label}</div>
              <div className={styles.partnerCards}>
                {partners.map(p => <div key={p} className={styles.partnerCard}>{p}</div>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={styles.udbContainer}>
          <p className={styles.sectionLabel} style={{color:'#60A5FA'}}>How It Works</p>
          <h2 className={styles.sectionHeading} style={{color:'#fff'}}>One Relationship. Full Accountability.</h2>
          <p className={styles.sectionSubtext} style={{color:'rgba(255,255,255,0.65)', maxWidth:'700px'}}>The principal family contracts with UDB — not with our partners. UDB selects, manages, and is fully accountable for every partner in the deployment. Partners are bound by the same obligations UDB carries. Flow-down indemnity protects the family at every layer.</p>
          <div className={styles.cardGrid3} style={{marginTop:'48px'}}>
            {[
              ['Single Counterparty', 'One contract. One relationship. One point of accountability. UDB manages the entire partner ecosystem so you don\'t have to.'],
              ['Flow-Down Obligations', 'Every partner agreement mirrors UDB\'s obligations to the family. Partner failures are UDB\'s responsibility to remedy.'],
              ['Vetted & Insured', 'All partners carry professional indemnity, cyber liability, and general commercial insurance. Standards set by UDB Legal.'],
            ].map(([title, text]) => (
              <div key={title} className={styles.darkCard}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.udbContainer}>
          <h2 className={styles.ctaHeading}>Interested in Becoming a Partner?</h2>
          <p className={styles.ctaSubtext}>UDB is selectively expanding its partner ecosystem in priority deployment markets.</p>
          <Link href="/udb/apply" className={styles.btnPrimary}>Get in Touch</Link>
        </div>
      </section>
    </UDBLayout>
  )
}
