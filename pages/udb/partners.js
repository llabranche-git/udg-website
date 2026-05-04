import Head from 'next/head'
import Link from 'next/link'
import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'

export default function UDBPartners() {
  return (
    <UDBLayout>
      <Head><title>UDB — Partner Ecosystem</title></Head>

      <section className={styles.innerBanner}>
        <div className={styles.gridBg} />
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Partner Ecosystem</span>
          <h1 className={styles.bannerHeading}>Powered by Industry-Leading<br />Partnerships</h1>
          <p className={styles.bannerSub}>Every layer of the UDB platform — cloud, compliance, connectivity, payments, localization, and user experience — is backed by best-in-class global partners. When you deploy a UDB bank, you deploy the world's best financial infrastructure stack.</p>
        </div>
      </section>

      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <div className={styles.partnerCards}>

            <div className={styles.partnerCard}>
              <div className={styles.partnerCategory}>
                <div className={styles.partnerCategoryLabel}>Cloud &amp; AI Infrastructure</div>
              </div>
              <div className={styles.cardTitle}>Amazon Web Services &amp; NVIDIA</div>
              <div className={styles.cardText}>AWS provides the global cloud backbone — unmatched availability, SOC and PCI security, and continuous innovation at institutional scale. NVIDIA's AI infrastructure powers the platform's analytics, credit scoring, and fraud detection capabilities.</div>
            </div>

            <div className={styles.partnerCard}>
              <div className={styles.partnerCategory}>
                <div className={styles.partnerCategoryLabel}>Stablecoin &amp; Cross-Border Settlement</div>
              </div>
              <div className={styles.cardTitle}>Yellow Card</div>
              <div className={styles.cardText}>Africa's largest stablecoin infrastructure, with $6B+ in processed volume, 50+ local payment currencies, and 30+ blockchain integrations. Yellow Card is the settlement engine that makes invisible, borderless liquidity a reality for your bank's customers.</div>
            </div>

            <div className={styles.partnerCard}>
              <div className={styles.partnerCategory}>
                <div className={styles.partnerCategoryLabel}>System Integration, Change Management &amp; Compliance</div>
              </div>
              <div className={styles.cardTitle}>Slalom, Qucoon &amp; Deloitte</div>
              <div className={styles.cardText}>Three world-class professional services firms providing system integration, organizational change management, and compliance architecture. Together they represent over 150 years of combined experience in mission-critical financial system deployments globally.</div>
            </div>

            <div className={styles.partnerCard}>
              <div className={styles.partnerCategory}>
                <div className={styles.partnerCategoryLabel}>User Experience &amp; Mobile Banking</div>
              </div>
              <div className={styles.cardTitle}>Rubies Microfinance Bank</div>
              <div className={styles.cardText}>Nigeria's leading digital microfinance bank brings on-the-ground user experience expertise and deep understanding of the behavioral patterns of emerging-market banking customers — ensuring UDB's interface is built for the people who will use it, not just the regulators who will approve it.</div>
            </div>

            <div className={styles.partnerCard}>
              <div className={styles.partnerCategory}>
                <div className={styles.partnerCategoryLabel}>Multi-Lingual Support &amp; Localization</div>
              </div>
              <div className={styles.cardTitle}>Translated. (Lara AI)</div>
              <div className={styles.cardText}>Professional AI-driven translation embedded directly into the core platform. Lara AI powers seamless interfaces in 200+ languages with human-in-the-loop review — breaking down the adoption barriers that have historically prevented financial inclusion at scale across Asia, Africa, LATAM, and the GCC.</div>
            </div>

            <div className={styles.partnerCard}>
              <div className={styles.partnerCategory}>
                <div className={styles.partnerCategoryLabel}>Ubiquitous Connectivity</div>
              </div>
              <div className={styles.cardTitle}>Starlink, Amazon LEO &amp; FieldBase</div>
              <div className={styles.cardText}>Satellite networking infrastructure that eliminates dependence on terrestrial cable. Starlink and Amazon LEO provide 100% uptime for customers in remote and rural areas. FieldBase manages ground-level deployment and maintenance — ensuring connectivity reaches every corner of your market.</div>
            </div>

          </div>
        </div>
      </section>

      {/* USG Network */}
      <section className={`${styles.udbSection} ${styles.darkSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>The Holding Network</span>
          <h2 className={styles.sectionHeading}>Backed by Unified State Group</h2>
          <p className={styles.sectionSubtext}>As a subsidiary of Unified State Group, UDB operates within a network of sovereign governments, Fortune 500 corporations, and 800+ principal family offices across 110+ countries. The partner ecosystem extends far beyond technology — into trade, capital, and sovereign relationships.</p>
          <div className={styles.cardGrid3} style={{marginTop:'40px'}}>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>110+ Country Network</div>
              <div className={styles.cardText}>USG's active operating footprint spans Sub-Saharan Africa, MENA, Asia-Pacific, and the Americas — bringing trust and connectivity to sovereign leadership at every level.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>800+ Family Offices</div>
              <div className={styles.cardText}>USG's principal family network creates cross-border deal flow, capital partnerships, and commercial relationships that extend the value of your bank well beyond your domestic market.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Sovereign Government Access</div>
              <div className={styles.cardText}>UDB's regulatory navigation capabilities are backed by USG's sovereign-level relationships — accelerating license approvals and regulatory alignment in even the most complex jurisdictions.</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.udbSection} ${styles.ctaSection}`}>
        <div className={styles.udbContainer}>
          <h2 className={styles.ctaHeading}>World-class infrastructure, built for your market.</h2>
          <p className={styles.ctaSubtext}>When you partner with UDB, you get the full stack — technology, operations, compliance, and the partner ecosystem behind it.</p>
          <Link href="/udb/apply" className={styles.btnPrimary}>Apply for Partnership</Link>
        </div>
      </section>

    </UDBLayout>
  )
}
