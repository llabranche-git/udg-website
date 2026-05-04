import Head from 'next/head'
import Link from 'next/link'
import CtaSection from '../components/CtaSection'
import styles from '../styles/Team.module.css'

export default function Team() {
  return (
    <>
      <Head>
        <title>The Team — Unified Digital Group</title>
        <meta name="description" content="200+ years of combined experience from AWS, Avanade, Accenture, IBM, and the world's most demanding financial institutions." />
      </Head>

      {/* Inner Banner */}
      <div className="section inner-banner">
        <div className="base-container">
          <h1>The Team</h1>
          <h2>Built by the People Who've Done It Before.</h2>
          <p>Over 200 years of combined experience delivering mission-critical outcomes for the Federal Reserve, Royal Bank of Canada, the Central Bank of Nigeria, and the world's most demanding institutions. This is not a team that advises. This is a team that builds.</p>
        </div>
      </div>

      {/* Leadership */}
      <section className="section section-white">
        <div className="base-container">
          <span className={styles.sectionLabel}>Leadership</span>
          <h2 className={styles.sectionTitle}>The Executive Team</h2>
          <p className={styles.body}>A C-suite assembled from the top tier of global technology, financial services, and enterprise transformation — with deep track records in the markets UDG operates in.</p>
          <div className={styles.grid3}>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>Leo LaBranche</div>
              <div className={styles.teamRole}>Chief Executive Officer</div>
              <div className={styles.teamBio}>Designed and executed multiple $B initiatives across emerging markets. Multi-billion dollar deal structuring and ecosystem orchestration at the CEO and Board level. Former AWS and Avanade.</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>Andy Marselos</div>
              <div className={styles.teamRole}>Chief Operating Officer</div>
              <div className={styles.teamBio}>Founding member of Avanade, where he helped scale the company to $2.5B in revenue. Deep expertise in global operations, organizational scaling, and enterprise technology delivery across three continents.</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>Traci Terterian</div>
              <div className={styles.teamRole}>Chief Marketing Officer</div>
              <div className={styles.teamBio}>Senior marketing and brand leadership from AWS and HP. Extensive experience positioning enterprise technology platforms for global markets and C-suite buyer audiences.</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>Dwayne Fernandez</div>
              <div className={styles.teamRole}>Chief Product Officer</div>
              <div className={styles.teamBio}>Built digital banking products at AWS and Microsoft. Delivered Tier-1 bank digital banking platforms at scale. Deep understanding of what financial institutions and their customers actually need to succeed.</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName} style={{fontStyle:'italic', color:'#94A3B8'}}>Name Withheld</div>
              <div className={styles.teamRole}>Chief Revenue Officer</div>
              <div className={styles.teamBio}>Former AWS, Avanade, and Accenture. Extensive enterprise sales and revenue leadership across global financial services markets. Available for disclosure under NDA at advanced stages of partnership discussions.</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName} style={{fontStyle:'italic', color:'#94A3B8'}}>Name Withheld</div>
              <div className={styles.teamRole}>Chief Technology Officer</div>
              <div className={styles.teamBio}>Former Accenture and IBM. Built and delivered the Caribbean central bank's payments platform — one of the most complex sovereign financial technology implementations in the region. Available for disclosure under NDA at advanced stages.</div>
            </div>

          </div>
        </div>
      </section>

      {/* Collective Expertise */}
      <section className="section dark-background">
        <div className="base-container">
          <span className={styles.sectionLabelLight}>The Brain Trust</span>
          <h2 className={styles.sectionTitleLight}>200+ Years of Combined Experience</h2>
          <p className={styles.bodyLight}>UDG's extended team and partner network brings together practitioners who have built, scaled, and secured the world's most critical financial and technology infrastructure — not consultants who advise on it.</p>
          <div className={styles.grid3}>
            <div className={styles.darkCard}>
              <div className={styles.darkCardTitle}>Scalable &amp; AI-Enabled</div>
              <div className={styles.darkCardText}>Standardized engineering patterns accelerate feature delivery. Shared AI context prevents errors, drives velocity, and personalizes every customer interaction — consistently and at scale across every market.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.darkCardTitle}>Performant Architecture</div>
              <div className={styles.darkCardText}>Hub-and-spoke data design built to support 150M+ users per deployment and a billion people across the full platform — while unlocking real-time analytics that create compounding competitive advantage.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.darkCardTitle}>Quality by Design</div>
              <div className={styles.darkCardText}>World-class quality engineering lowers risk, strengthens compliance posture, and ensures predictable growth without the costly production failures that regularly derail conventional technology deployments.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section section-grey">
        <div className="base-container">
          <span className={styles.sectionLabel}>Where We've Built</span>
          <h2 className={styles.sectionTitle}>Mission-Critical Institutions. Not Startups.</h2>
          <p className={styles.body}>The institutions where the UDG team built their expertise represent the most demanding, most regulated, and most scrutinized environments on earth. That experience is now deployed on behalf of our partners and clients.</p>
          <div className={styles.statsRow}>
            <div>
              <div className={styles.statNumber}>Fed</div>
              <div className={styles.statLabel}>Federal Reserve</div>
            </div>
            <div>
              <div className={styles.statNumber}>RBC</div>
              <div className={styles.statLabel}>Royal Bank of Canada</div>
            </div>
            <div>
              <div className={styles.statNumber}>CBN</div>
              <div className={styles.statLabel}>Central Bank of Nigeria</div>
            </div>
            <div>
              <div className={styles.statNumber}>200+</div>
              <div className={styles.statLabel}>Years combined experience</div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
