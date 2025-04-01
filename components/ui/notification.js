import classes from './notification.module.css';
import NotificationContext from '../../store/notificationcontext';
import { useContext } from 'react';
import ReactDOM from 'react-dom'
function Notification(props) {
  const { title, message, status } = props;
  const { hideNotification } = useContext(NotificationContext)

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  if (status === 'pending') {
    statusClasses = classes.pending;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal((
    <div className={cssClasses} onClick={hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  ), document.getElementById('notifications'));
}

export default Notification;
