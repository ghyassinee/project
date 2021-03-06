import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { login ,logout,selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{
auth.onAuthStateChanged(userAuth=> {
if(userAuth){
//log in
dispatch(login({
email:userAuth.email,
uid:userAuth.uid,
displayName:userAuth.displayName,
photoUrl:userAuth.photoURL,
}));
}
else{
//log out
dispatch(logout());
}
})
  },)
  return (
    <div className="app">
      <Header/>
     { (!user)?(
       <Login />
     ):(
      <div className="app-body">
            {/*App Body*/}
              {/*Sidebar*/}
              <Sidebar/>
                {/*Feed*/}
                <Feed/>
                  {/*Widgets*/}
          </div>
     )}
          </div>
  );
}

export default App;
