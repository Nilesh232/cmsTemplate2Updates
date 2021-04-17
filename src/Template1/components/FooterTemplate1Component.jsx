import React, { useState } from "react";


import EditModal from "../EditModal";
import { Snackbar } from "@material-ui/core";

import MuiAlert from "@material-ui/lab/Alert";

import { horizontal, vertical } from "../../data/applicationConstant";
import { connect } from "react-redux";
import { updateEventsData, updateFooterData } from "../../Services/Actions/actions";
import { sortByKey } from "../../utilities/helper/helper";

import AddSectionModal from "../AddSectionModal";
import { eventsObj } from "../../data/schema";
import { useHistory } from "react-router";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function FooterTemplate1Component(props) {
  const history = useHistory();
  const data = props.footerPageData.footer;
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

  const navigateTo = (route) => {
    history.push(route);
  }

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
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
              {data.content.map((val,idx) => (
                <>

                    {idx === 0 ? (
                        <>
                        <div className="col-md-6 col-lg-4">
                        <div className="ftco-footer-widget mb-5">
                            <h2 className="ftco-heading-2 pb-0">{val.title}</h2>
                            <div className="block-23 mb-3">
                            <ul>
                                {val.text.map((contentInfo, kdx) => (
                                <>  
                                {kdx === 0 ? (
                                    <>
                                    <li>
                                    <span className="icon icon-map-marker"></span>
                                    <span className="text">
                                        {contentInfo}
                                    </span>
                                    </li>
                                    </>
                                ) : null}
                                {kdx === 1 ? (
                                    <>
                                    <li>
                                    <a href="#">
                                        <span className="icon icon-phone"></span>
                                        <span className="text">{contentInfo}</span>
                                    </a>
                                    </li>
                                    </>
                                ) : null}
                                {kdx === 2 ? (
                                    <>
                                    <li>
                                    <a href="#">
                                        <span className="icon icon-envelope"></span>
                                        <span className="text">{contentInfo}</span>
                                    </a>
                                    </li>
                                    </>
                                ) : null}      
                                </>
                                ))}
                            </ul>
                            </div>
                        </div>
                        </div>      
                        </>
                    ) : null}
                    {idx === 1 ? (
                    <>
                    <div className="col-md-6 col-lg-4">
                    <div className="ftco-footer-widget mb-5 ml-md-4">
                        <h2 className="ftco-heading-2 pb-0" style={{width: '260px'}}>Links</h2>
                        <ul className="list-unstyled" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <li style={{fontSize:'large', padding: '5px', width: '150px'}}>
                            <a href="#">
                            <span className="ion-ios-arrow-round-forward mr-2"></span>
                            Home
                            </a>
                        </li>
                        <li style={{fontSize:'large', padding: '5px', width: '150px'}}>
                            <a href="#">
                            <span className="ion-ios-arrow-round-forward mr-2"></span>
                            About
                            </a>
                        </li>
                        <li style={{fontSize:'large', padding: '5px', width: '150px'}}>
                            <a href="#">
                            <span className="ion-ios-arrow-round-forward mr-2"></span>
                            Services
                            </a>
                        </li>
                        <li style={{fontSize:'large', padding: '5px', width: '150px'}}>
                            <a href="#">
                            <span className="ion-ios-arrow-round-forward mr-2"></span>
                            Deparments
                            </a>
                        </li>
                        <li style={{fontSize:'large', padding: '5px', width: '150px'}}>
                            <a href="#">
                            <span className="ion-ios-arrow-round-forward mr-2"></span>
                            Contact
                            </a>
                        </li>
                        <li style={{fontSize:'large', padding: '5px', width: '150px'}} onClick={() => {navigateTo('/admin/login')}}>
                            <a href="#">
                            <span className="ion-ios-arrow-round-forward mr-2"></span>
                            Admin
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    </>
                    ) : null}
                    {idx === 2 ? (
                        <>
                        <div className="col-md-6 col-lg-4">
                        <div className="ftco-footer-widget mb-5">
                            <h2 className="ftco-heading-2 pb-0">Subscribe Us!</h2>
                            <form action="#" className="subscribe-form">
                            <div className="form-group">
                                <input
                                type="text"
                                className="form-control mb-2 text-center"
                                placeholder="Enter email address"
                                />
                                <input
                                type="submit"
                                value="Subscribe"
                                className="form-control submit px-3"
                                />
                            </div>
                            </form>
                        </div>
                        <div className="ftco-footer-widget mb-5">
                            <h2 className="ftco-heading-2 mb-0 pb-0">Connect With Us</h2>
                            <ul
                            className="ftco-footer-social list-unstyled float-md-left float-lft mt-3"
                            style={{ display: "flex", justifyContent: "center", width: '-webkit-fill-available' }}
                            >
                            <li className="fadeInUp">
                                <a href="#">
                                <span className="icon-twitter"></span>
                                </a>
                            </li>
                            <li className="fadeInUp">
                                <a href="#">
                                <span className="icon-facebook"></span>
                                </a>
                            </li>
                            <li className="fadeInUp">
                                <a href="#">
                                <span className="icon-instagram"></span>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        </>
                    ) : null}
                </>        
              ))}
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright ©
                <script
                  type="text/javascript"
                  async=""
                  src="https://www.google-analytics.com/analytics.js"
                ></script>
                <script>document.write(new Date().getFullYear());</script>2021
                All rights reserved | This template is made with{" "}
                <i className="icon-heart" aria-hidden="true"></i> by{" "}
                <a href="#" target="_blank">
                  soCommerce
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    
    <EditModal open={open} data={data} 
      updateData={changeData} 
      changeModalStatus={changeModalStatus} changeToasterStatus={changeToasterStatus}/>
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={openToaster} autoHideDuration={6000} onClose={() => {changeToasterStatus(false)}}>
            <Alert onClose={() => {changeToasterStatus(false)}} severity="info">
                Data Updated!
            </Alert>
      </Snackbar>
    </>
  );
}

const mapStateToProps=state=>({
    isAuth: state.authR.auth
  })
  
  const mapDispatchToProps=dispatch=>({
    updateData:(data, sectionName)=>dispatch(updateFooterData(data, sectionName)),
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(FooterTemplate1Component);
