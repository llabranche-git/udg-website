import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [router.pathname])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img
            src="/assets/logo.svg"
            alt="Unified Digital Group"
            className={styles.logoImg}
          />
        </Link>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <Link href="/who-we-serve" className={`${styles.navLink} ${router.pathname === '/who-we-serve' ? styles.active : ''}`}>
            Who We Serve
          </Link>
          <Link href="/who-we-are" className={`${styles.navLink} ${router.pathname === '/who-we-are' ? styles.active : ''}`}>
            Who We Are
          </Link>
          <Link href="/what-we-do" className={`${styles.navLink} ${router.pathname === '/what-we-do' ? styles.active : ''}`}>
            What We Do
          </Link>
          <Link href="/udb" className={`${styles.navLink} ${router.pathname.startsWith('/udb') ? styles.active : ''}`}>
            UDB
          </Link>
          <Link href="/contact-us" className={styles.ctaBtn}>
            <span>Contact Us</span>
            <span className={styles.arrowWrap}>
              <img src="/assets/arrow-right-up.svg" alt="" className={styles.arrowIcon} />
            </span>
          </Link>
        </div>

        <button className={`${styles.hamburger} ${menuOpen ? styles.close : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? (
            <img src="/assets/close-btn.svg" alt="Close" width="24" height="24" />
          ) : (
            <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
              <rect y="4" width="24" height="2.5" rx="1.25" />
              <rect y="11" width="24" height="2.5" rx="1.25" />
              <rect y="18" width="24" height="2.5" rx="1.25" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
}
