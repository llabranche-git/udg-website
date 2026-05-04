import Link from 'next/link'
import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'

const capabilities = [
  { icon: '🏦', title: 'Core Banking Engine', text: 'Account management, general ledger, transaction processing, multi-currency support, and full audit trail. Built on modern cloud-native architecture.' },
  { icon: '📱', title: 'Digital Channels', text: 'White-labeled mobile and web banking applications. Full-featured customer experience with your brand, your identity.' },
  { icon: '💳', title: 'Payments Infrastructure', text: 'Domestic and cross-border payments, SWIFT connectivity, local clearing systems integration, and real-time transaction processing.' },
  { icon: '🔒', title: 'KYC / AML & Compliance', text: 'Automated customer onboarding, identity verification, risk scoring, AML screening, and regulatory reporting tailored to each market.' },
  { icon: '📊', title: 'Data & Analytics', text: 'Real-time dashboards, management information systems, business intelligence, and performance reporting for bank leadership.' },
  { icon: '☁️', title: 'Cloud Infrastructure', text: 'AWS-hosted, multi-region deployment. 99.9% uptime SLA. Business continuity plan and disaster recovery built in from day one.' },
]

export default function Platform() {
  return (
    <UDBLayout title="The UDB Platform | Unified Digital Banking" description="A cloud-native core banking stack deployed and managed end-to-end by UDB.">
      <div className={styles.innerBanner}>
        <div className={styles.udbContainer} style={{width:'100%'}}>
          <p className={styles.bannerLabel}>The Platform</p>
          <h1 className={styles.bannerHeading}>Built for Banking. Designed for Scale.</h1>
          <p className={styles.bannerSub}>A cloud-native core banking stack deployed and managed end-to-end by UDB.</p>
        </div>
      </div>

      {/* Capabilities */}
      <section className={`${styles.udbSection} ${styles.gridBg}`}>
        <div className={styles.udbContainer}>
          <p className={styles.sectionLabel}>Platform Architecture</p>
          <h2 className={styles.sectionHeading}>Six Core Capabilities</h2>
          <p className={styles.sectionSubtext}>Every UDB deployment includes the full platform stack. No partial deployments. No missing modules. The complete infrastructure for a modern digital bank.</p>
          <div className={styles.cardGrid3}>
            {capabilities.map(({ icon, title, text }) => (
              <div key={title} className={styles.card}>
                <div className={styles.cardIcon}>{icon}</div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Service */}
      <section className={styles.altSection}>
        <div className={styles.udbContainer}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center'}}>
            <div>
              <p className={styles.sectionLabel}>Managed Service</p>
              <h2 className={styles.sectionHeading}>You Own the Bank. We Run the Platform.</h2>
              <p className={styles.sectionSubtext}>UDB operates as your technology partner for the life of the relationship. We handle everything so you don't have to build an internal technology team.</p>
              <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'16px'}}>
                {['Business continuity plan (BCP) and disaster recovery (DR)','Change management and platform updates','Regulatory audit support and documentation','24/7 escalation path for critical incidents','Annual security penetration testing','SLA monitoring and reporting'].map(item => (
                  <li key={item} style={{display:'flex', alignItems:'flex-start', gap:'12px', fontFamily:"'Work Sans', sans-serif", fontSize:'15px', fontWeight:300, color:'#334155', lineHeight:1.6}}>
                    <span style={{color:'#1A6FDB', fontWeight:700, flexShrink:0}}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.card} style={{padding:'48px'}}>
              <p className={styles.sectionLabel}>SLA Commitment</p>
              <div style={{display:'flex', flexDirection:'column', gap:'24px'}}>
                {[['99.9%', 'Platform Uptime (monthly)'],['≤ 4hrs', 'Recovery Time Objective (RTO)'],['≤ 1hr', 'Recovery Point Objective (RPO)'],['24/7', 'Critical Incident Escalation']].map(([val, label]) => (
                  <div key={label}>
                    <div style={{fontFamily:"'Archivo Expanded', sans-serif", fontSize:'32px', fontWeight:700, color:'#1A6FDB', letterSpacing:'-1px', lineHeight:1}}>{val}</div>
                    <div style={{fontFamily:"'Work Sans', sans-serif", fontSize:'13px', color:'#64748B', marginTop:'4px'}}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className={styles.darkSection}>
        <div className={styles.udbContainer}>
          <p className={styles.sectionLabel} style={{color:'#60A5FA'}}>Open Architecture</p>
          <h2 className={styles.sectionHeading} style={{color:'#fff'}}>Connects to Your Ecosystem</h2>
          <p className={styles.sectionSubtext} style={{color:'rgba(255,255,255,0.65)'}}>Open API architecture integrates with local payment rails, existing family business systems, regulatory reporting portals, and third-party services — without lock-in.</p>
          <div className={styles.cardGrid3}>
            {[['Local Payment Rails', 'Integration with domestic interbank payment systems, mobile money networks, and central bank payment infrastructure.'],['Family Business Systems', 'API connectivity to the family\'s existing business operations — supply chains, real estate, energy assets, and more.'],['Regulatory Portals', 'Direct integration with central bank reporting portals, financial intelligence units, and tax authority systems.']].map(([title, text]) => (
              <div key={title} className={styles.darkCard}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.udbContainer}>
          <h2 className={styles.ctaHeading}>See the Platform in Action</h2>
          <p className={styles.ctaSubtext}>Schedule a briefing with the UDB team to walk through the full platform architecture and deployment model.</p>
          <Link href="/udb/apply" className={styles.btnPrimary}>Request a Briefing</Link>
        </div>
      </section>
    </UDBLayout>
  )
}
