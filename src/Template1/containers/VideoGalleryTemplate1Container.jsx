import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { baseURL, bucketName } from '../../data/applicationConstant';
import { updateVideoTemplateData } from '../../Services/Actions/actions'
import VideoGalleryTemplate1Component from '../components/VideoGalleryTemplate1Component'

function VideoGalleryTemplate1Container(props) {
    let fileName;
    if(props.isAuth) {
        fileName = 'video_draft.json'
    } else {
        fileName = 'video.json'
    }
    useEffect(() => {
        const getVideoPageData = async () => {
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
        getVideoPageData();
      }, [])
    return (
        <>  
            {!!Object.keys(props.videoGalleryPageData).length === true ? (
                <VideoGalleryTemplate1Component {...props}/>
            ) : null}
        </>
    )
}

const mapStateToProps = state => ({
    videoGalleryPageData: state.template1VideoGalleryR
})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updateVideoTemplateData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoGalleryTemplate1Container)
