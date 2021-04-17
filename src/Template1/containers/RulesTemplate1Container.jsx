import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { baseURL, bucketName } from '../../data/applicationConstant';
import { updateRulesTemplateData } from '../../Services/Actions/actions';
import RulesTemplate1Component from '../components/RulesTemplate1Component';

function RulesTemplate1Container(props) {
    let fileName;
    if(props.isAuth) {
        fileName = 'rules_draft.json'
    } else {
        fileName = 'rules.json'
    }
    useEffect(() => {
        const getRulesPageData = async () => {
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
        getRulesPageData();
      }, [])

    return (
        <>
         {!!Object.keys(props.rulesPageData).length === true ? ( 
            <RulesTemplate1Component {...props}/>
            ) : null}
        </>
    )
}

const mapStateToProps = state => ({
    rulesPageData: state.template1RulesR,
    isAuth: state.authR.auth

})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updateRulesTemplateData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(RulesTemplate1Container);
