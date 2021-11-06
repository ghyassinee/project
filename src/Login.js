import { auth } from './firebase';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import "./Login.css"
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [profilepic,setprofilepic]=useState("");
const dispatch=useDispatch();

    const logintoapp=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.displayName,
                profileUrl:userAuth.photoURL,
            }));
        }).catch(error=>alert(error));
    };
    const register=()=>{
if(!name){
    return alert("please enter full name");
}
auth.createUserWithEmailAndPassword(email,password)
.then((userAuth) => {
    userAuth.user.updateProfile({
        displayName:name,
        photoURL:profilepic,
    })
    .then(() =>{
        dispatch(
            login({
email:userAuth.user.email,
uid:userAuth.user.uid,
displayName:name,
photoUrl:profilepic,
        }));
    });
}
).catch((error) =>alert(error));
    }
    return (
        <div className="login">
            <form>
<input type="text" onChange={e=>setName(e.target.value)} value={name}  placeholder="Fullname"/>
<input value={profilepic} onChange={e=>setprofilepic(e.target.value)} type="text" placeholder="photourl"/>
<input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="email"/>
<input value={password} onChange={e=>setPassword(e.target.value)}  type="password" placeholder="Password"/>
<button type="submit" onClick={logintoapp}>Login</button>   
            </form>
            <p>Not a member?</p>
            <span className="login-register" onClick={register}>Register Now</span>
        </div>
    )
}

export default Login
