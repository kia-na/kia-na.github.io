function Portfolio() {
  return (
    <div className="container">
      <div className="content_container">
        <div className="content_info">
          <ul>
            <li>Contact me</li>
            <li>Resume</li>
            <li>Projects</li>
          </ul>
          <div>
            <span>
              <span>Kiana</span>
              <span>Esmaili</span>
            </span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              consequuntur quaerat maiores commodi accusamus quidem nemo iste,
              quisquam impedit reprehenderit.
            </p>
          </div>
        </div>
        <div className="content_pic">
          <div className="pic_backColor"></div>
          <img src="pic.png" alt="personal_pic" />
          {/* <span className="pic"></span> */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
