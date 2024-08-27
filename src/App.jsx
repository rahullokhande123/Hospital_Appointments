import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import DoctorProfile from "./pages/DoctoProfile";
import Search from "./pages/Search";
import DoctorGouravPatel from "./pages/DoctorId01";
import DoctorArunSharma from "./pages/DoctorId02";
import DoctorRituBaghel from "./pages/DoctorId03";
import DoctorVarshaGupta from "./pages/DoctorId04";

const App=()=>{
  return(
    <>
       <BrowserRouter>
               <Routes>
                      <Route path="/" element={<Layout/>}>
                             <Route index element={<Home/>}/>
                             <Route path="home" element={<Home/>}/>
                             <Route path="insert" element={<Insert/>}/>
                             <Route path="display" element={<Display/>}/>
                             <Route path="doctorprofile" element={<DoctorProfile/>}/>
                             <Route path="search" element={<Search/>}/>
                             <Route path="doctor_gourav" element={<DoctorGouravPatel/>}/>
                             <Route path="doctor_Arun" element={<DoctorArunSharma/>}/>
                             <Route path="doctor_ritu" element={<DoctorRituBaghel/>}/>
                             <Route path="doctor_varsha" element={<DoctorVarshaGupta/>}/>

                      </Route>
               </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;