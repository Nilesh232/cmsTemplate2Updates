import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { baseURL, bucketName } from '../../data/applicationConstant';
import { updateNavbarTemplateData } from '../../Services/Actions/actions'
import NavTemplate1Component from '../components/NavTemplate1Component'

function NavTemplate1Container(props) {
    let fileName;
    if(props.isAuth) {
        fileName = 'navbar_draft.json'
    } else {
        fileName = 'navbar.json'
    }

    useEffect(() => {
        const getNavbarPageData = async () => {
          await fetch(baseURL + '/get-template', {
            "method": "POST",
            "body": JSON.stringify({
                "bucket":bucketName,
                "fileName": fileName
            })
          })
          .then((response) => response.json())
          .then((data) => {
              props.setPageData(data);
          })
        };
        getNavbarPageData();
      }, [])
    return (
        <>
        {!!Object.keys(props.navbarPageData).length === true ? (
            <NavTemplate1Component {...props}/>   
            ) : null}
        </>
    )
}

const mapStateToProps = state => ({
    navbarPageData: state.template1NavbarR,
    isAuth: state.authR.auth

})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updateNavbarTemplateData(data)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(NavTemplate1Container);
