import React from "react";


interface BlogPostState {
    loading: boolean;
    failed: boolean;
    post: string | undefined;
}

export default class BlogPost extends React.Component<{filename: string}, BlogPostState> {

    constructor(filename: string) {
        super({filename});
        this.state = {loading: true, failed: false, post: undefined};
    }
    
    async componentDidMount() {
        let postText: string | undefined = await fetchBlogPost();
        if (typeof(postText) === undefined) {
            this.setState({loading: false, failed: true, post: postText});
        } else {
            this.setState({loading: false, failed: false, post: postText});
        }
        console.log(postText);
    }

    render() {
        return (
            typeof(this.state.post) === undefined?
                <div>
                    undefined
                </div>
            :
                <div>
                    <p>
                        {this.state.loading? "still loading": "done loading"}
                    </p>
                    <div>
                        <div dangerouslySetInnerHTML={{__html: this.state.post === undefined? "": this.state.post}}>
                        </div>
                    </div>
                </div>
                
        )
    }
}

async function fetchBlogPost(): Promise<string | undefined> {
    let response: Response = await fetch('/posts/test.html');
    return await response.text();
}
