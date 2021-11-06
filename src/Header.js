import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';
export default function Header() {
    const dispatch=useDispatch();
    const logoutofapp=()=>{
dispatch(logout())
auth.signOut();
    };
    return (
        <div className="header">
            <div className="header-left">
           <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""/> 
           <div className="header-search">
            <SearchIcon/>
            <input placeholder="search..." type="text"/>
            </div>
        </div>  
        <div className="header-right">
            
            <HeaderOption title="Home" Icon={HomeIcon}/>
            <HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>
            <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
            <HeaderOption title="Messaging" Icon={ChatIcon}/>
            <HeaderOption title="Notification" Icon={NotificationsIcon}/>
            <HeaderOption onClick={logoutofapp} avatar="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/236890350_572578230426617_976091065678473993_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=kM6wAblTx2IAX-cf301&_nc_ht=scontent.ftun16-1.fna&oh=9ce790c831e15cbb07f52f6f4a93b54e&oe=6135D7BB" title="{user.displayName}"/>

        </div>
        </div>
    )
}
