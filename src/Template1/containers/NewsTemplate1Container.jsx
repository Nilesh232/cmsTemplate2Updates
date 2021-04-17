import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { baseURL, bucketName } from '../../data/applicationConstant';
import { updateNewsTemplateData } from '../../Services/Actions/actions';
import NewsTemplate1Component from '../components/NewsTemplate1Component'

function NewsTemplate1Container(props) {
    let fileName;
    if(props.isAuth) {
        fileName = 'news_draft.json'
    } else {
        fileName = 'news.json'
    }
    useEffect(() => {
        const getNewsPageData = async () => {
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
        getNewsPageData();
      }, [])
    return (
        <>
         {!!Object.keys(props.newsPageData).length === true ? ( 
            <NewsTemplate1Component {...props}/>
            ) : null}
        </>
    )
}


const mapStateToProps = state => ({
    newsPageData: state.template1NewsR,
    isAuth: state.authR.auth

})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updateNewsTemplateData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsTemplate1Container);
