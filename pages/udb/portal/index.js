import Head from 'next/head'
import styles from '../../../styles/UDB.module.css'

export default function PortalLogin() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Portal coming soon. Contact your UDB representative for access.')
  }

  return (
    <>
      <Head>
        <title>Partner Portal | Unified Digital Banking</title>
      </Head>
      <div className={styles.portalPage} style={{background:'#F0F4F8'}}>
        <div className={styles.portalCard}>
          <div className={styles.portalWordmark}>UDB</div>
          <p className={styles.portalSubtitle}>Partner Portal</p>

          <form onSubmit={handleSubmit}>
            <div className={styles.portalInputGroup}>
              <label className={styles.portalLabel}>Email</label>
              <input className={styles.portalInput} type="email" placeholder="your@email.com" />
            </div>
            <div className={styles.portalInputGroup}>
              <label className={styles.portalLabel}>Password</label>
              <input className={styles.portalInput} type="password" placeholder="••••••••" />
            </div>
            <button type="submit" className={styles.portalBtn}>Sign In</button>
          </form>

          <p className={styles.portalNote}>Access is by invitation only. Contact your UDB representative for credentials.</p>
        </div>
      </div>
    </>
  )
}
