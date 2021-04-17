import React from "react";
import TemplateProtectedRoutes from "../../TemplateProtectedRoutes";
import HeaderTemplate2Container from "./HeaderTemplate2Container";
import UserRoutes from "../../UserRoutes";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import '../css/template2.css';

import NavTemplate2Container from "./NavTemplate2Container";
import FooterTemplate2Container from "./FooterTemplate2Container";

function Template2Container(props) {

  return (
    <>
      {props.isAuth === true ? (
        <>
          <div style={{ paddingBottom: "10px", paddingLeft: "35px" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#2196f3" }}
            >
              Add Section
            </Button>
          </div>
          <hr />
        </>
      ) : null}
      {props.getTemplateSelected.templateSelected === 'template2' ? (
        <>
        <HeaderTemplate2Container />
        <NavTemplate2Container />
        </>
      ) : null}
      {props.isAuth === true ? (
        <>
          <TemplateProtectedRoutes />
          <UserRoutes />
        </>
      ) : (
        <UserRoutes />
      )}
      {props.getTemplateSelected.templateSelected === 'template2' ? (
        <>
        <FooterTemplate2Container />
        </>
      ) : null}
    </>
  );
}

const mapStateToProps = state => ({
  isAuth: state.authR.auth,
  getTemplateSelected: state.templateSelectedR

})

const mapDispatchToProps = dispatch => ({ 
})

export default connect(mapStateToProps, mapDispatchToProps)(Template2Container);
