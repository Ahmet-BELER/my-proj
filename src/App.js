import React from "react";
import Navbar from "./components/navbar/navbar";
import Product from "./components/product/Product"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
import Notfound from "./components/notfound/Notfound"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "./App.css"

 const App = () =>  {


        return (
            <Router>
                <div className="App">
                    <Navbar/>

                    <Switch>

                        <Route exact path="/" component={Home} />

                        <Route path="/product" component={Product} />
                         
                        <Route path="/about" component={About} />

                        <Route path="/contact" component={Contact} />
                        
                            
                        <Route path="" component={Notfound}/>
                            
                    </Switch>
                </div>
            </Router>
        )
    }


export default App;