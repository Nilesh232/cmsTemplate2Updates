import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import { useHistory } from "react-router";
// import { isAuth } from '../../data/applicationConstant'
import { updateNavbarData } from "../../Services/Actions/actions";
import { sortByKey } from "../../utilities/helper/helper";
import EditNavModal from "../EditNavModal";

import { horizontal, vertical } from "../../data/applicationConstant";
import { connect } from "react-redux";

function NavTemplate1Component(props) {
  const data = props.navbarPageData.navbar;
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

  const history = useHistory();

  const navigateTo = (route) => {
    if(props.isAuth === true) {
      history.push('/admin' + route);
    } else {
      history.push(route);
    }
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
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco-navbar-light"
        id="ftco-navbar"
        style={{marginBottom: '0'}}
      >
        <div className="container d-flex align-items-center px-4">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>
          <div
            className="collapse navbar-collapse"
            id="ftco-nav"
            style={{ padding: "10px" }}
          >
            <ul className="navbar-nav mr-auto">
              {data.content.map((val, idx) => (
                <>
                {val.fieldType === 'text' && val.fieldVisible === true ? (
                  <>
                  <li className="nav-item" style={{cursor:'pointer'}} onClick={() => {navigateTo(val.route)}}>
                    <a className="nav-link" href="#">
                      {val.title}
                    </a>
                  </li>
                  </>
                ) : (
                  <>
                  {val.fieldType === 'dropdown' && val.fieldVisible === true ? (
                    <li className="nav-item dropdown">
                    <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">{val.title}</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: '#fd5f00'}}>
                      {val.subField.map((subVal, kdx) => (
                        <>
                        {subVal.fieldVisible === true ? (
                          <a className="dropdown-item" href="#" style={{color: '#fff', padding: '0.7rem 2rem'}} 
                          onClick={() => {navigateTo(subVal.route)}}>{subVal.subFieldName}</a>
                        ) : null}
                        </>
                      ))}
                    </div>
                  </li>
                  ) : null}
              </>
                )}
                </>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
    <EditNavModal
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
    dispatch(updateNavbarData(data, sectionName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavTemplate1Component);
