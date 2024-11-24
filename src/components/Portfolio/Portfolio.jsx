import "./portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>3D</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="img.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="img.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="img.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="img.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="img.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="img.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
