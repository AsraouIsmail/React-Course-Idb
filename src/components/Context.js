/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios';


const Context = React.createContext();
const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return{
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
            case 'ADD_CONTACT':
            return{
                contacts: [action.payload, ...state.contacts]
            };
            case 'UPDATE_CONTACT':
            return{
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? contact = action.payload : contact)
            };
            default:
                return state;
    }
}

export  class Provider extends Component {

     state = {
         contacts: [
             {id:1,name: "Asraou ismail", phone: "0611514432", email: "asraou.ismail@gmail.com"},
             {id:2,name: "Asraou abdessamad", phone: "0619334256", email: "asraou.abdssmad@gmail.com"},
             {id:3,name: "Med amine", phone: "0611513342", email: "dark-wolf@gmail.com"}
         ],
         dispatch: action => this.setState(state => reducer(this.state, action))
     }
     async componentDidMount(){

        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
         this.setState({
             contacts: res.data
         })

        }
        catch(e){
            console.log(e)
        }
         

     }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}

            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;