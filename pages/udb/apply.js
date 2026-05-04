import { useState } from 'react'
import UDBLayout from '../../components/UDBLayout'
import styles from '../../styles/UDB.module.css'

export default function Apply() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <UDBLayout title="Apply for Partnership | Unified Digital Banking" description="We work with a select number of principal families per market. Tell us about your vision.">
      <div className={styles.innerBanner}>
        <div className={styles.udbContainer} style={{width:'100%'}}>
          <p className={styles.bannerLabel}>Partnership Application</p>
          <h1 className={styles.bannerHeading}>Apply for Partnership</h1>
          <p className={styles.bannerSub}>We work with a select number of principal families per market. Tell us about your vision and we will be in touch.</p>
        </div>
      </div>

      <section className={styles.formSection}>
        <div className={styles.udbContainer}>
          {submitted ? (
            <div className={styles.formCard} style={{textAlign:'center'}}>
              <div style={{fontSize:'48px', marginBottom:'24px'}}>✓</div>
              <h2 style={{fontFamily:"'Archivo Expanded', sans-serif", fontSize:'28px', fontWeight:700, color:'#0A1628', letterSpacing:'-0.8px', marginBottom:'16px'}}>Application Received</h2>
              <p style={{fontFamily:"'Work Sans', sans-serif", fontSize:'16px', fontWeight:300, color:'#64748B', lineHeight:1.7}}>Thank you for your interest in Unified Digital Banking. Our team will review your application and be in touch within 5 business days.</p>
            </div>
          ) : (
            <form className={styles.formCard} onSubmit={handleSubmit}>
              <p className={styles.sectionLabel} style={{marginBottom:'8px'}}>Confidential</p>
              <h2 style={{fontFamily:"'Archivo Expanded', sans-serif", fontSize:'28px', fontWeight:700, color:'#0A1628', letterSpacing:'-0.8px', marginBottom:'8px'}}>Expression of Interest</h2>
              <p style={{fontFamily:"'Work Sans', sans-serif", fontSize:'15px', fontWeight:300, color:'#64748B', lineHeight:1.6, marginBottom:'40px'}}>All submissions are treated with strict confidentiality. This is an initial conversation, not a commitment.</p>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Full Name *</label>
                <input className={styles.formInput} type="text" required placeholder="Your full name" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Family / Organization Name *</label>
                <input className={styles.formInput} type="text" required placeholder="Your family or organization name" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email Address *</label>
                <input className={styles.formInput} type="email" required placeholder="your@email.com" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Country / Target Market *</label>
                <input className={styles.formInput} type="text" required placeholder="e.g. Nigeria, Kenya, Indonesia" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Do you currently hold a banking license?</label>
                <select className={styles.formSelect}>
                  <option value="">Select an option</option>
                  <option>Yes — we hold an active banking license</option>
                  <option>In Process — license application underway</option>
                  <option>No — greenfield deployment</option>
                  <option>Acquisition — we are exploring acquiring a licensed bank</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Deployment Tier Interest</label>
                <select className={styles.formSelect}>
                  <option value="">Select an option</option>
                  <option>UHNW Tier — $20M implementation / $7M/yr managed services</option>
                  <option>Standard Tier — $10M implementation / $5M/yr managed services</option>
                  <option>Not Sure — I would like to discuss</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tell Us About Your Vision</label>
                <textarea className={styles.formTextarea} placeholder="Describe your vision for banking in your market, your family's position, and what you hope to achieve..." />
              </div>
              <button type="submit" className={styles.formSubmit}>Submit Application</button>
              <p className={styles.formDisclaimer}>Submissions are reviewed by the UDB team. We will be in touch within 5 business days. All information is treated with strict confidentiality.</p>
            </form>
          )}
        </div>
      </section>
    </UDBLayout>
  )
}
