import React, { useState } from "react";
import classes from "../css/GalleryTemplate1Component.module.css";

function GalleryTemplate1Component() {
  const [state, setState] = useState({ state: false, src: "" });

  const openImage = (path) => {
    setState({ state: true, src: path });
  };

  const closeModal = (path) => {
    setState({ state: false, src: "" });
  };

  return (
    <>
      <div>
        <div className={classes["banner"]}>
          <div className={classes["overlay"]}></div>
          <div className={classes["text"]}>
          <div>
              <h1>Gallery</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>{" "}
                <span>
                  gallery <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: '3rem'}}>
        <div className={classes["row"]}>
          <div className={classes["column"]}>
            <img
              src="/static/images/template1/wedding.jpg"
              onClick={() => openImage("/static/images/template1/wedding.jpg")}
            />
            <img src="/static/images/template1/rocks.jpg" />
            <img src="/static/images/template1/falls2.jpg" />
            <img src="/static/images/template1/paris.jpg" />
            <img src="/static/images/template1/nature.jpg" />
            <img src="/static/images/template1/mist.jpg" />
            <img src="/static/images/template1/paris.jpg" />
          </div>
          <div className={classes["column"]}>
            <img src="/static/images/template1/underwater.jpg" />
            <img src="/static/images/template1/ocean.jpg" />
            <img src="/static/images/template1/wedding.jpg" />
            <img src="/static/images/template1/mountainskies.jpg" />
            <img src="/static/images/template1/rocks.jpg" />
            <img src="/static/images/template1/underwater.jpg" />
          </div>
          <div className={classes["column"]}>
            <img src="/static/images/template1/wedding.jpg" />
            <img src="/static/images/template1/rocks.jpg" />
            <img src="/static/images/template1/falls2.jpg" />
            <img src="/static/images/template1/paris.jpg" />
            <img src="/static/images/template1/nature.jpg" />
            <img src="/static/images/template1/mist.jpg" />
            <img src="/static/images/template1/paris.jpg" />
          </div>
          <div className={classes["column"]}>
            <img src="/static/images/template1/underwater.jpg" />
            <img src="/static/images/template1/ocean.jpg" />
            <img src="/static/images/template1/wedding.jpg" />
            <img src="/static/images/template1/mountainskies.jpg" />
            <img src="/static/images/template1/rocks.jpg" />
            <img src="/static/images/template1/underwater.jpg" />
          </div>
          <div
            className={
              classes["modal"] +
              " " +
              `${state.state ? classes["modalOn"] : classes["modalOff"]}`
            }
          >
            <span
              className="close"
              onClick={() => {
                closeModal();
              }}
            >
              &times;
            </span>
            <img src={state.src} className={classes["modal-content"]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default GalleryTemplate1Component;
