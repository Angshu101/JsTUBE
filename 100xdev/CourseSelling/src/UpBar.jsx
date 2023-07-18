import { Button, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
function UpBar() {
    const navigateTo = useNavigate();
    const [useremail,SetEmail]=useState(null);
    useEffect(()=>{
        fetch("http://localhost:3000/admin/me",{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        }).then(resp => resp.json()).then(data =>{
            if(data.username){
                SetEmail(data.username);
            }
            console.log(data);
        })

    },[]);//will render only once
   
    if(useremail){
        return <div style={{
            display:"flex",
            justifyContent:"space-between",
            padding:4
        }}>
            <div>
            <Typography>
                Coursera Course
            </Typography>
            </div>
            <div>        
           <span>
            {useremail}
           </span>
            <Button size={'small'} variant="contained" style={{
                marginLeft:10
            }} onClick={()=>{
                localStorage.setItem("token",null);
                window.location="/signup"
            }}>Logout</Button>
            </div>
        </div>
    
    }
    return <div style={{
        display:"flex",
        justifyContent:"space-between",
        padding:4
    }}>
        <div>
        <Typography>
            Coursera Course
        </Typography>
        </div>
        <div>        
        <Button size={'small'} variant="contained"
        onClick={()=>{
          navigateTo("/signup")
        }}>SignUP</Button>
        <Button size={'small'} variant="contained" style={{
            marginLeft:10
        }} onClick={()=>{
            navigateTo("/login")
        }}>Signin</Button>
        </div>
    </div>

}

export default UpBar

// using window.location is bad so we need to change that cause everytime routing happens page needs to reload thats not a good thing cause refresing the page everytime will make it slow