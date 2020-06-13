import React, {useEffect, useState} from 'react';
import {RestService} from '../../Service/RestService'
import {Paper, TableRow, TableBody, TableHead, Table, TableContainer, makeStyles,
IconButton, TablePagination, TableFooter, TableCell, withStyles, useTheme} from "@material-ui/core";
import {FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage} from "@material-ui/icons";
import PropTypes from "prop-types";
import ComprarAccionesButton from './ComprarAccionesButton';
import blue from "@material-ui/core/colors/blue";

const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: blue["900"],
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

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
    table: {
        minWidth: 500,
    },
});

export default function ComprarAccionesTable() {
    const [ordenes, handleOrdenes] = useState([])
    const [pagina, setPagina] = React.useState(0);
    const [ordenesPorPagina, setOrdenesPorPagina] = React.useState(5);
    const classes = useStyles2();
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
            : ordenes).map((row) => (
                <StyledTableRow>
                    <StyledTableCell align="center">{row.cantidadDeAcciones}</StyledTableCell>
                    <StyledTableCell align="center">{row.precio}</StyledTableCell>
                    <StyledTableCell align="center">{row.fechaDeVencimiento}</StyledTableCell>
                    <StyledTableCell align="center">{row.nombreEmpresa}</StyledTableCell>
                    <StyledTableCell aling="center">{<ComprarAccionesButton ordenId={row.id} usuarioId={1}/>}</StyledTableCell>
                </StyledTableRow>
        ))
    }
}
