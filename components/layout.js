import Navigation from '../components/navigation'
import Head from 'next/head'


function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Hızır Kocaman</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main>{children}</main>

      <footer>design by hızır</footer>
    </div>
  )

}

export default Layout
