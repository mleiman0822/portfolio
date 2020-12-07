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
          <a>
            <div className="btn col-12">North Dakota Dental Foundation</div>
          </a>
          Created a full stack inventory management system for NDDF in Fargo,
          North Dakota. The North Dakota Dental Foundation is a non-profit
          organization that provides dental equipment to dentists with the
          mission to provide oral health to those who are unable to get it.
          <br />
          <br />
          <div>
            <Button
              className="gitHubButton"
              href="https://github.com/North-Dakota-Dental-Foundation/dental-rental"
            >
              {" "}
              GitHub
            </Button>
          </div>
        </div>
        <div className="col-12 col-lg-5 App rounded my-2 mx-2 p-2">
          <a>
            <div className="btn col-12">RINX</div>
          </a>
          Final Solo Project for EDA. This is something that im proud of as it
          combines my love of hockey with technology. This is a full featured
          CRUD app that allows users to see ice rinks around their city, with
          the ability to add new rinks(with admin access), add rinks to your
          favorites, and check the status of a rink. This app uses A WeatherBox
          and a MapBox API.
          <div>
            <Button
              className="gitHubButton"
              href="https://github.com/mleiman0822/Solo-Project-Rinx"
            >
              {" "}
              GitHub
            </Button>
            {(" ", " ", " ")}
            <Button
              className="gitHubButton"
              href="https://calm-scrubland-45507.herokuapp.com/#/home"
            >
              {" "}
              Heroku
            </Button>
          </div>
        </div>
        <div className="col-12 col-lg-5 App rounded my-2 mx-2 p-2">
          <div>
            <a>
              <div className="btn col-12">Movie Gallery</div>
            </a>
          </div>
          <div>
            This application allows users to select from a list of movies and
            gives them the ability to edit some aspects and details of each
            movie.
            <br />
            <br />
            <div>
              <Button
                className="gitHubButton"
                href="https://github.com/mleiman0822/movie-sagas"
              >
                {" "}
                GitHub
              </Button>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-5 App rounded my-2 mx-2 p-2">
          <div>
            <a>
              <div className="btn col-12">React-Gallery</div>
            </a>
          </div>
          Social Media type application that was made with React. Contains the
          ability to like photos. Uses Bootstrap.
          <div>
            <br />
            <br />
            <Button
              className="gitHubButton"
              href="https://github.com/mleiman0822/react-gallery"
            >
              {" "}
              GitHub
            </Button>
          </div>
        </div>{" "}
      </div>
      <div>
        <br />
        <Button variant="dark" href="https://github.com/mleiman0822">
          Check out some more of my projects on GitHub
        </Button>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
export default Projects;
