import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { baseURL, bucketName } from '../../data/applicationConstant';
import { updateAdmissionProcessTemplateData } from '../../Services/Actions/actions';
import AdmissionProcessTemplate1Component from '../components/AdmissionProcessTemplate1Component';


function AdmissionProcessTemplate1Container(props) {
    let fileName;
    if(props.isAuth) {
        fileName = 'admissionProcess_draft.json'
    } else {
        fileName = 'admissionProcess.json'
    }
    useEffect(() => {
        const getAdmissionProcessPageData = async () => {
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
        getAdmissionProcessPageData();
      }, [])
    return (
        <>
         {!!Object.keys(props.admissionProcessPageData).length === true ? ( 
            <AdmissionProcessTemplate1Component {...props}/>
            ) : null}
        </>
    )
}

const mapStateToProps = state => ({
    admissionProcessPageData: state.template1AdmissionProcessR,
    isAuth: state.authR.auth

})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updateAdmissionProcessTemplateData(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(AdmissionProcessTemplate1Container);

