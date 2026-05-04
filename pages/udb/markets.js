import Link from 'next/link'
import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'

const regions = [
  {
    key: 'africa',
    name: 'Africa',
    sub: '54 Countries · 1.4B Population',
    text: 'The largest concentration of UDB deployments. A continent of 54 nations with one of the world\'s largest unbanked populations and a rapidly growing mobile money infrastructure. First-mover advantage for digital banking partners is significant.',
    markets: ['Nigeria','Kenya','Ghana','South Africa','Angola','Tanzania','Ethiopia','Uganda'],
    stat: '57%',
    statLabel: 'Adult population unbanked',
  },
  {
    key: 'mena',
    name: 'MENA',
    sub: 'Middle East & North Africa',
    text: 'High-wealth, high-growth markets with established GCC family networks and significant cross-border capital flows. Regulatory modernization is accelerating across the region, creating new windows for digital banking entry.',
    markets: ['UAE','Saudi Arabia','Egypt','Jordan','Morocco','Bahrain','Kuwait','Oman'],
    stat: '$3.5T',
    statLabel: 'Regional GDP',
  },
  {
    key: 'sea',
    name: 'Southeast Asia',
    sub: '11 Countries · 680M Population',
    text: 'Fast-growing digital economies with regulators actively encouraging new digital banking licenses. A young, tech-savvy population driving mobile-first financial services adoption at pace.',
    markets: ['Indonesia','Philippines','Vietnam','Malaysia','Thailand','Cambodia','Myanmar'],
    stat: '290M',
    statLabel: 'Unbanked adults',
  },
  {
    key: 'latam',
    name: 'Latin America',
    sub: 'South & Central America',
    text: 'An underpenetrated banking sector with strong family business networks across industry. Fintech adoption is accelerating rapidly and regulatory frameworks are opening up across the continent.',
    markets: ['Brazil','Mexico','Colombia','Peru','Chile','Argentina','Panama','Ecuador'],
    stat: '45%',
    statLabel: 'Adults without bank accounts',
  },
]

const globalStats = [
  { number: '3.5B', label: 'Underbanked Globally' },
  { number: '40+', label: 'Target Markets' },
  { number: '4', label: 'Regions' },
  { number: '$1T+', label: 'Addressable Opportunity' },
]

export default function Markets() {
  return (
    <UDBLayout title="UDB Markets | Africa, MENA, Southeast Asia, Latin America" description="Four high-growth regions. Dozens of markets. Billions of underserved customers.">
      <div className={styles.innerBanner}>
        <div className={styles.udbContainer} style={{width:'100%'}}>
          <p className={styles.bannerLabel}>Where We Deploy</p>
          <h1 className={styles.bannerHeading}>Four Regions. Billions of Customers.</h1>
          <p className={styles.bannerSub}>We deploy exclusively in high-growth emerging markets where digital banking infrastructure is needed most and first-mover advantage is greatest.</p>
        </div>
      </div>

      <div className={styles.statsRow}>
        {globalStats.map(({ number, label }) => (
          <div key={label} className={styles.statItem}>
            <div className={styles.statNumber}>{number}</div>
            <div className={styles.statLabel}>{label}</div>
          </div>
        ))}
      </div>

      <section className={`${styles.udbSection} ${styles.gridBg}`}>
        <div className={styles.udbContainer}>
          <p className={styles.sectionLabel}>Target Markets</p>
          <h2 className={styles.sectionHeading}>One Bank Per Market. Every Market Matters.</h2>
          <p className={styles.sectionSubtext}>UDB deploys exclusively — one family, one bank, one market. That means every deployment is a strategic position, not a commodity play.</p>
          <div className={styles.cardGrid2}>
            {regions.map(({ key, name, sub, text, markets, stat, statLabel }) => (
              <div key={key} className={`${styles.regionCard} ${styles[key]}`}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'20px', flexWrap:'wrap', gap:'12px'}}>
                  <div>
                    <h3 className={styles.regionName}>{name}</h3>
                    <p className={styles.regionSub}>{sub}</p>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <div style={{fontFamily:"'Archivo Expanded', sans-serif", fontSize:'28px', fontWeight:700, color:'#0A1628', letterSpacing:'-1px', lineHeight:1}}>{stat}</div>
                    <div style={{fontFamily:"'Work Sans', sans-serif", fontSize:'12px', color:'#64748B', maxWidth:'120px', textAlign:'right'}}>{statLabel}</div>
                  </div>
                </div>
                <p className={styles.regionText}>{text}</p>
                <p style={{fontFamily:"'Work Sans', sans-serif", fontSize:'12px', fontWeight:600, color:'#64748B', letterSpacing:'0.5px', textTransform:'uppercase', marginBottom:'12px'}}>Priority Markets</p>
                <div className={styles.regionMarkets}>
                  {markets.map(m => <span key={m} className={styles.marketPill}>{m}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={styles.udbContainer}>
          <p className={styles.sectionLabel} style={{color:'#60A5FA'}}>Market Strategy</p>
          <h2 className={styles.sectionHeading} style={{color:'#fff'}}>Exclusive. Permanent. Compounding.</h2>
          <p className={styles.sectionSubtext} style={{color:'rgba(255,255,255,0.65)', maxWidth:'720px'}}>UDB's exclusivity model means that once a market is taken, it's taken. The principal family that moves first secures exclusive access to UDB's platform, partnership, and ongoing support in that country. At 95 deployments, the portfolio becomes a self-reinforcing competitive moat across four continents.</p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.udbContainer}>
          <h2 className={styles.ctaHeading}>Is Your Market Available?</h2>
          <p className={styles.ctaSubtext}>Markets are allocated on a first-qualified, first-served basis. Check availability for your country.</p>
          <Link href="/udb/apply" className={styles.btnPrimary}>Check Market Availability</Link>
        </div>
      </section>
    </UDBLayout>
  )
}
