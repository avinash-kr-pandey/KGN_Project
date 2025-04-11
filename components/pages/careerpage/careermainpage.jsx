import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

const CareerMainPage = () => {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="row align-items-center">
        {/* Left Side - Globe Image (always left) */}
        <div className="col-12 col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
          <Image
            src="/assets/img/faq/globe.png"
            alt="Globe"
            className="img-fluid"
            style={{ maxHeight: "600px", opacity: 0.9 }}
            width={500}
            height={600}
          />
        </div>

        {/* Right Side - Text */}
        <div className="col-12 col-lg-8 px-4">
          <div className="mb-3 text-center text-lg-start">
            <span className="badge bg-light text-dark border border-secondary rounded-pill px-3 py-2">
              Our Vision
            </span>
          </div>
          <h2 className="fw-bold mb-3 text-center text-lg-start">
            We work together,
            <br className="d-none d-md-block" />
            wherever we are
          </h2>
          <p className="text-muted mb-4 text-center text-lg-start">
            Experience the freedom and flexibility of our remote work culture,
            where distance is no barrier to collaboration and innovation. Join
            our global team and work together seamlessly from anywhere in the
            world.
          </p>
          <hr />
          <div className="d-flex align-items-center mb-3 justify-content-center justify-content-lg-start">
            <div className="me-3">
              <div
                className="bg-dark rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "40px", height: "40px" }}
              >
                <Image
                  src="/assets/img/faq/ball.png"
                  alt="Avatar"
                  className="img-fluid rounded-circle"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div>
              <strong>Andrea Nelton</strong>
              <div className="text-muted" style={{ fontSize: "0.875rem" }}>
                Founder & CEO Grapeproject
              </div>
            </div>
          </div>
          <p className="text-center text-lg-start">
            <strong>Dear Team,</strong>
          </p>
          <p className="text-muted text-center text-lg-start">
            As we navigate through the challenges and opportunities ahead, I
            want to express my sincere gratitude for your unwavering dedication
            and hard work. Each one of you plays a crucial role in our journey
            towards success, and I am continually inspired by your passion and
            commitment.
          </p>
          <div className="text-success fs-3 text-center text-lg-start">“”</div>
        </div>
      </div>
    </div>
  );
};

export default CareerMainPage;
