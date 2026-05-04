import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from '../styles/UDB.module.css'

function UDBNavbar() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [router.pathname])

  const isActive = (path) => router.pathname === path || router.pathname.startsWith(path + '/')

  const navLinks = [
    { href: '/udb', label: 'Overview' },
    { href: '/udb/platform', label: 'Platform' },
    { href: '/udb/how-it-works', label: 'How It Works' },
    { href: '/udb/security', label: 'Security & Compliance' },
    { href: '/udb/ownership', label: 'Your Ownership' },
  ]

  return (
    <nav className={`${styles.udbNav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.udbNavInner}>
        <Link href="/udb" className={styles.udbWordmark}>
          <span className={styles.udbWordmarkMain}>Unified Digital Banking</span>
        </Link>

        <div className={`${styles.udbNavLinks} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.udbNavLink} ${isActive(href) && href !== '/udb' ? styles.active : router.pathname === '/udb' && href === '/udb' ? styles.active : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link href="/udb/portal" className={`${styles.udbNavLink} ${styles.udbNavCta}`}>
            Client Portal
          </Link>
        </div>

        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

function UDBFooter() {
  return (
    <footer className={styles.udbFooter}>
      <div className={styles.udbFooterInner}>
        <div className={styles.udbFooterBrand}>
          <div className={styles.udbFooterWordmark}>Unified Digital Banking</div>
          <p className={styles.udbFooterTagline}>A complete banking ecosystem for principal families and sovereign institutions in emerging markets.</p>
          <a href="https://www.unifieddigitalgroup.com" target="_blank" rel="noopener noreferrer" className={styles.udbFooterParent}>
            A Unified Digital Group Company
          </a>
        </div>
        <div className={styles.udbFooterCols}>
          <div className={styles.udbFooterCol}>
            <div className={styles.udbFooterColHeading}>The Platform</div>
            <Link href="/udb" className={styles.udbFooterLink}>Overview</Link>
            <Link href="/udb/platform" className={styles.udbFooterLink}>Platform</Link>
            <Link href="/udb/how-it-works" className={styles.udbFooterLink}>How It Works</Link>
            <Link href="/udb/security" className={styles.udbFooterLink}>Security &amp; Compliance</Link>
            <Link href="/udb/partners" className={styles.udbFooterLink}>Technology Partners</Link>
          </div>
          <div className={styles.udbFooterCol}>
            <div className={styles.udbFooterColHeading}>Ownership</div>
            <Link href="/udb/ownership" className={styles.udbFooterLink}>Your Ownership</Link>
            <Link href="/udb/markets" className={styles.udbFooterLink}>Target Markets</Link>
            <Link href="/udb/apply" className={styles.udbFooterLink}>Apply</Link>
            <Link href="/udb/portal" className={styles.udbFooterLink}>Client Portal</Link>
          </div>
          <div className={styles.udbFooterCol}>
            <div className={styles.udbFooterColHeading}>Unified Digital Group</div>
            <a href="/who-we-are" className={styles.udbFooterLink}>Who We Are</a>
            <a href="/who-we-serve" className={styles.udbFooterLink}>Who We Serve</a>
            <a href="/what-we-do" className={styles.udbFooterLink}>What We Do</a>
            <a href="/team" className={styles.udbFooterLink}>The Team</a>
            <a href="/contact-us" className={styles.udbFooterLink}>Contact Us</a>
          </div>
        </div>
      </div>
      <div className={styles.udbFooterBottom}>
        <p className={styles.udbFooterCopy}>&copy; {new Date().getFullYear()} Unified Digital Banking. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function UDBLayout({ children, title = 'Unified Digital Banking (UDB)', description = 'A fully managed, cloud-native banking orchestration engine designed for growth and emerging markets.' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.udbPage}>
        <UDBNavbar />
        <main>{children}</main>
        <UDBFooter />
      </div>
    </>
  )
}
