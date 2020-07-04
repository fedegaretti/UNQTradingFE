import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {Grid} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="http://www.unq.edu.ar/">
        Este sitio es desarrollado por alumnos de la Universidad Nacional de Quilmes
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {

  return (
      <Grid container style={{
          height: '10vh',
          backgroundColor: grey[200],
          bottom: '0'
      }} alignItems="center" justify="center">
          <Grid item xs={4}>
              <Grid item xs={12}>
                  <Typography variant="body1">UNQ Trading ®.</Typography>
              </Grid>
              <Grid item xs={12}>
                  <Copyright />
              </Grid>
          </Grid>
      </Grid>
  );
}