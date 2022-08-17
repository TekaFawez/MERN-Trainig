import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import FormAjout from './FormAjout'
class  ListDeparts extends Component {
    state = {
        titre: "Qui sommes nous ?",
        contact: {
            nom: "Ma Société",
            email: "contact@masociete.com",
            logo: <img src="images/informatique.jpg" alt="PhotoSociete"></img>
        },
        departs: [
            { id: 5, nom: "Commercial" },
            { id: 6, nom: "Développement" },
            { id: 7, nom: "Maintenance" }
        ],
        
    }

    addDepart=(d)=>{
        let tc = this.state.departs
        let size = this.state.departs.length;
        let nouveauDepart = {
            id :  size > 0 ? tc[size-1].id + 1 : 1 ,
            nom : d
        }
        this.setState({
            departs : [...this.state.departs, nouveauDepart]
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
            <div>
              <div className="card-header">
                            <strong>Liste des départements</strong>
                        </div>
                
                {/*<form onSubmit={this.addDepart}>
                    <input type="text" onChange={this.changeHandler}/>
                    <button>Ajouter département</button>
                </form>*/}
                <FormAjout ajoutDepart={this.addDepart}/>
                
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


            </div>);
    }

}
 
export default ListDeparts ;