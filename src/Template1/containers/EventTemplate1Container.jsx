import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { baseURL, bucketName } from '../../data/applicationConstant';
import { updateEventsTemplateData } from '../../Services/Actions/actions';
import EventTemplate1Component from '../components/EventTemplate1Component'

function EventTemplate1Container(props) {
    let fileName;
    if(props.isAuth) {
        fileName = 'events_draft.json'
    } else {
        fileName = 'events.json'
    }
    useEffect(() => {
        const getEventsPageData = async () => {
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
        getEventsPageData();
      }, [])
    return (
        <>
         {!!Object.keys(props.eventsPageData).length === true ? ( 
            <EventTemplate1Component {...props}/>
            ) : null}
        </>
    )
}


const mapStateToProps = state => ({
    eventsPageData: state.template1EventsR,
    isAuth: state.authR.auth

})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updateEventsTemplateData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventTemplate1Container);
