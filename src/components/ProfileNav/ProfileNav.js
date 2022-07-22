import { NavLink } from "react-router-dom"
import { useAuth } from "../../Context"
import ProfileNavCSS from "./profileNav.module.css"
import Icon from '../../assests/images/avatarIcon.svg';

export const ProfileNav = () =>{
    const {loggedUser:{firstName}} = useAuth()
    return(
        <aside className={ProfileNavCSS.aside__nav}>
            <div className={ProfileNavCSS.profile}>
                <div className="avatar avatar-sm">
                    <img
                        className="img-responsive img-round"
                        src={Icon}
                        alt="avatar"
                    />
                </div>
                <div className="margin-xs">
                    <h1 className="head-sm">Hello , Welcome</h1>
                    <p className="head-sm">{firstName}</p>
                </div>
            </div>
            <div className={ProfileNavCSS.profilenav__wrapper}>
                <NavLink className="btn btn-primary btn-link d-block head-sm margin-xs" to="/profile">
                    Profile
                </NavLink>
                <NavLink className="btn btn-primary btn-link d-block head-sm margin-xs" to="/address">
                    Address
                </NavLink>
                <NavLink className="btn btn-primary btn-link d-block head-sm margin-xs" to="/order">
                    Order
                </NavLink>
            </div>
        </aside>
    )
}