import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {footerStyle} from '../MaterialDesign/Styles';

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
  const classes = footerStyle();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="md">
          <Typography variant="body1">UNQ Trading ®.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}