import Head from 'next/head'
import styles from '../../../styles/UDB.module.css'

const navItems = ['Dashboard', 'Documents', 'Deal Status', 'Team', 'Settings']

export default function PortalDashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | UDB Partner Portal</title>
      </Head>
      <div className={styles.dashWrapper}>
        <aside className={styles.dashSidebar}>
          <div className={styles.dashSidebarWordmark}>UDB</div>
          <nav className={styles.dashNav}>
            {navItems.map((item, i) => (
              <div key={item} className={`${styles.dashNavItem} ${i === 0 ? styles.active : ''}`}>{item}</div>
            ))}
          </nav>
        </aside>
        <main className={styles.dashMain}>
          <div className={styles.dashBanner}>
            🚧 &nbsp;Portal is in development. Full access coming soon. Your UDB team will be in touch.
          </div>
          <div className={styles.dashHeader}>
            <h1 className={styles.dashTitle}>Welcome, [Family Name]</h1>
            <p className={styles.dashSubtitle}>Your UDB Partner Portal</p>
          </div>
          <div className={styles.dashCards}>
            {[['Your Documents', '0 files'],['Deal Stage', 'Pending'],['Next Steps', 'Awaiting setup']].map(([label, value]) => (
              <div key={label} className={styles.dashCard}>
                <div className={styles.dashCardLabel}>{label}</div>
                <div className={styles.dashCardValue}>{value}</div>
              </div>
            ))}
          </div>
          <div className={styles.dashEmptyState}>
            <div style={{fontSize:'40px', marginBottom:'16px'}}>📄</div>
            <h3 className={styles.dashEmptyTitle}>No Documents Yet</h3>
            <p className={styles.dashEmptyText}>Your UDB team will upload your deal documents here — NDAs, term sheets, legal agreements, and deployment materials.</p>
          </div>
        </main>
      </div>
    </>
  )
}
