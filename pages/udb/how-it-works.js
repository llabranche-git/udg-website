import Link from 'next/link'
import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'

const stages = [
  { num: '01', label: 'Stage 1', title: 'Qualification', text: 'We assess the family\'s market, influence, and readiness. A mutual NDA is signed and both parties share relevant context. If there\'s a clear fit, we move to the next stage. If not, we part ways cleanly.' },
  { num: '02', label: 'Stage 2', title: 'Market Analysis', text: 'A deep-dive into the target market\'s regulatory environment, competitive landscape, capital requirements, and deployment pathway. We determine the best approach — greenfield bank from scratch, deployment into an existing licensed entity, or supporting an acquisition.' },
  { num: '03', label: 'Stage 3', title: 'Commercial Design', text: 'We co-design the economics of the partnership. Tier selection (UHNW or Standard), equity structure, implementation fee, managed services scope, and capital deployment options are all defined at this stage.' },
  { num: '04', label: 'Stage 4', title: 'Term Sheet', text: 'Heads of Terms are executed. Market exclusivity is locked — UDB will not deploy a competing bank in the same country. The family commits to the deal structure and legal drafting begins in parallel.' },
  { num: '05', label: 'Stage 5', title: 'Implementation', text: 'Platform deployment across five milestones: contract execution, architecture and design, test environment deployment, user acceptance testing, and go-live. Each milestone triggers the corresponding payment tranche. Regulatory preparation runs in parallel.' },
  { num: '06', label: 'Stage 6', title: 'Live & Managed', text: 'The bank goes live. Managed services begin. UDB monitors, operates, and continuously improves the platform. The equity partnership is active. This is the beginning of a long-term relationship — not the end of a project.' },
]

const timelineStats = [
  { number: '6–36mo', label: 'Deployment Timeline' },
  { number: '5', label: 'Payment Milestones' },
  { number: '1 Bank', label: 'Per Market' },
  { number: 'Lifetime', label: 'Managed Partnership' },
]

export default function HowItWorks() {
  return (
    <UDBLayout title="How UDB Works | Unified Digital Banking" description="A proven 6-stage process from first conversation to operating bank.">
      <div className={styles.innerBanner}>
        <div className={styles.udbContainer} style={{width:'100%'}}>
          <p className={styles.bannerLabel}>The Process</p>
          <h1 className={styles.bannerHeading}>From Handshake to Live Bank</h1>
          <p className={styles.bannerSub}>A proven 6-stage process from first conversation to operating digital bank.</p>
        </div>
      </div>

      <div className={styles.statsRow}>
        {timelineStats.map(({ number, label }) => (
          <div key={label} className={styles.statItem}>
            <div className={styles.statNumber}>{number}</div>
            <div className={styles.statLabel}>{label}</div>
          </div>
        ))}
      </div>

      <section className={`${styles.udbSection} ${styles.gridBg}`}>
        <div className={styles.udbContainer}>
          <p className={styles.sectionLabel}>The Journey</p>
          <h2 className={styles.sectionHeading}>Six Stages. One Operating Bank.</h2>
          <p className={styles.sectionSubtext}>Every UDB deployment follows the same proven process. Customized to the market and the family — but never improvised.</p>
          <div>
            {stages.map(({ num, label, title, text }) => (
              <div key={num} className={styles.stageItem}>
                <div className={styles.stageNumber}>{num}</div>
                <div>
                  <p className={styles.stageLabel}>{label}</p>
                  <h3 className={styles.stageTitle}>{title}</h3>
                  <p className={styles.stageText}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.altSection}>
        <div className={styles.udbContainer}>
          <p className={styles.sectionLabel}>Payment Structure</p>
          <h2 className={styles.sectionHeading}>Milestone-Based. Delivery-Tied.</h2>
          <p className={styles.sectionSubtext}>The implementation fee is paid in five equal tranches, each triggered by a specific delivery milestone — not by regulatory timelines outside our control.</p>
          <div className={styles.cardGrid3} style={{gridTemplateColumns:'repeat(5,1fr)', gap:'12px'}}>
            {[['M1','Contract Execution','Mobilization begins'],['M2','Architecture Complete','Design signed off'],['M3','Test Environment','Platform deployed to staging'],['M4','UAT Complete','Go-live certified'],['M5','Go-Live','First live transaction']].map(([m, title, sub]) => (
              <div key={m} className={styles.card} style={{textAlign:'center', padding:'28px 20px'}}>
                <div style={{fontFamily:"'Archivo Expanded', sans-serif", fontSize:'28px', fontWeight:700, color:'#1A6FDB', letterSpacing:'-1px', marginBottom:'12px'}}>{m}</div>
                <div className={styles.cardTitle} style={{fontSize:'14px', marginBottom:'6px'}}>{title}</div>
                <div className={styles.cardText} style={{fontSize:'13px'}}>{sub}</div>
                <div style={{fontFamily:"'Work Sans', sans-serif", fontSize:'13px', fontWeight:600, color:'#64748B', marginTop:'12px'}}>20% of fee</div>
              </div>
            ))}
          </div>
          <p style={{fontFamily:"'Work Sans', sans-serif", fontSize:'14px', color:'#94A3B8', marginTop:'24px', lineHeight:1.6}}>
            Note: Regulatory approval runs on a separate track. Payment milestones are tied to UDB deliverables — not regulatory timing outside either party's direct control.
          </p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.udbContainer}>
          <h2 className={styles.ctaHeading}>Start the Conversation</h2>
          <p className={styles.ctaSubtext}>The first step is a confidential discussion. No commitment required at Stage 1.</p>
          <Link href="/udb/apply" className={styles.btnPrimary}>Apply for Partnership</Link>
        </div>
      </section>
    </UDBLayout>
  )
}
