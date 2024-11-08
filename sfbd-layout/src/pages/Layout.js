import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/Layout.css';


const Layout = () => {
    return (
        <>
            <Header />
                <nav id="main-nav">
                    <div className="grid-container">
                        <ul id="nav-items">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/findapuppy">Find A Puppy</Link></li>
                            <li><Link to="/pictures">Pictures</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                        </ul>
                    </div>
                </nav>
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;