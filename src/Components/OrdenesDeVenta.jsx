import React, {Component} from 'react';
import axios from 'axios';

export default class OrdenesDeVenta extends Component {

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
            <div className="App">
                <header className="bg-primary">
                    <div className=" row justify-content-center">
                        <h3 className="text-white"> Visualización de Acciones </h3>
                    </div>
                </header>
                 <div className="row justify-content-center">
                    <table className="table table-bordered">
                        <thead>
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
             </div>
        );
    }
}
