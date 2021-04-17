import React from "react";
import TemplateProtectedRoutes from "../../TemplateProtectedRoutes";
import HeaderTemplate1Container from "./HeaderTemplate1Container";
import NavTemplate1Container from "./NavTemplate1Container";
import UserRoutes from "../../UserRoutes";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import FooterTemplate1Container from "./FooterTemplate1Container";

function Template1Container(props) {

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
      {props.getTemplateSelected.templateSelected === 'template1' ? (
        <>
        <HeaderTemplate1Container />
        <NavTemplate1Container />
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
      {props.getTemplateSelected.templateSelected === 'template1' ? (
        <>
        <FooterTemplate1Container />
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

export default connect(mapStateToProps, mapDispatchToProps)(Template1Container);
