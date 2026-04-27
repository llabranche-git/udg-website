import Head from 'next/head'
import styles from '../styles/ContactUs.module.css'

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us — Unified Digital Group</title>
        <meta name="description" content="Contact Unified Digital Group to discuss your ambitious visions." />
      </Head>

      <div className="inner-banner">
        <div className="base-container">
          <h1>Get in touch</h1>
          <h2>Ready to Transform Your Legacy?</h2>
          <p className={styles.bannerSub}>Contact Unified Digital Group to discuss your ambitious visions.</p>
        </div>
      </div>

      <section className="section-white">
        <div className="base-container">
          <div className={styles.layout}>
            <div className={styles.leftCol}>
              <div className={styles.emailBlock}>
                <p className={styles.emailLabel}>Email Us</p>
                <a href="mailto:info@unifieddigitalgroup.com" className={styles.email}>info@unifieddigitalgroup.com</a>
              </div>
              <div className={styles.categories}>
                <div className={styles.category}><span className={styles.catNum}>01</span><span className={styles.catName}>General Inquiries</span></div>
                <div className={styles.category}><span className={styles.catNum}>02</span><span className={styles.catName}>Partnerships &amp; Collaborations</span></div>
                <div className={styles.category}><span className={styles.catNum}>03</span><span className={styles.catName}>Support &amp; Assistance</span></div>
              </div>
              <div className={styles.offices}>
                <p className={styles.officesLabel}>Our Offices</p>
                <div className={styles.officeList}>
                  {['Scottsdale', 'New Jersey', 'Atlanta', 'Lagos', 'Bellevue', 'Abu Dhabi', 'Dubai'].map(city => (
                    <span key={city} className={styles.city}>{city}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.rightCol}>
              <h2 className={styles.formTitle}>Send us a Message</h2>
              <form className={styles.form} action="mailto:info@unifieddigitalgroup.com" method="post" encType="text/plain">
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject">
                    <option value="General Inquiries">General Inquiries</option>
                    <option value="Partnerships & Collaborations">Partnerships &amp; Collaborations</option>
                    <option value="Support & Assistance">Support &amp; Assistance</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Tell us about your vision..." rows={6} required />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Send Message
                  <span style={{display:'flex',alignItems:'center'}}>
                    <img src="/assets/arrow-right-up.svg" alt="" width="18" height="18" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
