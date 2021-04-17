import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { baseURL, bucketName } from '../../data/applicationConstant';
import { updateFooterTemplateData } from '../../Services/Actions/actions'
import FooterTemplate1Component from '../components/FooterTemplate1Component'

function FooterTemplate1Container(props) {
    let fileName;
    if(props.isAuth) {
        fileName = 'footer_draft.json'
    } else {
        fileName = 'footer.json'
    }
    useEffect(() => {
        const getFooterPageData = async () => {
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
        getFooterPageData();
      }, [])
    return (
        <>
        {!!Object.keys(props.footerPageData).length === true ? (
            <FooterTemplate1Component {...props}/>
        ): null}
        </>
    )
}

const mapStateToProps = state => ({
    footerPageData: state.template1FooterR,
    isAuth: state.authR.auth
})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updateFooterTemplateData(data)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(FooterTemplate1Container)
