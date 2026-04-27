import Head from 'next/head'
import CtaSection from '../components/CtaSection'
import styles from '../styles/Partnerships.module.css'

const gsi = [
  { name: 'Deloitte', desc: 'Leader in consulting, audit, advisory, and digital transformation.' },
  { name: 'Accenture', desc: 'Global expertise in digital, cloud, and security.' },
  { name: 'IBM Consulting', desc: 'AI-driven innovation with a rich technological heritage.' },
  { name: 'Tata Consultancy Services (TCS)', desc: 'Cutting-edge IT services with a global footprint.' },
  { name: 'Capgemini', desc: 'Specialists in cloud, innovation, and digital transformation.' },
  { name: 'Wipro', desc: 'Leading provider of IT, consulting, and business process services.' },
]

const cloud = [
  { name: 'Amazon Web Services (AWS)', desc: 'Cloud leader with transparent investment frameworks; working toward a Strategic Collaboration Agreement.' },
  { name: 'Microsoft Azure', desc: 'Enterprise-grade integration, hybrid cloud, and AI capabilities.' },
  { name: 'Google Cloud Platform (GCP)', desc: 'Used for technical agility and robust funding support.' },
]

const emerging = [
  { category: 'AI & Machine Learning', partners: 'Anthropic, Bedrock, xAI, OpenAI', desc: 'Strategic partners for intelligent solutions.' },
  { category: 'Quantum Computing', partners: 'IBM Quantum', desc: 'Partnering for complex modeling and optimization.' },
  { category: 'Security', partners: 'CrowdStrike, SentinelOne, Zscaler, Palo Alto', desc: 'Enterprise-grade cybersecurity ecosystems.' },
  { category: 'Satellite Internet', partners: 'Starlink, Kuiper', desc: 'Enabling reliable, global connectivity.' },
  { category: 'High-Performance Computing', partners: 'NVIDIA, AWS, IBM', desc: 'Powering advanced data processing and AI workloads.' },
  { category: 'Robotics & Agentic AI', partners: 'Tesla, Amazon, NVIDIA', desc: 'Transforming AI into physical autonomy and robotics applications.' },
]

export default function Partnerships() {
  return (
    <>
      <Head>
        <title>Partnerships — Unified Digital Group</title>
        <meta name="description" content="UDG forges deep alliances with global system integrators and technology providers." />
      </Head>

      <div className="inner-banner">
        <div className="base-container">
          <h1>Global System Integrators</h1>
          <h2>Our Strategic Partnerships</h2>
          <p className={styles.bannerSub}>UDG forges deep alliances with global system integrators (GSIs) and technology providers. These are foundational for market penetration, scalable delivery, and innovation. We co-develop and co-sell for expanded reach, augmented capabilities, accelerated value, and comprehensive solutions.</p>
        </div>
      </div>

      <section className="section-white">
        <div className="base-container">
          {/* GSI */}
          <div className={styles.partnerGroup}>
            <h2 className={styles.groupTitle}>Global System Integrator <span className={styles.accent}>(GSI)</span> Partners</h2>
            <div className={styles.partnerGrid}>
              {gsi.map(p => (
                <div key={p.name} className={styles.partnerCard}>
                  <h3 className={styles.partnerName}>{p.name}</h3>
                  <p className={styles.partnerDesc}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud */}
          <div className={styles.partnerGroup}>
            <h2 className={styles.groupTitle}>Technology &amp; Cloud Partners</h2>
            <div className={styles.partnerGrid}>
              {cloud.map(p => (
                <div key={p.name} className={styles.partnerCard}>
                  <h3 className={styles.partnerName}>{p.name}</h3>
                  <p className={styles.partnerDesc}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emerging */}
          <div className={styles.partnerGroup}>
            <h2 className={styles.groupTitle}>Emerging Technology Partners</h2>
            <div className={styles.emergingGrid}>
              {emerging.map(e => (
                <div key={e.category} className={styles.emergingCard}>
                  <div className={styles.emergingCat}>{e.category}</div>
                  <div className={styles.emergingPartners}>{e.partners}</div>
                  <p className={styles.emergingDesc}>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
