import Head from 'next/head'
import Link from 'next/link'
import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'

export default function UDBTeam() {
  return (
    <UDBLayout>
      <Head><title>UDB — The Team</title></Head>

      <section className={styles.innerBanner}>
        <div className={styles.gridBg} />
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>The Team</span>
          <h1 className={styles.bannerHeading}>Designed by Industry Leaders.<br />Built to Scale to 150M+ Customers.</h1>
          <p className={styles.bannerSub}>A powerhouse of talent from UDG, Slalom, Qucoon, AWS, and Deloitte. Over 200 years of combined experience delivering mission-critical solutions for the Federal Reserve, Royal Bank of Canada, Discover Financial Services, and the Central Bank of Nigeria.</p>
        </div>
      </section>

      {/* Leadership */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Leadership</span>
          <h2 className={styles.sectionHeading}>The People Behind the Platform</h2>
          <div className={styles.cardGrid3} style={{marginTop:'40px'}}>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>Leo LaBranche</div>
              <div className={styles.teamRole}>Chief Executive Officer</div>
              <div className={styles.teamBio}>Designed and executed multiple $B initiatives across emerging markets. Multi-billion dollar deal structuring and ecosystem orchestration at the CEO and Board level. Former AWS and Avanade.</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>Andy Marselos</div>
              <div className={styles.teamRole}>Chief Operating Officer</div>
              <div className={styles.teamBio}>Founding member of Avanade, where he helped scale the company to $2.5B in revenue. Deep expertise in global operations, organizational scaling, and enterprise technology delivery.</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>Traci Terterian</div>
              <div className={styles.teamRole}>Chief Marketing Officer</div>
              <div className={styles.teamBio}>Senior marketing and brand leadership from AWS and HP. Extensive experience positioning enterprise technology platforms for global markets and enterprise buyer audiences.</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>Dwayne Fernandez</div>
              <div className={styles.teamRole}>Chief Product Officer</div>
              <div className={styles.teamBio}>Built digital banking products at AWS and Microsoft. Delivered Tier-1 bank digital banking platforms at scale. Deep understanding of what financial institutions and their customers actually need.</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName} style={{fontStyle:'italic',color:'#94A3B8'}}>Name Withheld</div>
              <div className={styles.teamRole}>Chief Revenue Officer</div>
              <div className={styles.teamBio}>Former AWS, Avanade, and Accenture. Extensive enterprise sales and revenue leadership across global financial services markets. Available for disclosure under NDA at advanced stages of partnership discussions.</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName} style={{fontStyle:'italic',color:'#94A3B8'}}>Name Withheld</div>
              <div className={styles.teamRole}>Chief Technology Officer</div>
              <div className={styles.teamBio}>Former Accenture and IBM. Built and delivered the Caribbean central bank's payments platform — one of the most complex sovereign financial technology implementations in the region. Available for disclosure under NDA at advanced stages.</div>
            </div>

          </div>
        </div>
      </section>

      {/* Brain Trust */}
      <section className={`${styles.udbSection} ${styles.darkSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>The Brain Trust</span>
          <h2 className={styles.sectionHeading}>200+ Years of Combined Experience</h2>
          <p className={styles.sectionSubtext}>UDB's extended team and partner network brings together practitioners who have built, scaled, and secured the world's most critical financial infrastructure — not consultants who advise on it.</p>
          <div className={styles.cardGrid3} style={{marginTop:'40px'}}>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Scalable &amp; AI-Enabled</div>
              <div className={styles.cardText}>Standardized engineering patterns accelerating feature delivery. Shared AI context prevents errors, drives velocity, and personalizes every customer interaction — consistently, at scale, across every market.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Performant Architecture</div>
              <div className={styles.cardText}>Hub-and-spoke data design built to support hundreds of millions of users efficiently — while unlocking real-time revenue-generating analytics that create compounding competitive advantage for your bank.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Quality by Design</div>
              <div className={styles.cardText}>World-class quality engineering lowers risk, strengthens compliance posture, and ensures predictable growth without the costly production failures that regularly derail conventional banking technology deployments.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Where We've Built</span>
          <h2 className={styles.sectionHeading}>Mission-Critical Institutions. Not Startups.</h2>
          <p className={styles.sectionSubtext}>The institutions where the UDB team built their expertise represent the most demanding, most regulated, most scrutinized financial environments on earth. That experience is now deployed in your bank.</p>
          <div className={styles.statsRow} style={{marginTop:'48px'}}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>Fed</div>
              <div className={styles.statLabel}>Federal Reserve</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>RBC</div>
              <div className={styles.statLabel}>Royal Bank of Canada</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>CBN</div>
              <div className={styles.statLabel}>Central Bank of Nigeria</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>200+</div>
              <div className={styles.statLabel}>Years combined experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.udbSection} ${styles.ctaSection}`}>
        <div className={styles.udbContainer}>
          <h2 className={styles.ctaHeading}>Meet the team behind your bank.</h2>
          <p className={styles.ctaSubtext}>We're selective about who we partner with — and so are you. Start the conversation and let's explore whether this is the right fit.</p>
          <Link href="/udb/apply" className={styles.btnPrimary}>Begin the Conversation</Link>
        </div>
      </section>

    </UDBLayout>
  )
}
