import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import FormAjout from './FormAjout'
import { add, getAll, remove } from '../services/operationDepats'
class ListDeparts extends Component {
    state = {
        titre: "Qui sommes nous ?",
        contact: {
            nom: "Ma Société",
            email: "contact@masociete.com",
            logo: <img src="images/informatique.jpg" alt="PhotoSociete"></img>
        },
        departs: [],

    }

    addDepart = (d) => {
        let tc = this.state.departs
        let size = this.state.departs.length;
        let nouveauDepart = {
            code: size > 0 ? parseInt(tc[size - 1].code) + 1 : 1,
            name: d
        }
        // this.setState({
        //     departs: [...this.state.departs, nouveauDepart]
        // })
        add((nouveauDepart),()=>{
            this.getAllDeparts()
        })
    }

    deleteDepart = (id) => {
        
        remove(id, ()=>this.getAllDeparts())
        // let tdepts = this.state.departs
        // tdepts.splice(id, 1)
        // this.setState({
        //     departs: tdepts
        // })
    }
    getAllDeparts = () => {
        getAll((res) => {
            console.log(res)
            this.setState({ departs: res.data })
        })



    }
    componentDidMount = () => {

        this.getAllDeparts()
    }

    render() {
        return (
            <div>
                <div className="card-header">
                    <strong>Liste des départements</strong>
                </div>


                <FormAjout ajoutDepart={this.addDepart} />

                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Département</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.departs.map((d, id) =>
                                    <tr key={id}>
                                        <td>{d.code}</td>
                                        <td>{d.name}</td>
                                        <td><button onClick={() => this.deleteDepart(d.id)}>X</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>


            </div>);
    }

}

export default ListDeparts;