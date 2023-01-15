import React from 'react';
import './App.scss';
import Layout from './board/Layout';

export default function App() {
  return (
    <div className='App'>
      <div className='App__view'>
        <Layout />
      </div>
    </div>
  )
}
