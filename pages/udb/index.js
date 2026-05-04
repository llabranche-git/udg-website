import Link from 'next/link'
import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'

const stats = [
  { number: '95+', label: 'Banks Targeted' },
  { number: '4', label: 'Regions' },
  { number: '$10–20M', label: 'Deployment Fee' },
  { number: '35%', label: 'Platform Margin' },
]

const features = [
  { icon: '🏦', title: 'Full Stack Deployment', text: 'Complete core banking, digital channels, payments infrastructure, KYC/AML, and regulatory reporting — deployed end-to-end.' },
  { icon: '⚙️', title: 'Managed Service', text: 'UDB builds and runs the platform on your behalf. No internal technology team required. We operate the bank infrastructure so you can focus on growth.' },
  { icon: '🤝', title: 'Equity Partnership', text: 'UDB takes an equity stake in every bank it deploys. Our long-term returns are tied to your bank\'s performance. We win when you win.' },
]

export default function UDBOverview() {
  return (
    <UDBLayout title="Unified Digital Banking (UDB) | Redefine Your Legacy">
      {/* Hero */}
      <section className={`${styles.hero} ${styles.gridBg}`}>
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>Unified Digital Group &nbsp;|&nbsp; Unified Digital Banking</p>
          <h1 className={styles.heroHeadline}>Redefine Your Legacy with Unified Digital Banking (UDB)</h1>
          <p className={styles.heroSub}>A fully managed, cloud-native banking orchestration engine designed for growth and emerging markets.</p>
          <div className={styles.heroCtas}>
            <Link href="/udb/apply" className={styles.btnPrimary}>Apply for Partnership</Link>
            <Link href="/udb/platform" className={styles.btnText}>Learn More →</Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/assets/starlink.jpg" alt="Digital Infrastructure" />
        </div>
      </section>

      {/* Stats */}
      <div className={styles.statsRow}>
        {stats.map(({ number, label }) => (
          <div key={label} className={styles.statItem}>
            <div className={styles.statNumber}>{number}</div>
            <div className={styles.statLabel}>{label}</div>
          </div>
        ))}
      </div>

      {/* What is UDB */}
      <section className={`${styles.udbSection} ${styles.gridBg}`}>
        <div className={styles.udbContainer}>
          <p className={styles.sectionLabel}>The Platform</p>
          <h2 className={styles.sectionHeading}>One Platform. Every Bank.</h2>
          <p className={styles.sectionSubtext}>
            Unified Digital Banking (UDB) is a fully managed, cloud-native banking platform that enables principal families to own and operate a modern digital bank. UDB handles everything — technology deployment, platform management, regulatory support, and ongoing operations — so the family can focus on growth and community impact.
          </p>
          <div className={styles.cardGrid3}>
            {features.map(({ icon, title, text }) => (
              <div key={title} className={styles.card}>
                <div className={styles.cardIcon}>{icon}</div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Tiers */}
      <section className={styles.altSection}>
        <div className={styles.udbContainer}>
          <p className={styles.sectionLabel}>Deployment Tiers</p>
          <h2 className={styles.sectionHeading}>Two Tiers. One Standard.</h2>
          <p className={styles.sectionSubtext}>Every UDB deployment is exclusive to one principal family in one market. We offer two deployment tiers based on scale, complexity, and ambition.</p>
          <div className={styles.cardGrid2}>
            <div className={`${styles.tierCard} ${styles.featured}`}>
              <div className={`${styles.tierBadge} ${styles.blue}`}>UHNW Tier</div>
              <div className={styles.tierName}>Ultra High Net Worth</div>
              <div className={styles.tierPrice}>$20M</div>
              <div className={styles.tierPriceSub}>Implementation fee + $7M/yr managed services</div>
              <ul className={styles.tierList}>
                <li>10–20%+ UDB equity stake</li>
                <li>Dedicated deployment team</li>
                <li>Bespoke legal agreements</li>
                <li>Multi-product, multi-branch deployment</li>
                <li>Capital co-investment option</li>
                <li>Board representation</li>
              </ul>
            </div>
            <div className={styles.tierCard}>
              <div className={styles.tierBadge}>Standard Tier</div>
              <div className={styles.tierName}>Principal Family</div>
              <div className={styles.tierPrice}>$10M</div>
              <div className={styles.tierPriceSub}>Implementation fee + $5M/yr managed services</div>
              <ul className={styles.tierList}>
                <li>5–15% UDB equity stake</li>
                <li>Shared resource model</li>
                <li>Standard template agreements</li>
                <li>Single-market digital bank deployment</li>
                <li>Proven deployment playbook</li>
                <li>Board representation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.udbContainer}>
          <h2 className={styles.ctaHeading}>Ready to Build a Bank?</h2>
          <p className={styles.ctaSubtext}>Join a select group of principal families deploying the future of banking in their markets.</p>
          <Link href="/udb/apply" className={styles.btnPrimary}>Apply for Partnership</Link>
        </div>
      </section>
    </UDBLayout>
  )
}
