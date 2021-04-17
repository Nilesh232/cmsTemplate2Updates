import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Paper,Table,TableBody,TableRow,TableHead ,TableContainer,TableCell, Snackbar } from '@material-ui/core';
import { updateScreenData } from './Services/Actions/actions';
import { connect } from 'react-redux';
import { baseURL, bucketName, distributionId } from './data/applicationConstant';
import { useHistory } from 'react-router';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: 'rgb(62, 148, 228)',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, author, lastUpdatedOn, status, route, fileName) {
    return { name, author, lastUpdatedOn, status, route, fileName };
  }

  let rows = [];

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


const Screen = (props) => {
  const data = props.screenPageData.screen;
  const history = useHistory();
  useEffect(() => {
    const getScreenPageData = async () => {
      await fetch(baseURL + '/get-template', {
        "method": "POST",
        "body": JSON.stringify({
            "bucket":bucketName,
            "fileName": "screen_draft.json"
        })
      })
      .then((response) => response.json())
      .then((data) => {
        fillRowData(data.screen);
          props.setPageData(data);
      })
    };
    getScreenPageData();
  }, [])
    const classes = useStyles();
    const [screenRow, setScreenRow] = useState(rows);
    const [successMessage, setSuccessMessage] = useState({
      open: false,
      msg: ''
    });

    const handleClick = (msg) => () => {
    setSuccessMessage({
      open: true,
      msg: msg
    });
  };

  const handleClose = () => {
    setSuccessMessage({
      open: false,
      msg: ''
    });
  };

  const getPageData = (data, props) => {
    let pageData;
    switch (data.fileName) {
      case "header":
        pageData = props.headerPageData
        break;
      case "navbar":
        pageData = props.navbarPageData
        break;
      case "home":
        pageData = props.homePageData
        break;
      case "mission":
        pageData = props.missionPageData
        break;
      case "principalMessage":
        pageData = props.principalMessagePageData
        break;
      case "teacher":
        pageData = props.teacherPageData
        break;
      case "video":
        pageData = props.videoGalleryPageData
        break;
      case "gallery":
        pageData = props.galleryPageData
        break;
      case "events":
        pageData = props.eventsPageData
        break;
      case "news":
        pageData = props.newsPageData
        break;
      case "facility":
        pageData = props.facilityPageData
        break;
      case "fee":
        pageData = props.feePageData
        break;
      case "admissionProcess":
        pageData = props.admissionProcessPageData
        break;
      case "teaching":
        pageData = props.teachingPageData
        break;
      case "rules":
        pageData = props.rulesPageData
        break;
      case "curicullum":
        pageData = props.curicullumPageData
        break;
      case "contact":
        pageData = props.contactPageData
        break;
      case "footer":
        pageData = props.footerPageData
        break;
      default:
        break;
    }
    return pageData;
  }

  const saveAsDraft = async (data, props) => {
    let pageData;
    pageData = getPageData(data, props);

    if(!!pageData === true){
      if(!!Object.keys(pageData).length === true) {
        await fetch(baseURL + '/cms-template', {
          "method": 'POST',
          "body": JSON.stringify({
            "bucket":bucketName,
            "fileName": data.fileName+'_draft.json',
            "data":{
              ...pageData
            }
          })
        })
        .then((response) => response.json())
        .then((data) => {
          // handleClick(data);
          alert(data);
        })
      } else {
        alert('No date is there for uploading');
      }
    } else {
      alert('No date is there for uploading');
    }
  }

  const publishPage = async (data, props) => {
    let pageData;
    pageData = getPageData(data, props);
    if(!!pageData === true && !!Object.keys(pageData).length === true) {
      await fetch(baseURL + '/cms-template', {
        "method": 'POST',
        "body": JSON.stringify({
          "bucket":bucketName,
          "fileName": data.fileName+'.json',
          "data":{
            ...pageData
          }
        })
      })
      .then((response) => response.json())
      .then( async (data) => {
        await fetch(baseURL + '/publish', {
          "method": 'POST',
          "body": JSON.stringify({
            "distributionId": distributionId
          })
        }).then((data) => {
          // handleClick(data);
          alert(data);
        })
      })
    }
  }

    const navigateTo = (route) => {
        history.push('/admin' + route);
    }

    const fillRowData = (data) => {
      data.content.forEach((val, idx) => {
        rows.push(createData(val.pageName, val.userName, val.lastUpdatedOn, val.status, val.route,val.fileName))
      })
      setScreenRow(rows);
    }

    return (
      <>
      {!!Object.keys(props.screenPageData).length === true ? (
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
      <TableHead className={classes.head}>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">lastUpdatedOn</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {screenRow.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" style={{color: '#2196f3', cursor: 'pointer'}} onClick={() => {navigateTo(row.route)}}>
                {row.name}
              </StyledTableCell>
             <StyledTableCell align="right">{row.author}</StyledTableCell>
              <StyledTableCell align="right">{row.lastUpdatedOn}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell component="th" scope="row" style={{color: '#2196f3'}}>
                <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <abbr title="Save as Draft">
                  <div className="iconBackdoor" onClick={() => {saveAsDraft(row, props)}}>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-plus" viewBox="0 0 16 16">
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                      <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM8 8a.5.5 0 0 1 .5.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5A.5.5 0 0 1 8 8z"/>
                      </svg>
                    </span>
                  </div>
                  </abbr>
                  <abbr title="Publish">
                  <div className="iconBackdoor" onClick={() => {publishPage(row, props)}}>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                      </svg>
                    </span>
                  </div>
                  </abbr>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      ) : null}
      <Snackbar
        open={successMessage.open}
        onClose={handleClose}
        TransitionComponent="Fade"
        message={successMessage.msg}
      />
    </>
    )
}

const mapStateToProps = state => ({
    screenPageData: state.screenR,
    headerPageData: state.template1HeaderR,
    navbarPageData: state.template1NavbarR,
    homePageData: state.template1HomeR,
    contactPageData: state.template1ContactR,
    facilityPageData: state.template1FacilityR,
    newPageData: state.template1NewsR,
    eventsPageData: state.template1EventsR,
    admissionProcessPageData: state.template1AdmissionProcessR,
    teachingPageData: state.template1TeachingR,
    rulesPageData: state.template1RulesR,
    curicullumPageData: state.template1CuricullumR,
    footerPageData: state.template1FooterR,
    missionPageData: state.template1MissionR,
    principalMessagePageData: state.template1PrincipalMessageR,
    videoGalleryPageData: state.template1VideoGalleryR,
    teacherPageData: state.template1TeacherR,
    screenPageData: state.screenR 
})

const mapDispatchToProps = dispatch => ({
    setPageData: (data) => dispatch(updateScreenData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
