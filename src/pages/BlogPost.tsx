import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// interface BlogPostState {
//     loading: boolean;
//     failed: boolean;
//     post: string;
// }

export default function BlogPost() {
    const [blogPost, setBlogPost] = useState<string | null>(null);
    const params = useParams();

    useEffect(() => {
        // const postResponse = fetch(process.env.PUBLIC_URL + `/posts-raw/${params.postId}.md`);
        const postResponse = fetch(`/posts-raw/${params.postId}.md`);
        postResponse.then((response) => {
            return response.text();
        })
        .then((data) => {
            setBlogPost(data);
        });
    }, [params]);

    return (
        <div>
            {blogPost != null ? <p>{blogPost}</p> : <p>loading</p>}
        </div>
    )
}

// export default class BlogPost extends React.Component<{filename?: string}, BlogPostState> {

//     constructor(filename?: string) {
//         super({filename});
//         this.state = {loading: true, failed: false, post: ""};
//     }
    
//     async componentDidMount() {
//         let postText: string | undefined = await this.fetchBlogPost();
//         this.setState({loading: false, failed: false, post: postText ?? ''});
//         console.log(postText);
//     }

//     render() {
//         return (
//             typeof(this.state.post) === undefined?
//                 <div>
//                     undefined
//                 </div>
//             :
//                 <div>
//                     <p>
//                         {this.state.loading? "still loading": "done loading"}
//                     </p>
//                     <div>
//                         {/* It is safe to dangerouslySetInnerHTML here because the state
//                          can only be defined by a file in the self-maintained json in the repo
//                          Users cannot upload their own posts. I am the only one able to add posts to the git repo.
//                          Otherwise, this would be vulnerable to an injection attack */}
//                         <div dangerouslySetInnerHTML={{__html: this.state.post === undefined? "": this.state.post}}>
//                         </div>
//                     </div>
//                 </div>
//         );
//     }

//     async fetchBlogPost(): Promise<string | undefined> {
//         let response: Response = await fetch(`/posts-raw/${"creating-portfolio-website-raw.html"}`);
//         return await response.text();
//     }
// }

