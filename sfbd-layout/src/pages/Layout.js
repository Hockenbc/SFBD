import { Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/Layout.css';


const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;