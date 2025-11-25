import cvPdf from "../assets/Sharon_Drury_2025_cv_blank.pdf";

function Hero() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-background">
          <div className="hero-text">
            <div className="hero-text-container">
              <div>
                <h1>Barry Egg Consultancy</h1>
                <h2>Experienced infrastructure engineer</h2>
              </div>
              <div>
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
                  download="Sharon_Drury_CV.pdf"
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
}

export default Hero;
