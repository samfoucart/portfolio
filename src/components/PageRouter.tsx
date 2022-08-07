import { HashRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import BlogPost from "../pages/BlogPost/BlogPost";
import BlogPosts from "../pages/BlogPost/BlogPosts";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export default function PageRouter() {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path="posts" element={<BlogPosts />} />
                        <Route path="posts/:postId" element={<BlogPost />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    )
}