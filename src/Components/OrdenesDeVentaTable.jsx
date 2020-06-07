import React, {Component} from 'react';
import axios from 'axios';

export default class OrdenesDeVentaTable extends Component {

  constructor(props) {
        super(props);
        this.state = {
            ordenes:[]

        }
    }

    renderOrdenesDeVenta = () => {
        return this.state.ordenes.map(e => <tr>
            <td>{e.cantidadDeAcciones}</td>
            <td>{e.precio}</td>
            <td>{e.fechaDeCreacion}</td>
            <td>{e.fechaDeVencimiento}</td>
        </tr>)
    }


     componentDidMount = () => {
          axios.get(`http://localhost:8080/api/venta/all?nombreEmpresa=UNQ`)
                .then(response =>
                    this.setState({
                    ordenes : response.data
                    })
                )
     }

    render() {
        return (
             <div className="container row justify-content-center">
                <table className="table table-striped table-dark">
                    <thead className="bg-secondary ">
                        <tr>
                            <th scope="col">Cantidad de acciones</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Fecha Creación</th>
                            <th scope="col">Fecha Vencimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderOrdenesDeVenta()}
                    </tbody>
                </table>
             </div>
        );
    }
}
