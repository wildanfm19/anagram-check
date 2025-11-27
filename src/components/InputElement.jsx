import { TextField } from '@mui/material'
import React from 'react'

const InputElement = ({label , value , onChange}) => {
  return (

    <div className='p-4'>
        <TextField 
        id='outlined-basic' label= {label} value={value} onChange={(e) => onChange(e.target.value)}/>
    </div>
    
  )
}

export default InputElement