import icon from '../../assets/img/notification-icon.svg'

import './styles.css'
function NotificationButton() {
    return (
        <div className="dsmeta-red-bottom">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton