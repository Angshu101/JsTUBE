import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
function Signup(){
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
      <Card variant={"outlined"} style={{
        width:400,
        padding:20
      }}>
      <TextField 
      id="filled-basic" 
      label="email" 
      variant="filled"
      fullWidth={true} />
      
      <TextField id="filled-basic" label="password" variant="filled" type='password' fullWidth={true} />
      <br/><br/>
      <Button size={'large'} variant="contained">SignUP</Button>
      </Card>
      </div>
    </div>

}
export default Signup