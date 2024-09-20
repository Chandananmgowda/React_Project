import React from "react";
import {BrowserRouter as Router,Route,Link,Routes} from React-router-dom;

function Home(){
    return <h2>Home</h2>;
}

function About(){

    return<h2>About</h2>;
}

function RoutingDemo(){
    return(
        <Router>
            <div>
                <nav>
                    <link to="/">Home</link> | <link to="/about">About</link>
                
                </nav>
                <Routers>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/" element={<About/>}/>
                </Routers>
            </div>
        </Router>
    );
}
