import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'
import Link from 'next/link'

const team = [
  { role: 'Chief Executive Officer', name: 'Leo LaBranche', bio: 'Former AWS and Avanade. Designed and executed multiple billion-dollar initiatives. Multi-billion dollar deal structuring and ecosystem orchestration at the CEO and Board level across emerging markets.', confidential: false },
  { role: 'Chief Operating Officer', name: 'Andy Marselos', bio: 'Founding team at Avanade, scaled the organization to $2.5B in revenue. Deep expertise in large-scale technology operations and global delivery.', confidential: false },
  { role: 'Chief Marketing Officer', name: 'Traci Terterian', bio: 'Former AWS and HP. Extensive experience building market presence and strategic communications for enterprise technology businesses at global scale.', confidential: false },
  { role: 'Chief Product Officer', name: 'Dwayne Fernandez', bio: 'Former AWS and Microsoft. Built digital banking platforms for Tier-1 financial institutions. Deep domain expertise in banking product design and financial services technology.', confidential: false },
  { role: 'Chief Revenue Officer', name: 'Name Withheld', bio: 'Former AWS, Avanade, and Accenture. Revenue leadership at the executive level across global technology and advisory firms.', confidential: true },
  { role: 'Chief Technology Officer', name: 'Name Withheld', bio: 'Former Accenture and IBM. Built the Caribbean central bank payments platform. Deep expertise in core banking architecture and financial infrastructure at scale.', confidential: true },
]

export default function Team() {
  return (
    <UDBLayout title="UDB Leadership Team | Unified Digital Banking" description="Former AWS, Accenture, Avanade, and IBM executives with decades of large-scale deployment experience.">
      <div className={styles.innerBanner}>
        <div className={styles.udbContainer} style={{width:'100%'}}>
          <p className={styles.bannerLabel}>The Team</p>
          <h1 className={styles.bannerHeading}>The People Behind UDB</h1>
          <p className={styles.bannerSub}>Former AWS, Accenture, Avanade, and IBM executives with decades of large-scale technology deployment and financial services experience.</p>
        </div>
      </div>

      <section className={`${styles.udbSection} ${styles.gridBg}`}>
        <div className={styles.udbContainer}>
          <p className={styles.sectionLabel}>Leadership</p>
          <h2 className={styles.sectionHeading}>Proven at Scale. Built for This.</h2>
          <p className={styles.sectionSubtext}>Several members of the UDB leadership team have worked together across multiple companies over the last decade. This is not a team assembled for a pitch — it's a team that has delivered together.</p>
          <div className={styles.cardGrid3}>
            {team.map(({ role, name, bio, confidential }) => (
              <div key={role} className={styles.teamCard}>
                <p className={styles.teamRole}>{role}</p>
                <h3 className={`${styles.teamName} ${confidential ? styles.confidential : ''}`}>{name}</h3>
                <p className={styles.teamBio}>{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.altSection}>
        <div className={styles.udbContainer}>
          <p className={styles.sectionLabel}>Our Pedigree</p>
          <h2 className={styles.sectionHeading}>Experience That Counts</h2>
          <p className={styles.sectionSubtext}>The UDB team brings a specific combination of skills that is rare in banking technology: the ability to originate, structure, and execute billion-dollar initiatives in complex markets.</p>
          <div className={styles.cardGrid3}>
            {[
              ['Technology at Scale', 'Collective experience leading major programs at AWS, Accenture, Avanade, IBM, Microsoft, and HP — organizations known for large-scale, complex delivery.'],
              ['Financial Services Depth', 'Built and deployed banking platforms for Tier-1 financial institutions globally. Not generalists — specialists in financial services technology.'],
              ['Emerging Markets Execution', 'A track record of delivering in the markets UDB targets. We know the regulatory environment, the family dynamics, and the execution challenges.'],
            ].map(([title, text]) => (
              <div key={title} className={styles.card}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.udbContainer}>
          <h2 className={styles.ctaHeading}>Work With the Team</h2>
          <p className={styles.ctaSubtext}>Apply for partnership and connect directly with UDB leadership.</p>
          <Link href="/udb/apply" className={styles.btnPrimary}>Apply for Partnership</Link>
        </div>
      </section>
    </UDBLayout>
  )
}
