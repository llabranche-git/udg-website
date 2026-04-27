import Head from 'next/head'
import CtaSection from '../components/CtaSection'
import styles from '../styles/WhoWeServe.module.css'

const markets = [
  { region: 'GCC', countries: ['Qatar', 'UAE'] },
  { region: 'Africa', countries: ['Kenya', 'Ghana', 'Nigeria'] },
  { region: 'US', countries: ['Nationwide coverage'] },
  { region: 'Asia', countries: ['Japan', 'South Korea', 'India'] },
  { region: 'Europe', countries: ['Comprehensive coverage across the continent'] },
  { region: 'LATAM', countries: ['Mexico', 'Brazil'] },
]

const engagements = [
  {
    title: 'Digital Banking, Marketplaces, and Currencies',
    text: 'Bank the unbanked and create opportunities for large communities through retail and commercial banking platforms designed for country-wide scale. Extend network and power infrastructure to support subsequent economic development in areas of healthcare and education.'
  },
  {
    title: 'Smart Regions & Connected Cities',
    text: 'Reimagine urban life with AI-enabled infrastructure, satellite-powered connectivity, and sustainable energy systems—transforming cities into global hubs of innovation and prosperity.'
  },
  {
    title: 'Next-Generation Manufacturing & Robotics',
    text: 'Co-create advanced robotics and AI-powered production facilities that redefine efficiency, resilience, and scale in industries from automotive to healthcare.'
  },
  {
    title: 'AI Factories & Digital Economies',
    text: 'Design and deploy regional AI factories and data centers that fuel digital growth, create jobs, and position markets at the forefront of the AI economy.'
  },
  {
    title: 'Sustainable Energy & Infrastructure',
    text: 'Mobilize capital and global expertise to deliver large-scale renewable energy projects, power grids, and green data ecosystems that drive both economic and environmental progress.'
  },
  {
    title: 'Transformational Ventures Across Borders',
    text: 'Unify multi-continental supply chains, cross-border logistics, and global partnerships—creating entirely new markets for family-led enterprises and the communities they serve.'
  }
]

export default function WhoWeServe() {
  return (
    <>
      <Head>
        <title>Who We Serve — Unified Digital Group</title>
        <meta name="description" content="UDG partners with the world's most visionary, multi-generational families to drive lasting societal impact." />
      </Head>

      <div className="inner-banner">
        <div className="base-container">
          <h1>Who We Serve</h1>
          <h2>Visionary Families Driving Growth, Innovation, and Global Impact</h2>
        </div>
      </div>

      {/* Intro */}
      <section className="section-grey">
        <div className="base-container">
          <div className={styles.introBlock}>
            <p>UDG partners with the top multi-generational families around the world who seek to grow their wealth, scale their influence, and capitalize on emerging technology trends to transform the businesses and communities they lead. Our clients are not just focused on financial success—they are committed to co-creating ventures, sharing resources, and leveraging long-term relationships to generate lasting benefits for society, all while strengthening their family legacy and global reach.</p>
            <p>Bold ambitions demand bold partnerships. While many of our projects remain early-stage or confidential, the possibilities families can explore with UDG showcase the scale of transformation we help bring to life. Each engagement begins with vision, trust, and access at the highest levels—unlocking outcomes once thought impossible.</p>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-white">
        <div className="base-container">
          <h2 className={styles.sectionTitle}>Global Reach. Deep Expertise. Local Impact.</h2>
          <p className={styles.bodyText}>UDG's current focus is primarily with families from high growth and emerging markets, particularly the Middle East (GCC) and Africa. While the majority of the transformations we engage in are aligned to the origins of the families we serve, their ambitions are global and often require an ecosystem of capabilities and capital from around the world. As a result, our engagements span other well established economies, such as AI infrastructure, power, and energy projects in the US or Japan.</p>
          <p className={styles.boldText}>Every region. Every industry. Every initiative.</p>
          <p className={styles.bodyText}>UDG combines <strong>elite talent, strategic insight, and local execution</strong> to deliver <strong>measurable impact, global growth, and lasting family legacies.</strong></p>
          <div className={styles.marketsGrid}>
            {markets.map(m => (
              <div key={m.region} className={styles.marketCard}>
                <h3 className={styles.marketRegion}>{m.region}</h3>
                <ul className={styles.marketList}>
                  {m.countries.map(c => <li key={c}>{c}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Potential Engagements */}
      <section className="section-grey">
        <div className="base-container">
          <h2 className={styles.sectionTitle}>Potential Engagements</h2>
          <div className={styles.engagementsGrid}>
            {engagements.map(e => (
              <div key={e.title} className={styles.engagementCard}>
                <h3 className={styles.engTitle}>{e.title}</h3>
                <p className={styles.engText}>{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
