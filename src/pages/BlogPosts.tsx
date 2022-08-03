import { useEffect, useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom";

interface IBlogPostMetadata {
    id: number,
    title: string,
    date_created: string,
    date_last_updated: string,
    author: string,
    fileName: string,
}

export default function BlogPosts() {
    const [blogPosts, setBlogPosts] = useState<IBlogPostMetadata[] | null>(null);
    const location = useLocation();

    useEffect(() => {
        // const blogPostListResponse = fetch(process.env.PUBLIC_URL + '/posts-raw/posts.json');
        const blogPostListResponse = fetch('/posts-raw/posts.json');
        blogPostListResponse.then((response: Response) => {
            return response.json();
        })
        .then((data: IBlogPostMetadata[]) => {
            const newBlogPosts: IBlogPostMetadata[] = data.map((blogPost): IBlogPostMetadata => {
                return blogPost;
            });
            setBlogPosts(newBlogPosts);
        });

        return (() => {
            setBlogPosts(null);
        });

    }, [location]);

    return (
        <div>
            <ul>
                {blogPosts != null ? blogPosts.map((blogPost: IBlogPostMetadata) => {
                    return <li key={blogPost.id}><Link to={`/posts/${blogPost.id}`} key={blogPost.id}>{blogPost.title}</Link></li>
                }) : <li>loading</li>}
            </ul>
            <Outlet/>
        </div>
    )
}