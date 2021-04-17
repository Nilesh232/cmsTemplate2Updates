import React from 'react'
import { connect } from 'react-redux';
import { updateStrengthTemplateData } from '../../Services/Actions/actions';
import StrengthTemplate1Component from '../components/StrengthTemplate1Component';

function StrengthTemplate1Container(props) {
    return (
        <>
         {!!Object.keys(props.strengthPageData).length === true ? ( 
            <StrengthTemplate1Component {...props}/>
             ) : null}
        </>
    )
}

const mapStateToProps = state => ({
    strengthPageData: state.template1StrengthR
})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updateStrengthTemplateData(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(StrengthTemplate1Container);
