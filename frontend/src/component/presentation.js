import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Presentation extends Component {

    state = {
       
        departs: [
            { id: 1, nom: "Commercial" },
            { id: 2, nom: "Développement" },
            { id: 3, nom: "Maintenance" }
        ],
        newDepart:""
    }
    changeHandler=(event)=>{
        this.setState({
            newDepart: event.target.value
        })
            }
addDepartment = (event)=>{
    event.preventDefault()
    let tc = this.state.departs
    let size= this.state.departs.length
    let nouveDepart ={
        id:tc[size-1].id +1 ,
        nom :this.state.newDepart
    }
    this.setState({
        departs:[...this.state.departs, nouveDepart]
    })

}
deleteDepart = (id) => {
    let tdepts = this.state.departs
    tdepts.splice(id,1)
    this.setState({
        departs : tdepts
    })
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
                     <form>
                        
                        <input type="text" onChange={this.changeHandler}/> 
                        <button onClick={this.addDepartment}>Ajoute un departement  </button>
                     </form>
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
                                                <td><button onClick={()=>this.deleteDepart(index)}>X</button></td>
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