import React, {Component} from 'react';
import axios from 'axios';




export default class Transfer extends Component {


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <h3 className="text-primary"> Visualizacion de Acciones </h3>
                            </div>
                        </div>
                        <hr style={{color: '#0275d8', backgroundColor: '#0275d8', height: 1}}/>
                        <div className="container">
                            <table className="table-dark col">
                                <thead>
                                <tr>
                                    <th scope="col">Cantidad De Acciones</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Fecha Creación</th>
                                    <th scope="col">Fecha Vencimiento</th>
                                </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </header>
                <Footer/>
            </div>
        );
    }
}
function sent(testField) {
    axios.get(`http://localhost:8080/api/`, {
        id: null,
        testField: testField
    }).then((response) => {
        alert("ok")
    }).catch((error) => {
        alert("fail")
    })
}