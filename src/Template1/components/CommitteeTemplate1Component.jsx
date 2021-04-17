import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';


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

function createData(srNo, fullName, fatherName, occupation, qualification, designation, term, contactNo) {
    return { srNo, fullName, fatherName, occupation, qualification, designation, term, contactNo };
}

const rows = [
    createData(1, 'Mr. Awdhesh Sharma', 'Mr. Ramanand Sharma', 'Govt. Service', 'M.A.', 'President', 3, 978385753),
    createData(2, 'Mr. Awdhesh Sharma', 'Mr. Ramanand Sharma', 'Govt. Service', 'M.A.', 'President', 3, 978385753),
    createData(3, 'Mr. Awdhesh Sharma', 'Mr. Ramanand Sharma', 'Govt. Service', 'M.A.', 'President', 3, 978385753),
    createData(4, 'Mr. Awdhesh Sharma', 'Mr. Ramanand Sharma', 'Govt. Service', 'M.A.', 'President', 3, 978385753),
    createData(5, 'Mr. Awdhesh Sharma', 'Mr. Ramanand Sharma', 'Govt. Service', 'M.A.', 'President', 3, 978385753),
    createData(6, 'Mr. Awdhesh Sharma', 'Mr. Ramanand Sharma', 'Govt. Service', 'M.A.', 'President', 3, 978385753),
    createData(7, 'Mr. Awdhesh Sharma', 'Mr. Ramanand Sharma', 'Govt. Service', 'M.A.', 'President', 3, 978385753),
    createData(8, 'Mr. Awdhesh Sharma', 'Mr. Ramanand Sharma', 'Govt. Service', 'M.A.', 'President', 3, 978385753),
    createData(9, 'Mr. Awdhesh Sharma', 'Mr. Ramanand Sharma', 'Govt. Service', 'M.A.', 'President', 3, 978385753),

];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
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


function CommitteeTemplate1Component() {
    const classes = useStyles();

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
              <h1 className={classes['h1']}>{"Committee"}</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>{" "}
                <span>
                  Committee <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
        <Container className="my-5" >
            {/* <div class="row  my-5 ">
                <div align="center" class="col-md-6 offset-md-3">
                    <h1>School Management Committee</h1>
                </div>
            </div> */}
            <hr className="my-5" />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Sr.No</StyledTableCell>
                            <StyledTableCell >Full Name</StyledTableCell>
                            <StyledTableCell >Father’s/Mother’s Name</StyledTableCell>
                            <StyledTableCell >Occupation</StyledTableCell>
                            <StyledTableCell >Qualification</StyledTableCell>
                            <StyledTableCell >Designation</StyledTableCell>
                            <StyledTableCell >Term</StyledTableCell>
                            <StyledTableCell >Contact No.</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.srNo}>
                                <StyledTableCell component="th" scope="row">
                                    {row.srNo}
                                </StyledTableCell>
                                <StyledTableCell >{row.fullName}</StyledTableCell>
                                <StyledTableCell >{row.fatherName}</StyledTableCell>
                                <StyledTableCell >{row.occupation}</StyledTableCell>
                                <StyledTableCell >{row.qualification}</StyledTableCell>
                                <StyledTableCell >{row.designation}</StyledTableCell>
                                <StyledTableCell >{row.term}</StyledTableCell>
                                <StyledTableCell >{row.contactNo}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
        </>
    );
}

export default CommitteeTemplate1Component
