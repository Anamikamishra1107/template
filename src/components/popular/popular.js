import React, { Component } from "react";
import "./css/popular.css";
class Popular extends Component {
  render() {
    return (
      <div>
        <section className="popular-collections">
          <h1>Popular Collections</h1>
          <ul class="popular-list">
            <li>Profile</li>
            <li>New York</li>
            <li>Relaxing</li>
            <li>Person</li>
            <li>Fashion</li>
          </ul>

          <div className="collection-tiles">
            <div className="collection-main">
              <div className="tiles">
                <img src={require("./images/eyes.jpeg")} alt="main-image" />
                <div className="smaill-images">
                  <img
                    src={require("./images/girl.jpeg")}
                    alt="main-image"
                  />
                  <img
                    src={require("./images/girls.jpeg")}
                    alt="main-image"
                  />
                  <img
                    src={require("./images/rad.jpeg")}
                    alt="main-image"
                  />
                </div>
              </div>
              <div className="tiles-value">
                <div className="tiles-name">People</div>
                <div className="tiles-value">144</div>
              </div>
            </div>
            <div className="collection-main">
              <div className="tiles">
                <img src={require("./images/image(1).jpeg")} alt="main-image" />
                <div className="smaill-images">
                  <img
                    src={require("./images/photo.jpeg")}
                    alt="main-image"
                  />
                  <img
                    src={require("./images/nature2.jpeg")}
                    alt="main-image"
                  />
                  <img
                    src={require("./images/nature.jpeg")}
                    alt="main-image"
                  />
                </div>
              </div>
              <div className="tiles-value">
                <div className="tiles-name">People</div>
                <div className="tiles-value">144</div>
              </div>
            </div>
            <div className="collection-main">
              <div className="tiles">
                <img src={require("./images/gogal.jpeg")} alt="main-image" />
                <div className="smaill-images">
                  <img
                    src={require("./images/girls.jpeg")}
                    alt="main-image"
                  />
                  <img
                    src={require("./images/girl.jpeg")}
                    alt="main-image"
                  />
                  <img
                    src={require("./images/eyes.jpeg")}
                    alt="main-image"
                  />
                </div>
              </div>
              <div className="tiles-value">
                <div className="tiles-name">People</div>
                <div className="tiles-value">144</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Popular;
