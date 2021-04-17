import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { baseURL, bucketName } from '../../data/applicationConstant';
import { updateHeaderTemplateData } from '../../Services/Actions/actions'
import HeaderTemplate1Component from '../components/HeaderTemplate1Component'

function HeaderTemplate1Container(props) {
    let fileName;
    if(props.isAuth) {
        fileName = 'header_draft.json'
    } else {
        fileName = 'header.json'
    }

    useEffect(() => {
        const getHeaderPageData = async () => {
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
        getHeaderPageData();
      }, [])

    return (
        <>
            {!!Object.keys(props.headerPageData).length === true ? (
                <HeaderTemplate1Component {...props}/>
            ) : null}
        </>
    )
}

const mapStateToProps = state => ({
    headerPageData: state.template1HeaderR,
    isAuth: state.authR.auth

})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updateHeaderTemplateData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTemplate1Container);
