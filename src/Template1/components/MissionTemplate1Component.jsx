import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'

// import { isAuth } from "../../data/applicationConstant";

import EditModal from "../EditModal";
import { Snackbar } from "@material-ui/core";

import MuiAlert from "@material-ui/lab/Alert";

import { horizontal, vertical } from "../../data/applicationConstant";
import { connect } from "react-redux";
import { updateMissionData } from "../../Services/Actions/actions";
import { sortByKey } from "../../utilities/helper/helper";


const useStyles = makeStyles({
    banner: {
      height: '300px',
      width: '100%',
      position: 'inherit',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      position: 'relative'
  },
  overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      content: '',
      opacity: .3,
      background: '#f1453d'
  },
  
  text: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
  },
  h1: {
      fontSize: '2.5rem',
      fontWeight: 900,
      color: '#fff',
      fontFamily: 'Poppins, Arial, sans-serif'
  }
});


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  

function MissionTemplate1Component(props) {
    const classes = useStyles();

    const data = props.missionPageData.mission;
    if (data.content && data.content.length) {
      data.content = sortByKey(data.content, "orderNo");
    }
    let editClass = props.isAuth === true ? "edit-block" : "";
    const [open, setOpen] = useState(false);
    const [openToaster, setOpenToaster] = useState(false);
  
    const changeModalStatus = (status) => {
      setOpen(status);
    };
  
    const changeToasterStatus = (status) => {
      setOpenToaster(status);
    };
  
    const changeData = (sectionData, sectionName) => {
      props.updateData(sectionData, sectionName);
    };
    
    return (
        <>
        <div style={{marginBottom: '3rem'}}>
        <div
          className={classes["banner"]}
          style={{ backgroundImage: "url(/static/images/bg_1.jpg)" }}
        >
          <div className={classes["overlay"]}></div>
          <div className={classes["text"]}>
            <div>
              <h1 className={classes['h1']}>{data.config.sectionTitle}</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>{" "}
                <span>
                  Mission <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={editClass}>
      {props.isAuth === true ? (
            <>
              <div
                className="edit-icon"
                onClick={() => {
                  changeModalStatus(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-pencil"
                  viewBox="0 0 18 18"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
              </div>
            </>
          ) : null}
          
        <div>
            <div className="container">
                <div className="row my-5">
                {data.content.map((val, idx) => (
                    <>
                        <div className="col-md-6 col-sm-12">
                            <div className="m-auto">
                                <img src={val.imgPath} height={250} width={300}/>
                                <h2 style={{textAlign: 'left', paddingTop: '2rem', paddingBottom: '1rem'}}>{val.title}</h2>
                                {val.text.map((contentInfo, kdx) => (
                                    <p>{contentInfo}</p>
                                ))}
                            </div>
                        </div>
                    </>
                ))}
                </div>
            </div>
        </div>
       </div>
       
      <EditModal
        open={open}
        data={data}
        updateData={changeData}
        changeModalStatus={changeModalStatus}
        changeToasterStatus={changeToasterStatus}
      />
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={openToaster}
        autoHideDuration={6000}
        onClose={() => {
          changeToasterStatus(false);
        }}
      >
        <Alert
          onClose={() => {
            changeToasterStatus(false);
          }}
          severity="info"
        >
          Data Updated!
        </Alert>
      </Snackbar>
        </>
    )
}

const mapStateToProps = (state) => ({
  isAuth: state.authR.auth
});

const mapDispatchToProps = (dispatch) => ({
  updateData: (data, sectionName) =>
    dispatch(updateMissionData(data, sectionName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MissionTemplate1Component);
