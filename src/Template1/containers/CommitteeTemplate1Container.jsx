import React from 'react'
import { connect } from 'react-redux';
import CommitteeTemplate1Component from '../components/CommitteeTemplate1Component';

function CommitteeTemplate1Container(props) {
    return (
        <>
         {/* {!!Object.keys(props.admissionProcessPageData).length === true ? (  */}
            <CommitteeTemplate1Component {...props}/>
            {/*  ) : null} */}
        </>
    )
}

const mapStateToProps = state => ({
    // admissionProcessPageData: state.template1AdmissionProcessR
})

const mapDispatchToProps = dispatch => ({
    // setPageData: (data) => dispatch(updateAdmissionProcessTemplateData(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(CommitteeTemplate1Container);
