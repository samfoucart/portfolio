import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './BlogPosts.css';

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
        const blogPostListResponse = fetch(process.env.PUBLIC_URL + '/posts-raw/posts.json');
        // const blogPostListResponse = fetch('/posts-raw/posts.json');
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

    function formatBlogPosts(unformattedPosts: IBlogPostMetadata[] | null) {
        if (unformattedPosts == null) {
            return (
                <div className="post-list-container"><p>Loading...</p></div>
            );
        } else {
            return (
                <div>
                    <div className="post-list-container">
                        <div className="individual-post-metadata">
                            {unformattedPosts.map((post: IBlogPostMetadata) => {
                                return (
                                    <Link to={`/posts/${post.id}`} key={post.id}>
                                        <h2>{post.title}</h2>
                                        <div className="individual-post-metadata-inline">
                                            <p>Author: <i>{post.author}</i></p>
                                            <p>Date Created: <i>{post.date_created}</i></p>
                                            <p>Date Last Updated: <i>{post.date_last_updated}</i></p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
                
            )
            
        }

    }

    return (
        <div>
            {formatBlogPosts(blogPosts)}
            {/* <ul>
                {blogPosts != null ? blogPosts.map((blogPost: IBlogPostMetadata) => {
                    return <li key={blogPost.id}><Link to={`/posts/${blogPost.id}`} key={blogPost.id}>{blogPost.title}</Link></li>
                }) : <li>loading</li>}
            </ul> */}
            {/* <Outlet/> */}
        </div>
    );
}