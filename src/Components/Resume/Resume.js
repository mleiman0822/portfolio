import React from "react";
import Pdf from "./files/Profile (1).pdf";
import {Button} from "react-bootstrap";
export default function Resume() {
  return (
     <div>
        <div className="content justify-content-center row my-4">
          <a
            href={Pdf}
            target="_blank"
          >
            {" "}
            <Button variant="dark">Check Out My Resume</Button>
          </a>
        </div>
        </div>

  );
}
