import { React } from 'react'

import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


class Apropos extends Component {
    state = {
        titre: "Qui sommes nous ?",
        contact: {
            nom: "Ma Société",
            email: "contact@masociete.com",
            logo: <img src="images\logo.jpg" alt="PhotoSociete"></img>
        }
    }
    render() {
        return (
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
            </div>);
    }
}

export default Apropos;