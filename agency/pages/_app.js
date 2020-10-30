import '../styles/globals.css'
import Layout from './../component/Layout.jsx'

function MyApp({ Component, pageProps }) {
  return( 
    <>
      <Layout >
          <Component {...pageProps} />         
      </Layout>
    </>
  )
}

export default MyApp
