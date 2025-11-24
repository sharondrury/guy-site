import CountUp from "react-countup";

function Experience() {
  return (
    <>
      <div className="numbers-container">
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
            <CountUp start={0} end={15} />+
          </h2>
        </div>
        <div>
          <h2 className="counter">
            <CountUp start={0} end={25} />+
          </h2>
        </div>
        <h2 className="counter">
          <CountUp start={0} end={5} />
        </h2>
      </div>
    </>
  );
}

export default Experience;
