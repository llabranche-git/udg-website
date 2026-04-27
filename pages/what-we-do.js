import Head from 'next/head'
import Link from 'next/link'
import CtaSection from '../components/CtaSection'
import styles from '../styles/WhatWeDo.module.css'

const services = [
  {
    num: '01',
    title: 'Digital Transformation & System Integration',
    text: 'Unify and elevate enterprise systems within and across family businesses to capitalize on the most valuable asset you have, your data. By combining your vision with the expertise of the world\'s leading system integrators and technology providers, systems and data are integrated, processes streamlined, and enterprise-wide efficiency and/or entirely new business models are unlocked—creating measurable impact across every function.'
  },
  {
    num: '02',
    title: 'AI & Intelligent Systems Implementation',
    text: 'Deploy intelligent systems tailored to your domain. From Large Language Models to specialized AI frameworks, solutions are implemented in partnership with top AI innovators such as OpenAI, Anthropic, Bedrock, and xAI—bringing next-generation capabilities that have practical, impactful, applications to expand what\'s possible.'
  },
  {
    num: '03',
    title: 'AI & Cloud Infrastructure Deployment',
    text: 'Build resilient, scalable infrastructure for AI at scale. UDG delivers end-to-end deployment—from land and GW power generation to million-GPU AI factories supporting cloud capabilities—is designed to support long-term innovation. Global resources and supply networks ensure operations are secure, efficient, and prepared for future growth.'
  },
  {
    num: '04',
    title: 'Agentic Product Development',
    text: 'Turn ambitious ideas and differentiated datasets into high-impact AI products. Industry-specific, agentic AI products are designed around key initiatives, automating complex challenges and unlocking growth. From concept to deployment, innovation is embedded into every stage to elevate organizational capabilities.'
  },
  {
    num: '05',
    title: 'Physical Technology Implementation',
    text: 'New business outcomes, and the continued evolution of AI technologies, may require physical deployment and integration to be realized. UDG brings next-generation solutions and partnerships to life across satellite internet connectivity, private GSM networks, IoT devices, robotics, surveillance, and more. By combining strategic planning with hands-on expertise, complex technology is transformed into practical, enterprise-ready assets that expand capabilities and accelerate results.'
  }
]

export default function WhatWeDo() {
  return (
    <>
      <Head>
        <title>What We Do — Unified Digital Group</title>
        <meta name="description" content="Co-Creating Bold Visions, Delivering Transformative Outcomes." />
      </Head>

      <div className="inner-banner">
        <div className="base-container">
          <h1>What We Do</h1>
          <h2>Co-Creating Bold Visions, Delivering Transformative Outcomes</h2>
        </div>
      </div>

      {/* Intro */}
      <section className="section-grey">
        <div className="base-container">
          <div className={styles.introBlock}>
            <h2 className={styles.sectionTitle}>Co-Creating Bold Visions and Transforming Them into Reality</h2>
            <p className={styles.body}>UDG partners with visionary families to <strong>define and expand ambitious goals</strong>, bringing elite talent, strategic insight, and cutting-edge technology to the table. Every initiative is shaped alongside you, ensuring that your vision is bolder, smarter, and fully realized at scale.</p>
            <p className={styles.body}>Large transformation at the scale of family conglomerates is a complex endeavor. Realizing bold ambitions often requires the combined effort of multiple specialized providers: change management consultants, industry &amp; domain SMEs, custom app developers, satellite and networking specialists, AI infrastructure leaders, cloud providers, energy and datacenter operators, and more. There are thousands of potential providers and infinite combinations for these services. UDG brings decades of experience in this domain, to confidently identify, and orchestrate, the right combination of capabilities required to deliver on your vision.</p>
            <p className={styles.body}>UDG&apos;s role is to deliver business outcomes through digital means, by identifying and mobilizing the best-of-breed—to act as the integrator of integrators, orchestrating and simplifying the entire ecosystem into a fit-for-purpose team built around your vision. By demystifying complexity and managing end-to-end execution, we take ownership of delivery and sign up for outcomes, allowing families to focus on what matters most: building prosperity, scaling legacy, and <strong>delivering impact to society at large.</strong></p>
            <Link href="/contact-us" className="pill-btn" style={{marginTop:'12px'}}>
              Get In Touch
              <span style={{display:'flex',alignItems:'center'}}>
                <img src="/assets/arrow-right-up.svg" alt="" width="18" height="18" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-white">
        <div className="base-container">
          <div className={styles.servicesList}>
            {services.map(s => (
              <div key={s.num} className={styles.serviceItem}>
                <div className={styles.serviceNum}>{s.num}</div>
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceText}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Bold Visions */}
      <section className="section-grey">
        <div className="base-container">
          <h2 className={styles.sectionTitle}>How Bold Visions Are Turned Into Reality</h2>
          <p className={styles.body}>UDG delivers transformative outcomes through a fit-for-purpose operating model designed for the world&apos;s most ambitious families. From the outset, practice leaders engage alongside clients in solution design and vision shaping, ensuring every initiative is co-created, strategically aligned, and execution-ready.</p>
          <p className={styles.body}>Global teams of industry SMEs, pre-sales solution architects, and prototyping experts bring <strong>deep domain knowledge</strong> across Supply Chain &amp; Logistics, Financial Services, Energy, Healthcare, Public Sector, Telecommunications, and Retail. Solution architects provide specialization in networking, telecom, satellite, silicon, virtualization, ERP, data &amp; analytics, cloud, and AI, combining technical depth with strategic insight. These capabilities are distributed globally and available at scale, through our strategic partnerships, enabling in-market delivery wherever impact is required.</p>
          <p className={styles.body}>By prioritizing business results and aligning priorities through equity and SPV structures, UDG <strong>accelerates outcomes</strong> while maintaining competitive pricing and trusted relationships. This integrated approach—melding equity stake, elite talent, and global strategic partners—is our unique differentiator, allowing families to <strong>think bigger</strong>, <strong>act faster</strong>, and achieve outcomes that others deem impossible.</p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
