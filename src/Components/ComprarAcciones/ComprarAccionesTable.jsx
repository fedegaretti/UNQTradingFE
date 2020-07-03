import React, { useEffect, useState } from 'react';
import { RestService} from '../../Service/RestService'
import { Paper, TableRow, TableBody, TableHead, Table, TableContainer, TablePagination, TableFooter} from "@material-ui/core";
import ComprarAccionesButton from './ComprarAccionesButton';
import { TablePaginationActions} from "../Common/Table.jsx";
import { tableStyle, StyledTableCell, StyledTableRow  } from '../MaterialDesign/Styles';

export default function ComprarAccionesTable(props) {
    const [ordenes, handleOrdenes] = useState([])
    const [pagina, setPagina] = React.useState(0);
    const [ordenesPorPagina, setOrdenesPorPagina] = React.useState(5);
    const usuario = JSON.parse(localStorage.getItem("user"))
    const classes = tableStyle();
    const emptyRows = ordenesPorPagina - Math.min(ordenesPorPagina, ordenes.length - pagina * ordenesPorPagina);

    const handleChangePage = (event, newPage) => {
        setPagina(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setOrdenesPorPagina(parseInt(event.target.value, 10));
        setPagina(0);
    };

    useEffect(() => {
        RestService.GET.findAllOrdenesDeVenta()
            .then(response => handleOrdenes(response.data))
    }, [])

    return (
         <div className="container row justify-content-center">
             <TableContainer component={Paper}>
                 <Table className={classes.table} aria-label="custom pagination table">
                     <TableHead>
                         <TableRow>
                             <StyledTableCell align="center">Cantidad de acciones</StyledTableCell>
                             <StyledTableCell align="center">Precio</StyledTableCell>
                             <StyledTableCell align="center">Fecha Vencimiento</StyledTableCell>
                             <StyledTableCell align="center">Empresa</StyledTableCell>
                             <StyledTableCell align="center"></StyledTableCell>
                         </TableRow>
                     </TableHead>
                     <TableBody>
                         {renderOrdenesDeVenta()}
                         {emptyRows > 0 && (
                             <TableRow style={{ height: 53 * emptyRows }}>
                                 <StyledTableCell colSpan={6} />
                             </TableRow>
                         )}
                     </TableBody>
                 </Table>
                 <TableFooter>
                     <TableRow>
                         <TablePagination
                             rowsPerPageOptions={[5, 10]}
                             colSpan={3}
                             count={ordenes.length}
                             rowsPerPage={ordenesPorPagina}
                             page={pagina}
                             SelectProps={{
                                 inputProps: { 'aria-label': 'rows per pagina' },
                                 native: true,
                             }}
                             onChangePage={handleChangePage}
                             onChangeRowsPerPage={handleChangeRowsPerPage}
                             ActionsComponent={TablePaginationActions}
                         />
                     </TableRow>
                 </TableFooter>
             </TableContainer>
         </div>
    )

    function renderOrdenesDeVenta () {
        return (ordenesPorPagina > 0
            ? ordenes.slice(pagina * ordenesPorPagina, pagina * ordenesPorPagina + ordenesPorPagina)
            : ordenes).filter((row) => (row.creador.id !== usuario.id)).map((row) => (
                <StyledTableRow>
                    <StyledTableCell align="center">{row.cantidadDeAcciones}</StyledTableCell>
                    <StyledTableCell align="center">{row.precio}</StyledTableCell>
                    <StyledTableCell align="center">{row.fechaDeVencimiento}</StyledTableCell>
                    <StyledTableCell align="center">{row.empresa.nombreEmpresa}</StyledTableCell>
                    <StyledTableCell aling="center">{<ComprarAccionesButton ordenId={row.id} usuarioId={props.persona.id}/>}</StyledTableCell>
                </StyledTableRow>
        ))
    }
}
