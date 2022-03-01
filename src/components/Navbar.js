import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


export default function NavBar() {
    return (
        <header className="bg-transparent absolute z-10 w-full">
            <div className="container mx-auto flex">
                <nav className="flex">
                    <NavLink
                     to="/"
                     exact
                     activeClassName="text-white"
                     className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Usama
                    </NavLink>
                    {/* <NavLink 
                        to="/post"
                        activeClassName="text-red-100 bg-red-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-500">
                        Blogs
                    </NavLink> */}
                    <NavLink 
                        to="/project"
                        activeClassName="text-red-100 bg-red-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-500">
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/about"
                        activeClassName="text-red-100 bg-red-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-500">
                        About Me
                    </NavLink>
                </nav>
                <div className="py-3 px-3 my-6 ml-auto">
                    <SocialIcon url="https://github.com/usamarehan557/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://www.youtube.com/channel/UChsRY6H6bsJOl8_H4cUaogA/featured" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/usama-rehan/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}