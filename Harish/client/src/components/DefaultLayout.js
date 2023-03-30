import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import './default.css';

function DefaultLayout(props) {
  
  return (
    <div>
      <div className="header bs1">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1>
                <b>
                  <Link to="/">HarishCars</Link>
                </b>
              </h1>

              <div class="navbar">
                <a href="/" style={{ color: "Blue" }}>
                  Home
                </a>
                <a href="/userbookings" style={{ color: "Blue" }}>
                  Bookings
                </a>
                <a href="/admin" style={{ color: "Blue" }}>
                  Admin
                </a>
                <a
                  onClick={() => {
                    localStorage.removeItem("user");
                    window.location.href = "/login";
                  }}
                  style={{ color: "Blue" }}
                >
                  Logout
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;

