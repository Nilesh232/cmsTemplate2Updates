import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Container } from "@material-ui/core";


import { TemplateData } from "./data/TemplateData";
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    cvName: {
      marginTop: "15px",
    },
    box: {
      cursor: 'pointer'
    },
  }));

function Template() {
    const classes = useStyles();
    const history = useHistory();

  const navigateToTemplate = (route) => {
    history.push(route);
  };
    return (
        <>
      <Container maxWidth="md">
        <Grid container spacing={6}>
          {TemplateData.map((item, index) => (
            <Grid item sm xs={12} key={item.id}>
              <Box
                className={classes.box}
                onClick={() => {navigateToTemplate(item.route)}}
              >
                <img
                  src={item.img}
                  alt="template1"
                />
              </Box>
              <h3 className={classes.cvName}>{item.name}</h3>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
    )
}

export default Template
