import React from 'react';
// import './Home.css';
import Navbar from './Navbar';
// import { Switch, Route } from 'react-router-dom';
import Card from './Card';
import Content from './Content';
import Footer from './Footer';
import Middle from './Middle';
import CommentBox from './CommentBox';


function App() {
    return (

        <div>
            <Navbar />
            <Content />
            <Card />
            <Middle />
            <CommentBox />
            <Footer />

        </div>

    )
}

export default App;
