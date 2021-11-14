import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Layout>
    <div className="App">
      <BlogPost filename={"creating-portfolio-website-raw.html"}/>
    </div>
    </Layout>
  );
}

export default App;
