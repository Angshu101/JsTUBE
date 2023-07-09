function Signup(){
    return <div>
    <center>
    <div style={{
        marginTop:300,
        marginBottom:50
    }}>
        <h1>Welcome To BuildXdev Courses</h1>
    </div>
    </center>
      <center><div style={{
        border:"2px solid black",
        width:400,

      }}>
      Username-<input type={'text'} ></input>
      <br/>
      Password-<input type={'password'}></input>
      <br/>
      <button>Signup</button>
      </div>
      </center>
    </div>

}

export default Signup