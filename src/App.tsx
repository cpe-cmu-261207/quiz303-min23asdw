import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import MyPost from './components/Mypost';
import Comment from './components/Comment';
import Commentdata from  './data/comments';

function App() {
// const [Comment , setComment] =  useState();
const Commentlist = Commentdata.map((data,index) => {
  return <Comment key = {index} value = {data} / > ;
})
  return (
    <div className="p-2">
      
        <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">
      <MyPost/>
      {Commentlist}

        </div>

      </div>

  );
}

export default App;
