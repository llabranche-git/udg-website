import Link from 'next/link'
import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'

export default function Economics() {
  return (
    <UDBLayout title="UDB Economics | The Commercial Model" description="Three revenue streams. Two tiers. One aligned partnership.">
      <div className={styles.innerBanner}>
        <div className={styles.udbContainer} style={{width:'100%'}}>
          <p className={styles.bannerLabel}>The Commercial Model</p>
          <h1 className={styles.bannerHeading}>Three Revenue Streams. Two Tiers. One Partnership.</h1>
          <p className={styles.bannerSub}>UDB's commercial model is designed to align incentives across the life of the relationship — not just at signing.</p>
        </div>
      </div>

      {/* Three Revenue Streams */}
      <section className={`${styles.udbSection} ${styles.gridBg}`}>
        <div className={styles.udbContainer}>
          <p className={styles.sectionLabel}>Revenue Structure</p>
          <h2 className={styles.sectionHeading}>How UDB Earns</h2>
          <p className={styles.sectionSubtext}>Three distinct income streams across the partnership lifecycle. Each is separate, contractually defined, and designed to deliver current income and long-term value.</p>
          <div className={styles.cardGrid3}>
            {[
              { icon: '💰', title: 'Implementation Fee', tier1: 'UHNW: $20M', tier2: 'Standard: $10M', text: 'One-time deployment fee paid across five milestones. Non-refundable once mobilization begins. Covers full platform build, integration, testing, and go-live.' },
              { icon: '🔄', title: 'Managed Services', tier1: 'UHNW: $7M/yr', tier2: 'Standard: $5M/yr', text: 'Annual fee commencing at go-live. Covers platform operations, monitoring, security, updates, and regulatory audit support. Annual CPI escalation applies.' },
              { icon: '📈', title: 'Equity & Profit Share', tier1: 'Equity: 5–20%+', tier2: 'Profit Share: 10–20% NOPAT', text: 'UDB holds an equity stake in every deployed bank and receives a contractual share of net operating profit. Long-term capital appreciation plus current income.' },
            ].map(({ icon, title, tier1, tier2, text }) => (
              <div key={title} className={styles.card}>
                <div className={styles.cardIcon}>{icon}</div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <div style={{display:'flex', gap:'8px', marginBottom:'12px', flexWrap:'wrap'}}>
                  <span style={{fontFamily:"'Work Sans', sans-serif", fontSize:'12px', fontWeight:600, color:'#1A6FDB', background:'#EEF4FF', padding:'3px 10px', borderRadius:'4px'}}>{tier1}</span>
                  <span style={{fontFamily:"'Work Sans', sans-serif", fontSize:'12px', fontWeight:600, color:'#334155', background:'#F0F4F8', padding:'3px 10px', borderRadius:'4px'}}>{tier2}</span>
                </div>
                <p className={styles.cardText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier Comparison */}
      <section className={styles.altSection}>
        <div className={styles.udbContainer}>
          <p className={styles.sectionLabel}>Deployment Tiers</p>
          <h2 className={styles.sectionHeading}>UHNW vs. Standard</h2>
          <p className={styles.sectionSubtext}>Tier selection is based on the family's scale, ambition, and deployment complexity. Both tiers receive the full UDB platform.</p>
          <div className={styles.cardGrid2}>
            <div className={`${styles.tierCard} ${styles.featured}`}>
              <div className={`${styles.tierBadge} ${styles.blue}`}>UHNW Tier</div>
              <div className={styles.tierName}>Ultra High Net Worth</div>
              <div style={{display:'flex', flexDirection:'column', gap:'20px', marginBottom:'32px'}}>
                {[['Implementation Fee','$20M (5 × $4M milestones)'],['Managed Services','$7M/yr, commencing at go-live'],['UDB Equity','10–20%+ in the deployed bank'],['Profit Share','15–20% of NOPAT'],['Agreement','Bespoke, negotiated'],['Team','Dedicated UDB deployment team'],['Capital Option','UDB capital co-investment available']].map(([k,v]) => (
                  <div key={k} style={{display:'flex', justifyContent:'space-between', paddingBottom:'16px', borderBottom:'1px solid #E2E8F0'}}>
                    <span style={{fontFamily:"'Work Sans', sans-serif", fontSize:'14px', color:'#64748B'}}>{k}</span>
                    <span style={{fontFamily:"'Work Sans', sans-serif", fontSize:'14px', fontWeight:600, color:'#0A1628'}}>{v}</span>
                  </div>
                ))}
              </div>
              <Link href="/udb/apply" className={styles.btnPrimary} style={{display:'block', textAlign:'center'}}>Apply — UHNW</Link>
            </div>
            <div className={styles.tierCard}>
              <div className={styles.tierBadge}>Standard Tier</div>
              <div className={styles.tierName}>Principal Family</div>
              <div style={{display:'flex', flexDirection:'column', gap:'20px', marginBottom:'32px'}}>
                {[['Implementation Fee','$10M (5 × $2M milestones)'],['Managed Services','$5M/yr, commencing at go-live'],['UDB Equity','5–15% in the deployed bank'],['Profit Share','10–15% of NOPAT'],['Agreement','Standard template'],['Team','Shared resource model'],['Capital Option','Optional, case-by-case']].map(([k,v]) => (
                  <div key={k} style={{display:'flex', justifyContent:'space-between', paddingBottom:'16px', borderBottom:'1px solid #E2E8F0'}}>
                    <span style={{fontFamily:"'Work Sans', sans-serif", fontSize:'14px', color:'#64748B'}}>{k}</span>
                    <span style={{fontFamily:"'Work Sans', sans-serif", fontSize:'14px', fontWeight:600, color:'#0A1628'}}>{v}</span>
                  </div>
                ))}
              </div>
              <Link href="/udb/apply" className={styles.btnPrimary} style={{display:'block', textAlign:'center', background:'#0A1628'}}>Apply — Standard</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capital Deployment */}
      <section className={`${styles.udbSection} ${styles.gridBg}`}>
        <div className={styles.udbContainer}>
          <p className={styles.sectionLabel}>Capital Partnership</p>
          <h2 className={styles.sectionHeading}>UDB Invests Alongside You</h2>
          <p className={styles.sectionSubtext}>When UDB deploys capital from its raised fund toward the implementation fee, the family's upfront cost decreases and UDB's equity stake increases.</p>
          <div className={styles.cardGrid3}>
            {[
              { icon: '⬇️', title: 'Lower Family Outlay', text: 'UDB funds part of the implementation fee. The family\'s upfront capital commitment is reduced, lowering the barrier to entry.' },
              { icon: '📈', title: 'Higher UDB Equity', text: 'In exchange for capital deployed, UDB receives an equity premium. Every dollar UDB contributes increases its stake in your bank.' },
              { icon: '🔢', title: '8–12% Preferred Return', text: 'UDB\'s deployed capital earns a preferred return before general profit distribution begins. Clean waterfall: preferred return → capital recovery → profit share → dividends.' },
            ].map(({ icon, title, text }) => (
              <div key={title} className={styles.card}>
                <div className={styles.cardIcon}>{icon}</div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.udbContainer}>
          <h2 className={styles.ctaHeading}>Understand the Full Economics</h2>
          <p className={styles.ctaSubtext}>Request a confidential briefing with the UDB team to walk through the full commercial model for your market and tier.</p>
          <Link href="/udb/apply" className={styles.btnPrimary}>Request a Briefing</Link>
        </div>
      </section>
    </UDBLayout>
  )
}
