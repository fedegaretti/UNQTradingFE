import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import { blue } from '@material-ui/core/colors';
import { grey } from '@material-ui/core/colors';
import { properties } from "../../Properties/properties.js";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[900],
    color: grey[50],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const history = useHistory();


  const handleClose = () => {
    onClose(selectedValue);
  };

  const goRegistroPersona = () => {
    history.push("/Registro");
  };

  const goRegistroEmpresa = () => {
    history.push("/RegistrarEmpresa");
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Registrarse como:</DialogTitle>
      <List>
          <ListItem button onClick={goRegistroPersona}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={"Persona"} />
          </ListItem>
          <ListItem button onClick={goRegistroEmpresa}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <BusinessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={"Empresa"} />
          </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Fab style={{marginLeft: "1vw"}} variant="outlined" color="primary" onClick={handleClickOpen}>
        {properties.labels.registrar}
      </Fab>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}