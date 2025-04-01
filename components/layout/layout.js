import MainNavigation from "./mainnavigation"
import Notification from '../ui/notification';
import NotificationContext from '../../store/notificationcontext';
import { useContext } from "react";

const Layout = (props) => {
    const { notification } = useContext(NotificationContext)
    return (
        <>
            <MainNavigation />
            <main>
                {props.children}
            </main>
            {notification && (
                <Notification 
                title={notification.title} 
                message={notification.message}
                status={notification.status} 
                />
            )}
        </>
    )
}

export default Layout