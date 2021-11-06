import { Avatar } from '@material-ui/core';
import React from 'react'
import './headeroption.css'
function HeaderOption({avatar,Icon,title,onClick}) {
    return (
        <div onClick={onClick} className="header-option">
{Icon && <Icon className="headeroption-icon"/>}
{avatar && (
    <Avatar className="headerOption-icon" src={avatar}/>
)}
        <h3 className="headeroption-title">{title}</h3>
        </div>
    );
}

export default HeaderOption