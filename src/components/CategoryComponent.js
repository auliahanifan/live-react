import React from "react";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../store";

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    axios
      .get("https://api-todofancy.herokuapp.com/api/movies")
      .then(response => {
        this.props.setValue(response.data.movies);
        console.log(response.data.movies);
      })
      .catch(error => {
        console.log("terdapat eror ini :", error);
      });
  };

  render() {
    return (
      <div className="container">
        {this.props.values.map(item => {
          if (item.Category == this.props.endpoint) {
            return (
              <div>
                <br />
                <div class="card">
                  <div class="card-body">
                    <div className="row">
                      <div className="col-2">
                        <img src={item.Poster} width="140" />
                      </div>
                      <div className="col">
                        <h5 class="card-title">{item.Title}</h5>
                        <p class="card-text">{item.Year}</p>
                        <p class="card-text">{item.Synopsis}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            );
          }
        })}
      </div>
    );
  }
}

// export default News;

export default connect(
  "email, full_name, is_login, values, keyword",
  actions
)(News);
