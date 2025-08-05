const solarImage = [
  "https://plus.unsplash.com/premium_photo-1682148196781-8bbcdfd7f537?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vZnRvcCUyMHNvbGFyfGVufDB8fDB8fHww",
  "https://media.istockphoto.com/id/1036698276/photo/security-camera-installation.jpg?s=612x612&w=0&k=20&c=PMh9DYw961dNlcL_0te-KiJWsP75V2BRfqZ4WB057w4=",
  "https://media.istockphoto.com/id/1059546824/photo/solar-panel-close-up-with-clear-blue-sky.jpg?s=612x612&w=0&k=20&c=fBorwxf59ChTn67Wtl8U99xQVB2IfCVu6-qXEFTEctQ=",
  "https://images.unsplash.com/photo-1509389928833-fe62aef36deb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29sYXIlMjBmYXJtfGVufDB8fDB8fHww",
];

const WorkArea = () => {
  return (
    <div className="work__process section-padding">
      <div className="container">
        <div className="row mb-70">
          <div className="col-xl-12">
            <div className="work__process-title t-center">
              <span className="subtitle-one">How It Work</span>
              <h2>Our Work Process</h2>
            </div>
          </div>
        </div>
        <div className="row g-0 dark_image">
          <div className="col-lg-3 col-sm-6 lg-mb-45">
            <div className="work__process-item">
              <p>
                <span>Step 01</span>
              </p>
              <img src={solarImage[0]} alt="Solar Assessment" />
              <h6>Solar Assessment</h6>
              <p className="des">Evaluate energy needs and site feasibility.</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 sm-mb-45">
            <div className="work__process-item">
              <p>
                <span>Step 02</span>
              </p>
              <img src={solarImage[1]} alt="Innovative Design" />
              <h6>Innovative Design</h6>
              <p className="des">Collaborate on customized solar solutions.</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 sm-mb-45">
            <div className="work__process-item">
              <p>
                <span>Step 03</span>
              </p>
              <img src={solarImage[2]} alt="Efficient Installation" />
              <h6>Efficient Installation</h6>
              <p className="des">
                Implement seamless solar Panel installations.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="work__process-item">
              <p>
                <span>Step 04</span>
              </p>
              <img src={solarImage[3]} alt="Triumph Transition" />
              <h6>Triumph Transition</h6>
              <p className="des">Monitor and maintain solar systems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkArea;
