import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Redirect,useHistory } from "react-router-dom";
const Login = (props) => {

    const[email,setEmail]=useState("")
   const[password,setPassword] =useState("")
   const [defaultemail,setDefaultEmail]=useState('admin');
   const [defaultPassword,setDefaultPassword]=useState('admin')
   const [users,setUsers]=useState([])
   const history =useHistory()


   useEffect(()=>{
    //    var userLogin=localStorage.getItem("users")
    //    setUsers(JSON.parse(userLogin))
   },[])

const emailChangeHandler=async(e)=>{
    setEmail(e.target.value)
}

const PasswordChangeHandler=async(e)=>{
    setPassword(e.target.value)
}

const loginhandler=(e)=>{
    let data={
        email:email,password:password
    }
    // console.log(data,"data")
    axios.post("http://localhost:5000/user/login",data)
    .then((res)=>{
    //   return res.json(data)
        console.log("response",res.json(data));
    })
    .catch(err=>{
        console.log(err)
    })
e.preventDefault()

    if(email===defaultemail && password===defaultPassword)
    {
        history.push('/')
    }
if(data!==null && data.length>0 && data.some((user)=>user.email===email && user.password===password)){
    history.push('/')
}
else{
    email!=="admin"&&  alert("credntial wrng")
    // alert("please wait for admin procedings for true")
    return <h1>Something went wrong.</h1>
}

}



// const loginhandler=()=>{
//     if(email===defaultemail && password===defaultPassword)
//     {
//         history.push('/')
//     }
// if(users!==null && users.length>0 && users.some((user)=>user.userEmail===email && user.password===password)){
//     history.push('/')
// }
// else{
//     email!=="admin"&&  alert("credntial wrng")
//     // alert("please wait for admin procedings for true")
//     return <h1>Something went wrong.</h1>
// }
// }
    return (
        <div>
           <h3>Login</h3>
           <div>
           Email:     <input placeholder="Email" onChange={emailChangeHandler} />
           </div>
           <div>
           Password: <input placeholder="Password"onChange={PasswordChangeHandler} />
           </div>
           <button onClick={loginhandler} >Login</button>
        </div>
    )
}

export default Login
