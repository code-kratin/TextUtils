import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{    //as cant change from app.js as class name is success in small
        const lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }
  return (
    <div style={{height: "40px"}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>}
    </div>
    //props.alert && as if props is null means false then div wont evaluate and if its true then div will evaluate
    //it means if props.alert!=null{do this;}
  )
}
