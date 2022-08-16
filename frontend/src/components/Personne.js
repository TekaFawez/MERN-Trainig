import React, { Component } from 'react'
class Personne extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h2>prenom:{this.props.prenom}</h2>
                <h2>nom:{this.props.nom}</h2>
            </div>

        );
    }
}
Personne.defaultProps= {prenom:"Fawezz"}
 
export default Personne;