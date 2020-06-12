import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const postData = [
    {id:1,message:"my first post",likeCount:1},
    {id:2,message:"yes",likeCount:11},
    {id:3,message:"no",likeCount:22},
    {id:4,message:"true",likeCount:8},
    {id:5,message:"false",likeCount:6},
]

const dialogsData = [
    {id:"1" , name:"Levon"},
    {id:"2" , name:"Artur"},
    {id:"3" , name:"Maria"},
    {id:"4" , name:"Papa"},
    {id:"5" , name:"Mama"},
];

const messegesData = [
    {id:"1" , text:"hi how are you"},
    {id:"2" , text:"yo"},
    {id:"3" , text:"yes a am"},
    {id:"4" , text:"ba ba"},
    {id:"5" , text:"go go"},
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} messegesData={messegesData} dialogsData={dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
