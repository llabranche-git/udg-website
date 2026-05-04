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
    { href: '/udb/markets', label: 'Markets' },
    { href: '/udb/ownership', label: 'Your Ownership' },
    { href: '/udb/partners', label: 'Partners' },
    { href: '/udb/team', label: 'Team' },
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
          <Link href="/udb/apply" className={`${styles.udbNavLink} ${styles.udbNavCta}`}>
            Apply
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
      <p className={styles.udbFooterText}>
        Unified Digital Banking (UDB) is a subsidiary of{' '}
        <a href="https://www.unifieddigitalgroup.com" target="_blank" rel="noopener noreferrer">
          Unified Digital Group
        </a>
        . All rights reserved. &copy; {new Date().getFullYear()}
      </p>
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
