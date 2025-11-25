import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

function Experience() {
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
        <div>
          <h3>Years as a contractor</h3>
        </div>
        <div>
          <h3>Years IT experience</h3>
        </div>
        <div>
          <h3>Qualifications</h3>
        </div>

        <div>
          <h2 className="counter">
            {viewPortEntered ? <CountUp start={0} end={15} duration={2} /> : 0}+
          </h2>
        </div>

        <div>
          <h2 className="counter">
            {viewPortEntered ? <CountUp start={0} end={25} duration={2} /> : 0}+
          </h2>
        </div>

        <div>
          <h2 className="counter">
            {viewPortEntered ? <CountUp start={0} end={5} duration={2} /> : 0}
          </h2>
        </div>
      </div>
    </>
  );
}

export default Experience;
