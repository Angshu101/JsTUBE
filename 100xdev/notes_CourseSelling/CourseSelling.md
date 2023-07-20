![Image](/100xdev/notes_CourseSelling/Screenshot%20(30).png)

# Details About the Project

as you can see in the above picture whenever we are updating the details of the coursse there is rerendring happening  3 times which is bad we need better state management libraries like Redux recoil and zustand

```js
import { useState } from "react"
import { useEffect } from "react"
import { Card } from "@mui/material";
import { Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Course } from "./AddCourse";
import TextField from '@mui/material/TextField';
function CourseDetails() {
   console.log("hi from CourseDetails");
    let {courseId} =useParams(); // useParamsHooks
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
    //TODO:
    //proper approach would be to create a specific route for this function in the backend
    let course=null;
    for(let i=0;i<courses.length;i++){
        if(courses[i].id == courseId){
            course=courses[i];
        }
    }
    if(!course){
        return <div>
            loading...
        </div>
    }
    return <div >
    <div style={{
        display:"flex",
        justifyContent:"center"
    }}>
    <Course course={course}/>
    </div>
    <div>
     <UpdateCourse course={course} courses={courses} setCourse={setCourse}></UpdateCourse> 
     {/* arguments send in this are array of course and state variables "courses "& "setCourses" */}
     </div>
    </div>
}
//TODO:
//below function is getting repeated so its not implementing dry functionalities
function UpdateCourse(props) {
    console.log("hi from UpdateCourse");
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[image,setImage]=useState("");
    const course=props.course;
    const courses=props.courses;
    return <div>
    <div style={{
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
        width:"fullWidth",
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
        
        fetch("http://localhost:3000/admin/courses/"+ course.id,{
          method:"PUT",
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
        //   alert("Course Updated");
        //   //we want the things to get renderd in the screen without refreshing the page
        //   console.log(data);
        //   console.log("Bearer "+localStorage.getItem("token"))
        let updatedCourse=[]
        for(let i=0;i<courses.length;i++){
            if(courses[i].id == course.id){
                updatedCourse.push({
                    id:course.id,
                    title:title,
                    description:description,
                    price:100,
                    imageLink:image,
                    published:true
                })
            }else {
                updatedCourse.push(courses[i]);
            }
        }
        props.setCourse(updatedCourse)
        })
      }}>Update Course</Button>
      </Card>
      </div>
    </div>
}

export default CourseDetails
```