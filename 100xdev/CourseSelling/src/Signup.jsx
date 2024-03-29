import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import {useState} from 'react'
function Signup(){
    const[email,setEmail]=useState("aa");
    const[passwod,setPassword]=useState("");
    return <div>
    <div style={{
        padding:100,
        marginBottom:0,
        display:'flex',
        justifyContent:'center',
        height:0

    }}>
    <Typography variant={"h4"}>Welcome to Coursera</Typography>    
    </div>
    <div style={{
      display:'flex',
      justifyContent:'center',
    }}>
      <Card elevation={8}  style={{
        width:400,
        padding:20,
        
      }}>
      <TextField 
      id="username" 
      label="email" 
      variant="filled"
      fullWidth={true} 
        onChange={(e)=>{
          setEmail(e.target.value);
        }}
      />
      
      <TextField 
       id="password"
       label="password" 
       variant="filled" 
       type='password' 
       onChange={(e)=>{
          setPassword(e.target.value);
       }}
       fullWidth={true} />
      <br/><br/>
      <Button size={'large'} variant={'contained'} onClick={()=>{
        // let username=document.getElementById("username").value;
        // let password=document.getElementById("password").value;
        // this is not the right way to grab the user data right way is to use custom hooks or state management
        
        fetch("http://localhost:3000/admin/signup",{
          method:"POST",
          body:JSON.stringify({
            username:email,
            password:passwod
          }),
          headers:{
            "Content-type":"application/json"
          }
        }).then(resp=>resp.json()).then(data=>{
          console.log(data);
          localStorage.setItem("token",data.token);
          window.location="/course"
        })
      }}>SignUP</Button>
      </Card>
      </div>
    </div>

}
export default Signup