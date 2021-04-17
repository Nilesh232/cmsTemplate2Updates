import React from "react";
import banner from '../assets/1.jpg';
import { makeStyles } from "@material-ui/core/styles";
import '../css/template2.css';

const useStyles = makeStyles((theme) => ({

    btnprimary: {

        color: "#ffffff !important",
        backgroundColor: "#00CB54",
        borderColor: "#00CB54",
        display: "inline-block",
        fontFamily: "Maven Pro,sans-serif",
        fontWeight: "500",
        textAlign: "center",
        verticalAlign: "middle",
        border: "1px solid transparent",
        padding: "0.625rem 1.25rem",
        fontSize: "1rem",
        lineHeight: "1.5",
        borderRadius: "0.25rem",
    },
  }));
function SliderTemplate2Component() {
    const classes = useStyles();
  return (
      <>
        <div className="height-90vh py-5 flex-center jarallax" data-dark-overlay="4"
            style= {{ backgroundImage: `url(${banner})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 text-white">
                        <h2 style= {{paddingBottom:'0px',textAlign:'left'}} className="display-lg-4 font-weight-bold text-primary wow slideInUp">Best Ever Trendy</h2>
                        <h1 className="display-lg-3 font-weight-bold text-white wow slideInUp">School Template</h1>
                        <p className="lead wow slideInUp">This modern and inviting academic template is perfectly suited for
                            school, colleges, university, on-line course, and other educational institutions.</p><a href="#"
                            className={classes.btnprimary}>Read More</a>
                    </div>
                </div>
            </div>
        </div>
      </>
  );
}

export default SliderTemplate2Component;
