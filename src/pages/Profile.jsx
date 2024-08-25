

const Profile=()=>{

    return(
        <>
        <div style={{display:"flex"}}>
             {/* <h1>Profile</h1> */}
             <div>
                <div style={{display:"flex"}}>
                    <div>
                         <img src="/public/r1.jpg" width="300px" height="300px" 
                          style={{border:"1px solid white",borderRadius:"50%",margin:"80px"}} />
                    </div>
                    <div style={{marginTop:"150px"}}>
                     <h1 >Name : Rahul Lokhande </h1> <br />
                     <h1 style={{fontSize:"25px"}}>Fullstack Python Devoloper </h1> <br />
                     <h2 style={{fontSize:"20px"}}>Git-Hub : <a style={{textDecoration:"none"}} href="https://github.com/rahullokhande123">https://github.com/rahullokhande123</a></h2> <br />
                     <h2 style={{fontSize:"20px"}}>LinkedIn : <a style={{textDecoration:"none"}} href="www.linkedin.com/in/rahul-lokhande-">www.linkedin.com/in/rahul-lokhande-</a></h2> <br />
                     
                    </div>
                 </div>
   
             </div>
        </div>
        </>
    )
}
export default Profile;