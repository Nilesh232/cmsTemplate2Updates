import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { baseURL, bucketName } from '../../data/applicationConstant';
import { updateMissionTemplateData } from '../../Services/Actions/actions';
import MissionTemplate1Component from '../components/MissionTemplate1Component'

function MissionTemplate1Container(props) {
    let fileName;
    if(props.isAuth) {
        fileName = 'mission_draft.json'
    } else {
        fileName = 'mission.json'
    }
    useEffect(() => {
        const getMissionPageData = async () => {
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
        getMissionPageData();
      }, [])
    return (
        <>
        {!!Object.keys(props.missionPageData).length === true ? ( 
           <MissionTemplate1Component {...props}/>
            ) : null} 
        </>
    )
}

const mapStateToProps = state => ({
    missionPageData: state.template1MissionR,
    isAuth: state.authR.auth

})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updateMissionTemplateData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(MissionTemplate1Container)
