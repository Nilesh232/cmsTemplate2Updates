import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { baseURL, bucketName } from '../../data/applicationConstant'
import { updateTemplateData } from '../../Services/Actions/actions'
import HomeEventsTemplate2Container from './HomeEventsTemplate2.container'
import HomeGalleryTemplate2Container from './HomeGalleryTemplate2Container'
import HomeInfoTemplate2Container from './HomeInfoTemplate2Container'
import HomeNewsTemplate2Container from './HomeNewsTemplate2Component'
import NoticeTemplate2Container from './NoticeTemplate2Container'
import SliderTemplate2Container from './SliderTemplate2Container'

function HomeTemplate2Container(props) {
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

    // useEffect(() => {
    //     const getHomePageData = async () => {
    //       await fetch(baseURL + '/get-template', {
    //         "method": "POST",
    //         "body": JSON.stringify({
    //             "bucket":bucketName,
    //             "fileName": fileName
    //         })
    //       })
    //       .then((response) => response.json())
    //       .then((data) => {
    //           props.setPageData(data);
    //       })
    //     };
    //     getHomePageData();
    //   }, [])


    return (
        <>
        {/* {!!Object.keys(props.homePageData).length === true ? (
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
        ) : null} */}
        <SliderTemplate2Container />
        <NoticeTemplate2Container />
        <HomeEventsTemplate2Container />
        <HomeInfoTemplate2Container />
        <HomeNewsTemplate2Container />
        <HomeGalleryTemplate2Container />
        </>
    )
}

const mapStateToProps = state => ({
    // homePageData: state.template1HomeR,
    // isAuth: state.authR.auth

})

const mapDispatchToProps = dispatch => ({
    // setPageData: (data) => dispatch(updateTemplateData(data)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeTemplate2Container);
