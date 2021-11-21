import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import BlogPost from './components/BlogPost';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
      <div className="App">
        <Link to="/posts">Blog Post</Link>
        {/* <BlogPost filename={"creating-portfolio-website-raw.html"}/> */}
      </div>
      </Layout>
      {/* <Outlet/> */}
    </div> 
  );
}

export default App;
