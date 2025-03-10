import { Outlet } from 'react-router'
import Footer from './common/Footer'
// import Navbar from './Navbar';

export const Layout = () => {
    return (
        <>  
            {/* <Navbar /> */}
            <Outlet/>
            {/* <Footer/> */}
        </>
    )
}
