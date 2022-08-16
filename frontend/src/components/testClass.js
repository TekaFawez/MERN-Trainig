import { Component } from 'react'
class TestClass extends Component {// c'est un composant react 
    state = {
        montext: "bienvenue a ce formation",
        text2: "bla bla",
        x: 2022,
        user: {
            name: "fawez", prenom: "Teka"
        },
        value: 1,
        participant: ["Fawez", "hedil", "nassir", "salah"]
    }
    handleClick = () => { this.setState({ value: this.state.value + 1 }) }


    render() {

        return (<div>
            {/* <h1>c'est un compsant de type classe</h1>
            <h2>{this.state.montext}</h2>
            {this.state.text2} <br>
            </br> {this.state.x}
            <hr></hr> */}
            <h2>Lavaleur de compteur est {this.state.value}</h2>
            <input type="button" onClick={() => this.handleClick()} value="incrementer"></input>

            <h1>la liste des particiapant</h1>: {this.state.participant.map((p, i) => <li key={i}>{p}</li>)}
        </div>

        );
    }
}

export default TestClass;