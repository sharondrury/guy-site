import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const experience = () => {

   const { ref, inView } = useInView({
     triggerOnce: false, // Set to true if you want it to trigger only once
     threshold: 0.3,
   });

  return (
    <>
      <div className="numbers-container" ref={ref}>
        <div className="column-section column-one">
          <h3>Company established in</h3>
          <h2 className="counter">
            {inView && (
              <CountUp
                start={2000}
                end={2013}
                duration={2}
                separator=""
                decimals={0}
              />           
            )}
          </h2>
        </div>

        <div className="column-section column-two">
          <h3>Years IT experience</h3>
          <h2 className="counter">
            {inView ? <CountUp start={0} end={26} duration={2} /> : 0}+
          </h2>
        </div>
      </div>
    </>
  );
}

export default experience;
