/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { Component } from 'react'
import {Consumer} from '../Context'
import TextInputGroup from '../helpers/TextInputGroup'

 class AddContact extends Component {
     state = {
         name: '',
         email: '',
         phone: '',
         errors: ''
     }

    
     onChangeInput = (e) => this.setState({[e.target.name]: e.target.value})
     submit = async (dispatch,size,e) => {
         e.preventDefault();
         const {name, email, phone} = this.state;

         if (name === "") {
             this.setState({errors: {name: "the name is required"}})
             return;
         }
         if (email === "") {
             this.setState({errors: {email: "an email adress is required"}})
             return;
         }
         if (phone === "") {
             this.setState({errors: {phone: "a valid number phone is required"}})
             return;
         }

         const newContact = {
                name: name,
                 email: email,
                 phone: phone

         }

         try{
             const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
         dispatch({
             type: 'ADD_CONTACT',
             payload: newContact
         })

         }
         catch(e){
             console.log(e)
         }

         
         

          this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
            
        })

        this.props.history.push('/');
     }
    render() {
        const {name, email, phone, errors} = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
            <div>
                <form onSubmit={this.submit.bind(this, dispatch,value.contacts.length)}>
                <div class="card">
                <div class="card-body">
                        <h4 class="card-title">Add Contact</h4>
                <TextInputGroup 
                label="Name"
                type="text"
                name="name"
                value={name}
                onChange={this.onChangeInput}
                error={errors.name}
                />

                <TextInputGroup 
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={this.onChangeInput}
                error={errors.email}
                />

                <TextInputGroup 
                label="Phone"
                type="text"
                name="phone"
                value={phone}
                onChange={this.onChangeInput}
                error={errors.phone}
                />
                
                <button className="btn btn-success btn-block">Add new contact</button>
                        </div>
                    </div>
               </form> 
            </div>
        )

                }}
            </Consumer>
        )
        
    }
}
export default AddContact;