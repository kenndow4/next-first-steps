

import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import ActiveLink from "../active-link/ActiveLink";


const Navbar = () => {

const nav = [
    {path:"/about", title:"About"},
    {path:"/contact", title:"Contact"},
   
];

    return ( 
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
<Link href={"/"} className="flex items-center">
<HomeIcon className="mr-2"/>
<span >Home</span>
</Link>
<div className="flex flex-1"></div>
{nav.map(nav=>(
    <ActiveLink key={nav.path} path={nav.path} text={nav.title}/>
))}
        </nav>
     );
}
 
export default Navbar;