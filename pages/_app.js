import Layout from '../components/layout/layout'
import Notification from '../components/ui/notification';
import { NotificationContextProvider } from '../store/notificationcontext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />
        <Notification title="sample" message="sample" status="pending" />
      </Layout>
    </NotificationContextProvider>
  )
}

export default MyApp
