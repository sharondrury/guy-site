import { logosData } from "./data";

const techStack = () => {
  return (
    <>
      <div className="tech-stack-container">
        <div className="tech-stack-heading-grid-container">
          <div className="tech-stack-heading">
            <h2>Tech stack</h2>
          </div>
          <div className="tech-stack-grid">
            {logosData.map((image, index) => (
              <img
                className="tech-stack-image"
                key={index}
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default techStack;
