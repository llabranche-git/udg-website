import Head from 'next/head'
import Link from 'next/link'
import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'

export default function UDBPlatform() {
  return (
    <UDBLayout>
      <Head><title>Unified Digital Banking — Platform</title></Head>

      <section className={styles.innerBanner} style={{backgroundImage: "url(/assets/udb-platform.jpg)"}}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>The Platform</span>
          <h1 className={styles.bannerHeading}>Full-Stack Banking Infrastructure,<br />Fully Managed</h1>
          <p className={styles.bannerSub}>Built by a powerhouse of talent from UDG, AWS, Slalom, Qucoon, and Deloitte. Over 200 years of combined experience delivering mission-critical solutions for the Federal Reserve, Royal Bank of Canada, Discover Financial Services, and the Central Bank of Nigeria.</p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Core Capabilities</span>
          <h2 className={styles.sectionHeading}>Scalable, AI-Enabled, Built to Perform</h2>
          <div className={styles.cardGrid3}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Scalable &amp; AI-Enabled</div>
              <div className={styles.cardText}>Standardized patterns accelerating feature delivery. Shared AI context prevents errors, drives operational velocity, and personalizes every customer interaction at scale.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Performant by Design</div>
              <div className={styles.cardText}>Hub-and-spoke data architecture built to support 150M+ users per bank deployment — and a billion people across the full platform — efficiently and unlock real-time revenue-generating analytics across your entire portfolio.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Quality Engineering</div>
              <div className={styles.cardText}>World-class quality by design lowers risk, strengthens compliance, and ensures predictable growth without the costly production failures that derail conventional banking deployments.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Rails */}
      <section className={`${styles.udbSection} ${styles.altSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Financial Infrastructure</span>
          <h2 className={styles.sectionHeading}>Next-Generation Financial Rails:<br />Invisible, Borderless Liquidity</h2>
          <p className={styles.sectionSubtext}>Currency volatility has destroyed more emerging-market bank balance sheets than any other single force. UDB eliminates this risk at the infrastructure level — not as a product feature, but as a structural property of the platform itself.</p>
          <div className={styles.cardGrid2} style={{marginTop:'40px'}}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>FX Risk — Structurally Eliminated</div>
              <div className={styles.cardText}>Your bank never holds FX exposure on behalf of its customers. Every transaction settles through UDB's stablecoin engine in real time — your customers transact in their local currency, the platform handles conversion seamlessly. The naira, cedi, kwanza, or dirham can swing. Your bank's settlement value does not.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Cross-Border Transfers Without Friction</div>
              <div className={styles.cardText}>Trans-country transfers that currently take 3–5 days and cost 8–12% in correspondent banking fees complete in seconds at near-zero cost. Lagos to London. Nairobi to Dubai. Accra to São Paulo. The rails are the same, the friction is gone, and your bank captures the spread that legacy operators leave on the table.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Intercontinental Remittances</div>
              <div className={styles.cardText}>Africa is the world's most expensive remittance corridor — $100B+ annually, fees averaging 8% or more. Your bank captures a structural share of this flow at costs 10x lower than legacy operators. Diaspora communities in Europe, the US, and the Gulf send home through your bank, not theirs. A revenue stream that compounds as your customer base grows.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Commodities &amp; Trade Settlement</div>
              <div className={styles.cardText}>Oil, gas, agricultural products, minerals — the economic engine of every market UDB operates in. Your bank settles commodity trades across borders through the same stablecoin rails, eliminating correspondent banking intermediaries and giving your principal family direct control over the financial flows that run through your market's core industries.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Yellow Card — $6B+ Processed</div>
              <div className={styles.cardText}>Africa's largest stablecoin infrastructure is embedded at the core of every UDB bank. 50+ local payment currencies, 30+ blockchain integrations, $6B+ in processed transaction volume. The infrastructure is proven — UDB brings it directly into your banking platform from day one, with no integration overhead.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>The Compliance Defense Stack</div>
              <div className={styles.cardText}>Every stablecoin transaction runs through strict AML, Sanctions Screening, Anti-Terrorism checks, and FATF Travel Rule compliance — natively, in the background. Regulators see a fully compliant institution. Your customers see a frictionless experience. Your bank sees no exposure.</div>
            </div>
          </div>
        </div>
      </section>

      {/* UX & KYC */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Customer Experience</span>
          <h2 className={styles.sectionHeading}>Where Sovereign Infrastructure Meets Frictionless UX</h2>
          <div className={styles.cardGrid2}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Instant Identity Verification</div>
              <div className={styles.cardText}>Frictionless onboarding with immediate cross-referencing of government IDs — BVN, NIN, national ID — to establish progressive KYC tiers instantly. Customers are verified before they leave the onboarding screen.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Enterprise-Grade Biometric Trust</div>
              <div className={styles.cardText}>Native integration with device-level security protocols out-of-the-box — Face ID, fingerprint, behavioral biometrics — ensuring regulatory compliance and immediate consumer confidence.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Social Financial Transactions</div>
              <div className={styles.cardText}>Integrated chat and finance features allow users to connect with their community and manage money securely in a single, unified interface — driving adoption through the networks your customers already use.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Deep Local Integration</div>
              <div className={styles.cardText}>Deeply localized merchant APIs allow users to effortlessly settle bills — airtime, electricity, data, transport — within their existing economic ecosystems. The bank becomes the utility layer of daily life.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Precision Credit</div>
              <div className={styles.cardText}>Granular, sector-based profiling dynamically adjusts risk profiles per customer. Absolute transparency on automated repayment schedules severely reduces default rates — a structural advantage over conventional microfinance.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Multi-Language at Scale</div>
              <div className={styles.cardText}>Lara AI embeds professional, AI-driven translation directly into the core platform — 200+ languages with human-in-the-loop review, breaking down adoption barriers across Asia, Africa, LATAM, and the GCC.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className={`${styles.udbSection} ${styles.darkSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Compliance Architecture</span>
          <h2 className={styles.sectionHeading}>The Unified Advantage: One Framework, Global Reach</h2>
          <p className={styles.sectionSubtext}>Beyond technology, UDB maps functional and organizational requirements to ensure you operate at scale without regulatory friction.</p>
          <div className={styles.cardGrid2} style={{marginTop:'40px'}}>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>112 Standards, 80+ Unified Controls</div>
              <div className={styles.cardText}>Aggregating 13+ compliance frameworks into one high-performance architecture. The Common Control Framework (CCF) eliminates the fragmentation that makes conventional compliance so costly.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>"Design Once, Comply to Many"</div>
              <div className={styles.cardText}>A single implementation satisfies overlapping Nigerian, EU, and international banking requirements simultaneously — so you expand into new markets without rebuilding your compliance stack.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Real-Time Posture &amp; Audit Readiness</div>
              <div className={styles.cardText}>Real-time visibility into security posture ensures zero gaps during institutional due diligence. When a regulator or correspondent bank asks, you have the answer before they finish the question.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Tier-1 International Certifications</div>
              <div className={styles.cardText}>Fully aligned with ISO 27001:2022, PCI-USS v4.0.1, and SGC 2 Type 2. Advanced AML programs featuring real-time transaction monitoring and FATF Travel Rule compliance. Built to EU AI Act and NIST AI PMF standards.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Managed Operations</span>
          <h2 className={styles.sectionHeading}>Information Security &amp; Operations as a Growth Enabler</h2>
          <p className={styles.sectionSubtext}>UDB manages functional and organizational requirements so you operate at scale without operational drag.</p>
          <div className={styles.cardGrid2}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Compliant Access Architecture</div>
              <div className={styles.cardText}>Centralized identity architecture preventing security breaches at the infrastructure layer — before they can reach your customers or your regulators.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Regulatory Readiness</div>
              <div className={styles.cardText}>Compliant organizational structure mapping to prepare for commercial banking license approvals — ensuring your governance structure satisfies every regulatory checkpoint.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Proactive Risk Management</div>
              <div className={styles.cardText}>Information security program designed to reduce financial loss, protect customer trust, and increase investor confidence — continuously, not just at audit time.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Turnkey Operations</div>
              <div className={styles.cardText}>Fully staffed, multi-lingual call centers managing AI-to-human escalation paths. 60% reduction in call volume. 50% reduction in agent training time. Your customers get world-class service from day one.</div>
            </div>
          </div>
        </div>
      </section>

      {/* USSD */}
      <section className={`${styles.udbSection} ${styles.altSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Total Population Reach</span>
          <h2 className={styles.sectionHeading}>Banking for 100% of the Country.<br />Not Just Smartphone Owners.</h2>
          <p className={styles.sectionSubtext}>In some of UDB's target markets, 70% of the population has no smartphone. A bank that requires an app is a bank that ignores the majority of its market. UDB is built differently.</p>
          <div className={styles.cardGrid2} style={{marginTop:'40px'}}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Full Banking via USSD — Any Phone, Any Network</div>
              <div className={styles.cardText}>Every mobile subscriber in your country — regardless of device, data plan, or internet access — can open an account, check a balance, send money, pay bills, and apply for credit through USSD (*123# menus) on any 2G network. No app download. No smartphone. No data plan required. The same service your wealthiest customer accesses through the mobile app, your most rural customer accesses through the most basic feature phone.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>SIM Penetration Is Your Real TAM</div>
              <div className={styles.cardText}>Smartphone penetration in target markets ranges from 30–60%. Mobile SIM penetration is typically 80–90%. The gap between those two numbers is your bank's untapped market — hundreds of millions of people who already have a phone number, already have a network connection, and are already excluded from formal banking because every competitor requires a smartphone. USSD closes that gap entirely. Your bank's serviceable market is the entire mobile-connected population.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Works Everywhere the Network Reaches</div>
              <div className={styles.cardText}>USSD doesn't require data — it runs on the same channel as a voice call. Wherever your national mobile network has coverage, your bank has presence. Rural communities, agricultural regions, oil-producing areas, port towns — every economic actor in your country can participate in the formal financial system through your bank, from day one.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>The Foundation for Financial Inclusion at Scale</div>
              <div className={styles.cardText}>USSD onboarding feeds the literacy program. First-time users learn banking fundamentals through guided USSD interactions — familiar menus, local language, zero data cost. As their financial confidence grows, they migrate to mobile app features. The literacy journey starts with the phone they already own.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-lingual */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Language Is Not a Barrier</span>
          <h2 className={styles.sectionHeading}>200+ Languages.<br />One Seamless Banking Experience.</h2>
          <p className={styles.sectionSubtext}>Language exclusion is one of the most overlooked barriers in emerging-market banking. UDB eliminates it entirely — not through basic translation, but through full cultural and linguistic adaptation at the platform level.</p>
          <div className={styles.cardGrid2} style={{marginTop:'40px'}}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Lara AI — 200+ Language Platform</div>
              <div className={styles.cardText}>Powered by Translated.'s Lara AI, UDB embeds professional, AI-driven translation directly into the core banking platform. Every interface, every notification, every document is delivered in the customer's preferred language — with human-in-the-loop review ensuring cultural accuracy, not just literal translation. Hausa, Swahili, Yoruba, Arabic, Tagalog, Bahasa, Portuguese, French — your bank speaks every language in your market.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Multi-Lingual Operations via Amazon Connect</div>
              <div className={styles.cardText}>Amazon Connect powers UDB's call center infrastructure with native multi-lingual routing — customers are connected to agents in their language automatically. 60% reduction in total call volume through AI-first resolution. 50% reduction in agent training time. Your bank's operations team is prepared for every language your market speaks, from day one of launch.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Beyond Translation — Cultural Adaptation</div>
              <div className={styles.cardText}>Financial concepts don't translate directly across cultures. Credit, interest, insurance, investment — these words carry different meanings, different trust levels, and different behavioral associations in different communities. UDB's localization framework adapts the financial interface to cultural context, not just language. Your customers understand what they're signing up for — and that understanding drives adoption, retention, and repayment.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>One Platform, Every Market</div>
              <div className={styles.cardText}>Adding a new language or regional dialect doesn't require platform rebuild — it's a configuration update. As your bank expands geographically within your country or into adjacent markets, the language layer scales with it. UDB's multi-lingual architecture is built for markets where a single country can have 500+ dialects, not for markets where one language covers 95% of the population.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Literacy */}
      <section className={`${styles.udbSection} ${styles.darkSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Built-In Financial &amp; Digital Literacy</span>
          <h2 className={styles.sectionHeading}>The Bank Comes With<br />a Literacy Component.</h2>
          <p className={styles.sectionSubtext}>Across emerging markets, large segments of the population have never interacted with a formal bank. Not because they lack the need — but because no one has met them where they are. Limited financial literacy means people don't understand what a bank account does, how credit works, or how to protect themselves from financial risk. This isn't a marginal issue. In some markets, it describes the majority of the population.</p>
          <div className={styles.cardGrid2} style={{marginTop:'40px'}}>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Curated by World-Renowned Universities</div>
              <div className={styles.cardText}>Every UDB bank comes with a financial and digital literacy curriculum developed in collaboration with globally respected academic institutions, including Oxford University. The content is grounded in research on how populations in emerging markets learn financial concepts — not adapted from Western curricula, but built from the ground up for the realities of your market.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Created Once. Replicated Across 200+ Languages.</div>
              <div className={styles.cardText}>The literacy curriculum is built once on the UDB platform and automatically replicated across 200+ languages through Lara AI. A single investment in content creation serves every linguistic community in your country — from major national languages to regional dialects — without rebuilding or re-localising the underlying programme. Scale without proportional cost.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Delivered via Smartphone and USSD</div>
              <div className={styles.cardText}>Literacy content reaches every customer through the device they already own. Urban customers with smartphones receive rich, interactive content through the UDB mobile app. Rural customers with basic feature phones receive the same curriculum through USSD — structured, guided, accessible on any mobile network with no internet required. No customer is unreachable because of their device.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Better Customers. Better Bank.</div>
              <div className={styles.cardText}>As customers become more financially literate, the quality of your loan book improves automatically. Default rates decrease, sustainable loan sizes grow, and customer lifetime value compounds — reaching ~$110 per customer and targeting $2.33B at 10M users. The literacy programme is not a cost. It is a structural investment in the long-term performance of your bank.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.udbSection} ${styles.ctaSection}`}>
        <div className={styles.udbContainer}>
          <h2 className={styles.ctaHeading}>Ready to see what your bank would look like?</h2>
          <p className={styles.ctaSubtext}>Every deployment is exclusive per country. If your market is available, the window is open now.</p>
          <Link href="/udb/apply" className={styles.btnPrimary}>Begin the Conversation</Link>
        </div>
      </section>

    </UDBLayout>
  )
}
