import React, { useState } from "react";
import classes from "../css/FacilityTemplate1Component.module.css";

// import { isAuth } from "../../data/applicationConstant";

import EditModal from "../EditModal";
import { Snackbar } from "@material-ui/core";

import MuiAlert from "@material-ui/lab/Alert";

import { horizontal, vertical } from "../../data/applicationConstant";
import { connect } from "react-redux";
import { updateFacilityData } from "../../Services/Actions/actions";
import { sortByKey } from "../../utilities/helper/helper";

import AddSectionModal from "../AddSectionModal";
import { facilityObj } from "../../data/schema";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function FacilityTemplate1Component(props) {
  const data = props.facilityPageData.facility;
  const dummyObj = facilityObj;
  if (data.content && data.content.length) {
    data.content = sortByKey(data.content, "orderNo");
  }
  let editClass = props.isAuth === true ? "edit-block" : "";
  const [open, setOpen] = useState(false);
  const [openContent, setOpenContent] = useState(false);
  const [openToaster, setOpenToaster] = useState(false);
  const [selectedId, setSelectedId] = useState(false);

  const changeModalStatus = (status) => {
    setOpen(status);
  };

  const changeSelectedId = (id) => {
    setSelectedId(id);
  };

  const changeToasterStatus = (status) => {
    setOpenToaster(status);
  };

  const changeAddContentModalStatus = (status) => {
    setOpenContent(status);
  };

  const changeData = (sectionData, sectionName) => {
    props.updateData(sectionData, sectionName);
  };

  const deleteSection = (kdx, sLevel) => {
    data[sLevel.toString()].splice(kdx, 1);
    props.updateData(data, data.sectionName);
  };

  return (
    <>
      <div>
        <div
          className={classes["banner"]}
          style={{ backgroundImage: "url(/static/images/bg_1.jpg)" }}
        >
          <div className={classes["overlay"]}></div>
          <div className={classes["text"]}>
            <div>
              <h1>{data.config.sectionTitle}</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>{" "}
                <span>
                  facilities <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container rounded" style={{ marginTop: "3rem" }}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="career mb30">
              <div className="inner">
                <div className="career-list move-up wow mt40  animate">
                  {data.content.map((val, idx) => (
                    <>
                      <div key={idx}>
                        {idx % 2 !== 0 ? (
                          <div key={idx}>
                            <div className="row edit-block">
                              {props.isAuth === true ? (
                                <>
                                  <div
                                    className="edit-icon"
                                    onClick={() => {
                                      changeSelectedId(idx);
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

                                  <div
                                    className="plus-icon"
                                    onClick={() => {
                                      changeAddContentModalStatus(true);
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="22"
                                      height="22"
                                      fill="currentColor"
                                      class="bi bi-plus"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                  </div>

                                  <div
                                    className="delete-icon"
                                    onClick={() => {
                                      deleteSection(idx, "content");
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="18"
                                      height="18"
                                      fill="currentColor"
                                      class="bi bi-trash"
                                      viewBox="0 0 18 18"
                                    >
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                      <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                      />
                                    </svg>
                                  </div>
                                </>
                              ) : null}
                              <div className="col-lg-5 col-md-5 col-sm-12 ">
                                <img
                                  data-aos="fade-up"
                                  className="shadow-lg p-3 mb-5 bg-white rounded shadow-lg p-3 mb-5 bg-white rounded facilityImg"
                                  src={val.imgPath}
                                  style={{ maxWidth: "100%" }}
                                />{" "}
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 leftPra">
                                <p className="bkPra pbPra">
                                  <strong>{val.title}</strong>
                                </p>
                                {val.text.map((contentInfo) => (
                                  <p className="bkPra pbPra">{contentInfo}</p>
                                ))}
                              </div>
                            </div>

                            <div className={classes["bkseparator20"]}></div>
                            <div className="text-center">
                              <div
                                className={classes["basic-short-line"]}
                              ></div>
                            </div>
                            <div className={classes["bkseparator20"]}></div>
                            <div className={classes["bkseparator20"]}></div>
                          </div>
                        ) : (
                          <div key={idx}>
                            <div className="row edit-block">
                              {props.isAuth === true ? (
                                <>
                                <div
                                  className="edit-icon"
                                  onClick={() => {
                                    changeSelectedId(idx);
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

                                <div
                                    className="plus-icon"
                                    onClick={() => {
                                      changeAddContentModalStatus(true);
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="22"
                                      height="22"
                                      fill="currentColor"
                                      class="bi bi-plus"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                  </div>

                                  <div
                                    className="delete-icon"
                                    onClick={() => {
                                      deleteSection(idx, "content");
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="18"
                                      height="18"
                                      fill="currentColor"
                                      class="bi bi-trash"
                                      viewBox="0 0 18 18"
                                    >
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                      <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                      />
                                    </svg>
                                  </div>
                                </>
                              ) : null}
                              <div className="col-lg-7 col-md-7 col-sm-12 leftPra">
                                <p className="bkPra pbPra">
                                  <strong>{val.title}</strong>
                                </p>
                                {val.text.map((contentInfo) => (
                                  <p className="bkPra pbPra">{contentInfo}</p>
                                ))}
                              </div>
                              <div className="col-lg-5 col-md-5 col-sm-12">
                                <img
                                  className="shadow-lg p-3 mb-5 bg-white rounded"
                                  src={val.imgPath}
                                  style={{ maxWidth: "100%" }}
                                />{" "}
                              </div>
                            </div>
                            <div className={classes["bkseparator20"]}></div>
                            <div className="text-center">
                              <div
                                className={classes["basic-short-line"]}
                              ></div>
                            </div>
                            <div className={classes["bkseparator20"]}></div>
                            <div className={classes["bkseparator20"]}></div>
                          </div>
                        )}
                      </div>
                    </>
                  ))}
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
        selectedId={selectedId}
      />
      <AddSectionModal
        open={openContent}
        data={data}
        dummy={dummyObj}
        updateData={changeData}
        changeAddContentModalStatus={changeAddContentModalStatus}
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
    dispatch(updateFacilityData(data, sectionName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FacilityTemplate1Component);
