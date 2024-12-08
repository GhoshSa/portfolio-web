import React from "react"
import "./navbar.css"
import { tabs } from "../../sources"
import { Link } from "react-scroll"

const Navbar = () => {
    return (
        <navbar className="navbar flex">
            <div className="box flex-center tabs-group sidebar">
                { tabs.map((tab, index) => (
                        <Link to={ tab.id } smooth={ true } spy={ true } className="tab" activeClass="active" key={ index }>
                            { tab.name }
                        </Link>
                    ))
                }
            </div>
            <div>
                
            </div>
        </navbar>
    )
}

export default Navbar