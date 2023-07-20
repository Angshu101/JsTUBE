import { useState } from "react"
import { useEffect } from "react"
import { Card } from "@mui/material";
import { Button, Typography } from "@mui/material";
function AddCourse() {
    const [courses,setCourse]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/admin/courses",{
            method:"GET",
            headers:
            {
                    "Content-type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("token")
            }
        }).then(resp => resp.json()).then(data =>{
            console.log(data);
            setCourse(data.courses);//from backend
        })
    },[])
    return <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center"
    }}>
    TODO: 
    {/* try using grid in mui material */}
    List of courses
    {courses.map(course => {
        return <Course course={course}/>}
       )}
     
    </div>
}
 function Course(props) {
    console.log("from exported function");
    return <Card style={{
        margin:10,
        width:300,
        minHeight:200,
        
    }}>
      <Typography textAlign={"center"} variant="h6">{props.course.title}</Typography>
      <Typography textAlign={"center"} variant="h5">{props.course.description}</Typography>
      <img src={props.course.imageLink} style={{width:300 ,minHeight:20}}></img>
    </Card>
}
export default AddCourse