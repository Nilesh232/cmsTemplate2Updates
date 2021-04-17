import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { baseURL, bucketName } from '../../data/applicationConstant';
import { updateTeacherTemplateData } from '../../Services/Actions/actions';
import TeacherTemplate1Component from '../components/TeacherTemplate1Component';

function TeacherTemplate1Container(props) {
    let fileName;
    if(props.isAuth) {
        fileName = 'teacher_draft.json'
    } else {
        fileName = 'teacher.json'
    }
    useEffect(() => {
        const getTeacherPageData = async () => {
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
        getTeacherPageData();
      }, [])

    return (
        <>
            {!!Object.keys(props.teacherPageData).length === true ? ( 
                <TeacherTemplate1Component {...props}/>
              ) : null}
        </>
    )
}
const mapStateToProps = state => ({
    teacherPageData: state.template1TeacherR,
    isAuth: state.authR.auth

})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updateTeacherTemplateData(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(TeacherTemplate1Container);
