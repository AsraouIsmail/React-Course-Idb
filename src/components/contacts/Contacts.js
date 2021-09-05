/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Contact from '../contacts/Contact'
import {Consumer} from '../Context';

 class Contacts extends Component {
    

     deleteContact(id){
         console.log("contact deleted")
         const {contacts} = this.state;
         const newListContacts = contacts.filter((contact) => contact.id !== id)
         this.setState({
             contacts: newListContacts
         })
     }
    render() {


       return(
           <Consumer>
               {value =>(
                   <div>
                {value.contacts.map((contact) => (
                    <Contact
                    // name={contact.name}
                    // Tel={contact.Tel}
                    // email={contact.email}
                    data={contact}
                    key={contact.id}
                    deleteContactFromChild={this.deleteContact.bind(this, contact.id)}
                    />
                ))}
                
            </div>

               )}
           </Consumer>
       ) 
    }
}
export default Contacts;