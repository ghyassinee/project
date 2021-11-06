import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import "./Post.css"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import InputOption from './InputOption';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
const Post=forwardRef(({name , description,message ,photourl},ref) =>{
    return (
        <div ref={ref} className="post">
                <div className="post-header">
            <Avatar/>
            <div className="post-info">
            <h2>{name}</h2>
            <p>{description}</p>
            </div>

            </div>  
            <div className="post-body">
                <p>{message}</p>
            </div>
            <div className="post-buttons">
<InputOption Icon={ThumbUpAltIcon} Title ='like' color="gray"/>
<InputOption Icon={ChatIcon} Title ='Comment' color="gray"/>
<InputOption Icon={ShareIcon} Title ='Share' color="gray"/>
<InputOption Icon={SendIcon} Title ='Send' color="gray"/>

            </div>
        </div>
    );
})

export default Post
