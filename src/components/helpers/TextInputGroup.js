/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import classNames from 'classnames';

 function textInputGroup(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} className={classNames('form-control',{
                'is-invalid': props.error
            })} 
            name={props.name} 
            value={props.value} 
            onChange={props.onChange} />
            <div className="invalid-feedback">{props.error}</div>
        </div>
    )
}
export default textInputGroup;