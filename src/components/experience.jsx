import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const experience = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setViewPortEntered(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="numbers-container" ref={containerRef}>
        <div className="column-section column-one">
          <h3>Company established in</h3>
          <h2 className="counter">
            {viewPortEntered ? (
              <CountUp start={2000} end={2013} duration={2} />
            ) : (
              0
            )}
            +
          </h2>
        </div>

        <div className="column-section column-two">
          <h3>Years IT experience</h3>
          <h2 className="counter">
            {viewPortEntered ? <CountUp start={0} end={26} duration={2} /> : 0}+
          </h2>
        </div>
      </div>
    </>
  );
}

export default experience;
