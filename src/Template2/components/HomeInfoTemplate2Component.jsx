import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';


const useStyles = makeStyles((theme) => ({
    root:{
        "& a": {
            color:"#00CB54",
        }
    }
  }));

function HomeInfoTemplate2Component() {
    const classes = useStyles();
  return (
      <>
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 bg-cover bg-center text-white padding-y-80"
                        style= {{ backgroundImage: `url(${banner1})` }}>
                        <div className="padding-x-lg-100 wow pulse">
                            <h2 style={{paddingBottom:'0px',textAlign:'left',}} className="text-white mb-4">Admission Open for 2021</h2>
                            <p>Investig ationes demons travge vunt lectores legere lrus quodk legunt saepius claritas est
                                cnsectetur adip sicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
                                Consectetur adipi sicing.</p><a href="#" className="btn btn-white mt-4" style={{color:"#606065"}}>Apply now</a>
                        </div>
                    </div>
                    <div className="col-md-6 bg-cover bg-center text-white padding-y-80"
                        style={{ backgroundImage: `url(${banner2})` }}>
                        <div className="padding-x-lg-100 wow pulse">
                            <h2 style={{paddingBottom:'0px',textAlign:'left',}} className="text-white mb-4">Students Orientation 2021</h2>
                            <p>Investig ationes demons travge vunt lectores legere lrus quodk legunt saepius claritas est
                                cnsectetur adip sicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
                                Consectetur adipi sicing.</p><span className={classes.root}><a href="#" className="btn btn-white mt-4" style={{color:"#606065"}}>Apply now</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  );
}

export default HomeInfoTemplate2Component;
