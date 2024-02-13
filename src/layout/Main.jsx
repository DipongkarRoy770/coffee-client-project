import { Outlet } from "react-router-dom";
import Footer from "../page/Footer";
import Navbar from "../page/Navbar";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;