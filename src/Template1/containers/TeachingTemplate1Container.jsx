import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { baseURL, bucketName } from '../../data/applicationConstant';
import { updateTeachingTemplateData } from '../../Services/Actions/actions';
import TeachingTemplate1Component from '../components/TeachingTemplate1Component';

function TeachingTemplate1Container(props) {
    let fileName;
    if(props.isAuth) {
        fileName = 'teaching_draft.json'
    } else {
        fileName = 'teaching.json'
    }
    useEffect(() => {
        const getTeachingPageData = async () => {
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
        getTeachingPageData();
      }, [])

    return (
        <>  
            {!!Object.keys(props.teachingPageData).length === true ? (
                <TeachingTemplate1Component {...props}/>
            ) : null}
        </>
    )
}

const mapStateToProps = state => ({
    teachingPageData: state.template1TeachingR,
    isAuth: state.authR.auth

})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updateTeachingTemplateData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(TeachingTemplate1Container);
