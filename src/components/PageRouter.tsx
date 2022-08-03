import { HashRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import BlogPost from "../pages/BlogPost";
import BlogPosts from "../pages/BlogPosts";

export default function PageRouter() {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path="posts" element={<BlogPosts />} />
                        <Route path="posts/:postId" element={<BlogPost />} />
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    )
}