import React from "react";

import welcome from '../assets/welcome.jpg';
import NoticeTemplate2Component from "./NoticeTemplate2Component";
import { makeStyles } from "@material-ui/core/styles";

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
    }
  }));

function NoticeWrapperTemplate2Component() {
    const classes = useStyles();
  return (
      <>
        <div className="padding-y-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row align-items-center">
                        <div className="col-md-6 my-5">
                            <div className="position-relative"><img className="rounded w-100" src={welcome}
                                    alt="" /> </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <h2 style= {{paddingBottom:'0px',textAlign:'left'}} ><small className="d-block text-gray" style= {{fontSize:"80%"}}>Welcome to</small> <span
                                    className="text-primary">Educati</span> School</h2>
                            <p className="my-4">Investig tiones demons travge wunt ectores legere lkurus quod legunt saepiu
                                clartas est consectetur adipi sicing elitsed kdo eusmod tempor cididunt wuti labore.</p>
                            <a href="#" className={classes.btnprimary}>Read More</a>
                        </div>
                    </div>
                </div>
                <NoticeTemplate2Component />
            </div>
        </div>
    </div>
      </>
  );
}

export default NoticeWrapperTemplate2Component;
