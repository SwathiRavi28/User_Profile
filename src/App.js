import React from 'react';
import { BrowserRouter as Router, Route  } from "react-router-dom";


// import componentS
import Main from "./components/Main"
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2.js";
import Screen3 from "./components/Screen3";
import Screen4 from "./components/Screen4";
import Screen5 from "./components/Screen5";
import Screen6 from "./components/Screen6";
import Screen7 from "./components/Screen7";


export default function App() {
  return (
    <Router>
       
        <div className="wrapper">
            
            <div id="content">
                <Route path="/" exact component={Main} />
                <Route path="/name" component={Screen1} />
                <Route path="/detailS" component={Screen2} />
                <Route path="/signup" component={Screen3} />
                <Route path="/mobileverify" component={Screen4} />
                <Route path="/end" component={Screen5} />
                <Route path="/upload" component={Screen6} />
                <Route path="/dashboard" component={Screen7} />
            </div>
        </div>
    </Router>
  );
}

