import "animate.css";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Shopping from "../src/photo/shopping.jpg";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="animate__animated animate__fadeInDown">
          Welcome To AG Shopping!
        </h1>
        <p className="subtitle animate__animated animate__fadeInUp">
          Discover the best deals and latest trends in shopping!
        </p>
      </header>

      <section className="content">
        <div className="content-text">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et error
            optio quisquam totam corporis asperiores voluptatum placeat eos
            distinctio laborum explicabo laudantium eligendi magnam, libero quae
            quod omnis. Eligendi, consectetur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni,
            numquam dignissimos possimus enim ea, quibusdam et nemo molestias
            qui sit aliquam debitis exercitationem expedita voluptas illum est,
            impedit delectus?
          </p>
        </div>

        <div className="content-image">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#E2AE37"
              d="M44.2,-61.3C57.9,-50.8,70.3,-38.8,76.1,-24C81.9,-9.2,81.1,8.5,76.5,25.5C71.9,42.6,63.4,59,50,69.3C36.6,79.6,18.3,83.7,1.6,81.5C-15.1,79.3,-30.2,70.8,-45.3,61.1C-60.4,51.4,-75.5,40.4,-83.6,25C-91.6,9.5,-92.6,-10.4,-85.4,-26.2C-78.2,-42,-62.8,-53.6,-47.2,-63.5C-31.6,-73.4,-15.8,-81.5,-0.3,-81.1C15.2,-80.7,30.4,-71.7,44.2,-61.3Z"
              transform="translate(100 100)"
            />
          </svg>
          <div className="image-wrapper">
            <img className="image" src={Shopping} alt="Shopping" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
