import React from 'react'

 function textInputGroup(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} className="form-control" 
            name={props.name} 
            value={props.value} 
            onChange={props.onChange} />
        </div>
    )
}
export default textInputGroup;