import React, {useState} from 'react';
import Fab from '@material-ui/core/Fab';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import { useHistory } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));



export default function RegistroMenu() {

  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goRegistroPersona = () => {
    history.push("/Registro");
  };

  const goRegistroEmpresa = () => {
    history.push("/RegistrarEmpresa");
  };

  return (
  <div>
    <Fab style={{marginLeft: "1vw"}} variant="outlined" color="primary" onClick={handleClick}>
        Registrarse
    </Fab>
    <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
    >
        <MenuItem onClick={goRegistroPersona}>
            <ListItemIcon>
                <PersonIcon fontSize="small" />
            </ListItemIcon>
                <ListItemText primary="Persona" />
        </MenuItem>
        <MenuItem onClick={goRegistroEmpresa}>
            <ListItemIcon>
                <BusinessIcon fontSize="small" />
            </ListItemIcon>
                <ListItemText primary="Empresa" />
        </MenuItem>
    </StyledMenu>
  </div>
  );
}
