import React from "react";
import { Button } from "react-bootstrap";
import Pdf from "./files/mlResume2020.pdf";
export default function Resume() {
  return (
    <div>
      <div className="content justify-content-center row my-4">
        <a href={Pdf} target="_blank">
          {" "}
          <Button variant="dark">Check Out My Resume</Button>
        </a>
      </div>
    </div>
  );
}
