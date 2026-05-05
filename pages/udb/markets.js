import Head from 'next/head'
import Link from 'next/link'
import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'

export default function UDBMarkets() {
  return (
    <UDBLayout>
      <Head><title>Unified Digital Banking — Markets</title></Head>

      <section className={styles.innerBanner} style={{backgroundImage: "url(/assets/udb-markets.jpg)"}}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Markets</span>
          <h1 className={styles.bannerHeading}>A Generational Gap in<br />Sovereign Financial Infrastructure</h1>
          <p className={styles.bannerSub}>Emerging markets lack modern financial infrastructure — and are not burdened by legacy systems to protect. The leaders who move first will define the infrastructure others depend on for decades.</p>
        </div>
      </section>

      {/* Market Stats */}
      <section className={`${styles.udbSection} ${styles.altSection}`}>
        <div className={styles.udbContainer}>
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>$500B+</div>
              <div className={styles.statLabel}>Projected emerging-market digital financial services by 2030</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1.4B</div>
              <div className={styles.statLabel}>Unbanked adults globally — the largest greenfield in financial services</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>350M+</div>
              <div className={styles.statLabel}>Unbanked adults in Sub-Saharan Africa alone — scale without legacy incumbents</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>15%+</div>
              <div className={styles.statLabel}>CAGR for digital payments across emerging markets through 2030</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Operating Regions</span>
          <h2 className={styles.sectionHeading}>Four Regions. One Standard of Infrastructure.</h2>
          <p className={styles.sectionSubtext}>UDB deploys across Africa, MENA, Southeast Asia, and Latin America — markets where the opportunity is greatest and the competitive window is still open.</p>
          <div className={styles.cardGrid2} style={{marginTop:'40px'}}>
            <div className={`${styles.regionCard} ${styles.africa}`}>
              <div className={styles.regionName}>Sub-Saharan Africa</div>
              <div className={styles.regionText}>The world's largest unbanked population and the most expensive remittance corridor on earth — $100B+ annually at fees averaging 8%. Your bank captures diaspora remittance flows at 10x lower cost than legacy operators. At the customer level, stablecoin-backed deposits protect savings from naira, cedi, and kwanza volatility — in markets where local currency devaluation has historically wiped out household savings, that is a material advantage over every other bank in the country. $1T+ in annual mobile money transactions already. Cross-border commodity settlement runs through the same rails. UDB is live in Nigeria — the continent's largest economy — with Angola and Zambia in active structuring.</div>
              <div className={styles.regionMarkets}>Active: Nigeria (Live) · Angola · Zambia · Ethiopia · 12+ more</div>
            </div>
            <div className={`${styles.regionCard} ${styles.mena}`}>
              <div className={styles.regionName}>MENA</div>
              <div className={styles.regionText}>The GCC moves hundreds of billions in sovereign wealth, commodity revenues, and cross-border capital annually — much of it through slow, expensive correspondent banking channels. UDB's stablecoin rails enable real-time cross-GCC settlement, commodity trade finance, and sovereign capital deployment without intermediary friction. The same infrastructure supports MENA-to-Africa capital flows — the fastest-growing bilateral investment corridor in the emerging world.</div>
              <div className={styles.regionMarkets}>Active: GCC markets in active qualification</div>
            </div>
            <div className={`${styles.regionCard} ${styles.sea}`}>
              <div className={styles.regionName}>Southeast Asia</div>
              <div className={styles.regionText}>Southeast Asia's intra-regional remittance corridors — Philippines, Indonesia, Vietnam, Bangladesh — move tens of billions annually, much of it through cash networks and fee-heavy wire services. UDB's stablecoin rails make your bank the preferred channel for diaspora remittances and cross-border commerce, capturing flows that currently bypass the banking system entirely. 200+ language support and multi-jurisdictional compliance make UDB purpose-built for the region's diversity.</div>
              <div className={styles.regionMarkets}>Active: Principals under active qualification</div>
            </div>
            <div className={`${styles.regionCard} ${styles.latam}`}>
              <div className={styles.regionName}>Latin America</div>
              <div className={styles.regionText}>Hyperinflation and currency devaluation have made savings preservation the defining financial need for hundreds of millions of Latin Americans. UDB's stablecoin infrastructure means deposits held in your bank maintain real value — customers aren't watching their balances erode in real terms while the peso or bolivar moves. FX conversion happens at a controlled point, not as an ongoing drain. Dollar-equivalent stability without requiring dollar accounts. Cross-border commerce between Brazil, Argentina, Colombia, and the US runs through the same infrastructure, capturing bilateral trade flows that currently move through expensive and opaque correspondent networks.</div>
              <div className={styles.regionMarkets}>Active: Caribbean markets in pipeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className={`${styles.udbSection} ${styles.darkSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Active Pipeline</span>
          <h2 className={styles.sectionHeading}>The Same Four-Step Process,<br />Running Across Multiple Jurisdictions Today</h2>
          <div className={styles.cardGrid3} style={{marginTop:'40px'}}>
            <div className={styles.darkCard}>
              <div className={styles.marketPill} style={{background:'#D1FAE5',color:'#065F46',display:'inline-block',marginBottom:'12px',padding:'4px 12px',borderRadius:'12px',fontSize:'12px',fontWeight:'700'}}>LIVE</div>
              <div className={styles.cardTitle}>Nigeria</div>
              <div className={styles.cardText}>Full-stack deployed with one of the continent's most renowned multi-generational families. Anchor partner in position. Verticals originating.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.marketPill} style={{background:'#FEF3C7',color:'#92400E',display:'inline-block',marginBottom:'12px',padding:'4px 12px',borderRadius:'12px',fontSize:'12px',fontWeight:'700'}}>STRUCTURING</div>
              <div className={styles.cardTitle}>Angola</div>
              <div className={styles.cardText}>AI Campus and ports infrastructure integration underway. Strategic partner shortlisted from the pre-eminent principal families.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.marketPill} style={{background:'#FEF3C7',color:'#92400E',display:'inline-block',marginBottom:'12px',padding:'4px 12px',borderRadius:'12px',fontSize:'12px',fontWeight:'700'}}>STRUCTURING</div>
              <div className={styles.cardTitle}>Zambia</div>
              <div className={styles.cardText}>Digital banking construct in active structuring with a named counterparty. Regulatory pathway confirmed and underway.</div>
            </div>
          </div>
          <p style={{textAlign:'center',marginTop:'32px',color:'rgba(255,255,255,0.6)',fontSize:'15px'}}>Plus 15+ additional jurisdictions in origination — Ethiopia, GCC, Sub-Saharan Africa, Southeast Asia, and the Caribbean.</p>
        </div>
      </section>

      {/* Literacy */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Market Development</span>
          <h2 className={styles.sectionHeading}>Building the Market, Not Just the Bank</h2>
          <p className={styles.sectionSubtext}>In West Africa alone, 60 million individuals have limited digital or financial literacy. Infrastructure investments alone cannot drive uptake if customers lack capability and trust. UDB addresses this with a structured, research-driven literacy program led in collaboration with world-renowned academic institutions.</p>
          <div className={styles.cardGrid2} style={{marginTop:'40px'}}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Four-Phase Literacy Strategy</div>
              <div className={styles.cardText} style={{lineHeight:'1.9'}}>
                <strong>Phase 1 — Foundational Research:</strong> Validating regional knowledge gaps via field surveys.<br/>
                <strong>Phase 2 — Curriculum Development:</strong> Tailored literacy modules integrated directly into the UDB platform.<br/>
                <strong>Phase 3 — Targeted Pilot:</strong> AI and local agents deployed to gather refinement insights.<br/>
                <strong>Phase 4 — National Scaling:</strong> Transforming unbanked populations into confident digital consumers.
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>The Literacy Multiplier</div>
              <div className={styles.cardText}>As client adaptation and trust improve through the research-backed curriculum: default rates decrease to 4%, sustainable loan sizes increase by 20%, and customer retention extends by 3+ years. Customer LTV of ~$110 compounds — targeting $1.165B at 5M users and $2.33B at 10M users. Your bank's value grows as your customers grow.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.udbSection} ${styles.ctaSection}`}>
        <div className={styles.udbContainer}>
          <h2 className={styles.ctaHeading}>Is your market available?</h2>
          <p className={styles.ctaSubtext}>UDB operates on a strict one-partner-per-country model. If your jurisdiction is open, the conversation starts now.</p>
          <Link href="/udb/apply" className={styles.btnPrimary}>Check Your Market</Link>
        </div>
      </section>

    </UDBLayout>
  )
}
