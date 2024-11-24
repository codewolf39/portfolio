import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      // Check if it has been initialized already
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["3D Artist"],
      });
      initialized.current = true; // Set it to true after the first initialization
    }
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Satwik Kumar</h1>
          <h3>
            Software Developer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
