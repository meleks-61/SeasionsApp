import React from 'react'

const Loader = ({message}) => {
  return (
   
        <div class="ui active dimmer">
    <div class="ui text loader">{message}</div>
  </div>
   
  )
} 
//if there is no message, default 
Loader.defaultProps={
    message:"Loading..."

}

export default Loader
