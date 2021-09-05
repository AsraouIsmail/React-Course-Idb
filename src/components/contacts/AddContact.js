/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import {Consumer} from '../Context'
import TextInputGroup from '../helpers/TextInputGroup'

 class AddContact extends Component {
     state = {
         name: '',
         email: '',
         phone: ''
     }
     onChangeInput = (e) => this.setState({[e.target.name]: e.target.value})
     submit = (dispatch,size,e) => {
         e.preventDefault();

         dispatch({
             type: 'ADD_CONTACT',
             payload: {
                 id: size + 1,
                 name: this.state.name,
                 email: this.state.email,
                 Tel: this.state.phone
             }
         })

          this.setState({
            name: '',
            email: '',
            phone: ''
            
        })
     }
    render() {
        const {name, email, phone} = this.state;
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
                />

                <TextInputGroup 
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={this.onChangeInput}
                />

                <TextInputGroup 
                label="Phone"
                type="text"
                name="phone"
                value={phone}
                onChange={this.onChangeInput}
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