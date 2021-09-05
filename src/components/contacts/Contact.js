/* eslint-disable no-whitespace-before-property */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../Context'


 class Contact extends Component {

    state = {
        showContactToggle: true
    }

    showContact(myMessage){
        console.log("mouhja had chwa 5asso gha ci brade d atay", myMessage)
        this.setState({
            showContactToggle: !this.state.showContactToggle
        });

    }


    onDeleteClick = (id, dispatch) => {
        // this.props. deleteContactFromChild()
        dispatch({
            type: "DELETE_CONTACT",
            payload: id
        })
    }
    render() {
        const {id, name, Tel, email} = this.props.data;
        return (

            <Consumer>
                {value => {
                     const {dispatch} = value;
                   return(
                        <div>
                <div className="card">
                    
                    <div className="card-body">
                        <h4 className="card-title">
                            {name} <i style={{color: 'green', cursor: 'pointer'}} onClick={this.showContact.bind(this,'a message from ismail')} className="fa fa-sort-down"></i>
                            <i style={{color: 'red', margin: 25, cursor: 'pointer'}} className="fa fa-times" onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
                        </h4>
                        
                        <p className="card-text">
                            {(this.state.showContactToggle) ? (
                                 <ul className="list-group">
                                
                                <li className="list-group-item">{Tel}</li>
                                <li className="list-group-item">{email}</li>
                                
                            </ul>

                            ): null}
                           
                        </p>
                    </div>
                </div>
                
            </div>
                   )

                }}
            </Consumer>
            
        )
    }
}

// Contact.defaultProps = {
//     name: "My Name",
//     Tel: 212212212,
//     email: "dev.react@react.js"
// }
Contact.propTypes = {
    data: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired

}
export default Contact;