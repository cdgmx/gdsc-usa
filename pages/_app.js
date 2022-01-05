import '../styles/globals.css'
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'

function MyApp({ Component, pageProps }) {
 return (
  <Layout>
  <Nav/>
  <div className="container">
      <Component {...pageProps} />
  </div>
  <Footer/>
</Layout>
  )
}

export default MyApp
