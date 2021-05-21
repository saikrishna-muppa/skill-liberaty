import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Redirect,useHistory } from "react-router-dom";

const Signup = (props) => {

    const [authemail, setAuthEmail] = useState("");
  const [authpassword, setAuthPassword] = useState("");
  const [users, setUsers] = useState([]);
  const history =useHistory()
  useEffect(() => {
    var userLogin = localStorage.getItem("users");
    if (userLogin !== null) {
      setUsers(JSON.parse(userLogin));
    } else {
      setUsers([]);
    }
  }, []);

  const emailChangeHandler = (event) => {
    setAuthEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setAuthPassword(event.target.value);
  };

  const signupHandler = () => {

const data=new FormData();
data.append("email",authemail);
data.append("password",authpassword)

axios.post("http://localhost:5000/user/signup",data)  
.then((res)=>{
  console.log("respons regisrter",res.message)
})
.catch(err=>{
  console.log(err)
})


    let temp = users;
    temp.push({
      email:authemail,
      password:authpassword
    })
    // temp.push({
    //   userEmail: authemail,
    //   password: authpassword,
    //   status: false,
    // });
    if (authemail === "" || authpassword === "") {
      alert("please be enter fileds corret details");
    } else {
      setUsers(temp);
      console.log("temp",temp)
      // localStorage.setItem("users", JSON.stringify(users));
      history.push("/login");
    }
  };

  return (
    <div>
      <h3>Signup</h3>
      <div>
        Email: <input placeholder="Email" onChange={emailChangeHandler} />
      </div>
      <div>
        Password:{" "}
        <input placeholder="Password" onChange={passwordChangeHandler} />
      </div>
      <button onClick={signupHandler} value="SignUp">
        SignUp
      </button>
    </div>
  );
};

export default Signup;
