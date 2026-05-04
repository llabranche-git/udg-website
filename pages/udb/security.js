import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'

export default function SecurityCompliance() {
  return (
    <UDBLayout
      title="Unified Digital Banking — Security & Compliance"
      description="UDB's security architecture and compliance framework — 112 standards, 80+ unified controls, ISO 27001, PCI-DSS, FATF Travel Rule, and real-time AML built into every deployment."
    >
      {/* Inner Banner */}
      <section
        className={styles.innerBanner}
        style={{ backgroundImage: 'url(/assets/inf4.jpg)' }}
      >
        <div className={styles.udbContainer}>
          <h1 className={styles.bannerHeading}>Security &amp; Compliance<br />Built Into the Foundation.</h1>
          <p className={styles.bannerSubtext}>Not a checkbox. Not an add-on. Every UDB bank is born compliant — and stays compliant as markets, regulations, and threat landscapes evolve.</p>
        </div>
      </section>

      {/* Intro */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>The Architecture</span>
          <h2 className={styles.sectionHeading}>Regulatory Confidence from Day One.<br />Across Every Market You Operate In.</h2>
          <p className={styles.sectionSubtext}>Principal families entering banking in emerging markets face a landscape of overlapping, sometimes conflicting, and fast-changing regulatory requirements. UDB eliminates the compliance burden entirely — aggregating 112 standards into a single unified framework so your bank operates with institutional-grade regulatory posture from the moment it opens.</p>
        </div>
      </section>

      {/* Unified Compliance Framework */}
      <section className={`${styles.udbSection} ${styles.darkSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>The Unified Control Framework</span>
          <h2 className={styles.sectionHeading}>112 Standards. One Framework.<br />Design Once, Comply to Many.</h2>
          <p className={styles.sectionSubtext}>Conventional compliance is fragmented — each market, each regulator, each audit requires its own stack. UDB's Common Control Framework (CCF) aggregates 13+ compliance frameworks into 80+ unified controls. A single implementation satisfies overlapping local, regional, and international requirements simultaneously.</p>
          <div className={styles.cardGrid2} style={{marginTop:'40px'}}>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>112 Standards, 80+ Unified Controls</div>
              <div className={styles.cardText}>UDB maps 13+ compliance frameworks — Nigerian CBN requirements, EU banking directives, FATF guidelines, international AML standards — into a single high-performance architecture. The Common Control Framework eliminates the fragmentation that makes conventional compliance so costly. When a new market has different requirements, it is a configuration update, not a rebuild.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Design Once, Comply to Many</div>
              <div className={styles.cardText}>A single UDB implementation satisfies overlapping requirements across multiple jurisdictions simultaneously. As you expand into new markets — additional countries, additional regulatory environments — your compliance posture scales with you. No new compliance stack. No duplication of effort. The framework is designed for the multi-market principal family from the start.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Real-Time Compliance Posture</div>
              <div className={styles.cardText}>Continuous, real-time visibility into your bank's compliance posture — not a snapshot at audit time, but a live view of every control, every gap, every exception. When a regulator or correspondent bank asks, you have the answer before they finish the question. Institutional due diligence becomes a formality, not a risk.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Tier-1 International Certifications</div>
              <div className={styles.cardText}>Every UDB deployment is fully aligned with ISO 27001:2022, PCI-DSS v4.0.1, and SOC 2 Type 2. Built to EU AI Act and NIST AI PMF standards. These are not aspirational targets — they are baseline certifications embedded in the platform architecture that every bank inherits from day one.</div>
            </div>
          </div>
        </div>
      </section>

      {/* AML & Transaction Compliance */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Financial Crime Prevention</span>
          <h2 className={styles.sectionHeading}>AML, Sanctions &amp; FATF Travel Rule —<br />Native, Not Bolted On.</h2>
          <p className={styles.sectionSubtext}>Financial crime compliance is not a product feature in UDB. It is an infrastructure property — executing natively on every transaction, in the background, without creating friction for legitimate customers or operational overhead for your team.</p>
          <div className={styles.cardGrid2} style={{marginTop:'40px'}}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Real-Time AML &amp; Transaction Monitoring</div>
              <div className={styles.cardText}>Every transaction is screened against UDB's advanced AML engine in real time — before settlement, not after. Suspicious patterns are flagged, escalated, and reported automatically. Your compliance team sees what matters. Regulators see a bank that catches problems before they become crises.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Sanctions Screening</div>
              <div className={styles.cardText}>Continuous screening against OFAC, UN, EU, and local sanctions lists on every customer, counterparty, and transaction. Automated, real-time, with zero manual intervention required for standard cases. Your bank never touches a sanctioned party — and can prove it.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>FATF Travel Rule Compliance</div>
              <div className={styles.cardText}>Full FATF Travel Rule compliance is executed natively on every qualifying transaction — including stablecoin and digital currency transfers across 30+ blockchain networks. Originator and beneficiary information travels with the transaction automatically. Your bank is compliant in every market where Travel Rule obligations apply, from day one.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Anti-Terrorism Financing</div>
              <div className={styles.cardText}>Automated counter-terrorism financing (CTF) checks run continuously across all accounts and transactions. Pattern recognition, network analysis, and risk scoring operate at the infrastructure layer — invisible to legitimate customers, unavoidable for bad actors. Your bank's integrity is protected structurally, not procedurally.</div>
            </div>
          </div>
        </div>
      </section>

      {/* KYC & Identity */}
      <section className={`${styles.udbSection} ${styles.altSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Identity &amp; KYC</span>
          <h2 className={styles.sectionHeading}>Know Your Customer.<br />From the First Interaction.</h2>
          <p className={styles.sectionSubtext}>Identity verification and progressive KYC are embedded at the point of onboarding — not added as a compliance step after the fact. Every customer is verified before they complete their first transaction.</p>
          <div className={styles.cardGrid2} style={{marginTop:'40px'}}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Instant Government ID Verification</div>
              <div className={styles.cardText}>Frictionless cross-referencing of government-issued identity documents at the point of onboarding — BVN, NIN, national ID, passport — establishing progressive KYC tiers instantly. Customers are verified in seconds. Your compliance record is established before their first transaction clears.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Enterprise-Grade Biometric Authentication</div>
              <div className={styles.cardText}>Native integration with device-level biometric security — Face ID, fingerprint, behavioural biometrics — on every customer interaction. Authentication is not just a security control; it is the foundation of your customer's trust in your institution.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Compliant Access Architecture</div>
              <div className={styles.cardText}>Centralised identity architecture prevents security breaches at the infrastructure layer — before they can reach your customers or your regulators. Role-based access controls, privileged access management, and continuous access review are built in, not configured manually by your IT team.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Progressive KYC Tiers</div>
              <div className={styles.cardText}>UDB's KYC framework supports tiered customer onboarding — basic accounts with limited verification, full accounts with document verification, premium accounts with enhanced due diligence. Each tier unlocks higher transaction limits and product access. Regulatory requirements for each tier are managed automatically by the platform.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Operations */}
      <section className={`${styles.udbSection} ${styles.darkSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Security Operations</span>
          <h2 className={styles.sectionHeading}>Security as a Growth Enabler,<br />Not an Operational Burden.</h2>
          <p className={styles.sectionSubtext}>For a principal family deploying a bank, security failures are not IT problems — they are reputational, regulatory, and financial catastrophes. UDB's security operations model eliminates the risk at the source.</p>
          <div className={styles.cardGrid2} style={{marginTop:'40px'}}>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>AWS Global Security Infrastructure</div>
              <div className={styles.cardText}>UDB runs on AWS — the same infrastructure that powers the world's largest financial institutions. SOC controls, PCI security, 99.99% uptime SLAs, and continuous infrastructure hardening are inherited from the world's most trusted cloud platform. Your bank benefits from AWS's security investment without carrying AWS's operating cost.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Proactive Risk Management</div>
              <div className={styles.cardText}>UDB's information security programme is designed to reduce financial loss, protect customer trust, and increase investor confidence — continuously. Threat modelling, vulnerability management, penetration testing, and incident response are all managed by UDB's security operations team. Your bank is never the weakest link in its own defence.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Regulatory Readiness Architecture</div>
              <div className={styles.cardText}>Your bank's organisational and governance structure is mapped to commercial banking licence requirements from the start — not retrofitted during the regulatory approval process. Every structural decision is made with licence approval in mind. Your regulatory journey begins with a bank that was designed to pass, not one that needs to be fixed to pass.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Incident Response &amp; Business Continuity</div>
              <div className={styles.cardText}>Defined incident response procedures, tested business continuity plans, and automated failover ensure that operational disruptions do not become customer-facing failures. When something goes wrong — and in banking, something always eventually does — UDB's response architecture ensures the impact is contained, resolved, and documented before it reaches your customers or your regulators.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.udbSection} ${styles.ctaSection}`}>
        <div className={styles.udbContainer}>
          <h2 className={styles.ctaHeading}>A Bank Built to the Highest Standard.</h2>
          <p className={styles.ctaSubtext}>Security and compliance are not constraints on your bank's ambition. They are the foundation it stands on.</p>
          <a href="/udb/apply" className={styles.ctaButton}>Begin the Conversation</a>
        </div>
      </section>
    </UDBLayout>
  )
}
