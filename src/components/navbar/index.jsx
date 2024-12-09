import "./navbar.css"
import { tabs } from "../../sources"
import { Link } from "react-scroll"
import Logo from "../../common/logo"
import { useState } from "react"
import { HiMenu } from "react-icons/hi"
import { FaTimes } from "react-icons/fa"
import SocialHandles from "../../common/socialhandles"

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false)
    return (
        <navbar className="navbar flex">
            { openSidebar ? <div className="overlay" onClick={() => setOpenSidebar(!openSidebar)}/> : "" }
            <Logo/>
            <div className={ `box flex-center tabs-group sidebar ${ openSidebar ? "visible" : "" }` }>
                <div className="flex-center icon-wrapper cancel-btn" onClick={() => setOpenSidebar(!openSidebar)}>
                    <FaTimes/>
                </div>
                {
                    tabs.map((tab, index) => (
                        <Link to={ tab.id } smooth={ true } spy={ true } className="tab" activeClass="active" key={ index } onClick={() => setOpenSidebar(false)}>
                            { tab.name }
                        </Link>
                    ))
                }
            </div>
            <SocialHandles/>
            <div className="box flex-center buttons">
                <Link to="contact" smooth={ true } className="btn primary contact-btn">Hire me</Link>
                <Link to="services" smooth={ true } className="btn services-btn">Services</Link>
                <div className="flex-center icon-wrapper menu-btn" onClick={() => setOpenSidebar(!openSidebar)}>
                    <HiMenu/>
                </div>
            </div>
        </navbar>
    )
}

export default Navbar