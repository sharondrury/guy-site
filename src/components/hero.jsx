import cvPdf from "../assets/GuySalmonNEW_CV_2026-web.pdf";

const hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-background">
          <div className="hero-text">
            <div className="hero-text-container">
              <div>
                <h3 className="logo-heading">GS Consultancy</h3>
                <h1 className="hero-heading">Guy Salmon Consultancy</h1>
                <h2 className="hero-subheading">
                  Experienced infrastructure engineer delivering resilient,
                  scalable and secure IT environments.
                </h2>
              </div>
              <div className="contact-btns">
                <a
                  href="https://www.linkedin.com/in/guysalmon"
                  className="hero-btn left-btn"
                  target="_blank"
                >
                  Get in touch
                </a>
                <a
                  href={cvPdf}
                  className="hero-btn right-btn"
                  target="_blank"
                  download="GuySalmonNEW_CV_2026-web.pdf"
                >
                  Download cv
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default hero;
