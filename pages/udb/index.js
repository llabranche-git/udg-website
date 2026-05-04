import Head from 'next/head'
import Link from 'next/link'
import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'

export default function UDBOverview() {
  return (
    <UDBLayout>
      <Head><title>Unified Digital Banking — Own a Modern Digital Bank</title></Head>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Unified Digital Group</span>
          <h1 className={styles.heroHeadline}>Redefine Your Legacy with Unified Digital Banking (UDB)</h1>
          <p className={styles.heroSub}>A fully managed, cloud-native banking orchestration engine designed for growth and emerging markets.</p>
          <div className={styles.heroCtas}>
            <Link href="/udb/apply" className={styles.btnPrimary}>Apply for Partnership</Link>
            <Link href="/udb/platform" className={styles.btnText}>See the Platform →</Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/assets/udb-hero.jpg" alt="Emerging market city infrastructure" />
        </div>
      </section>

      {/* Stats */}
      <section className={`${styles.udbSection} ${styles.altSection}`}>
        <div className={styles.udbContainer}>
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1.4B</div>
              <div className={styles.statLabel}>Unbanked adults globally — the largest greenfield in financial services</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>$500B+</div>
              <div className={styles.statLabel}>Projected emerging-market digital financial services by 2030</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1B+</div>
              <div className={styles.statLabel}>People the platform is architected to serve across all deployments — a billion-person banking infrastructure</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>Live</div>
              <div className={styles.statLabel}>Deployed and operating today in Nigeria with a founding partner family</div>
            </div>
          </div>
        </div>
      </section>


      {/* Two Pathways */}
      <section className={`${styles.udbSection} ${styles.altSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Two Pathways to Partnership</span>
          <h2 className={styles.sectionHeading}>New to Banking or Already in It — UDB Is Built for Both</h2>
          <div className={styles.cardGrid2} style={{marginTop:'32px'}}>
            <div className={styles.card} style={{borderTop:'4px solid #1A6FDB'}}>
              <div className={styles.cardTitle}>First-Time Bank Owners</div>
              <div className={styles.cardText}>You have the market position and the relationships. You've never owned a bank — and you don't need prior banking experience. UDB handles licensing, deployment, compliance, and operations from day one. You enter as an owner, not an operator.</div>
              <Link href="/udb/ownership" className={styles.btnText} style={{marginTop:'16px',display:'inline-block'}}>Explore this pathway →</Link>
            </div>
            <div className={styles.card} style={{borderTop:'4px solid #0A1628'}}>
              <div className={styles.cardTitle}>Existing Bank Owners</div>
              <div className={styles.cardText}>You already own one or more banks. UDB modernizes your core infrastructure, adds global financial rails, deploys a world-class compliance framework, and positions your institution to expand into new markets under the exclusive UDB country model.</div>
              <Link href="/udb/ownership" className={styles.btnText} style={{marginTop:'16px',display:'inline-block'}}>Explore this pathway →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Banking Ecosystem */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>The Platform</span>
          <h2 className={styles.sectionHeading}>A Complete Banking Ecosystem</h2>
          <p className={styles.sectionSubtext}>A comprehensive, fully managed solution engineered specifically for organizations launching sophisticated banking services without prior banking experience. UDB delivers the full stack — and manages it for the life of your partnership.</p>
          <div className={styles.cardGrid2}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Implementation &amp; Licensing</div>
              <div className={styles.cardText}>Rapid deployment with full regulatory advisory. We guide your banking license strategy from application through approval, managing every compliance obligation along the way.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Cloud &amp; Connectivity</div>
              <div className={styles.cardText}>Built on AWS global infrastructure with integrated satellite networking. 100% uptime guaranteed in remote areas — no dependence on terrestrial cable.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Global Financial Rails</div>
              <div className={styles.cardText}>Stablecoin settlement engine supporting 50+ fiat currencies and 30+ blockchains. Near-instant international settlement, invisible to your customers.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Managed Operations</div>
              <div className={styles.cardText}>24/7 multi-lingual call centers, ongoing AML and Travel Rule compliance, and real-time risk monitoring — all operated by UDB so you never need to build an ops team.</div>
            </div>
          </div>
          <div style={{textAlign:'center',marginTop:'48px'}}>
            <Link href="/udb/platform" className={styles.btnPrimary}>Explore the Full Platform</Link>
          </div>
        </div>
      </section>

      {/* 4 Differentiators */}
      <section className={`${styles.udbSection} ${styles.darkSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>What Makes UDB Different</span>
          <h2 className={styles.sectionHeading}>Four Barriers. Four Solutions.<br />One Bank That Reaches Everyone.</h2>
          <p className={styles.sectionSubtext}>Every other digital banking platform is built for the 30% of the market that already has a smartphone, a data plan, and financial literacy. UDB is built for 100% — including the 70% that everyone else has left behind.</p>
          <div className={styles.cardGrid2} style={{marginTop:'48px'}}>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Stablecoin Infrastructure</div>
              <div className={styles.cardText}>Currency volatility has destroyed more emerging-market bank balance sheets than any other single force. UDB eliminates FX risk at the infrastructure level — your bank never holds currency exposure. The same rails power cross-border transfers, intercontinental remittances at 10x lower cost, and commodity trade settlement across 50+ currencies and 30+ blockchains. Your bank settles in stable value. Always.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Total Population Reach via USSD</div>
              <div className={styles.cardText}>In some of UDB's target markets, 70% of the population has no smartphone. A smartphone-only bank is a niche product. UDB delivers full banking — account opening, transfers, bill payment, loan applications — through USSD (*123# menus) on any mobile phone, on any 2G network, with no app, no internet, no data plan required. Your bank's TAM is every mobile subscriber in the country. Not a slice of it.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>200+ Language Support</div>
              <div className={styles.cardText}>Language barriers have excluded hundreds of millions of people from formal banking. UDB's Lara AI platform delivers professional, AI-driven interfaces in 200+ languages — with human-in-the-loop review to ensure cultural accuracy. Amazon Connect powers multi-lingual call centers. Whether your market speaks Hausa, Swahili, Arabic, Tagalog, or Portuguese, your bank speaks to every customer in their language.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Built-In Financial &amp; Digital Literacy</div>
              <div className={styles.cardText}>Across emerging markets, large segments of the population have never interacted with a formal bank. UDB includes a literacy curriculum — curated by world-renowned universities including Oxford — built directly into the platform. Created once, replicated across 200+ languages automatically, delivered via smartphone and USSD to every customer regardless of device. Your bank doesn't just open accounts. It builds the financial capability of your entire market.</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>How It Works</span>
          <h2 className={styles.sectionHeading}>From Introduction to Operating Bank</h2>
          <p className={styles.sectionSubtext}>UDB follows a disciplined four-step process to identify the right partner in each country, structure the exclusive framework, deploy the banking infrastructure, and build the vertical ecosystem on top.</p>
          <div className={styles.cardGrid2} style={{marginTop:'32px'}}>
            <div className={styles.stageItem}>
              <div className={styles.stageNumber}>01</div>
              <div className={styles.stageTitle}>Identify &amp; Qualify</div>
              <div className={styles.stageText}>One strategic principal per country — political and commercial standing, track record at scale, long-horizon alignment.</div>
            </div>
            <div className={styles.stageItem}>
              <div className={styles.stageNumber}>02</div>
              <div className={styles.stageTitle}>Architect the Framework</div>
              <div className={styles.stageText}>Exclusive country framework, banking license strategy, infrastructure deployment plan, governance and ownership structure.</div>
            </div>
            <div className={styles.stageItem}>
              <div className={styles.stageNumber}>03</div>
              <div className={styles.stageTitle}>Deploy the Bank</div>
              <div className={styles.stageText}>Full digital banking stack launched: core engine, mobile channels, payments infrastructure, KYC/AML, and cloud operations.</div>
            </div>
            <div className={styles.stageItem}>
              <div className={styles.stageNumber}>04</div>
              <div className={styles.stageTitle}>Grow the Verticals</div>
              <div className={styles.stageText}>The bank becomes the financial anchor for commodities, infrastructure, energy, AI, and capital flows across your ecosystem.</div>
            </div>
          </div>
          <div style={{textAlign:'center',marginTop:'48px'}}>
            <Link href="/udb/how-it-works" className={styles.btnText}>See the Full Process →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.udbSection} ${styles.ctaSection}`}>
        <div className={styles.udbContainer}>
          <h2 className={styles.ctaHeading}>Your country. Your bank. Your legacy.</h2>
          <p className={styles.ctaSubtext}>UDB works exclusively with one principal family per country. If your market is open, now is the time to establish your position.</p>
          <Link href="/udb/apply" className={styles.btnPrimary}>Begin the Conversation</Link>
        </div>
      </section>

    </UDBLayout>
  )
}
