import { Component } from 'react'
class DemoEvents extends Component {
    constructor(props) { super(props); }
    state = {
         value: 1, 
         personne: '',
         participants: ['mohamed', 'imen', 'rihab', 'anis'] }
    incrementer = () => { this.setState({ value: this.state.value + 1 }) }
    handleClick = (msg) => {
        //alert("Bonjour à toutes et à tous...") 
        alert(msg)
        //console.log(this)
    }
    changeHandler=(event)=>{
this.setState({
    personne: event.target.value
})
    }
    addPerson = (event) => {
        event.preventDefault()//sans refrech pages
        // let list_participant=this.state.participants.slice()
        // list_participant.push(this.state.personne)
        // this.setState({
        //     participants:list_participant
        // })
        this.setState({ participants: [...this.state.participants, this.state.personne] })//autre methode
        //alert(this.state.personne) 
    }
    render() {
        return (<div>
            <h1>bonjour   {this.state.personne} </h1>
            <input type="text" onChange={this.changeHandler}></input>
            <input type="button" onClick={this.addPerson} value="add person"></input>
                <h2>    Ajouter personne Liste des participants :</h2>
                {this.state.participants.map((p, i) =>  <li key={i}>{p}</li> )}
            </div>
            )
        }
    }

            export default DemoEvents;


