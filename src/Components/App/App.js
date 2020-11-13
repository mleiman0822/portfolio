import React from "react";
import "./App.css";
import {
  HashRouter as Router,
  NavLink,
  Route,
  Redirect,
} from "react-router-dom";
import headshot from "../../me123.jpg";
import Bio from "../Bio/Bio";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
class App extends React.Component {
  state = {
    component: "Biography",
  };
  render() {
    return (
      <Router>
        <div className="body overflow-auto">
          <div className="row ">
            <div className="App col-12 ">
              <div className="header">

                <img
                  src={headshot}
                  alt="<photo of me and my nephew and niece>"
                  width="175em"
                  className="my-1"
                  style={{borderRadius:"10px"}}
                />
                              <div className="h1">Matthew T Leiman</div>

              </div>
              <div className="d-flex justify-content-around"
              >
                <NavLink                   style={{borderRadius:"3px"}}
 to="/projects" className="col-3 btn">
                  Projects
                </NavLink >
                <NavLink  style={{borderRadius:"3px"}} to="/resume" className="col-3 btn">
                  Resume
                </NavLink>

                <NavLink style={{borderRadius:"3px"}} to="/bio" className="col-3 btn">
                  About Me
                </NavLink>
              </div>
            </div>
            <div className="container">
             
              <Route exact path="/bio">
                <Bio />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>
              <Route exact path="/resume">
                <Resume />
              </Route>
              
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
