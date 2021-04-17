import { makeStyles } from "@material-ui/core/styles";
import React from "react";


const useStyles = makeStyles((theme) => ({
    root:{
        "& a": {
            color:"#606065",
        },
        "& a:hover": {
            color:"#00CB54",
            background:"transparent",
        },
        "& a:focus":{
            background:"#fff",
        }
    }
  }));
function HomeEventsTemplate2Component() {
    const classes = useStyles();
  return (
      <>
        <div className="padding-y-100 bg-light-v5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-4">
                        <h2 style= {{paddingBottom:'0px'}}  className="mb-4">Upcoming Events</h2>
                        <div className="width-3rem height-4 rounded bg-primary mx-auto"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 marginTop-30 wow fadeIn" data-wow-delay=".1s">
                        <div className="card shadow-v1">
                            <div className="padding-40 border-bottom">
                                <span className={classes.root}>
                                <a href="#" className="h4">Open Schools for Open Societies
                                    2021</a>
                                </span>
                            </div>
                            <ul className="list-unstyled padding-x-40 py-4 line-height-xl">
                                <li><i className="ti-time mr-2 text-primary"></i> April 13, 2021 @ 8:00 am</li>
                                <li><i className="ti-location-pin mr-2 text-primary"></i> 184 Main Collins Street</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 marginTop-30 wow fadeIn" data-wow-delay=".2s">
                        <div className="card shadow-v1">
                            <div className="padding-40 border-bottom">
                            <span className={classes.root}>
                                <a href="#" className="h4">Conference on Early School
                                    Leaving</a>
                            </span>        
                                    </div>
                            <ul className="list-unstyled padding-x-40 py-4 line-height-xl">
                                <li><i className="ti-time mr-2 text-primary"></i> April 13, 2021 @ 8:00 am</li>
                                <li><i className="ti-location-pin mr-2 text-primary"></i> 184 Main Collins Street</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 marginTop-30 wow fadeIn" data-wow-delay=".3s">
                        <div className="card shadow-v1">
                            <div className="padding-40 border-bottom">
                            <span className={classes.root}>
                                <a href="#" className="h4">A collection of Innovative and
                                    Inspiring Resources</a>
                            </span>
                                    </div>
                            <ul className="list-unstyled padding-x-40 py-4 line-height-xl">
                                <li><i className="ti-time mr-2 text-primary"></i> April 13, 2021 @ 8:00 am</li>
                                <li><i className="ti-location-pin mr-2 text-primary"></i> 184 Main Collins Street</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 marginTop-30 wow fadeIn" data-wow-delay=".1s">
                        <div className="card shadow-v1">
                            <div className="padding-40 border-bottom">
                            <span className={classes.root}> 
                                <a href="#" className="h4">A collection of Innovative and
                                    Inspiring Resources</a>
                            </span>        
                                    </div>
                            <ul className="list-unstyled padding-x-40 py-4 line-height-xl">
                                <li><i className="ti-time mr-2 text-primary"></i> April 13, 2021 @ 8:00 am</li>
                                <li><i className="ti-location-pin mr-2 text-primary"></i> 184 Main Collins Street</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 marginTop-30 wow fadeIn" data-wow-delay=".2s">
                        <div className="card shadow-v1">
                            <div className="padding-40 border-bottom">
                            <span className={classes.root}>
                                <a href="#" className="h4">Open Schools for Open Societies
                                    2021</a>
                            </span>        
                                    </div>
                            <ul className="list-unstyled padding-x-40 py-4 line-height-xl">
                                <li><i className="ti-time mr-2 text-primary"></i> April 13, 2021 @ 8:00 am</li>
                                <li><i className="ti-location-pin mr-2 text-primary"></i> 184 Main Collins Street</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 marginTop-30 wow fadeIn" data-wow-delay=".3s">
                        <div className="card shadow-v1">
                            <div className="padding-40 border-bottom">
                            <span className={classes.root}>
                                <a href="#" className="h4">Conference on Early School
                                    Leaving</a>
                            </span>        
                                    </div>
                            <ul className="list-unstyled padding-x-40 py-4 line-height-xl">
                                <li><i className="ti-time mr-2 text-primary"></i> April 13, 2021 @ 8:00 am</li>
                                <li><i className="ti-location-pin mr-2 text-primary"></i> 184 Main Collins Street</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
      </>
  );
}

export default HomeEventsTemplate2Component;
