import React from 'react'

export default function Alert(props) {
  return (
    <div className='text-center' style={{height:"7vh"}}>{
      props.alert && <div className={`text-${props.mode==='white'?'dark':'white'} h-max p-2 bg-${props.alert.type}`} role="alert">
        {props.alert.msg}!
      </div>
      }
      </div>
  )
}
