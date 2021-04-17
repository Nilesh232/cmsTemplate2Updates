import React, { useState } from "react";
// import { isAuth } from "../../data/applicationConstant";

import EditModal from "../EditModal";
import { Snackbar } from "@material-ui/core";

import MuiAlert from "@material-ui/lab/Alert";

import { horizontal, vertical } from "../../data/applicationConstant";
import { connect } from "react-redux";
import { updateHeaderData } from "../../Services/Actions/actions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function HeaderTemplate1Component(props) {
  const data = props.headerPageData.header;
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
      <div className="bg-top navbar-light">
        <div className="container">
          <div className="row no-gutters d-flex align-items-center align-items-stretch">
            <div className="col-md-4 d-flex align-items-center py-4">
              <a className="navbar-brand" href="">
                {data.content[0].title} <span>{data.content[0].text}</span>
              </a>
            </div>
            <div className="col-lg-8 d-block">
              <div className="row d-flex">
                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4 justify-content-center">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-paper-plane"></span>
                  </div>
                  <div className="text">
                    <span>{data.content[1].title}</span>
                    <span>{data.content[1].text}</span>
                  </div>
                </div>
                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4 justify-content-end">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-phone2"></span>
                  </div>
                  <div className="text">
                    <span>{data.content[2].title}</span>
                    <span>{data.content[2].text}</span>
                  </div>
                </div>
              </div>
            </div>
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
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.authR.auth
});

const mapDispatchToProps = (dispatch) => ({
  updateData: (data, sectionName) =>
    dispatch(updateHeaderData(data, sectionName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderTemplate1Component);
