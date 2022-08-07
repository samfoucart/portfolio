import { Link } from "react-router-dom";
import './LayoutHeader.css';

export default function LayoutHeader() {
    return (
        <div>
            <nav className="top-nav">
                <Link to={"/"}>Home</Link>
                <Link to={"/posts"}>Blog</Link>
                <Link to={"/projects"}>Projects</Link>
                <Link to={"/contact"}>Contact</Link>
            </nav>
            <div className="top-nav-spacer"/>
        </div>
    );
}