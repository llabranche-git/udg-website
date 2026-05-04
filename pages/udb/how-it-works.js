import Head from 'next/head'
import Link from 'next/link'
import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'

export default function UDBHowItWorks() {
  return (
    <UDBLayout>
      <Head><title>Unified Digital Banking — How It Works</title></Head>

      <section className={styles.innerBanner} style={{backgroundImage: "url(/assets/udb-how-it-works.jpg)"}}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>The Process</span>
          <h1 className={styles.bannerHeading}>From First Conversation<br />to Operating Bank</h1>
          <p className={styles.bannerSub}>UDB follows a disciplined four-step process to identify the right partner in each country, structure the exclusive framework, deploy the full banking infrastructure, and build the vertical ecosystem that makes your bank the economic anchor of your market.</p>
        </div>
      </section>

      {/* 4 Steps */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Four Stages</span>
          <h2 className={styles.sectionHeading}>The Path to Your Bank</h2>
          <div className={styles.cardGrid2} style={{marginTop:'40px'}}>
            <div className={styles.card}>
              <div className={styles.stageNumber}>01</div>
              <div className={styles.stageTitle}>Identify &amp; Qualify</div>
              <div className={styles.stageText}>We identify the single strategic principal per country — evaluating political and commercial standing, track record at scale, sovereign alignment, and long-horizon vision. One country. One family. No exceptions.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.stageNumber}>02</div>
              <div className={styles.stageTitle}>Analyze &amp; Validate</div>
              <div className={styles.stageText}>Together we examine market structure and demographics, map the regulatory pathway, assess sovereign alignment, and confirm capital and governance fit. Every deployment begins with certainty, not hope.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.stageNumber}>03</div>
              <div className={styles.stageTitle}>Architect the Framework</div>
              <div className={styles.stageText}>We structure the exclusive country framework: banking license strategy, infrastructure deployment plan, governance design, and ownership structure. You know exactly what you own before a line of code is deployed.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.stageNumber}>04</div>
              <div className={styles.stageTitle}>Deploy &amp; Operate</div>
              <div className={styles.stageText}>The full digital banking stack launches: core engine, mobile channels, payments infrastructure, KYC/AML, satellite connectivity, and 24/7 managed operations. UDB runs the platform. You run the relationship.</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Bring / What We Bring */}
      <section className={`${styles.udbSection} ${styles.altSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>The Partnership Model</span>
          <h2 className={styles.sectionHeading}>You Bring the Market.<br />We Bring Everything Else.</h2>
          <div className={styles.cardGrid2} style={{marginTop:'40px'}}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>What You Bring</div>
              <div className={styles.cardText} style={{lineHeight:'1.9'}}>
                ✦ &nbsp;Market access and local relationships<br/>
                ✦ &nbsp;Political and commercial standing in your country<br/>
                ✦ &nbsp;Sovereign trust and principal family network<br/>
                ✦ &nbsp;Long-term vision for your market's financial future<br/>
                ✦ &nbsp;Commitment to an exclusive, generational partnership
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>What UDB Brings</div>
              <div className={styles.cardText} style={{lineHeight:'1.9'}}>
                ✦ &nbsp;Full-stack digital banking technology platform<br/>
                ✦ &nbsp;Banking license advisory and regulatory structuring<br/>
                ✦ &nbsp;Global financial rails — 50+ currencies, 30+ blockchains<br/>
                ✦ &nbsp;24/7 managed operations, compliance, and call centers<br/>
                ✦ &nbsp;200+ years of combined banking infrastructure experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Expansion */}
      <section className={`${styles.udbSection} ${styles.darkSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Beyond Banking</span>
          <h2 className={styles.sectionHeading}>The Bank Is the Entry Point.<br />What Follows Is the Opportunity.</h2>
          <p className={styles.sectionSubtext}>Once your bank is operational, it becomes the financial infrastructure for every sector in your ecosystem. UDB helps you build verticals that compound the value of your initial position.</p>
          <div className={styles.cardGrid3} style={{marginTop:'40px'}}>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Commodities &amp; Energy</div>
              <div className={styles.cardText}>Your bank finances and settles the commodity flows — oil &amp; gas, agriculture, mining — that drive your economy. Real assets, digitally settled, compliantly structured.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Infrastructure Finance</div>
              <div className={styles.cardText}>Schools, clinics, ports, transport networks — your bank provides the capital rails that make community and infrastructure development scalable and self-funding.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>AI &amp; Digital Services</div>
              <div className={styles.cardText}>UDB integrates AI capabilities across the platform — from precision credit scoring to AI-powered operations — positioning your bank as the most sophisticated financial institution in your market.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Pipeline */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Active Today</span>
          <h2 className={styles.sectionHeading}>The Same Process, Running in Parallel Across Multiple Jurisdictions</h2>
          <div className={styles.cardGrid3} style={{marginTop:'40px'}}>
            <div className={`${styles.card} ${styles.featured}`}>
              <div className={styles.marketPill} style={{background:'#D1FAE5',color:'#065F46'}}>LIVE</div>
              <div className={styles.cardTitle}>Nigeria</div>
              <div className={styles.cardText}>Full-stack deployed. Anchor partner in position. Verticals originating across commodities, finance, and energy.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.marketPill} style={{background:'#FEF3C7',color:'#92400E'}}>STRUCTURING</div>
              <div className={styles.cardTitle}>Angola</div>
              <div className={styles.cardText}>AI Campus and ports infrastructure integration underway. Partner shortlisted from the pre-eminent principal families.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.marketPill} style={{background:'#FEF3C7',color:'#92400E'}}>STRUCTURING</div>
              <div className={styles.cardTitle}>Zambia</div>
              <div className={styles.cardText}>Digital banking construct in progress with a named counterparty. Regulatory pathway confirmed.</div>
            </div>
          </div>
          <p style={{textAlign:'center',marginTop:'32px',color:'#64748B',fontSize:'15px'}}>Plus 15+ additional jurisdictions — Ethiopia, GCC, Sub-Saharan Africa, Southeast Asia, and the Caribbean — with principals under active qualification.</p>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.udbSection} ${styles.ctaSection}`}>
        <div className={styles.udbContainer}>
          <h2 className={styles.ctaHeading}>Is your market still open?</h2>
          <p className={styles.ctaSubtext}>UDB deploys one partner per country. Exclusivity is not a feature — it is the entire model. The conversation starts here.</p>
          <Link href="/udb/apply" className={styles.btnPrimary}>Apply for Partnership</Link>
        </div>
      </section>

    </UDBLayout>
  )
}
