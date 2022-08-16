import React, { Component } from 'react'
class Personne extends Component {
    constructor(){
// bloc1
    }
    componentWillMount(){
//bloc2
    }
    componentDidMount(){
        // bloc4
    }
    
    render() { 
        // bloc3
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