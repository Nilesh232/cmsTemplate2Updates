import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { baseURL, bucketName } from '../../data/applicationConstant';
import { updateFacilityTemplateData } from '../../Services/Actions/actions';
import FacilityTemplate1Component from '../components/FacilityTemplate1Component'

function FacilityTemplate1Container(props) {
    let fileName;
    if(props.isAuth) {
        fileName = 'facility_draft.json'
    } else {
        fileName = 'facility.json'
    }
    useEffect(() => {
        const getFacilityPageData = async () => {
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
        getFacilityPageData();
      }, [])
    return (
        <>
         {!!Object.keys(props.facilityPageData).length === true ? ( 
            <FacilityTemplate1Component {...props}/>
            ) : null}
        </>
    )
}

const mapStateToProps = state => ({
    facilityPageData: state.template1FacilityR,
    isAuth: state.authR.auth

})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updateFacilityTemplateData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(FacilityTemplate1Container);
