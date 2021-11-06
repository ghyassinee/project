import React from 'react'
import "./sidebar.css"
import { Avatar } from '@material-ui/core'
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem=(topic)=>(
       
        <div className="sidebar-recentItem">
            <span className='sidebar-hash'>#</span>
            <p>{topic}</p>
             </div>
    )
    return (
        <div className="sidebar">
               <div className="sidebar-top">
                   <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                   <Avatar className="sidebar-avatar"/>
                   <h2>{user.displayName}</h2>
                   <h4>{user.email}</h4>
            </div>
            <div className="sidebar-stats">
            <div className="sidebar-stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">2,543</p>
                </div>
                <div className="sidebar-stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">2,543</p>
                </div>
            </div>
            <div className="sidebar-bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("GoMyCode")}
            {recentItem("javaScript")}
            {recentItem("GHOUL-Yassine")}
            {recentItem("Front-end")}
            </div>
        </div>
    )
}

export default Sidebar
