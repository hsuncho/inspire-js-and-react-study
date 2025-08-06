import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// react-router-dom을 이용한 화면 전환
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import LibraryPage from "./page/LibraryPage"
// import CommentPage from './page/CommentPage';
// import TodoPage from './page/TodoPage';
// import UserPage from './page/rendering/UserPage';
// import StateSample from './page/state/StateSample';
// import NotificationPage from './page/hook/NotificationPage';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <LibraryPage /> */}
//     {/* <CommentPage /> */}
//     {/* <TodoPage /> */}
//     {/* <UserPage /> */}
//     {/* <StateSample /> */}
//     <NotificationPage />
//   </React.StrictMode>
// );

import NotificationPage from './page/hook/NotificationPage';
import SignUpPage from './page/form/SignUpPage';
import ContextApp from './page/ContextApp';
import BlogApp from './BlogApp';
import WeatherApp from './WeatherApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <NotificationPage />
    // <SignUpPage />
    // <ContextApp />
    // <BlogApp />
    <WeatherApp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
