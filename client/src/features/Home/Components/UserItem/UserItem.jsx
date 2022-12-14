import Avatar from "../../../../Components/Avatar/Avatar";
import classNames from "classnames/bind";

import styles from './UserItem.module.scss'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

const UserItem = (props) => {
    const { user } = props

    return ( 
        <Link to={`/Profile/${user._id}`} className={cx("item")}>
            <div className={cx("item-info")}>
                <Avatar
                    src={user.info.avatarUrl} 
                    width= '32px'
                    alt={user.info.name}
                    />
                <div className={cx("item-info-name")}>{user.info.name}</div>
            </div>

        <div className={cx("follow-btn")}><strong>Follow</strong></div>

    </Link>

     );
}
 
export default UserItem;