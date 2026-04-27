import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/">
              <img
                src="/assets/logo.svg"
                alt="Unified Digital Group"
                className={styles.logo}
              />
            </Link>
          </div>
          <div className={styles.links}>
            <Link href="/who-we-serve" className={styles.link}>Who We Serve</Link>
            <Link href="/who-we-are" className={styles.link}>Who We Are</Link>
            <Link href="/what-we-do" className={styles.link}>What We Do</Link>
            <Link href="/contact-us" className={styles.link}>Contact Us</Link>
          </div>
          <div className={styles.cta}>
            <Link href="/contact-us" className={styles.ctaBtn}>
              <strong>Contact Us</strong>
              <span className={styles.arrowWrap}>
                <img src="/assets/arrow-right-up.svg" alt="" />
              </span>
            </Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>©2025 Unified Digital Group. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
