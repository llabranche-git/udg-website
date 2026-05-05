import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'

const heroSlides = [
  {
    label: 'Ownership',
    headline: 'Own the Modern Digital Bank in Your Market.',
    sub: 'You bring the market position. We bring everything else — technology, compliance, operations, and the team.',
    image: '/assets/udb-hero.jpg',
    link: '/udb/ownership',
    cta: 'Your Ownership',
  },
  {
    label: 'Platform Scale',
    headline: 'Banking Infrastructure for a Billion People.',
    sub: 'Architected for the scale of a continent. 150M+ customers per bank. A billion-person platform across all deployments.',
    image: '/assets/inf3.jpg',
    link: '/udb/platform',
    cta: 'Explore the Platform',
  },
  {
    label: 'Digital Currency',
    headline: 'Stable Digital Currency. Built Into Every Bank.',
    sub: 'FX risk eliminated at the infrastructure level. Cross-border transfers, remittances, commodity settlement — all in stable value.',
    image: '/assets/inf9.jpg',
    link: '/udb/platform',
    cta: 'Explore the Platform',
  },
  {
    label: 'Total Population Reach',
    headline: 'Every Customer. Every Phone. Every Market.',
    sub: 'USSD banking on any mobile phone, any 2G network, no smartphone required. Your TAM is every mobile subscriber in the country.',
    image: '/assets/inf10.jpg',
    link: '/udb/platform',
    cta: 'Explore the Platform',
  },
  {
    label: '200+ Languages',
    headline: 'The Population Speaks Every Language. Your Bank Will Too.',
    sub: 'AI-powered localisation in 200+ languages — not just translation, but full cultural adaptation at the platform level.',
    image: '/assets/inf12.jpg',
    link: '/udb/platform',
    cta: 'Explore the Platform',
  },
  {
    label: 'Security & Compliance',
    headline: 'Born Compliant. Stays Compliant.',
    sub: '112 standards. 80+ unified controls. AML, FATF Travel Rule, and Tier-1 certifications — built in from day one.',
    image: '/assets/inf4.jpg',
    link: '/udb/security',
    cta: 'Security & Compliance',
  },
]

function SlideContent({ slide, active, goTo }) {
  return (
    <>
      <div className={styles.heroCarouselOverlay} />
      <div className={styles.heroCarouselContent}>
        <div className={styles.heroCarouselLeft}>
          <span className={styles.heroCarouselLabel}>{slide.label}</span>
          <h1 className={styles.heroCarouselHeadline}>{slide.headline}</h1>
        </div>
        <div className={styles.heroCarouselRight}>
          <p className={styles.heroCarouselSub}>{slide.sub}</p>
          <Link href={slide.link} className={styles.udbHeroBtnText}>{slide.cta} →</Link>
          <div className={styles.heroDots} style={{marginTop:'24px'}}>
            {heroSlides.map((_, i) => (
              <button
                key={i}
                className={`${styles.heroDot} ${i === active ? styles.heroDotActive : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function HeroCarousel() {
  const [active, setActive] = useState(0)
  const [next, setNext] = useState(null)
  const [sliding, setSliding] = useState(false)

  const advance = (nextIdx) => {
    if (sliding) return
    setNext(nextIdx)
    setSliding(true)
    setTimeout(() => {
      setActive(nextIdx)
      setNext(null)
      setSliding(false)
    }, 1050)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      advance((active + 1) % heroSlides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [active, sliding])

  const goTo = (idx) => {
    if (idx === active) return
    advance(idx)
  }

  return (
    <div className={styles.heroCarouselWrap}>
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`${styles.heroSlide} ${
            i === active && !sliding ? styles.heroSlideActive :
            i === active && sliding ? styles.heroSlideExiting :
            i === next && sliding ? styles.heroSlideEntering :
            styles.heroSlideHidden
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <SlideContent slide={slide} active={active} goTo={goTo} />
        </div>
      ))}
    </div>
  )
}

export default function UDBOverview() {
  return (
    <UDBLayout>
      <Head><title>Unified Digital Banking — Own a Modern Digital Bank</title></Head>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats */}
      <section className={`${styles.udbSection} ${styles.altSection}`}>
        <div className={styles.udbContainer}>
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1.4B</div>
              <div className={styles.statLabel}>Unbanked adults globally — the largest greenfield in financial services</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>$500B+</div>
              <div className={styles.statLabel}>Projected emerging-market digital financial services by 2030</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1B+</div>
              <div className={styles.statLabel}>People the platform is architected to serve across all deployments — a billion-person banking infrastructure</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>Live</div>
              <div className={styles.statLabel}>Deployed and operating today in Nigeria with a founding partner family</div>
            </div>
          </div>
        </div>
      </section>


      {/* Two Pathways */}
      <section className={`${styles.udbSection} ${styles.altSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>Two Pathways to Partnership</span>
          <h2 className={styles.sectionHeading}>New to Banking or Already in It — UDB Is Built for Both</h2>
          <div className={styles.cardGrid2} style={{marginTop:'32px'}}>
            <div className={styles.card} style={{borderTop:'4px solid #1A6FDB'}}>
              <div className={styles.cardTitle}>First-Time Bank Owners</div>
              <div className={styles.cardText}>You have the market position and the relationships. You've never owned a bank — and you don't need prior banking experience. UDB handles licensing, deployment, compliance, and operations from day one. You enter as an owner, not an operator.</div>
              <Link href="/udb/ownership" className={styles.btnText} style={{marginTop:'16px',display:'inline-block'}}>Explore this pathway →</Link>
            </div>
            <div className={styles.card} style={{borderTop:'4px solid #0A1628'}}>
              <div className={styles.cardTitle}>Existing Bank Owners</div>
              <div className={styles.cardText}>You already own one or more banks. UDB modernizes your core infrastructure, adds global financial rails, deploys a world-class compliance framework, and positions your institution to expand into new markets under the exclusive UDB country model.</div>
              <Link href="/udb/ownership" className={styles.btnText} style={{marginTop:'16px',display:'inline-block'}}>Explore this pathway →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Banking Ecosystem */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>The Platform</span>
          <h2 className={styles.sectionHeading}>A Complete Banking Ecosystem</h2>
          <p className={styles.sectionSubtext}>A comprehensive, fully managed solution engineered specifically for organizations launching sophisticated banking services without prior banking experience. UDB delivers the full stack — and manages it for the life of your partnership.</p>
          <div className={styles.cardGrid2}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Implementation &amp; Licensing</div>
              <div className={styles.cardText}>Rapid deployment with full regulatory advisory. We guide your banking license strategy from application through approval, managing every compliance obligation along the way.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Cloud &amp; Connectivity</div>
              <div className={styles.cardText}>Built on AWS global infrastructure with integrated satellite networking. 100% uptime guaranteed in remote areas — no dependence on terrestrial cable.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Global Financial Rails</div>
              <div className={styles.cardText}>Stablecoin settlement engine supporting 50+ fiat currencies and 30+ blockchains. Near-instant international settlement, invisible to your customers.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Managed Operations</div>
              <div className={styles.cardText}>24/7 multi-lingual call centers, ongoing AML and Travel Rule compliance, and real-time risk monitoring — all operated by UDB so you never need to build an ops team.</div>
            </div>
          </div>
          <div style={{textAlign:'center',marginTop:'48px'}}>
            <Link href="/udb/platform" className={styles.btnPrimary}>Explore the Full Platform</Link>
          </div>
        </div>
      </section>

      {/* 4 Differentiators */}
      <section className={`${styles.udbSection} ${styles.darkSection}`}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>What Makes UDB Different</span>
          <h2 className={styles.sectionHeading}>Four Barriers. Four Solutions.<br />One Bank That Reaches Everyone.</h2>
          <p className={styles.sectionSubtext}>Every other digital banking platform is built for the 30% of the market that already has a smartphone, a data plan, and financial literacy. UDB is built for 100% — including the 70% that everyone else has left behind.</p>
          <div className={styles.cardGrid2} style={{marginTop:'48px'}}>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Stablecoin Infrastructure</div>
              <div className={styles.cardText}>Two levels of protection. At the bank level: FX exposure is minimized and controlled — conversion happens at a defined point, not as a continuous drain on the balance sheet. At the customer level: deposits are held in stable digital currency, so customers' savings maintain real value while held in your bank. In markets where currency devaluation is a fact of life, that distinction matters enormously. The same rails power cross-border transfers, intercontinental remittances, and commodity trade settlement across 50+ currencies and 30+ blockchains.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Total Population Reach via USSD</div>
              <div className={styles.cardText}>In some of UDB's target markets, 70% of the population has no smartphone. A smartphone-only bank is a niche product. UDB delivers full banking — account opening, transfers, bill payment, loan applications — through USSD (*123# menus) on any mobile phone, on any 2G network, with no app, no internet, no data plan required. Your bank's TAM is every mobile subscriber in the country. Not a slice of it.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>200+ Language Support</div>
              <div className={styles.cardText}>Language barriers have excluded hundreds of millions of people from formal banking. UDB's Lara AI platform delivers professional, AI-driven interfaces in 200+ languages — with human-in-the-loop review to ensure cultural accuracy. Amazon Connect powers multi-lingual call centers. Whether your market speaks Hausa, Swahili, Arabic, Tagalog, or Portuguese, your bank speaks to every customer in their language.</div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.cardTitle}>Built-In Financial &amp; Digital Literacy</div>
              <div className={styles.cardText}>Across emerging markets, large segments of the population have never interacted with a formal bank. UDB includes a literacy curriculum — curated by world-renowned universities including Oxford — built directly into the platform. Created once, replicated across 200+ languages automatically, delivered via smartphone and USSD to every customer regardless of device. Your bank doesn't just open accounts. It builds the financial capability of your entire market.</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className={styles.udbSection}>
        <div className={styles.udbContainer}>
          <span className={styles.sectionLabel}>How It Works</span>
          <h2 className={styles.sectionHeading}>From Introduction to Operating Bank</h2>
          <p className={styles.sectionSubtext}>UDB follows a disciplined process — from identifying the right principal family in each country, through regulatory structuring, full platform deployment, and vertical ecosystem build-out. Every step is managed by UDB.</p>
          <div style={{marginTop:'32px'}}>
            <Link href="/udb/how-it-works" className={styles.btnPrimary}>See How It Works →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.udbSection} ${styles.ctaSection}`}>
        <div className={styles.udbContainer}>
          <h2 className={styles.ctaHeading}>Your country. Your bank. Your legacy.</h2>
          <p className={styles.ctaSubtext}>UDB works exclusively with one principal family per country. If your market is open, now is the time to establish your position.</p>
          <Link href="/udb/apply" className={styles.btnPrimary}>Begin the Conversation</Link>
        </div>
      </section>

    </UDBLayout>
  )
}
