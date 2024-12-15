import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/goddess.jpg";
import img2 from "../../assets/plank.jpg";
import img4 from "../../assets/yoga20.jpg";
import "./Learn.css";

const Learn = () => {
  return (
    <div className="learnContainer gap-3">
      <div className="grid ">
        <div className="row d-flex justify-content-around">
          <Card className="p-3 m-3 col-md-4 " style={{ maxWidth: "20rem" }}>
            <Card.Img variant="top" src={img1} className="object-fit-cover" />
            <Card.Body>
              <Card.Title>Goddess Pose</Card.Title>
              <Link to="/learn/yog1">
                <button className="btn btn-primary">Start Pose</button>
              </Link>
            </Card.Body>
          </Card>
          <Card
            className="p-3 m-3  col-md-4  "
            style={{ maxWidth: "20rem", maxHeight: "20rem" }}
          >
            <Card.Img
              variant="top"
              className="mx-auto"
              src={img2}
              style={{ maxWidth: "12rem", alignItems: "center" }}
            />
            <Card.Body>
              <Card.Title>Plank</Card.Title>
              <Link to="/learn/yog2">
                <button className="btn btn-primary mx-auto flex align-items-center justify-content-center ">
                  Start Pose
                </button>
              </Link>
            </Card.Body>
          </Card>
          <Card
            className="p-3 m-3  col-md-4 "
            style={{ maxWidth: "20rem", maxHeight: "30rem" }}
          >
            <Card.Img variant="top" src={img4} />
            <Card.Body>
              <Card.Title>Tree Pose</Card.Title>
              <Link to="/learn/yog3">
                <button className="btn btn-primary">Start Pose</button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Learn;
