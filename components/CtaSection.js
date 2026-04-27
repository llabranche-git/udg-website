import Link from 'next/link'
import styles from '../styles/CtaSection.module.css'

export default function CtaSection() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <p className={styles.tag}>Get started today</p>
        <h2 className={styles.heading}>Take Control of Your Digital Future Today</h2>
        <p className={styles.sub}>Contact us to discuss how we can transform your vision into reality.</p>
        <Link href="/contact-us" className={styles.btn}>
          <span>Contact us</span>
          <span className={styles.arrowWrap}>
            <img src="/assets/arrow-right-up.svg" alt="" />
          </span>
        </Link>
      </div>
    </section>
  )
}
