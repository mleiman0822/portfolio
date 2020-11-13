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
import Tech from "../Tech/Tech";
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
              <div className="h1">Matthew T Leiman</div>

                <img
                  src={headshot}
                  alt="<photo of me and my nephew and niece>"
                  width="175em"
                  className="my-1"
                />
              </div>
              <div className="d-flex justify-content-around">
                <NavLink to="/projects" className="col-3 btn">
                  Projects
                </NavLink>
                <NavLink to="/resume" className="col-3 btn">
                  Resume
                </NavLink>
                <NavLink to="/tech" className="col-3 btn">
                  Tech Known
                </NavLink>
                <NavLink to="/bio" className="col-3 btn">
                  Biography
                </NavLink>
              </div>
            </div>
            <div className="container">
              <Route exact path="/">
                <Redirect to="/tech"></Redirect>
              </Route>
              <Route exact path="/bio">
                <Bio />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>
              <Route exact path="/resume">
                <Resume />
              </Route>
              <Route exact path="/tech">
                <Tech />
              </Route>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
