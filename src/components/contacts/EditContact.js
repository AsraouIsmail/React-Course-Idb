/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios'
import TextInputGroup from '../helpers/TextInputGroup'
import { Consumer } from '../Context'


 class EditContact extends Component {
    state = {
         name: '',
         email: '',
         phone: '',
         errors: ''
     }

      async componentDidMount(){
         const id = this.props.match.params.id;
         const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

         this.setState({
             name: res.data.name,
             email: res.data.email,
             phone: res.data.phone
         });
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

         const upContact = {
                name: name,
                 email: email,
                 phone: phone

         }

         const id = this.props.match.params.id;

         try{
             const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, upContact)
         dispatch({
             type: 'UPDATE_CONTACT',
             payload: res.data
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
                        <h4 class="card-title">Edit Contact</h4>
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
                
                <button className="btn btn-warning btn-block">Update contact</button>
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
export default EditContact;