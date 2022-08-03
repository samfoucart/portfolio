import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
