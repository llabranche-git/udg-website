import Head from 'next/head'
import Link from 'next/link'
import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'

export default function UDBPlatform() {
  return (
    <UDBLayout>
      <Head><title>Unified Digital Banking — Platform</title></Head>

      <section className={styles.innerBanner}>
        <img src="/assets/udb-platform.jpg" className={styles.innerBannerImg} alt="" aria-hidden="true" />
        <div className={styles.gridBg} />
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>The Platform</span>
          <h1 className={styles.bannerHeading}>Full-Stack Banking Infrastructure,<br />Fully Managed</h1>
          <p className={styles.bannerSub}>Built by a powerhouse of talent from UDG, AWS, Slalom, Qucoon, and Deloitte. Over 200 years of combined experience delivering mission-critical solutions for the Federal Reserve, Royal Bank of Canada, Discover Financial Services, and the Central Bank of Nigeria.</p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Core Capabilities</span>
          <h2 className={styles.sectionHeading}>Scalable, AI-Enabled, Built to Perform</h2>
          <div className={styles.cardGrid3}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Scalable &amp; AI-Enabled</div>
              <div className={styles.cardText}>Standardized patterns accelerating feature delivery. Shared AI context prevents errors, drives operational velocity, and personalizes every customer interaction at scale.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Performant by Design</div>
              <div className={styles.cardText}>Hub-and-spoke data architecture built to support hundreds of millions of users efficiently and unlock real-time revenue-generating analytics across your entire portfolio.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Quality Engineering</div>
              <div className={styles.cardText}>World-class quality by design lowers risk, strengthens compliance, and ensures predictable growth without the costly production failures that derail conventional banking deployments.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Rails */}
      <section className={`${styles.udbSection} ${styles.altSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Financial Infrastructure</span>
          <h2 className={styles.sectionHeading}>Next-Generation Financial Rails:<br />Invisible, Borderless Liquidity</h2>
          <p className={styles.sectionSubtext}>Behind every simple tap lies enterprise-grade compliance built for the world's most complex markets.</p>
          <div className={styles.cardGrid3} style={{marginTop:'40px'}}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>AWS Global Backbone</div>
              <div className={styles.cardText}>Unmatched global scale for high availability, robust SOC and PCI security, and continuous infrastructure innovation — the same backbone that powers the world's largest financial institutions.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Yellow Card Integration</div>
              <div className={styles.cardText}>Seamless connection to a $6B+ processed volume stablecoin engine supporting 50+ local payment currencies and 30+ blockchains. Local fiat in, global fiat out — instantly.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>The Defense Stack</div>
              <div className={styles.cardText}>Strict AML, Sanctions Screening, Anti-Terrorism checks, and FATF Travel Rule compliance executed natively in the background — invisible to your customers, unavoidable for regulators.</div>
            </div>
          </div>
        </div>
      </section>

      {/* UX & KYC */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Customer Experience</span>
          <h2 className={styles.sectionHeading}>Where Sovereign Infrastructure Meets Frictionless UX</h2>
          <div className={styles.cardGrid2}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Instant Identity Verification</div>
              <div className={styles.cardText}>Frictionless onboarding with immediate cross-referencing of government IDs — BVN, NIN, national ID — to establish progressive KYC tiers instantly. Customers are verified before they leave the onboarding screen.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Enterprise-Grade Biometric Trust</div>
              <div className={styles.cardText}>Native integration with device-level security protocols out-of-the-box — Face ID, fingerprint, behavioral biometrics — ensuring regulatory compliance and immediate consumer confidence.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Social Financial Transactions</div>
              <div className={styles.cardText}>Integrated chat and finance features allow users to connect with their community and manage money securely in a single, unified interface — driving adoption through the networks your customers already use.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Deep Local Integration</div>
              <div className={styles.cardText}>Deeply localized merchant APIs allow users to effortlessly settle bills — airtime, electricity, data, transport — within their existing economic ecosystems. The bank becomes the utility layer of daily life.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Precision Credit</div>
              <div className={styles.cardText}>Granular, sector-based profiling dynamically adjusts risk profiles per customer. Absolute transparency on automated repayment schedules severely reduces default rates — a structural advantage over conventional microfinance.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Multi-Language at Scale</div>
              <div className={styles.cardText}>Lara AI embeds professional, AI-driven translation directly into the core platform — 200+ languages with human-in-the-loop review, breaking down adoption barriers across Asia, Africa, LATAM, and the GCC.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className={`${styles.udbSection} ${styles.darkSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Compliance Architecture</span>
          <h2 className={styles.sectionHeading}>The Unified Advantage: One Framework, Global Reach</h2>
          <p className={styles.sectionSubtext}>Beyond technology, UDB maps functional and organizational requirements to ensure you operate at scale without regulatory friction.</p>
          <div className={styles.cardGrid2} style={{marginTop:'40px'}}>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>112 Standards, 80+ Unified Controls</div>
              <div className={styles.cardText}>Aggregating 13+ compliance frameworks into one high-performance architecture. The Common Control Framework (CCF) eliminates the fragmentation that makes conventional compliance so costly.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>"Design Once, Comply to Many"</div>
              <div className={styles.cardText}>A single implementation satisfies overlapping Nigerian, EU, and international banking requirements simultaneously — so you expand into new markets without rebuilding your compliance stack.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Real-Time Posture &amp; Audit Readiness</div>
              <div className={styles.cardText}>Real-time visibility into security posture ensures zero gaps during institutional due diligence. When a regulator or correspondent bank asks, you have the answer before they finish the question.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Tier-1 International Certifications</div>
              <div className={styles.cardText}>Fully aligned with ISO 27001:2022, PCI-USS v4.0.1, and SGC 2 Type 2. Advanced AML programs featuring real-time transaction monitoring and FATF Travel Rule compliance. Built to EU AI Act and NIST AI PMF standards.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Managed Operations</span>
          <h2 className={styles.sectionHeading}>Information Security &amp; Operations as a Growth Enabler</h2>
          <p className={styles.sectionSubtext}>UDB manages functional and organizational requirements so you operate at scale without operational drag.</p>
          <div className={styles.cardGrid2}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Compliant Access Architecture</div>
              <div className={styles.cardText}>Centralized identity architecture preventing security breaches at the infrastructure layer — before they can reach your customers or your regulators.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Regulatory Readiness</div>
              <div className={styles.cardText}>Compliant organizational structure mapping to prepare for commercial banking license approvals — ensuring your governance structure satisfies every regulatory checkpoint.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Proactive Risk Management</div>
              <div className={styles.cardText}>Information security program designed to reduce financial loss, protect customer trust, and increase investor confidence — continuously, not just at audit time.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Turnkey Operations</div>
              <div className={styles.cardText}>Fully staffed, multi-lingual call centers managing AI-to-human escalation paths. 60% reduction in call volume. 50% reduction in agent training time. Your customers get world-class service from day one.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.udbSection} ${styles.ctaSection}`}>
        <div className={styles.udbContainer}>
          <h2 className={styles.ctaHeading}>Ready to see what your bank would look like?</h2>
          <p className={styles.ctaSubtext}>Every deployment is exclusive per country. If your market is available, the window is open now.</p>
          <Link href="/udb/apply" className={styles.btnPrimary}>Begin the Conversation</Link>
        </div>
      </section>

    </UDBLayout>
  )
}
