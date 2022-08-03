import { Link } from "react-router-dom";
import './LayoutHeader.css';

export default function LayoutHeader() {
    return (
        <div>
            <nav className="top-nav">
                <Link to={"/"}>Home</Link>
                <Link to={"/posts"}>Blog</Link>
                <Link to={"/"}>About</Link>
                <Link to={"/"}>Contact</Link>
            </nav>
            <div className="top-nav-spacer"/>
        </div>
    );
}