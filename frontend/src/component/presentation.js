import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Presentation extends Component {

    state = {
        titre: "Qui sommes nous ?",
        contact: {
            nom: "Ma Société",
            email: "info@masociete.com",
            logo: <img src='\images\logo.jpg' width={100} alt='logo Société'></img>

        },
        departs: [
            { id: 1, nom: "Commercial" },
            { id: 2, nom: "Développement" },
            { id: 3, nom: "Maintenance" }
        ]
    }

    render() {
        return (
            <div className="m-4">
                <div>
                    <div className="card">
                        <div className="card-header">
                            <strong><label>{this.state.titre}</label></strong>
                        </div>

                        <div className="row p-2">
                            <div className="col col-auto">
                                {this.state.contact.logo}
                            </div>

                            <div className="col">
                                <ul className="list-group">
                                    <li className="list-group-item">Société : {this.state.contact.nom}</li>
                                    <li className="list-group-item">Email : {this.state.contact.email}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card m-2">
                        <div className="card-header">
                            <strong>Liste des départements</strong>
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Département</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        this.state.departs.map((d, index) =>
                                            <tr key={index}>
                                                <td>{d.id}</td>
                                                <td>{d.nom}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Presentation;