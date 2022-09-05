import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './BlogPost.css';
import hljs from "highlight.js";

interface BlogPostState {
    loading: boolean;
    failed: boolean;
    post: string;
}

export default function BlogPost() {
    const [blogPost, setBlogPost] = useState<BlogPostState>({loading: true, failed: false, post: ""});
    const params = useParams();

    useEffect(() => {
        marked.setOptions({
            highlight: (code, lang) => {
                const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                return hljs.highlight(code, { language }).value;
            },
            langPrefix: 'hljs language-',
        });
        const postResponse = fetch(process.env.PUBLIC_URL + `/posts-raw/${params.postId}.md`);
        // const postResponse = fetch(`/posts-raw/${params.postId}.md`);
        postResponse.then((response) => {
            return response.text();
        })
        .then((data) => {
            const sanitizedPostHtml: string = DOMPurify.sanitize(marked.parse(data));
            setBlogPost({loading: false, failed: false, post: sanitizedPostHtml});
        })
        .catch((error) => {
            console.log(error);
            setBlogPost({loading: false, failed: true, post: ""});
        });
    }, [params]);

    function loading() {
        if (blogPost.loading === true) {
            return (
                <div>
                    <p>Loading</p>
                </div>
            );
        }

        if (blogPost.loading === false && blogPost.failed === true) {
            return (
                <div>
                    <p>Failed to load {params.postId}</p>
                </div>
            );
        } else {
            return (
                <div 
                dangerouslySetInnerHTML={{ __html: blogPost.post}}
                style={{overflowWrap: 'break-word'}}/>
            );
        }
    }

    return (
        <div className="post-container">
            {loading()}
        </div>
    )
}
