import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { baseURL, bucketName } from '../../data/applicationConstant'
import { updatePrincipalMessageData, updatePrincipalMessageTemplateData } from '../../Services/Actions/actions'
import PrincipalMessageTemplate1Component from '../components/PrincipalMessageTemplate1Component'

function PrincipalMessageTemplate1Container(props) {
    let fileName;
    if(props.isAuth) {
        fileName = 'principalMessage_draft.json'
    } else {
        fileName = 'principalMessage.json'
    }
    useEffect(() => {
        const getPrincipalPageData = async () => {
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
        getPrincipalPageData();
      }, [])
    return (
        <>
         {!!Object.keys(props.principalMessagePageData).length === true ? ( 
            <PrincipalMessageTemplate1Component {...props}/>
             ) : null}
        </>
    )
}

const mapStateToProps = state => ({
    principalMessagePageData: state.template1PrincipalMessageR,
    isAuth: state.authR.auth

})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updatePrincipalMessageTemplateData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PrincipalMessageTemplate1Container)
