import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHead from '../components/navbar'
import FooterBar from '../components/footer'
import UserContextProvider from '../components/UserProviderContext'
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <NavbarHead />
      <Component {...pageProps} />
      <FooterBar />
    </UserContextProvider>
  )
}

export default MyApp
