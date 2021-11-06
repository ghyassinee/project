import React from 'react'
import { useState,useEffect } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import InputOption from './InputOption';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import FlipMove from "react-flip-move";

function Feed() {
    const [input,setInput]=useState("");
    const [posts,setPosts]=useState([])
   useEffect(()=>{
db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>(
    setPosts(snapshot.docs.map(doc=>(
        {
            id:doc.id,
            data:doc.data(),
        }
    )))
))
   },[]);
   const sendPost = (e) => {
       e.preventDefault();
       db.collection("posts").add({
        name:'yassine',
        description:'this is a test',
        message: input,
        photourl:"",
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        
               })
               setInput("");
    
       
   }
    return (
        <div className='feed'>
             <div className='feed-inputContainer'>
             <div className='feed-input'>
                 <CreateIcon/>
                 <form>
                 <input onChange={e=>setInput(e.target.value)} type="text"/>
                 <button onClick={sendPost} type="submit">Send</button>
                 </form>
       
            </div> 
            <div className="feed-inputoptions">
            <InputOption Title='Photo' Icon={ImageIcon} color="#70B5F9"/>
            <InputOption Title='Video' Icon={SubscriptionsIcon} color="#E7A33E"/>
            <InputOption Title='Event' Icon={EventNoteIcon} color="#C0CBCD"/>
            <InputOption Title='Write article' Icon={CalendarViewDayIcon} color="#7FC15E"/>

            </div>
            </div> 

            {/*posts*/}
            <FlipMove>

            {posts.map(({id,data:{name,description,message,photourl}}) =>(
                <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photourl={photourl}
                />
            ))}
            </FlipMove>

        </div>
    )
}

export default Feed
