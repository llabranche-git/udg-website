import Head from 'next/head'
import Link from 'next/link'
import CtaSection from '../components/CtaSection'
import styles from '../styles/Home.module.css'

const advantages = [
  { icon: '/assets/icon-lightbulb.svg', title: 'Innovation', text: 'Harnessing AI, satellites, robotics, and cloud solutions to create transformative outcomes for families and enterprises.' },
  { icon: '/assets/icon-rocket.svg', title: 'Speed', text: 'Accelerating time to value with agile, efficient delivery that turns bold visions into reality—faster.' },
  { icon: '/assets/icon-chart.svg', title: 'Scale', text: 'Delivering transformative solutions at massive scale—serving millions of people, impacting industries worth trillions in market capitalization, and mobilizing global resources and expertise to turn ambitious visions into reality.' },
  { icon: '/assets/icon-shield.svg', title: 'Trust', text: 'Building deep, strategic relationships that ensure transparency, accountability, and reliable results.' },
  { icon: '/assets/icon-ownership.svg', title: 'Ownership', text: 'Taking end-to-end responsibility for outcomes, orchestrating complex ecosystems so families can focus on growth and legacy.' },
  { icon: '/assets/icon-global.svg', title: 'Impact', text: 'Driving enduring societal, economic, and community benefits through technology, innovation, and responsible leadership.' }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Unified Digital Group (UDG)</title>
        <meta name="description" content="Unified Digital Group (UDG) delivers bold visions for the future, from reinventing supply chains to building smart cities." />
      </Head>

      {/* Hero Word Animations — inline to guarantee CSS is present in production */}
      <style>{`
        @keyframes heroWordFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .heroWord1 { opacity: 0; animation: heroWordFadeIn 1.2s ease forwards 0.4s; }
        .heroWord2 { opacity: 0; animation: heroWordFadeIn 1.2s ease forwards 0.9s; }
        .heroWord3 { opacity: 0; animation: heroWordFadeIn 1.2s ease forwards 1.4s; }
        .heroWord4 { opacity: 0; animation: heroWordFadeIn 1.2s ease forwards 1.9s; }
      `}</style>

      {/* Hero Video */}
      <section className={styles.hero}>
        <video className={styles.heroVideo} autoPlay loop muted playsInline poster="/assets/hero-poster.jpg">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}>
          <div className={styles.heroWords}>
            <span className="heroWord1" style={{display:'block',fontFamily:"'Archivo Expanded', sans-serif",fontSize:'clamp(52px,9vw,120px)',fontWeight:700,color:'#fff',lineHeight:1.0,letterSpacing:'-3px',textAlign:'center'}}>Reimagine.</span>
            <span className="heroWord2" style={{display:'block',fontFamily:"'Archivo Expanded', sans-serif",fontSize:'clamp(52px,9vw,120px)',fontWeight:700,color:'#fff',lineHeight:1.0,letterSpacing:'-3px',textAlign:'center'}}>Reinvent.</span>
            <span className="heroWord3" style={{display:'block',fontFamily:"'Archivo Expanded', sans-serif",fontSize:'clamp(52px,9vw,120px)',fontWeight:700,color:'#fff',lineHeight:1.0,letterSpacing:'-3px',textAlign:'center'}}>Redefine.</span>
            <span className="heroWord4" style={{display:'block',fontFamily:"'Archivo Expanded', sans-serif",fontSize:'clamp(28px,5vw,60px)',fontWeight:400,color:'rgba(255,255,255,0.85)',lineHeight:1.2,letterSpacing:'-1px',textAlign:'center',marginTop:'8px'}}>Your Legacy.</span>
          </div>
        </div>
      </section>

      {/* Navy intro */}
      <section className="section navy-dark-blue">
        <div className="base-container">
          <div className={styles.introWrap}>
            <h1 className={styles.introHeading}>From Legacy to Lasting Impact</h1>
            <p className={`paragraph white ${styles.introPara}`}>Unified Digital Group (UDG) empowers the world's most influential families to drive lasting societal impact through large-scale digital and economic transformation of their legacy.</p>
          </div>
        </div>
      </section>

      {/* Who We Serve — light grey, image left, text right */}
      <section className={`section light-grey ${styles.testimonialSection}`}>
        <img src="/assets/digital-transformation.jpg" alt="Digital Transformation" className={`${styles.halfImage} ${styles.imageLeft}`} />
        <div className="base-container">
          <div className={styles.testimonialContent}>
            <div className={styles.testimonialTitle}>
              <p className="paragraph">We partner exclusively with the world's most visionary, multi-generational families—leaders who shape industries, drive global innovation, and cultivate enduring legacies. Our clients are not just focused on financial success—they are committed to co-creating ventures, sharing resources, and leveraging long-term relationships to generate lasting benefits for society, all while strengthening their family legacy and global reach.</p>
              <div className="spacer-small"></div>
              <p className="paragraph"><strong>With the right strategy, technology, and partners, no vision is too bold to bring to life.</strong></p>
              <div className="spacer-m"></div>
              <Link href="/who-we-serve" className="text-link">
                Who We Serve <img src="/assets/arrow-right-up.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are — white, text left, image right */}
      <section className={`section white-bg ${styles.testimonialSection}`}>
        <img src="/assets/innovation-article.jpg" alt="Innovation" className={`${styles.halfImage} ${styles.imageRight}`} />
        <div className="base-container">
          <div className={`${styles.testimonialContent} ${styles.testimonialLeft}`}>
            <div className={styles.testimonialTitle}>
              <h1 className={styles.sectionHeading}><strong>Redefining Legacy through Unparalleled Expertise</strong></h1>
              <div className="spacer-small"></div>
              <p className="paragraph">We are a distinguished collective of globally recognized leaders from the world's most trusted technology and advisory firms, with decades of experience delivering transformative, large-scale digital solutions. What sets us apart is how we translate this expertise into value for multi-generational family offices.</p>
              <div className="spacer-small"></div>
              <p className="paragraph"><strong>We are principled. Connected. Relentless. Unified.</strong></p>
              <div className="spacer-m"></div>
              <Link href="/who-we-are" className="text-link">
                Who We Are <img src="/assets/arrow-right-up.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do — light grey, image left, text right */}
      <section className={`section light-grey ${styles.testimonialSection}`}>
        <img src="/assets/starlink.jpg" alt="Satellite connectivity" className={`${styles.halfImage} ${styles.imageLeft}`} />
        <div className="base-container">
          <div className={styles.testimonialContent}>
            <div className={styles.testimonialTitle}>
              <h1 className={styles.sectionHeading}>What We Do</h1>
              <div className="spacer-small"></div>
              <p className="paragraph"><strong>One Vision. Unified Delivery.</strong></p>
              <div className="spacer-xsmall"></div>
              <p className="paragraph">We bring together the full spectrum of technology providers—service integrators, hardware innovators, and independent software vendors—alongside family-owned enterprises to cut through complexity and drive transformation from the top down. The result: bold visions realized faster, with less friction, and impact that endures.</p>
              <div className="spacer-m"></div>
              <Link href="/what-we-do" className="text-link">
                What We Do <img src="/assets/arrow-right-up.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* UDB Spotlight */}
      <section className="section dark-background">
        <div className="base-container">
          <div className={styles.udbSpotlight}>
            <div className={styles.udbSpotlightText}>
              <p className={styles.udbSpotlightLabel}>Flagship Product</p>
              <h2 className={styles.udbSpotlightHeading}>Introducing Unified Digital Banking (UDB)</h2>
              <p className={styles.udbSpotlightBody}>UDB is UDG&apos;s fully managed, cloud-native banking platform — enabling principal families to own and operate a modern digital bank in their market. UDB deploys the full banking stack, manages it as a service, and takes an equity stake in every bank it builds.</p>
              <div className={styles.udbSpotlightStats}>
                <div className={styles.udbSpotlightStat}>
                  <span className={styles.udbSpotlightNum}>95+</span>
                  <span className={styles.udbSpotlightStatLabel}>Banks Targeted</span>
                </div>
                <div className={styles.udbSpotlightStat}>
                  <span className={styles.udbSpotlightNum}>4</span>
                  <span className={styles.udbSpotlightStatLabel}>Regions</span>
                </div>
                <div className={styles.udbSpotlightStat}>
                  <span className={styles.udbSpotlightNum}>$10–20M</span>
                  <span className={styles.udbSpotlightStatLabel}>Per Deployment</span>
                </div>
              </div>
              <Link href="/udb" className="text-link" style={{color:'#fff', marginTop:'8px'}}>
                Explore UDB <img src="/assets/arrow-right-up.svg" alt="" />
              </Link>
            </div>
            <div className={styles.udbSpotlightImage}>
              <img src="/assets/digital-transformation.jpg" alt="Unified Digital Banking" />
            </div>
          </div>
        </div>
      </section>

      {/* UDG Advantage — dark navy */}
      <section className="section dark-background">
        <div className="base-container">
          <div className={styles.advantageWrap}>
            <div className={styles.advantageTitleWrap}>
              <h2 className={styles.advantageTitle}><strong>The UDG Advantage</strong></h2>
            </div>
            <div className={styles.advantageGrid}>
              {advantages.map(item => (
                <div key={item.title} className={styles.advantageCard}>
                  <div className={styles.iconWrap}>
                    <img src={item.icon} alt={item.title} className={styles.iconImg} />
                  </div>
                  <div className={styles.iconText}>
                    <h5 className={styles.cardTitle}>{item.title}</h5>
                    <p className={styles.cardText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
