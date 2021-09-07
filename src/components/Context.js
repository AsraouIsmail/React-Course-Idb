/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'


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
            default:
                return state;
    }
}

export  class Provider extends Component {

     state = {
         contacts: [
             {id:1,name: "Asraou ismail", Tel: "0611514432", email: "asraou.ismail@gmail.com"},
             {id:2,name: "Asraou abdessamad", Tel: "0619334256", email: "asraou.abdssmad@gmail.com"},
             {id:3,name: "Med amine", Tel: "0611513342", email: "dark-wolf@gmail.com"}
         ],
         dispatch: action => this.setState(state => reducer(this.state, action))
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