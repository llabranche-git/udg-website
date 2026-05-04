import Head from 'next/head'
import Link from 'next/link'
import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'

export default function UDBOwnership() {
  return (
    <UDBLayout>
      <Head><title>UDB — Your Ownership</title></Head>

      <section className={styles.innerBanner}>
        <div className={styles.gridBg} />
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Your Ownership</span>
          <h1 className={styles.bannerHeading}>One Country. One Family.<br />One Bank. Yours.</h1>
          <p className={styles.bannerSub}>The UDB partnership model is built around a single principle: the pre-eminent family in each country owns and controls their bank. UDB provides the platform, the operations, and the expertise. You hold the position — exclusively, permanently.</p>
        </div>
      </section>


      {/* Two Pathways */}
      <section className={`${styles.udbSection} ${styles.altSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Two Pathways</span>
          <h2 className={styles.sectionHeading}>Whether You're Starting Fresh or Already in the Game</h2>
          <p className={styles.sectionSubtext}>UDB works with two distinct types of principal families. The platform, the partnership model, and the ownership structure are designed to serve both — with equal depth and equal exclusivity.</p>
          <div className={styles.cardGrid2} style={{marginTop:'40px'}}>
            <div className={styles.card} style={{borderTop:'4px solid #1A6FDB'}}>
              <div className={styles.cardTitle}>Pathway 1 — New to Banking</div>
              <div className={styles.cardText} style={{marginBottom:'16px'}}>You have the market position, the relationships, and the vision. You've never owned a bank — and you don't need to have. UDB handles everything from banking license acquisition through day-one operations. You enter as an owner, not an operator.</div>
              <div className={styles.cardText} style={{lineHeight:'1.9'}}>
                ✦ &nbsp;UDB guides you through every step of the licensing process<br/>
                ✦ &nbsp;Full regulatory advisory from application through approval<br/>
                ✦ &nbsp;Platform deployed, staffed, and operating before you hire a single banker<br/>
                ✦ &nbsp;Compliance, AML, and risk managed by UDB from launch<br/>
                ✦ &nbsp;You own the equity. UDB runs the operations.
              </div>
            </div>
            <div className={styles.card} style={{borderTop:'4px solid #0A1628'}}>
              <div className={styles.cardTitle}>Pathway 2 — Existing Bank Owner</div>
              <div className={styles.cardText} style={{marginBottom:'16px'}}>You already own one or more banks. You understand what you have — and you know what it's missing. UDB modernizes your infrastructure, expands your capabilities, and positions your institution to compete with the world's most advanced digital banks.</div>
              <div className={styles.cardText} style={{lineHeight:'1.9'}}>
                ✦ &nbsp;Replace legacy core banking with a cloud-native, AI-enabled platform<br/>
                ✦ &nbsp;Add global financial rails — 50+ currencies, 30+ blockchains — to your existing operations<br/>
                ✦ &nbsp;Deploy UDB's compliance framework across your existing license structure<br/>
                ✦ &nbsp;Expand into adjacent markets under the UDB exclusive country model<br/>
                ✦ &nbsp;Transform an existing institution into a platform for vertical ecosystem growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 1:1:1 Model */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>The Prism Model</span>
          <h2 className={styles.sectionHeading}>One Country. One Partner. One Infrastructure.</h2>
          <p className={styles.sectionSubtext}>The 1:1:1 Prism Model is the structural foundation of every UDB deployment. It is not a preference — it is the architecture. Your country partnership is exclusive by design. No other family in your market can hold this position.</p>
          <div className={styles.cardGrid3} style={{marginTop:'40px'}}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Exclusive Country Franchise</div>
              <div className={styles.cardText}>Your partnership gives you exclusive rights to UDB's infrastructure in your country. No competitor, no second partner, no diluted positioning. If UDB is in your market, it is yours.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Equity in Your Bank</div>
              <div className={styles.cardText}>You own meaningful equity in the bank you deploy. As your bank grows — more customers, more verticals, more deposits — so does the value of your equity position. This is a legacy asset, not a licensing arrangement.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Profit Share</div>
              <div className={styles.cardText}>Your bank generates profit from day one. UDB structures a contractual profit share on net operating profit — so as the bank performs, your returns grow alongside it, independent of dividend decisions.</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Own */}
      <section className={`${styles.udbSection} ${styles.altSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>What You Own</span>
          <h2 className={styles.sectionHeading}>A Sovereign Asset, Not a Technology License</h2>
          <div className={styles.cardGrid2} style={{marginTop:'40px'}}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>The Bank Itself</div>
              <div className={styles.cardText}>You own equity in a licensed, operating digital bank chartered in your jurisdiction. This is a real financial institution — not a fintech app, not a payments processor. A bank. With a license. In your name.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>The Customer Relationships</div>
              <div className={styles.cardText}>Every account, every deposit, every loan relationship in your market belongs to your bank. UDB operates the platform — the customers are yours, and their lifetime value compounds into your equity.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>The Vertical Ecosystem</div>
              <div className={styles.cardText}>The bank anchors everything that follows: commodity finance, infrastructure capital, energy settlement, agricultural credit. Each vertical you build on top of your bank adds compounding value to the original position.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>A Generational Legacy</div>
              <div className={styles.cardText}>Your bank is designed to outlast you. The infrastructure, the license, the customer relationships, and the governance architecture are built to be passed down — a sovereign financial institution bearing your family's name in your country's economy.</div>
            </div>
          </div>
        </div>
      </section>

      {/* What UDB provides */}
      <section className={`${styles.udbSection} ${styles.darkSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>What UDB Provides</span>
          <h2 className={styles.sectionHeading}>You Don't Need Banking Experience.<br />We Bring It.</h2>
          <p className={styles.sectionSubtext}>You bring the most important things: the market position, the sovereign relationships, and the long-term vision. UDB brings everything required to build and operate a world-class digital bank around that foundation.</p>
          <div className={styles.cardGrid2} style={{marginTop:'40px'}}>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Technology Platform</div>
              <div className={styles.cardText}>The complete digital banking stack — core engine, mobile channels, payments infrastructure, KYC/AML — built on AWS global infrastructure and deployed in your jurisdiction.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>License &amp; Regulatory Pathway</div>
              <div className={styles.cardText}>UDB guides your banking license strategy from application through approval. We manage every regulatory obligation — local, regional, and international — so you focus on relationships, not compliance paperwork.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Operations &amp; Management</div>
              <div className={styles.cardText}>24/7 managed operations: call centers, compliance monitoring, AML, risk management, and technical operations. UDB runs the bank. You govern it.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Board Representation</div>
              <div className={styles.cardText}>UDB takes a seat on the board of every bank it deploys. This ensures platform alignment, governance standards, and operational excellence are maintained at the institutional level — protecting your investment and your reputation.</div>
            </div>
          </div>
        </div>
      </section>

      {/* USG Advantage */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>The Broader Network</span>
          <h2 className={styles.sectionHeading}>Backed by the USG Network Across 110+ Countries</h2>
          <p className={styles.sectionSubtext}>Unified Digital Banking is a subsidiary of Unified State Group — a global organization with active trust and connectivity to sovereign leadership across 110+ countries and 800+ family offices. Your bank enters a network, not just a platform.</p>
          <div className={styles.cardGrid3} style={{marginTop:'40px'}}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Sovereign Relationships</div>
              <div className={styles.cardText}>USG's network of sovereign governments, Fortune 500 corporations, and principal family offices creates cross-border capital flow and commercial opportunities that extend well beyond your domestic market.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Cross-Border Settlement</div>
              <div className={styles.cardText}>Your bank connects to UDB's global financial rails — enabling cross-border settlement, international correspondent banking relationships, and access to $6B+ in processed stablecoin volume through Yellow Card.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>$15M+ Technology Capital Deployed</div>
              <div className={styles.cardText}>The platform you're deploying represents over $15M in technology capital already built, tested, and operating live. You are not funding a build — you are entering a proven, capitalized system.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.udbSection} ${styles.ctaSection}`}>
        <div className={styles.udbContainer}>
          <h2 className={styles.ctaHeading}>This position is available to one family per country.</h2>
          <p className={styles.ctaSubtext}>Exclusivity is not a feature — it is the architecture. If your market is open and you're ready to establish your position, the conversation starts here.</p>
          <Link href="/udb/apply" className={styles.btnPrimary}>Begin the Conversation</Link>
        </div>
      </section>

    </UDBLayout>
  )
}
