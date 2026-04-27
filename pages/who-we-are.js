import Head from 'next/head'
import Link from 'next/link'
import CtaSection from '../components/CtaSection'
import styles from '../styles/WhoWeAre.module.css'

const principles = [
  {
    icon: '/assets/icon-lightbulb.svg',
    title: 'Innovation',
    text: 'Breakthroughs in AI, cloud, robotics, satellites, and other emerging technologies provide customers and partners with first-mover advantage and bold new opportunities for growth.'
  },
  {
    icon: '/assets/icon-rocket.svg',
    title: 'Speed',
    text: 'Direct engagement at the C-suite level with customers and partners accelerates transformation. Trusted relationships and unmatched access remove barriers, align decision-makers, and drive rapid change—turning vision into action without delay.'
  },
  {
    icon: '/assets/icon-chart.svg',
    title: 'Scale',
    text: 'Global resources, partnerships, and capital are mobilized at unmatched scale, delivering solutions that touch millions of lives, generate trillions in economic value, and reshape industries.'
  },
  {
    icon: '/assets/icon-shield.svg',
    title: 'Trust',
    text: 'Transparency, accountability, and consistent delivery at the highest levels forge enduring trust. Leaders gain the confidence to commit to bold strategies, knowing outcomes will match promises.'
  },
  {
    icon: '/assets/icon-ownership.svg',
    title: 'Ownership',
    text: 'Every engagement is driven end-to-end with accountability, commitment, and integrity. Success is fully aligned with client outcomes, ensuring delivery that lasts.'
  },
  {
    icon: '/assets/icon-global.svg',
    title: 'Impact',
    text: 'Initiatives are designed for inclusive and sustainable progress, extending beyond business to empower societies and leave a legacy for generations to come.'
  }
]

export default function WhoWeAre() {
  return (
    <>
      <Head>
        <title>Who We Are — Unified Digital Group</title>
        <meta name="description" content="Empowering Families to Redefine Their Legacy and Shape the Future." />
      </Head>

      <div className="inner-banner">
        <div className="base-container">
          <h1>Who we are</h1>
          <h2>Empowering Families to Redefine Their Legacy and Shape the Future.</h2>
        </div>
      </div>

      {/* Vision */}
      <section className="section-grey">
        <div className="base-container">
          <div className={styles.visionBlock}>
            <h2 className={styles.sectionTitle}>Our Vision</h2>
            <p className={styles.body}>At Unified Digital Group, our vision is to empower the world's most influential families to create enduring prosperity and transformative impact. By uniting the ecosystems of advisors, integrators, innovators, and technology pioneers, we unlock the extraordinary potential of digital transformation to advance industries, strengthen communities, and accelerate growth in emerging markets. We believe technology is a force that, when guided with purpose and responsibility, can build lasting legacies—not only for families of influence, but for society at large.</p>
            <p className={styles.body}>We help visionary families turn ambition into reality. We exist to deliver transformative digital outcomes that enable multi-generational family offices to redefine their legacies—on their own terms. From reimagining supply chains to building smart cities, our mission is to make the extraordinary achievable. With the right strategy, technology, and partners, no vision is too bold to bring to life.</p>
            <Link href="/contact-us" className="pill-btn" style={{marginTop:'12px'}}>
              Get In Touch
              <span style={{display:'flex',alignItems:'center'}}>
                <img src="/assets/arrow-right-up.svg" alt="" width="18" height="18" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-white">
        <div className="base-container">
          <h2 className={styles.sectionTitle}>Unmatched Expertise, Unified Impact</h2>
          <p className={styles.body}>UDG is a collective of proven leaders drawn from the world's most respected advisory and technology organizations, bringing decades of experience in enterprise delivery, consulting, and cutting-edge innovation. Our strength lies not just in what we know, but in how we put that expertise to work for families of influence.</p>
          <p className={styles.body}>We bridge two worlds that rarely intersect: the leadership boards of family-owned conglomerates and the decision-making circles of global technology providers. By understanding both ecosystems—their motivations, priorities, and levers of influence—we unlock progress from the very top, accelerate strategic investments, and drive transformative outcomes.</p>
          <p className={styles.body}>We ensure bold visions move from concept to reality with precision, speed, and scale.</p>
          <p className={styles.body}>Equally important is connecting families with each other. Just as we orchestrate complex technology partnerships, we identify shared priorities, complementary capabilities, and opportunities for collaboration across multi-generational family offices. This networked approach amplifies growth, drives innovation, and strengthens legacies.</p>
          <p className={styles.body}>For our customers, this translates into extraordinary advantage: whether co-creating an agentic AI product, integrating robotics into next-generation manufacturing, partnering with a chip innovator to close a market gap, deploying satellite-enabled connectivity, or orchestrating multi-industry initiatives across a family's enterprises.</p>
        </div>
      </section>

      {/* Purpose */}
      <section className="section-grey">
        <div className="base-container">
          <h2 className={styles.sectionTitle}>Driven by Purpose, Guided by Responsibility</h2>
          <p className={styles.body}>Technology holds extraordinary potential to transform economies, societies, and lives. Realizing that potential requires not only vision and investment, but also the highest standards of ethics, governance, and inclusion.</p>
          <p className={styles.body}>Families of influence have long understood their ability to shape markets and communities for generations to come. At UDG, we share that understanding. Our role is to help channel the transformative power of technology in ways that strengthen economies, open new opportunities, and ensure progress benefits the many, not just the few.</p>
          <p className={styles.body}>We believe legacy is not only measured by growth, but by the positive and lasting impact it leaves behind.</p>
        </div>
      </section>

      {/* Roots */}
      <section className="section-white">
        <div className="base-container">
          <h2 className={styles.sectionTitle}>Our Roots</h2>
          <h3 className={styles.subTitle}>A Unified Force for Bold vision, Trusted delivery, and World-defining innovation</h3>
          <p className={styles.body}>UDG was born from Unified Cloud Services (UCS), a proven leader in AWS innovation and enterprise-scale cloud delivery. As our impact grew beyond the boundaries of "cloud," so did our ambition. UDG reflects a broader mission: harnessing technology, global expertise, and trusted partnerships to help visionary families not just grow their legacies—but strengthen economies, empower communities, and change the world.</p>
        </div>
      </section>

      {/* Brand Principles */}
      <section className="section-navy">
        <div className="base-container">
          <h2 className={styles.whiteTitle}>Our Brand Principles</h2>
          <p className={styles.whiteBody}>We exist to help visionary families create lasting impact through technology and trust. We push the boundaries of innovation with AI, cloud, and emerging tech—delivering fast, at scale, and across continents. We take full ownership of outcomes, building transparent partnerships that transform ambition into enduring results.</p>
          <div className={styles.principlesGrid}>
            {principles.map(p => (
              <div key={p.title} className={styles.principleCard}>
                <div className={styles.iconWrap}>
                  <img src={p.icon} alt={p.title} className={styles.iconImg} />
                </div>
                <div>
                  <h5 className={styles.cardTitle}>{p.title}</h5>
                  <p className={styles.cardText}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />

      {/* News */}
      <section className="section-white">
        <div className="base-container">
          <h2 className={styles.sectionTitle}>News</h2>
          <p className={styles.newsTag}>Expert tips and emerging industry trends</p>
          <div className={styles.newsCard}>
            <p className={styles.newsDate}>BELLEVUE, Wash., Sept. 25, 2025</p>
            <h3 className={styles.newsHeadline}>Unified State Group launches Unified Digital Group, a new technology division, and names Leo LaBranche as CEO</h3>
            <p className={styles.newsBody}>Unified State Group, a premier global business architect and conglomerate, today announced the establishment of its wholly owned subsidiary, Unified Digital Group (UDG).</p>
          </div>
        </div>
      </section>
    </>
  )
}
