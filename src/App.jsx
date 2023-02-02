import React, { Component } from 'react';
import About from './components/about';
import Home from './components/Home';
import Navbar from './components/navbar';
import Projects from './components/Projects';
import Skills from './components/skils';
import Contact from './components/Contact';


class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar/>
                <Home/>
                <Projects/>
                <Skills/>
                <About/>
                <Contact/>
            </React.Fragment>
        );
    }
}
 
export default App;