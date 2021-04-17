import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { baseURL, bucketName } from '../../data/applicationConstant';
import { updateCuricullumTemplateData } from '../../Services/Actions/actions';
import CuricullumTemplate1Component from '../components/CuricullumTemplate1Component'

function CuricullumTemplate1Container(props) {
    let fileName;
    if(props.isAuth) {
        fileName = 'curicullum_draft.json'
    } else {
        fileName = 'curicullum.json'
    }
    useEffect(() => {
        const getCuricullumPageData = async () => {
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
        getCuricullumPageData();
      }, [])
    return (
        <>
         {!!Object.keys(props.curicullumPageData).length === true ? ( 
            <CuricullumTemplate1Component {...props}/>
            ) : null}
        </>
    )
}

const mapStateToProps = state => ({
    curicullumPageData: state.template1CuricullumR,
    isAuth: state.authR.auth

})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updateCuricullumTemplateData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CuricullumTemplate1Container);
