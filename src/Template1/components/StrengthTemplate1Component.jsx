import React, { useState } from 'react';


import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

// import { isAuth } from "../../data/applicationConstant";

import EditModal from "../EditModal";
import { Snackbar } from "@material-ui/core";

import MuiAlert from "@material-ui/lab/Alert";

import { horizontal, vertical } from "../../data/applicationConstant";
import { connect } from "react-redux";
import { updateTeacherData } from "../../Services/Actions/actions";
import { sortByKey } from "../../utilities/helper/helper";
import { teacherObj } from '../../data/schema';
import AddSectionModal from '../AddSectionModal';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#0d1128',
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

function createData(myClass, section, students) {
    return { myClass, section, students };
}

const rows = [
    createData('I', 1, 42),
    createData('II', 2, 52),
    createData('III', 1, 74),
    createData('IV', 1, 85),
    createData('V', 2, 30),
    createData('VI', 1, 50),
    createData('VII', 2, 41),
    createData('VIII', 1, 30),
];

const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
    
    banner: {
        height: '300px',
        width: '100%',
        position: 'inherit',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        position: 'relative'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        content: '',
        opacity: .3,
        background: '#f1453d'
    },
    
    text: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    h1: {
        fontSize: '2.5rem',
        fontWeight: 900,
        color: '#fff',
        fontFamily: 'Poppins, Arial, sans-serif'
    }
});

function StrengthTemplate1Component(props) {
    const classes = useStyles();
    const data = props.strengthPageData.strength;
    const dummyObj = teacherObj;
    if (data.content && data.content.length) {
      data.content = sortByKey(data.content, "orderNo");
    }
  let editClass = props.isAuth === true ? "edit-block" : "";
  const [open, setOpen] = useState(false);
  const [openContent, setOpenContent] = useState(false);
  const [openToaster, setOpenToaster] = useState(false);
  const [selectedId, setSelectedId] = useState(false);

  const changeModalStatus = (status) => {
    setOpen(status);
  };

  const changeSelectedId = (id) => {
    setSelectedId(id);
  };

  const changeToasterStatus = (status) => {
    setOpenToaster(status);
  };

  const changeAddContentModalStatus = (status) => {
    setOpenContent(status);
  };

  const changeData = (sectionData, sectionName) => {
    props.updateData(sectionData, sectionName);
  };

  const deleteSection = (kdx, sLevel) => {
    data[sLevel.toString()].splice(kdx, 1);
    props.updateData(data, data.sectionName);
  };


    return (
        <>
        <div>
        <div
          className={classes["banner"]}
          style={{ backgroundImage: "url(/static/images/bg_1.jpg)" }}
        >
          <div className={classes["overlay"]}></div>
          <div className={classes["text"]}>
            <div>
              <h1 className={classes['h1']}>{data.config.sectionTitle}</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>{" "}
                <span>
                  Strength <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
            <Container className="my-5" >
            <div class="row">
                <div align="center" class="col-md-6 offset-md-3">
                    <h2>{data.config.description}</h2>
                </div>
            </div>
            {/* <hr className="my-5" /> */}
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <>
                            {data.header.headerTitle.map((val, idx) => (
                                <StyledTableCell>{val}</StyledTableCell>
                            ))}
                            </>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.content.map((row,idx) => (
                            <>
                                <StyledTableRow key={idx}>
                                {data.header.headerTitle.map((val,kdx) => (
                                    <>
                                        <StyledTableCell>
                                            {row[val.toString()]}
                                        </StyledTableCell>
                                    </>
                                ))}
                                </StyledTableRow>
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container >
        </>
    )
}

const mapStateToProps=state=>({
    isAuth: state.authR.auth
})

const mapDispatchToProps=dispatch=>({
// updateData:(data, sectionName)=>dispatch(updateData(data, sectionName)),
})

export default connect(mapStateToProps,mapDispatchToProps)(StrengthTemplate1Component)
