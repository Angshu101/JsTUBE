import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import {useState} from 'react'
function Course() {
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[image,setImage]=useState("");
    return <div>
    <div style={{
        padding:100,
        marginBottom:0,
        display:'flex',
        justifyContent:'center',
        height:0

    }}>
    
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
      id="title" 
      label="title" 
      variant="filled"
      fullWidth={true} 
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
      />
      
      <TextField 
       id="description"
       label="description" 
       variant="filled" 
       onChange={(e)=>{
          setDescription(e.target.value);
       }}
       fullWidth={true} />
       <TextField 
       id="imageLink"
       label="imageLink" 
       variant="filled" 
       onChange={(e)=>{
          setImage(e.target.value);
       }}
       fullWidth={true} />
      <br/><br/>
      <Button size={'large'} variant={'contained'} onClick={()=>{
        // let username=document.getElementById("username").value;
        // let password=document.getElementById("password").value;
        // this is not the right way to grab the user data right way is to use custom hooks or state management
        
        fetch("http://localhost:3000/admin/courses",{
          method:"POST",
          body:JSON.stringify({
            title:title,
            description:description,
            price:100,
            imageLink:image,
            published:true
          }),
          headers:{
            "Content-type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("token")
          }
        }).then(resp => resp.json()).then(data =>{
          alert("Course Added");
          console.log(data);
          console.log("Bearer "+localStorage.getItem("token"))
        })
      }}>Add Course</Button>
      </Card>
      </div>
    </div>
}
export default Course