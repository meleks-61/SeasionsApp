import React from 'react'

const ErrorMessage = ({err}) => {
  return (
    <h2 style={{color:"red"}}>{err}</h2>
  )
}

export default ErrorMessage