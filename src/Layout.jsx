import { Link,Outlet } from "react-router-dom";
import Topbar from "./pages/Topbar";

const Layout=()=>{
    return(
        <>
        <Topbar/>
        <Outlet/>
        </>
    )
}
export default Layout;