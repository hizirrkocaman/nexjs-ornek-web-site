import Link from 'next/link'

import styles from './nav.module.css'

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a className={styles.link}>Ana Sayfa</a>
      </Link>

      <Link href="/about">
        <a style={{color : 'red'}} >Hakkımda</a>
      </Link>
    </nav>
  )
}

export default Navigation
