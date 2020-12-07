import React from "react";
import { Button } from "react-bootstrap";
const Projects = () => {
  return (
    <div className="container">
      <div className="d-flex row justify-content-center">
        <div className="col-12 my-2 mx-2">
          <h3>Created Projects</h3>
        </div>
        <div className="col-12 col-lg-5 App rounded my-2 mx-2 p-2">
          <a href="https://github.com/mleiman0822/Solo-Project-Rinx">
            <div className="btn col-12">RINX</div>
          </a>
          Final Solo Project for EDA. This is something that im proud of as it
          combines my love of hockey with technology. This is a full featured
          CRUD app that allows users to see ice rinks around their city, with
          the ability to add new rinks(with admin access), add rinks to your
          favorites, and check the status of a rink. This app uses A WeatherBox
          and a MapBox API.
        </div>
        <div className="col-12 col-lg-5 App rounded my-2 mx-2 p-2">
          <div>
            <a href="https://github.com/mleiman0822/movie-sagas">
              <div className="btn col-12">Movie Gallery</div>
            </a>
          </div>
          <div>
            This application allows users to select from a list of movies and
            gives them the ability to edit some aspects and details of each
            movie.
          </div>
        </div>
        <div className="col-12 col-xl-5 App rounded my-2 mx-2 p-2">
          <a href="https://github.com/mleiman0822/redux-dashboard">
            <div className="btn col-12">Redux Dashboard</div>
          </a>
          A Redux Application that allows users to change speed using a
          controller. This is accomplished using reducers to transfer props
          between components.
        </div>
        <div className="col-12 col-xl-5 App rounded my-2 mx-2 p-2">
          <div>
            <a href="https://github.com/mleiman0822/react-gallery">
              <div className="btn col-12">React-Gallery</div>
            </a>
          </div>
          Social Media type application that was made with React. Contains the
          ability to like photos. Uses Bootstrap.
        </div>{" "}
      </div>
      <div>
        <Button variant="dark" href="https://github.com/mleiman0822">
          Check out some more of my projects on GitHub
        </Button>
      </div>
    </div>
  );
};
export default Projects;
