import React from "react";
import CategoryComponent from "./CategoryComponent";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-3 text-center">
            <h5>Romance</h5>
            <img
              src="https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
              height="282px"
            />
            <br />
            <br />
            <Link to="/romance">
              <button type="button" class="btn btn-primary">
                See Movies
              </button>
            </Link>
          </div>
          <div className="col-3 text-center">
            <h5>Action</h5>
            <img
              src="https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
              height="282px"
            />
            <br />
            <br />
            <Link to="/action">
              <button type="button" class="btn btn-primary">
                See Movies
              </button>
            </Link>
          </div>
          <div className="col-3 text-center">
            <h5>Fiction</h5>
            <img
              src="https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg"
              height="282px"
            />
            <br />
            <br />
            <Link to="/fiction">
              <button type="button" class="btn btn-primary">
                See Movies
              </button>
            </Link>
          </div>
          <div className="col-3 text-center">
            <h5>Comedy</h5>
            <img
              src="https://m.media-amazon.com/images/M/MV5BNTAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
              height="282px"
            />
            <br />
            <br />
            <Link to="/comedy">
              <button type="button" class="btn btn-primary">
                See Movies
              </button>
            </Link>
          </div>
        </div>
        <CategoryComponent />
      </div>
    );
  }
}

export default Home;
