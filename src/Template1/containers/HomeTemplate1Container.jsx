import React, { useEffect } from 'react'
import NewsHomeTemplate1Component from '../components/NewsHomeTemplate1Component'
import EventHomeTemplate1Container from './EventHomeTemplate1Container'
import FeaturesTemplate1Container from './FeaturesTemplate1Container'
import SchoolOfferTemplate1Container from './SchoolOfferTemplate1Container'
import SliderTemplate1Container from './SliderTemplate1Container'
import { connect } from 'react-redux'
import TestimonialTemplate1Container from './TestimonialTemplate1Container'
import { baseURL, bucketName } from '../../data/applicationConstant'
import { updateTemplateData } from '../../Services/Actions/actions'


function HomeTemplate1Container(props) {
    console.log(props)

    // const [addModalState, setaddModalState] = React.useState(false);

    const showSectionList = (e) => {
        // addModalState(e);
    }

    let fileName;
    if(props.isAuth) {
        fileName = 'home_draft.json'
    } else {
        fileName = 'home.json'
    }

    useEffect(() => {
        const getHomePageData = async () => {
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
        getHomePageData();
      }, [])


    return (
        <>
        {!!Object.keys(props.homePageData).length === true ? (
            <>
                {props.homePageData.slider.config.sectionVisible === true ? (
                    <SliderTemplate1Container {...props}/>
                ) : null}
                {props.homePageData.schoolFeature.config.sectionVisible === true ? (
                    <FeaturesTemplate1Container {...props}/>
                ) : null}
                {props.homePageData.schoolOffer.config.sectionVisible === true ? (
                    <SchoolOfferTemplate1Container {...props}/>
                ) : null}
                {props.homePageData.testimonials.config.sectionVisible === true ? (
                    <TestimonialTemplate1Container {...props}/>
                ) : null}
                {props.homePageData.events.config.sectionVisible === true ? (
                    <EventHomeTemplate1Container {...props}/>
                ) : null}
                {props.homePageData.news.config.sectionVisible === true ? (
                    <NewsHomeTemplate1Component {...props}/>
                ) : null}
            </>
        ) : null}
        </>
    )
}

const mapStateToProps = state => ({
    homePageData: state.template1HomeR,
    isAuth: state.authR.auth

})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updateTemplateData(data)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeTemplate1Container);
