import { deepDiveData } from "./data";
import { useState } from "react";

const deepDive = () => {
    const [readMore, setReadMore] = useState({});

  return (
    <>
      <div className="deep-dive-container">
        <div className="deep-dive-heading-grid-container">
          <div className="deep-dive-heading">
            <h2>Skills</h2>
          </div>
          <div className="deep-dive-grid">
            {deepDiveData.map((deepDive) => {
              return (
                <div
                  key={deepDive.id}
                  className="deep-dive-grid-item"
                  style={{
                    backgroundImage: `url(${deepDive.image})`,
                  }}
                >
                  <div className="grid-heading">
                    <h2>{deepDive.heading}</h2>
                  </div>
                  <div className="grid-text">
                    {readMore[deepDive.id]
                      ? deepDive.description
                      : `${deepDive.description.substring(0, 100)}...`}
                    <button
                      className="info-btn"
                      onClick={() =>
                        setReadMore((prev) => ({
                          ...prev,
                          [deepDive.id]: !prev[deepDive.id],
                        }))
                      }
                    >
                      {readMore[deepDive.id] ? "Show Less" : "Read More"}
                    </button>
                  </div>
                </div>
              );
              
            })}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default deepDive;