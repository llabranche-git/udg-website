import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const isUDB = router.pathname.startsWith('/udb')

  return (
    <>
      {!isUDB && <Navbar />}
      <Component {...pageProps} />
      {!isUDB && <Footer />}
    </>
  )
}
