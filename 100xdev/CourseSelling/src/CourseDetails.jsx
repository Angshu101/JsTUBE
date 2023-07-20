import { useState } from "react"
import { useEffect } from "react"
import { Card } from "@mui/material";
import { Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { atom, useRecoilValue, useSetRecoilState ,useRecoilState} from "recoil";
function CourseDetails() {
    console.log("Hi from CourseDetals 1");
    let {courseId} =useParams(); // useParamsHooks
    // const [courses,setCourse]=useState([]);
    // const [courses,setCourse]=useRecoilState([]);//even this would re render everything so we wont use this
   const setCourse=useSetRecoilState(CoursesState)
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
    return <div >
    <div style={{
        display:"flex",
        justifyContent:"center"
    }}>
    <CourseCard courseId={courseId}/>
    </div>
    <div>
     <UpdateCourse courseId={courseId}></UpdateCourse> 
     {/* arguments send in this are array of course and state variables "courses "& "setCourses" */}
     </div>
    </div>
}
//TODO:
//below function is getting repeated so its not implementing dry functionalities
function CourseCard(props) {
  const courses=useRecoilValue(CoursesState);
  var course=null;
  for(let i=0;i<courses.length;i++){
    if(courses[i].id==props.courseId){
      course=courses[i]
    }
  }
    console.log("course Card 2");
  return <Card style={{
      margin:10,
      width:300,
      minHeight:200,
      
  }}>
    <Typography textAlign={"center"} variant="h6">{course.title}</Typography> 
    <Typography textAlign={"center"} variant="h5">{course.description}</Typography>
    <img src={course.imageLink} style={{width:300 ,minHeight:20}}></img> 
  </Card>
  
}
function UpdateCourse(props) {
    console.log("hi from UpdateCourse 3");
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[image,setImage]=useState("");
    // const course=props.course;
   const[courses,setCourses]=useRecoilState(CoursesState);
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
        
        fetch("http://localhost:3000/admin/courses/"+ props.courseId,{
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
            if(courses[i].id == props.courseId){
                updatedCourse.push({
                    id:props.courseId,
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
        setCourses(updatedCourse)
        })
      }}>Update Course</Button>
      </Card>
      </div>
    </div>
}
export default CourseDetails
const CoursesState = atom({
  key: 'CoursesState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});