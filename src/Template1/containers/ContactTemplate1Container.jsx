import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { baseURL, bucketName } from '../../data/applicationConstant';
import { updateContactTemplateData } from '../../Services/Actions/actions';
import ContactTemplate1Component from '../components/ContactTemplate1Component'

function ContactTemplate1Container(props) {
    let fileName;
    if(props.isAuth) {
        fileName = 'contact_draft.json'
    } else {
        fileName = 'contact.json'
    }
    useEffect(() => {
        const getContactPageData = async () => {
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
        getContactPageData();
      }, [])
    return (
        <>
         {!!Object.keys(props.contactPagaeData).length === true ? ( 
            <ContactTemplate1Component {...props}/>
            ) : null}
        </>
    )
}

const mapStateToProps = state => ({
    contactPagaeData: state.template1ContactR,
    isAuth: state.authR.auth

})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updateContactTemplateData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactTemplate1Container);

