import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
function Signin() {
    return <div>
    
    <div style={{
        padding:100,
        marginBottom:0,
        display:'flex',
        justifyContent:'center',
        height:0

    }}>
    <Typography variant={"h4"}>Welcome Back Sign in </Typography>    
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
      id="filled-basic" 
      label="email" 
      variant="filled"
      fullWidth={true} />
      
      <TextField id="filled-basic" label="password" variant="filled" type='password' fullWidth={true} />
      <br/><br/>
      <Button >Signin</Button>
      </Card>
      </div>
    </div>
}
export default Signin